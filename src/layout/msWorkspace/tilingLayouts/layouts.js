/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
const {
    MaximizeLayout,
} = Me.imports.src.layout.msWorkspace.tilingLayouts.maximize;
const { I3wmLayout } = Me.imports.src.layout.msWorkspace.tilingLayouts.i3wm;
const { SplitLayout } = Me.imports.src.layout.msWorkspace.tilingLayouts.split;
const { FloatLayout } = Me.imports.src.layout.msWorkspace.tilingLayouts.float;
const custom = Me.imports.src.layout.msWorkspace.tilingLayouts.custom;
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
    I3wmLayout,
    SplitLayout,
    GridLayout,
    HalfLayout,
    HalfHorizontalLayout,
    HalfVerticalLayout,
    RatioLayout,
    FloatLayout,
    SimpleLayout,
    SimpleHorizontalLayout,
    SimpleVerticalLayout,
];

/* exported TilingLayoutByKey */
var TilingLayoutByKey = layouts.reduce((layoutsByKey, layout) => {
    layoutsByKey[layout.key] = layout;
    return layoutsByKey;
}, {});
