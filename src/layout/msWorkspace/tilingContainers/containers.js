/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
const { MaximizeContainer } = Me.imports.src.layout.msWorkspace.tilingContainers.maximize;
const { SplitContainer } = Me.imports.src.layout.msWorkspace.tilingContainers.split;
const { FloatContainer } = Me.imports.src.layout.msWorkspace.tilingContainers.float;
const { HalfContainer } = Me.imports.src.layout.msWorkspace.tilingContainers.half;
const { HalfHorizontalContainer } = Me.imports.src.layout.msWorkspace.tilingContainers.halfHorizontal;
const { HalfVerticalContainer } = Me.imports.src.layout.msWorkspace.tilingContainers.halfVertical;
const { SimpleContainer } = Me.imports.src.layout.msWorkspace.tilingContainers.simple;
const { SimpleHorizontalContainer } = Me.imports.src.layout.msWorkspace.tilingContainers.simpleHorizontal;
const { SimpleVerticalContainer } = Me.imports.src.layout.msWorkspace.tilingContainers.simpleVertical;
const { RatioContainer } = Me.imports.src.layout.msWorkspace.tilingContainers.ratio;
const { GridContainer } = Me.imports.src.layout.msWorkspace.tilingContainers.grid;

const containers = [
    MaximizeContainer,
    SplitContainer,
    GridContainer,
    HalfContainer,
    HalfHorizontalContainer,
    HalfVerticalContainer,
    RatioContainer,
    FloatContainer,
    SimpleContainer,
    SimpleHorizontalContainer,
    SimpleVerticalContainer,
];

/* exported TilingContainerByKey */
var TilingContainerByKey = containers.reduce((containersByKey, container) => {
    containersByKey[container.key] = container;
    return containersByKey;
}, {});
