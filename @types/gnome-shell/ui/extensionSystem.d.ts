import { Extension } from '../extensions/extension.js';

export class ExtensionManager {
    _callExtensionEnable: any;

    lookup(uuid: string):
        | {
              uuid: string;
              stateObj: Extension;
              path: string;
              metadata: {
                  'settings-schema': string;
              };
          }
        | undefined;
    disableExtension(uuid: string): boolean;
}
