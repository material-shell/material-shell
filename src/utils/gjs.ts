const Me = imports.misc.extensionUtils.getCurrentExtension();
import * as GObject from 'GObject';

/// Decorator function to call `GObject.registerClass` with the given class.
/// Use like
/// ```
/// @registerGObjectClass
/// export class MyThing extends GObject.Object { ... }
/// ```
export function registerGObjectClass<K, T extends { metaInfo: GObject.MetaInfo, new(params: any): K }>(target: T) {
    return GObject.registerClass(
        target.metaInfo,
        target
    );
}
