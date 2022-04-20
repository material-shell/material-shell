/** Gnome libs imports */
import * as GObject from 'gobject';

/** Extension imports */
const Me = imports.misc.extensionUtils.getCurrentExtension();
import { BaseResizeableTilingLayout } from 'src/layout/msWorkspace/tilingLayouts/baseResizeableTiling';
import { registerGObjectClass } from 'src/utils/gjs';
import { Portion } from '../../portion';

@registerGObjectClass
export class GridLayout extends BaseResizeableTilingLayout {
    static state = { key: 'grid' };
    static label = 'Grid';

    updateMainPortionLength(length: number) {
        const columnLength = Math.ceil(Math.sqrt(length));
        const rowLength = Math.ceil(length / columnLength);

        while (this.mainPortion.children.length > columnLength) {
            this.mainPortion.pop();
        }

        while (
            columnLength > 1 &&
            this.mainPortion.children.length < columnLength
        ) {
            this.mainPortion.push();
        }

        for (let i = 0; i < columnLength - 1; i++) {
            const column = this.mainPortion.children[i];

            while (column.children.length > rowLength) {
                column.pop();
            }

            while (rowLength > 1 && column.children.length < rowLength) {
                column.push();
            }
        }

        const lastColumn = this.mainPortion.children[columnLength - 1];

        if (lastColumn) {
            const lastRowLength = length - (columnLength - 1) * rowLength;

            while (lastColumn.children.length > lastRowLength) {
                lastColumn.pop();
            }

            while (
                lastRowLength > 1 &&
                lastColumn.children.length < lastRowLength
            ) {
                lastColumn.push();
            }
        }
    }
}
