const Me = imports.misc.extensionUtils.getCurrentExtension();

const { MaximizeLayout } = Me.imports.tilingManager.tilingLayouts.maximize;
const { SplitLayout } = Me.imports.tilingManager.tilingLayouts.split;
const { FloatLayout } = Me.imports.tilingManager.tilingLayouts.float;
const custom = Me.imports.tilingManager.tilingLayouts.custom;
const { HalfLayout } = custom.half;
const { HalfHorizontalLayout } = custom.halfHorizontal;
const { HalfVerticalLayout } = custom.halfVertical;
const { SimpleLayout } = custom.simple;
const { SimpleHorizontalLayout } = custom.simpleHorizontal;
const { SimpleVerticalLayout } = custom.simpleVertical;
const { RatioLayout } = custom.ratio;
const { GridLayout } = custom.grid;

const layouts = [
    MaximizeLayout,
    SplitLayout,
    GridLayout,
    HalfLayout,
    HalfHorizontalLayout,
    HalfVerticalLayout,
    RatioLayout,
    FloatLayout,
    SimpleLayout,
    SimpleHorizontalLayout,
    SimpleVerticalLayout
];

/* exported TilingLayoutByKey */
var TilingLayoutByKey = layouts.reduce((layoutsByKey, layout) => {
    layoutsByKey[layout.key] = layout;
    return layoutsByKey;
}, {});
