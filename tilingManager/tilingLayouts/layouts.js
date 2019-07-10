const Me = imports.misc.extensionUtils.getCurrentExtension();

const { MaximizeLayout } = Me.imports.tilingManager.tilingLayouts.maximize;
const { FloatLayout } = Me.imports.tilingManager.tilingLayouts.float;
const custom = Me.imports.tilingManager.tilingLayouts.custom;
const { HalfLayout } = custom.half;
const { HalfHorizontalLayout } = custom.halfHorizontal;
const { HalfVerticalLayout } = custom.halfVertical;
const { RatioLayout } = custom.ratio;
const { GridLayout } = custom.grid;

const layouts = [
    MaximizeLayout,
    GridLayout,
    HalfLayout,
    HalfHorizontalLayout,
    HalfVerticalLayout,
    RatioLayout,
    FloatLayout
];

/* exported TilingLayoutByKey */
const TilingLayoutByKey = layouts.reduce((layoutsByKey, layout) => {
    layoutsByKey[layout.key] = layout;
    return layoutsByKey;
}, {});
