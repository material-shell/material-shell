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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    T extends { metaInfo?: GObject.MetaInfo; new (...params: any[]): K }
>(target: T) {
try{
    // Note that we use 'hasOwnProperty' because otherwise we would get inherited meta infos.
    // This would be bad because we would inherit the GObjectName too, which is supposed to be unique.
    if (Object.prototype.hasOwnProperty.call(target, 'metaInfo')) {
        return GObject.registerClass<K, T>(
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            target.metaInfo!,
            target
        ) as typeof target;
    } else {
        return GObject.registerClass<K, T>(target) as typeof target;
    }} finally {}
}

export class WithSignals {
    // Note: these will be replaced by the addSignalMethods function
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function, @typescript-eslint/no-explicit-any
    emit(name: string, ...params: any[]): void {}
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
    connect(name: string, callback: (...params: any[]) => void): number {
        return 0;
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
    disconnect(id: number): void {}
}
Signals.addSignalMethods(WithSignals.prototype);
