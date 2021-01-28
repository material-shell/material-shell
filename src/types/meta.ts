import { MsWindow } from 'src/layout/msWorkspace/msWindow';

declare module "meta" {
    export interface Window {
        msWindow: MsWindow | undefined | null;
    }
}
