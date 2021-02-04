const Me = imports.misc.extensionUtils.getCurrentExtension();
import * as GObject from 'gobject';
const Signals = imports.signals;

/// Decorator function to call `GObject.registerClass` with the given class.
/// Use like
/// ```
/// @registerGObjectClass
/// export class MyThing extends GObject.Object { ... }
/// ```
export function registerGObjectClass<
    K,
    T extends { metaInfo?: GObject.MetaInfo; new (...params: any[]): K }
>(target: T) {
    // Note that we use 'hasOwnProperty' because otherwise we would get inherited meta infos.
    // This would be bad because we would inherit the GObjectName too, which is supposed to be unique.
    if (Object.prototype.hasOwnProperty.call(target, 'metaInfo')) {
        return GObject.registerClass<K, T>(
            target.metaInfo!,
            target
        ) as typeof target;
    } else {
        return GObject.registerClass<K, T>(target) as typeof target;
    }
}

export class WithSignals {
    // Note: these will be replaced by the addSignalMethods function
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    emit(name: string, ...params: any[]): void {}
    connect(name: string, callback: (...params: any[]) => void): number {
        return 0;
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    disconnect(id: number): void {}
}
Signals.addSignalMethods(WithSignals.prototype);
