const Me = imports.misc.extensionUtils.getCurrentExtension();
import * as GObject from 'GObject';
const Signals = imports.signals;

/// Decorator function to call `GObject.registerClass` with the given class.
/// Use like
/// ```
/// @registerGObjectClass
/// export class MyThing extends GObject.Object { ... }
/// ```
export function registerGObjectClass<K, T extends { metaInfo?: GObject.MetaInfo, new(params: any): K }>(target: T) {
    if (target.metaInfo) {
        return GObject.registerClass<K,T>(
            target.metaInfo,
            target
        ) as typeof target;
    } else {
        return GObject.registerClass<K,T>(
            target
        ) as typeof target;
    }
}

export class WithSignals {
    // Note: these will be replaced by the addSignalMethods function
    emit(name: string, ...params: any[]): void {}
    connect(name: string, callback: (...params: any[])=>void): void {}
}
Signals.addSignalMethods(WithSignals.prototype);
