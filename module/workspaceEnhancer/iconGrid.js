// -*- mode: js; js-indent-level: 4; indent-tabs-mode: nil -*-

const { Clutter, GObject, Meta, St } = imports.gi;

const Params = imports.misc.params;
const Tweener = imports.ui.tweener;
const Main = imports.ui.main;

var ICON_SIZE = 96;
var MIN_ICON_SIZE = 16;

var EXTRA_SPACE_ANIMATION_TIME = 0.25;

var ANIMATION_TIME_IN = 0.350;
var ANIMATION_TIME_OUT = 1/2 * ANIMATION_TIME_IN;
var ANIMATION_MAX_DELAY_FOR_ITEM = 2/3 * ANIMATION_TIME_IN;
var ANIMATION_BASE_DELAY_FOR_ITEM = 1/4 * ANIMATION_MAX_DELAY_FOR_ITEM;
var ANIMATION_MAX_DELAY_OUT_FOR_ITEM = 2/3 * ANIMATION_TIME_OUT;
var ANIMATION_FADE_IN_TIME_FOR_ITEM = 1/4 * ANIMATION_TIME_IN;

var ANIMATION_BOUNCE_ICON_SCALE = 1.1;

var AnimationDirection = {
    IN: 0,
    OUT: 1
};

var APPICON_ANIMATION_OUT_SCALE = 3;
var APPICON_ANIMATION_OUT_TIME = 0.25;

var BaseIcon2 = GObject.registerClass(
class BaseIcon2 extends St.Bin {
    _init(label, params) {
        params = Params.parse(params, { createIcon: null,
                                        setSizeManually: false,
                                        showLabel: true });

        let styleClass = 'overview-icon';
        if (params.showLabel)
            styleClass += ' overview-icon-with-label';

        super._init({ style_class: styleClass,
                      x_fill: true,
                      y_fill: true });

        this.actor = this;

        this.connect('destroy', this._onDestroy.bind(this));

        this._box = new St.BoxLayout({ vertical: true });
        this.set_child(this._box);

        this.iconSize = ICON_SIZE;
        this._iconBin = new St.Bin({ x_align: St.Align.MIDDLE,
                                     y_align: St.Align.MIDDLE });

        this._box.add_actor(this._iconBin);

        if (params.showLabel) {
            this.label = new St.Label({ text: label });
            this._box.add_actor(this.label);
        } else {
            this.label = null;
        }

        if (params.createIcon)
            this.createIcon = params.createIcon;
        this._setSizeManually = params.setSizeManually;

        this.icon = null;

        let cache = St.TextureCache.get_default();
        this._iconThemeChangedId = cache.connect('icon-theme-changed', this._onIconThemeChanged.bind(this));
    }

    vfunc_get_preferred_width(forHeight) {
        // Return the actual height to keep the squared aspect
        return this.get_preferred_height(-1);
    }

    // This can be overridden by a subclass, or by the createIcon
    // parameter to _init()
    createIcon(size) {
        throw new Error('no implementation of createIcon in ' + this);
    }

    setIconSize(size) {
        if (!this._setSizeManually)
            throw new Error('setSizeManually has to be set to use setIconsize');

        if (size == this.iconSize)
            return;

        this._createIconTexture(size);
    }

    _createIconTexture(size) {
        if (this.icon)
            this.icon.destroy();
        this.iconSize = size;
        this.icon = this.createIcon(this.iconSize);

        this._iconBin.child = this.icon;
    }

    vfunc_style_changed() {
        let node = this.get_theme_node();

        let size;
        if (this._setSizeManually) {
            size = this.iconSize;
        } else {
            let [found, len] = node.lookup_length('icon-size', false);
            size = found ? len : ICON_SIZE;
        }

        if (this.iconSize == size && this._iconBin.child)
            return;

        this._createIconTexture(size);
    }

    _onDestroy() {
        if (this._iconThemeChangedId > 0) {
            let cache = St.TextureCache.get_default();
            cache.disconnect(this._iconThemeChangedId);
            this._iconThemeChangedId = 0;
        }
    }

    _onIconThemeChanged() {
        this._createIconTexture(this.iconSize);
    }

    animateZoomOut() {
        // Animate only the child instead of the entire actor, so the
        // styles like hover and running are not applied while
        // animating.
        zoomOutActor(this.child);
    }
});

function clamp(value, min, max) {
    return Math.max(Math.min(value, max), min);
};

function zoomOutActor(actor) {
    let actorClone = new Clutter.Clone({ source: actor,
                                         reactive: false });
    let [width, height] = actor.get_transformed_size();
    let [x, y] = actor.get_transformed_position();
    actorClone.set_size(width, height);
    actorClone.set_position(x, y);
    actorClone.opacity = 255;
    actorClone.set_pivot_point(0.5, 0.5);

    Main.uiGroup.add_actor(actorClone);

    // Avoid monitor edges to not zoom outside the current monitor
    let monitor = Main.layoutManager.findMonitorForActor(actor);
    let scaledWidth = width * APPICON_ANIMATION_OUT_SCALE;
    let scaledHeight = height * APPICON_ANIMATION_OUT_SCALE;
    let scaledX = x - (scaledWidth - width) / 2;
    let scaledY = y - (scaledHeight - height) / 2;
    let containedX = clamp(scaledX, monitor.x, monitor.x + monitor.width - scaledWidth);
    let containedY = clamp(scaledY, monitor.y, monitor.y + monitor.height - scaledHeight);

    Tweener.addTween(actorClone,
                     { time: APPICON_ANIMATION_OUT_TIME,
                       scale_x: APPICON_ANIMATION_OUT_SCALE,
                       scale_y: APPICON_ANIMATION_OUT_SCALE,
                       translation_x: containedX - scaledX,
                       translation_y: containedY - scaledY,
                       opacity: 0,
                       transition: 'easeOutQuad',
                       onComplete() {
                           actorClone.destroy();
                       }
                    });
}

var IconGrid2 = GObject.registerClass({
    Signals: {'animation-done': {},
              'child-focused': { param_types: [Clutter.Actor.$gtype]} },
}, class IconGrid2 extends St.Widget {
    _init(params) {
        super._init({ style_class: 'icon-grid',
                      y_align: Clutter.ActorAlign.START });

        this.actor = this;

        params = Params.parse(params, { rowLimit: null,
                                        columnLimit: null,
                                        minRows: 1,
                                        minColumns: 1,
                                        fillParent: false,
                                        xAlign: St.Align.MIDDLE,
                                        padWithSpacing: false });
        this._rowLimit = params.rowLimit;
        this._colLimit = params.columnLimit;
        this._minRows = params.minRows;
        this._minColumns = params.minColumns;
        this._xAlign = params.xAlign;
        this._fillParent = params.fillParent;
        this._padWithSpacing = params.padWithSpacing;

        this.topPadding = 0;
        this.bottomPadding = 0;
        this.rightPadding = 0;
        this.leftPadding = 0;

        this._items = [];
        this._clonesAnimating = [];
        // Pulled from CSS, but hardcode some defaults here
        this._spacing = 0;
        this._hItemSize = this._vItemSize = ICON_SIZE;
        this._fixedHItemSize = this._fixedVItemSize = undefined;
        this.connect('style-changed', this._onStyleChanged.bind(this));

        // Cancel animations when hiding the overview, to avoid icons
        // swarming into the void ...
        this.connect('notify::mapped', () => {
            if (!this.mapped)
                this._cancelAnimation();
        });

        this.connect('actor-added', this._childAdded.bind(this));
        this.connect('actor-removed', this._childRemoved.bind(this));
    }

    _keyFocusIn(actor) {
        this.emit('child-focused', actor);
    }

    _childAdded(grid, child) {
        child._iconGridKeyFocusInId = child.connect('key-focus-in', this._keyFocusIn.bind(this));
    }

    _childRemoved(grid, child) {
        child.disconnect(child._iconGridKeyFocusInId);
    }

    vfunc_get_preferred_width(forHeight) {
        if (this._fillParent)
            // Ignore all size requests of children and request a size of 0;
            // later we'll allocate as many children as fit the parent
            return [0, 0];

        let nChildren = this.get_n_children();
        let nColumns = this._colLimit ? Math.min(this._colLimit,
                                                 nChildren)
                                      : nChildren;
        let totalSpacing = Math.max(0, nColumns - 1) * this._getSpacing();
        // Kind of a lie, but not really an issue right now.  If
        // we wanted to support some sort of hidden/overflow that would
        // need higher level design
        let minSize = this._getHItemSize() + this.leftPadding + this.rightPadding;
        let natSize = nColumns * this._getHItemSize() + totalSpacing + this.leftPadding + this.rightPadding;

        return this.get_theme_node().adjust_preferred_width(minSize, natSize);
    }

    _getVisibleChildren() {
        return this.get_children().filter(actor => actor.visible);
    }

    vfunc_get_preferred_height(forWidth) {
        if (this._fillParent)
            // Ignore all size requests of children and request a size of 0;
            // later we'll allocate as many children as fit the parent
            return [0, 0];

        let themeNode = this.get_theme_node();
        let children = this._getVisibleChildren();
        let nColumns;

        forWidth = themeNode.adjust_for_width(forWidth);

        if (forWidth < 0)
            nColumns = children.length;
        else
            [nColumns, ] = this._computeLayout(forWidth);

        let nRows;
        if (nColumns > 0)
            nRows = Math.ceil(children.length / nColumns);
        else
            nRows = 0;
        if (this._rowLimit)
            nRows = Math.min(nRows, this._rowLimit);
        let totalSpacing = Math.max(0, nRows - 1) * this._getSpacing();
        let height = nRows * this._getVItemSize() + totalSpacing + this.topPadding + this.bottomPadding;

        return themeNode.adjust_preferred_height(height, height);
    }

    vfunc_allocate(box, flags) {
        this.set_allocation(box, flags);

        let themeNode = this.get_theme_node();
        box = themeNode.get_content_box(box);

        if (this._fillParent) {
            // Reset the passed in box to fill the parent
            let parentBox = this.get_parent().allocation;
            let gridBox = themeNode.get_content_box(parentBox);
            box = themeNode.get_content_box(gridBox);
        }

        let children = this._getVisibleChildren();
        let availWidth = box.x2 - box.x1;
        let availHeight = box.y2 - box.y1;
        let spacing = this._getSpacing();
        let [nColumns, usedWidth] = this._computeLayout(availWidth);

        let leftEmptySpace;
        switch(this._xAlign) {
            case St.Align.START:
                leftEmptySpace = 0;
                break;
            case St.Align.MIDDLE:
                leftEmptySpace = Math.floor((availWidth - usedWidth) / 2);
                break;
            case St.Align.END:
                leftEmptySpace = availWidth - usedWidth;
        }

        let x = box.x1 + leftEmptySpace + this.leftPadding;
        let y = box.y1 + this.topPadding;
        let columnIndex = 0;
        let rowIndex = 0;
        for (let i = 0; i < children.length; i++) {
            let childBox = this._calculateChildBox(children[i], x, y, box);

            if (this._rowLimit && rowIndex >= this._rowLimit ||
                this._fillParent && childBox.y2 > availHeight - this.bottomPadding) {
                children[i].hide();
            } else {
                children[i].allocate(childBox, flags);
                children[i].show();
            }

            columnIndex++;
            if (columnIndex == nColumns) {
                columnIndex = 0;
                rowIndex++;
            }

            if (columnIndex == 0) {
                y += this._getVItemSize() + spacing;
                x = box.x1 + leftEmptySpace + this.leftPadding;
            } else {
                x += this._getHItemSize() + spacing;
            }
        }
    }

    vfunc_get_paint_volume(paintVolume) {
        // Setting the paint volume does not make sense when we don't have
        // any allocation
        if (!this.has_allocation())
            return false;

        let themeNode = this.get_theme_node();
        let allocationBox = this.get_allocation_box();
        let paintBox = themeNode.get_paint_box(allocationBox);

        let origin = new Clutter.Vertex();
        origin.x = paintBox.x1 - allocationBox.x1;
        origin.y = paintBox.y1 - allocationBox.y1;
        origin.z = 0.0;

        paintVolume.set_origin(origin);
        paintVolume.set_width(paintBox.x2 - paintBox.x1);
        paintVolume.set_height(paintBox.y2 - paintBox.y1);

        if (this.get_clip_to_allocation())
            return true;

        for (let child = this.get_first_child();
             child != null;
             child = child.get_next_sibling()) {

            if (!child.visible)
                continue;

            let childVolume = child.get_transformed_paint_volume(this);
            if (!childVolume)
                return false

            paintVolume.union(childVolume);
        }

        return true;
    }

    /**
     * Intended to be override by subclasses if they need a different
     * set of items to be animated.
     */
    _getChildrenToAnimate() {
        return this._getVisibleChildren();
    }

        _cancelAnimation() {
        log('cancel shit')
        this._clonesAnimating.forEach(clone => { clone.destroy(); });
        this._clonesAnimating = [];
    }

    _animationDone() {
        this._clonesAnimating.forEach(clone => {
            clone.source.reactive = true;
            clone.source.opacity = 255;
            clone.destroy();
        });
        this._clonesAnimating = [];
        this.emit('animation-done');
    }

    animatePulse(animationDirection) {
        if (animationDirection != AnimationDirection.IN)
            throw new Error("Pulse animation only implements 'in' animation direction");

        this._cancelAnimation();

        let actors = this._getChildrenToAnimate();
        if (actors.length == 0) {
            this._animationDone();
            return;
        }

        // For few items the animation can be slow, so use a smaller
        // delay when there are less than 4 items
        // (ANIMATION_BASE_DELAY_FOR_ITEM = 1/4 *
        // ANIMATION_MAX_DELAY_FOR_ITEM)
        let maxDelay = Math.min(ANIMATION_BASE_DELAY_FOR_ITEM * actors.length,
                                ANIMATION_MAX_DELAY_FOR_ITEM);

        for (let index = 0; index < actors.length; index++) {
            let actor = actors[index];
            actor.set_scale(0, 0);
            actor.set_pivot_point(0.5, 0.5);

            let delay = index / actors.length * maxDelay;
            let bounceUpTime = ANIMATION_TIME_IN / 4;
            let isLastItem = index == actors.length - 1;
            Tweener.addTween(actor,
                            { time: bounceUpTime,
                              transition: 'easeInOutQuad',
                              delay: delay,
                              scale_x: ANIMATION_BOUNCE_ICON_SCALE,
                              scale_y: ANIMATION_BOUNCE_ICON_SCALE,
                              onComplete: () => {
                                  Tweener.addTween(actor,
                                                   { time: ANIMATION_TIME_IN - bounceUpTime,
                                                     transition: 'easeInOutQuad',
                                                     scale_x: 1,
                                                     scale_y: 1,
                                                     onComplete: () => {
                                                        if (isLastItem)
                                                            this._animationDone();
                                                    }
                                                   });
                              }
                            });
        }
    }

    animateSpring(animationDirection, sourceActor) {
        this._cancelAnimation();

        let actors = this._getChildrenToAnimate();
        if (actors.length == 0) {
            this._animationDone();
            return;
        }

        let [sourceX, sourceY] = sourceActor.get_transformed_position();
        let [sourceWidth, sourceHeight] = sourceActor.get_size();
        // Get the center
        let [sourceCenterX, sourceCenterY] = [sourceX + sourceWidth / 2, sourceY + sourceHeight / 2];
        // Design decision, 1/2 of the source actor size.
        let [sourceScaledWidth, sourceScaledHeight] = [sourceWidth / 2, sourceHeight / 2];

        actors.forEach(actor => {
            let [actorX, actorY] = actor._transformedPosition = actor.get_transformed_position();
            let [x, y] = [actorX - sourceX, actorY - sourceY];
            actor._distance = Math.sqrt(x * x + y * y);
        });
        let maxDist = actors.reduce((prev, cur) => {
            return Math.max(prev, cur._distance);
        }, 0);
        let minDist = actors.reduce((prev, cur) => {
            return Math.min(prev, cur._distance);
        }, Infinity);
        let normalization = maxDist - minDist;

        for (let index = 0; index < actors.length; index++) {
            let actor = actors[index];
            actor.opacity = 0;
            actor.reactive = false;

            let actorClone = new Clutter.Clone({ source: actor });
            this._clonesAnimating.push(actorClone);
            Main.uiGroup.add_actor(actorClone);

            let [width, height,,] = this._getAllocatedChildSizeAndSpacing(actor);
            actorClone.set_size(width, height);
            let scaleX = sourceScaledWidth / width;
            let scaleY = sourceScaledHeight / height;
            let [adjustedSourcePositionX, adjustedSourcePositionY] = [sourceCenterX - sourceScaledWidth / 2, sourceCenterY - sourceScaledHeight / 2];

            let movementParams, fadeParams;
            if (animationDirection == AnimationDirection.IN) {
                let isLastItem = actor._distance == minDist;

                actorClone.opacity = 0;
                actorClone.set_scale(scaleX, scaleY);

                actorClone.set_position(adjustedSourcePositionX, adjustedSourcePositionY);

                let delay = (1 - (actor._distance - minDist) / normalization) * ANIMATION_MAX_DELAY_FOR_ITEM;
                let [finalX, finalY]  = actor._transformedPosition;
                movementParams = { time: ANIMATION_TIME_IN,
                                   transition: 'easeInOutQuad',
                                   delay: delay,
                                   x: finalX,
                                   y: finalY,
                                   scale_x: 1,
                                   scale_y: 1,
                                   onComplete: () => {
                                       if (isLastItem)
                                           this._animationDone();
                                   }};
                fadeParams = { time: ANIMATION_FADE_IN_TIME_FOR_ITEM,
                               transition: 'easeInOutQuad',
                               delay: delay,
                               opacity: 255 };
            } else {
                let isLastItem = actor._distance == maxDist;

                let [startX, startY]  = actor._transformedPosition;
                actorClone.set_position(startX, startY);

                let delay = (actor._distance - minDist) / normalization * ANIMATION_MAX_DELAY_OUT_FOR_ITEM;
                movementParams = { time: ANIMATION_TIME_OUT,
                                   transition: 'easeInOutQuad',
                                   delay: delay,
                                   x: adjustedSourcePositionX,
                                   y: adjustedSourcePositionY,
                                   scale_x: scaleX,
                                   scale_y: scaleY,
                                   onComplete: () => {
                                       if (isLastItem)
                                           this._animationDone();
                                   }};
                fadeParams = { time: ANIMATION_FADE_IN_TIME_FOR_ITEM,
                               transition: 'easeInOutQuad',
                               delay: ANIMATION_TIME_OUT + delay - ANIMATION_FADE_IN_TIME_FOR_ITEM,
                               opacity: 0 };
            }


            Tweener.addTween(actorClone, movementParams);
            Tweener.addTween(actorClone, fadeParams);
        }
    }

    _getAllocatedChildSizeAndSpacing(child) {
        let [,, natWidth, natHeight] = child.get_preferred_size();
        let width = Math.min(this._getHItemSize(), natWidth);
        let xSpacing = Math.max(0, width - natWidth) / 2;
        let height = Math.min(this._getVItemSize(), natHeight);
        let ySpacing = Math.max(0, height - natHeight) / 2;
        return [width, height, xSpacing, ySpacing];
    }

    _calculateChildBox(child, x, y, box) {
        /* Center the item in its allocation horizontally */
        let [width, height, childXSpacing, childYSpacing] =
            this._getAllocatedChildSizeAndSpacing(child);

        let childBox = new Clutter.ActorBox();
        if (Clutter.get_default_text_direction() == Clutter.TextDirection.RTL) {
            let _x = box.x2 - (x + width);
            childBox.x1 = Math.floor(_x - childXSpacing);
        } else {
            childBox.x1 = Math.floor(x + childXSpacing);
        }
        childBox.y1 = Math.floor(y + childYSpacing);
        childBox.x2 = childBox.x1 + width;
        childBox.y2 = childBox.y1 + height;
        return childBox;
    }

    columnsForWidth(rowWidth) {
        return this._computeLayout(rowWidth)[0];
    }

    getRowLimit() {
        return this._rowLimit;
    }

    _computeLayout(forWidth) {
        let nColumns = 0;
        let usedWidth = this.leftPadding + this.rightPadding;
        let spacing = this._getSpacing();

        while ((this._colLimit == null || nColumns < this._colLimit) &&
               (usedWidth + this._getHItemSize() <= forWidth)) {
            usedWidth += this._getHItemSize() + spacing;
            nColumns += 1;
        }

        if (nColumns > 0)
            usedWidth -= spacing;

        return [nColumns, usedWidth];
    }

        _onStyleChanged() {
        let themeNode = this.get_theme_node();
        this._spacing = themeNode.get_length('spacing');
        this._hItemSize = themeNode.get_length('-shell-grid-horizontal-item-size') || ICON_SIZE;
        this._vItemSize = themeNode.get_length('-shell-grid-vertical-item-size') || ICON_SIZE;
        this.queue_relayout();
    }

    nRows(forWidth) {
        let children = this._getVisibleChildren();
        let nColumns = (forWidth < 0) ? children.length : this._computeLayout(forWidth)[0];
        let nRows = (nColumns > 0) ? Math.ceil(children.length / nColumns) : 0;
        if (this._rowLimit)
            nRows = Math.min(nRows, this._rowLimit);
        return nRows;
    }

    rowsForHeight(forHeight) {
        return Math.floor((forHeight - (this.topPadding + this.bottomPadding) + this._getSpacing()) / (this._getVItemSize() + this._getSpacing()));
    }

    usedHeightForNRows(nRows) {
        return (this._getVItemSize() + this._getSpacing()) * nRows - this._getSpacing() + this.topPadding + this.bottomPadding;
    }

    usedWidth(forWidth) {
        return this.usedWidthForNColumns(this.columnsForWidth(forWidth));
    }

    usedWidthForNColumns(columns) {
        let usedWidth = columns  * (this._getHItemSize() + this._getSpacing());
        usedWidth -= this._getSpacing();
        return usedWidth + this.leftPadding + this.rightPadding;
    }

    removeAll() {
        this._items = [];
        this.remove_all_children();
    }

    destroyAll() {
        this._items = [];
        this.destroy_all_children();
    }

    addItem(item, index) {
        if (!(item.icon instanceof BaseIcon2))
            throw new Error('Only items with a BaseIcon icon property can be added to IconGrid');

        this._items.push(item);
        if (index !== undefined)
            this.insert_child_at_index(item.actor, index);
        else
            this.add_actor(item.actor);
    }

    removeItem(item) {
        this.remove_child(item.actor);
    }

    getItemAtIndex(index) {
        return this.get_child_at_index(index);
    }

    visibleItemsCount() {
        return this.get_children().filter(c => c.is_visible()).length;
    }

    setSpacing(spacing) {
        this._fixedSpacing = spacing;
    }

    _getSpacing() {
        return this._fixedSpacing ? this._fixedSpacing : this._spacing;
    }

    _getHItemSize() {
        return this._fixedHItemSize ? this._fixedHItemSize : this._hItemSize;
    }

    _getVItemSize() {
        return this._fixedVItemSize ? this._fixedVItemSize : this._vItemSize;
    }

    _updateSpacingForSize(availWidth, availHeight) {
        let maxEmptyVArea = availHeight - this._minRows * this._getVItemSize();
        let maxEmptyHArea = availWidth - this._minColumns * this._getHItemSize();
        let maxHSpacing, maxVSpacing;

        if (this._padWithSpacing) {
            // minRows + 1 because we want to put spacing before the first row, so it is like we have one more row
            // to divide the empty space
            maxVSpacing = Math.floor(maxEmptyVArea / (this._minRows +1));
            maxHSpacing = Math.floor(maxEmptyHArea / (this._minColumns +1));
        } else {
            if (this._minRows <=  1)
                maxVSpacing = maxEmptyVArea;
            else
                maxVSpacing = Math.floor(maxEmptyVArea / (this._minRows - 1));

            if (this._minColumns <=  1)
                maxHSpacing = maxEmptyHArea;
            else
                maxHSpacing = Math.floor(maxEmptyHArea / (this._minColumns - 1));
        }

        let maxSpacing = Math.min(maxHSpacing, maxVSpacing);
        // Limit spacing to the item size
        maxSpacing = Math.min(maxSpacing, Math.min(this._getVItemSize(), this._getHItemSize()));
        // The minimum spacing, regardless of whether it satisfies the row/columng minima,
        // is the spacing we get from CSS.
        let spacing = Math.max(this._spacing, maxSpacing);
        this.setSpacing(spacing);
        if (this._padWithSpacing)
            this.topPadding = this.rightPadding = this.bottomPadding = this.leftPadding = spacing;
    }

    /**
     * This function must to be called before iconGrid allocation,
     * to know how much spacing can the grid has
     */
    adaptToSize(availWidth, availHeight) {
        this._fixedHItemSize = this._hItemSize;
        this._fixedVItemSize = this._vItemSize;
        this._updateSpacingForSize(availWidth, availHeight);
        let spacing = this._getSpacing();

        if (this.columnsForWidth(availWidth) < this._minColumns || this.rowsForHeight(availHeight) < this._minRows) {
            let neededWidth = this.usedWidthForNColumns(this._minColumns) - availWidth ;
            let neededHeight = this.usedHeightForNRows(this._minRows) - availHeight ;

            let neededSpacePerItem = (neededWidth > neededHeight) ? Math.ceil(neededWidth / this._minColumns)
                                                                  : Math.ceil(neededHeight / this._minRows);
            this._fixedHItemSize = Math.max(this._hItemSize - neededSpacePerItem, MIN_ICON_SIZE);
            this._fixedVItemSize = Math.max(this._vItemSize - neededSpacePerItem, MIN_ICON_SIZE);

            this._updateSpacingForSize(availWidth, availHeight);
        }
        Meta.later_add(Meta.LaterType.BEFORE_REDRAW,
                       this._updateIconSizes.bind(this));
    }

    // Note that this is ICON_SIZE as used by BaseIcon, not elsewhere in IconGrid; it's a bit messed up
    _updateIconSizes() {
        let scale = Math.min(this._fixedHItemSize, this._fixedVItemSize) / Math.max(this._hItemSize, this._vItemSize);
        let newIconSize = Math.floor(ICON_SIZE * scale);
        for (let i in this._items) {
            this._items[i].icon.setIconSize(newIconSize);
        }
    }
});

var PaginatedIconGrid2 = GObject.registerClass({
    Signals: {'space-opened': {},
              'space-closed': {} },
}, class PaginatedIconGrid2 extends IconGrid2 {
    _init(params) {
        super._init(params);
        this._nPages = 0;
        this.currentPage = 0;
        this._rowsPerPage = 0;
        this._spaceBetweenPages = 0;
        this._childrenPerPage = 0;
    }

    vfunc_get_preferred_height(forWidth) {
        let height = (this._availableHeightPerPageForItems() + this.bottomPadding + this.topPadding) * this._nPages + this._spaceBetweenPages * this._nPages;
        return [height, height];
    }

    vfunc_allocate(box, flags) {
         if (this._childrenPerPage == 0)
            log('computePages() must be called before allocate(); pagination will not work.');

        this.set_allocation(box, flags);

        if (this._fillParent) {
            // Reset the passed in box to fill the parent
            let parentBox = this.get_parent().allocation;
            let gridBox = this.get_theme_node().get_content_box(parentBox);
            box = this.get_theme_node().get_content_box(gridBox);
        }
        let children = this._getVisibleChildren();
        let availWidth = box.x2 - box.x1;
        let availHeight = box.y2 - box.y1;
        let spacing = this._getSpacing();
        let [nColumns, usedWidth] = this._computeLayout(availWidth);

        let leftEmptySpace;
        switch(this._xAlign) {
            case St.Align.START:
                leftEmptySpace = 0;
                break;
            case St.Align.MIDDLE:
                leftEmptySpace = Math.floor((availWidth - usedWidth) / 2);
                break;
            case St.Align.END:
                leftEmptySpace = availWidth - usedWidth;
        }

        let x = box.x1 + leftEmptySpace + this.leftPadding;
        let y = box.y1 + this.topPadding;
        let columnIndex = 0;
        let rowIndex = 0;

        for (let i = 0; i < children.length; i++) {
            let childBox = this._calculateChildBox(children[i], x, y, box);
            children[i].allocate(childBox, flags);
            children[i].show();

            columnIndex++;
            if (columnIndex == nColumns) {
                columnIndex = 0;
                rowIndex++;
            }
            if (columnIndex == 0) {
                y += this._getVItemSize() + spacing;
                if ((i + 1) % this._childrenPerPage == 0)
                    y +=  this._spaceBetweenPages - spacing + this.bottomPadding + this.topPadding;
                x = box.x1 + leftEmptySpace + this.leftPadding;
            } else
                x += this._getHItemSize() + spacing;
        }
    }

    // Overriden from IconGrid
    _getChildrenToAnimate() {
        let children = this._getVisibleChildren();
        let firstIndex = this._childrenPerPage * this.currentPage;
        let lastIndex = firstIndex + this._childrenPerPage;

        return children.slice(firstIndex, lastIndex);
    }

    _computePages(availWidthPerPage, availHeightPerPage) {
        let [nColumns, usedWidth] = this._computeLayout(availWidthPerPage);
        let nRows;
        let children = this._getVisibleChildren();
        if (nColumns > 0)
            nRows = Math.ceil(children.length / nColumns);
        else
            nRows = 0;
        if (this._rowLimit)
            nRows = Math.min(nRows, this._rowLimit);

        let spacing = this._getSpacing();
        // We want to contain the grid inside the parent box with padding
        this._rowsPerPage = this.rowsForHeight(availHeightPerPage);
        this._nPages = Math.ceil(nRows / this._rowsPerPage);
        this._spaceBetweenPages = availHeightPerPage - (this.topPadding + this.bottomPadding) - this._availableHeightPerPageForItems();
        this._childrenPerPage = nColumns * this._rowsPerPage;
    }

    adaptToSize(availWidth, availHeight) {
        super.adaptToSize(availWidth, availHeight);
        this._computePages(availWidth, availHeight);
    }

    _availableHeightPerPageForItems() {
        return this.usedHeightForNRows(this._rowsPerPage) - (this.topPadding + this.bottomPadding);
    }

    nPages() {
        return this._nPages;
    }

    getPageHeight() {
        return this._availableHeightPerPageForItems();
    }

    getPageY(pageNumber) {
        if (!this._nPages)
            return 0;

        let firstPageItem = pageNumber * this._childrenPerPage
        let childBox = this._getVisibleChildren()[firstPageItem].get_allocation_box();
        return childBox.y1 - this.topPadding;
    }

    getItemPage(item) {
        let children = this._getVisibleChildren();
        let index = children.indexOf(item);
        if (index == -1)
            throw new Error('Item not found.');
        return Math.floor(index / this._childrenPerPage);
    }

    /**
    * openExtraSpace:
    * @sourceItem: the item for which to create extra space
    * @side: where @sourceItem should be located relative to the created space
    * @nRows: the amount of space to create
    *
    * Pan view to create extra space for @nRows above or below @sourceItem.
    */
    openExtraSpace(sourceItem, side, nRows) {
        let children = this._getVisibleChildren();
        let index = children.indexOf(sourceItem.actor);
        if (index == -1)
            throw new Error('Item not found.');

        let pageIndex = Math.floor(index / this._childrenPerPage);
        let pageOffset = pageIndex * this._childrenPerPage;

        let childrenPerRow = this._childrenPerPage / this._rowsPerPage;
        let sourceRow = Math.floor((index - pageOffset) / childrenPerRow);

        let nRowsAbove = (side == St.Side.TOP) ? sourceRow + 1
                                               : sourceRow;
        let nRowsBelow = this._rowsPerPage - nRowsAbove;

        let nRowsUp, nRowsDown;
        if (side == St.Side.TOP) {
            nRowsDown = Math.min(nRowsBelow, nRows);
            nRowsUp = nRows - nRowsDown;
        } else {
            nRowsUp = Math.min(nRowsAbove, nRows);
            nRowsDown = nRows - nRowsUp;
        }

        let childrenDown = children.splice(pageOffset +
                                           nRowsAbove * childrenPerRow,
                                           nRowsBelow * childrenPerRow);
        let childrenUp = children.splice(pageOffset,
                                         nRowsAbove * childrenPerRow);

        // Special case: On the last row with no rows below the icon,
        // there's no need to move any rows either up or down
        if (childrenDown.length == 0 && nRowsUp == 0) {
            this._translatedChildren = [];
            this.emit('space-opened');
        } else {
            this._translateChildren(childrenUp, St.DirectionType.UP, nRowsUp);
            this._translateChildren(childrenDown, St.DirectionType.DOWN, nRowsDown);
            this._translatedChildren = childrenUp.concat(childrenDown);
        }
    }

    _translateChildren(children, direction, nRows) {
        let translationY = nRows * (this._getVItemSize() + this._getSpacing());
        if (translationY == 0)
            return;

        if (direction == St.DirectionType.UP)
            translationY *= -1;

        for (let i = 0; i < children.length; i++) {
            children[i].translation_y = 0;
            let params = { translation_y: translationY,
                           time: EXTRA_SPACE_ANIMATION_TIME,
                           transition: 'easeInOutQuad'
                         };
            if (i == (children.length - 1))
                params.onComplete = () => { this.emit('space-opened'); };
            Tweener.addTween(children[i], params);
        }
    }

    closeExtraSpace() {
        if (!this._translatedChildren || !this._translatedChildren.length) {
            this.emit('space-closed');
            return;
        }

        for (let i = 0; i < this._translatedChildren.length; i++) {
            if (!this._translatedChildren[i].translation_y)
                continue;
            Tweener.addTween(this._translatedChildren[i],
                             { translation_y: 0,
                               time: EXTRA_SPACE_ANIMATION_TIME,
                               transition: 'easeInOutQuad',
                               onComplete: () => { this.emit('space-closed'); }
                             });
        }
    }
});
