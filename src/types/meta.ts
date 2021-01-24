import { MsWindow } from 'src/layout/msWorkspace/msWindow';

declare module "Meta" {
    export interface Window {
        msWindow: MsWindow | undefined | null;
    }
}
