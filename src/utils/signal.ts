import Clutter from 'gi://Clutter';

export interface CanSendSignal<F> extends CanDisconnect {
    connect(signal: string, callback: F): number;
}

export interface CanDisconnect {
    disconnect(id: number): void;
}

/** Represents a connected signal.
 * Call `disconnect` to disconnect the signal.
 * This should always be done before letting go of the object.
 *
 * An error will be logged if you try to disconnect the signal more than once.
 */
export class SignalHandle {
    private constructor(target: CanDisconnect, id: number) {
        this.target = target;
        if (target instanceof Clutter.Actor) {
            target.connect('destroy', () => {
                this.disconnect();
            });
        }
        this.id = id;
    }

    /** Creates a new signal handle by subscribing to the `signal` on `to` */
    static connect<F>(
        to: CanSendSignal<F>,
        signal: string,
        callback: F
    ): SignalHandle {
        return new SignalHandle(to, to.connect(signal, callback));
    }

    private target: CanDisconnect | null;
    private id: number;

    /** Disconnects the signal.
     * The callback function will not be called again after this.
     *
     * An error will be logged if you try to disconnect the signal more than once.
     */
    disconnect() {
        if (this.target == null) {
            log('Signal is already disconnected');
        } else {
            this.target.disconnect(this.id);
            this.target = null;
        }
    }
}

export class SignalObserver {
    signalObservedList: SignalHandle[];

    constructor() {
        this.signalObservedList = [];
    }

    observe<F>(subject: CanSendSignal<F>, signalKey: string, callback: F) {
        const signalHandle = SignalHandle.connect(subject, signalKey, callback);
        this.signalObservedList.push(signalHandle);

        return signalHandle;
    }
    clear() {
        for (const handler of this.signalObservedList) {
            handler.disconnect();
        }
        this.signalObservedList = [];
    }
}
