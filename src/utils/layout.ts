import * as Clutter from 'clutter';

export function centerInBox(
    box: Clutter.ActorBox,
    width: number,
    height: number
) {
try{
    const paddingX = (box.x2 - box.x1 - width) / 2;
    const paddingY = (box.y2 - box.y1 - height) / 2;
    const x = box.x1 + paddingX;
    const y = box.y1 + paddingY;
    return Clutter.ActorBox.new(x, y, x + width, y + height);} finally {}
}
