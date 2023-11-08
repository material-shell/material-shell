/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gvc-1.0-import.d.ts';
/**
 * Gvc-1.0
 */

import type Gio from './gio-2.0.js';
import type GObject from './gobject-2.0.js';
import type GLib from './glib-2.0.js';

export namespace Gvc {
    enum MixerControlState {
        CLOSED,
        READY,
        CONNECTING,
        FAILED,
    }
    enum MixerStreamState {
        INVALID,
        RUNNING,
        IDLE,
        SUSPENDED,
    }
    enum MixerUIDeviceDirection {
        INPUT,
        OUTPUT,
    }
    enum HeadsetPortChoice {
        NONE,
        HEADPHONES,
        HEADSET,
        MIC,
    }
    const MIXER_UI_DEVICE_INVALID: number;
    module ChannelMap {
        // Signal callback interfaces

        /**
         * Signal callback interface for `volume-changed`
         */
        interface VolumeChangedSignalCallback {
            ($obj: ChannelMap, object: boolean): void;
        }

        // Constructor properties interface

        interface ConstructorProperties
            extends GObject.Object.ConstructorProperties {}
    }

    interface ChannelMap {
        // Own fields of Gvc-1.0.Gvc.ChannelMap

        parent: GObject.Object;
        priv: ChannelMapPrivate;

        // Owm methods of Gvc-1.0.Gvc.ChannelMap

        can_balance(): boolean;
        can_fade(): boolean;
        get_mapping(): string | null;
        get_num_channels(): number;
        get_volume(): number;

        // Own virtual methods of Gvc-1.0.Gvc.ChannelMap

        vfunc_volume_changed(set: boolean): void;

        // Own signals of Gvc-1.0.Gvc.ChannelMap

        connect(
            sigName: 'volume-changed',
            callback: ChannelMap.VolumeChangedSignalCallback
        ): number;
        connect_after(
            sigName: 'volume-changed',
            callback: ChannelMap.VolumeChangedSignalCallback
        ): number;
        emit(sigName: 'volume-changed', object: boolean, ...args: any[]): void;

        // Class property signals of Gvc-1.0.Gvc.ChannelMap

        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class ChannelMap extends GObject.Object {
        // Own properties of Gvc-1.0.Gvc.ChannelMap

        static name: string;
        static $gtype: GObject.GType<ChannelMap>;

        // Constructors of Gvc-1.0.Gvc.ChannelMap

        constructor(config?: ChannelMap.ConstructorProperties);
        constructor();
        static new(): ChannelMap;
        _init(config?: ChannelMap.ConstructorProperties): void;
    }

    module MixerCard {
        // Constructor properties interface

        interface ConstructorProperties
            extends GObject.Object.ConstructorProperties {
            // Own constructor properties of Gvc-1.0.Gvc.MixerCard

            icon_name?: string | null;
            id?: number | null;
            index?: number | null;
            name?: string | null;
            pa_context?: any | null;
            profile?: string | null;
        }
    }

    interface MixerCard {
        // Own properties of Gvc-1.0.Gvc.MixerCard

        readonly human_profile: string | null;
        icon_name: string | null;
        readonly id: number;
        readonly index: number;
        name: string | null;
        readonly pa_context: any;
        profile: string | null;

        // Own fields of Gvc-1.0.Gvc.MixerCard

        parent: GObject.Object;
        priv: MixerCardPrivate;

        // Owm methods of Gvc-1.0.Gvc.MixerCard

        /**
         * Change the profile in use on this card.
         * @param profile the profile to change to or %NULL.
         * @returns %TRUE if profile successfully changed or already using this profile.
         */
        change_profile(profile: string | null): boolean;
        get_gicon(): Gio.Icon;
        get_icon_name(): string | null;
        get_id(): number;
        get_index(): number;
        get_name(): string | null;
        get_ports(): MixerCardPort[];
        get_profiles(): MixerCardProfile[];
        set_icon_name(name: string | null): boolean;
        set_name(name: string | null): boolean;
        set_ports(ports: MixerCardPort[]): boolean;
        set_profile(profile: string | null): boolean;
        set_profiles(profiles: MixerCardProfile[]): boolean;

        // Class property signals of Gvc-1.0.Gvc.MixerCard

        connect(
            sigName: 'notify::human-profile',
            callback: ($obj: MixerCard, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::human-profile',
            callback: ($obj: MixerCard, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::human-profile', ...args: any[]): void;
        connect(
            sigName: 'notify::icon-name',
            callback: ($obj: MixerCard, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::icon-name',
            callback: ($obj: MixerCard, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::icon-name', ...args: any[]): void;
        connect(
            sigName: 'notify::id',
            callback: ($obj: MixerCard, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::id',
            callback: ($obj: MixerCard, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::id', ...args: any[]): void;
        connect(
            sigName: 'notify::index',
            callback: ($obj: MixerCard, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::index',
            callback: ($obj: MixerCard, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::index', ...args: any[]): void;
        connect(
            sigName: 'notify::name',
            callback: ($obj: MixerCard, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::name',
            callback: ($obj: MixerCard, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::name', ...args: any[]): void;
        connect(
            sigName: 'notify::pa-context',
            callback: ($obj: MixerCard, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::pa-context',
            callback: ($obj: MixerCard, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::pa-context', ...args: any[]): void;
        connect(
            sigName: 'notify::profile',
            callback: ($obj: MixerCard, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::profile',
            callback: ($obj: MixerCard, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::profile', ...args: any[]): void;
        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class MixerCard extends GObject.Object {
        // Own properties of Gvc-1.0.Gvc.MixerCard

        static name: string;
        static $gtype: GObject.GType<MixerCard>;

        // Constructors of Gvc-1.0.Gvc.MixerCard

        constructor(config?: MixerCard.ConstructorProperties);
        _init(config?: MixerCard.ConstructorProperties): void;
    }

    module MixerControl {
        // Signal callback interfaces

        /**
         * Signal callback interface for `active-input-update`
         */
        interface ActiveInputUpdateSignalCallback {
            ($obj: MixerControl, object: number): void;
        }

        /**
         * Signal callback interface for `active-output-update`
         */
        interface ActiveOutputUpdateSignalCallback {
            ($obj: MixerControl, object: number): void;
        }

        /**
         * Signal callback interface for `audio-device-selection-needed`
         */
        interface AudioDeviceSelectionNeededSignalCallback {
            ($obj: MixerControl, object: number, p0: boolean, p1: number): void;
        }

        /**
         * Signal callback interface for `card-added`
         */
        interface CardAddedSignalCallback {
            ($obj: MixerControl, object: number): void;
        }

        /**
         * Signal callback interface for `card-removed`
         */
        interface CardRemovedSignalCallback {
            ($obj: MixerControl, object: number): void;
        }

        /**
         * Signal callback interface for `default-sink-changed`
         */
        interface DefaultSinkChangedSignalCallback {
            ($obj: MixerControl, object: number): void;
        }

        /**
         * Signal callback interface for `default-source-changed`
         */
        interface DefaultSourceChangedSignalCallback {
            ($obj: MixerControl, object: number): void;
        }

        /**
         * Signal callback interface for `input-added`
         */
        interface InputAddedSignalCallback {
            ($obj: MixerControl, object: number): void;
        }

        /**
         * Signal callback interface for `input-removed`
         */
        interface InputRemovedSignalCallback {
            ($obj: MixerControl, object: number): void;
        }

        /**
         * Signal callback interface for `output-added`
         */
        interface OutputAddedSignalCallback {
            ($obj: MixerControl, object: number): void;
        }

        /**
         * Signal callback interface for `output-removed`
         */
        interface OutputRemovedSignalCallback {
            ($obj: MixerControl, object: number): void;
        }

        /**
         * Signal callback interface for `state-changed`
         */
        interface StateChangedSignalCallback {
            ($obj: MixerControl, object: number): void;
        }

        /**
         * Signal callback interface for `stream-added`
         */
        interface StreamAddedSignalCallback {
            ($obj: MixerControl, object: number): void;
        }

        /**
         * Signal callback interface for `stream-changed`
         */
        interface StreamChangedSignalCallback {
            ($obj: MixerControl, object: number): void;
        }

        /**
         * Signal callback interface for `stream-removed`
         */
        interface StreamRemovedSignalCallback {
            ($obj: MixerControl, object: number): void;
        }

        // Constructor properties interface

        interface ConstructorProperties
            extends GObject.Object.ConstructorProperties {
            // Own constructor properties of Gvc-1.0.Gvc.MixerControl

            name?: string | null;
        }
    }

    interface MixerControl {
        // Own properties of Gvc-1.0.Gvc.MixerControl

        readonly name: string | null;

        // Own fields of Gvc-1.0.Gvc.MixerControl

        parent: GObject.Object;
        priv: MixerControlPrivate;

        // Owm methods of Gvc-1.0.Gvc.MixerControl

        change_input(input: MixerUIDevice): void;
        change_output(output: MixerUIDevice): void;
        change_profile_on_selected_device(
            device: MixerUIDevice,
            profile: string | null
        ): boolean;
        close(): boolean;
        get_cards(): MixerCard[];
        get_default_sink(): MixerStream;
        get_default_source(): MixerStream;
        get_event_sink_input(): MixerStream;
        get_sink_inputs(): MixerSinkInput[];
        get_sinks(): MixerSink[];
        get_source_outputs(): MixerSourceOutput[];
        get_sources(): MixerSource[];
        get_state(): MixerControlState;
        get_stream_from_device(device: MixerUIDevice): MixerStream;
        get_streams(): MixerStream[];
        get_vol_max_amplified(): number;
        get_vol_max_norm(): number;
        lookup_card_id(id: number): MixerCard;
        lookup_device_from_stream(stream: MixerStream): MixerUIDevice;
        lookup_input_id(id: number): MixerUIDevice;
        lookup_output_id(id: number): MixerUIDevice;
        lookup_stream_id(id: number): MixerStream;
        open(): boolean;
        set_default_sink(stream: MixerStream): boolean;
        set_default_source(stream: MixerStream): boolean;
        set_headset_port(id: number, choices: HeadsetPortChoice): void;

        // Own virtual methods of Gvc-1.0.Gvc.MixerControl

        vfunc_active_input_update(id: number): void;
        vfunc_active_output_update(id: number): void;
        vfunc_audio_device_selection_needed(
            id: number,
            show_dialog: boolean,
            choices: HeadsetPortChoice
        ): void;
        vfunc_card_added(id: number): void;
        vfunc_card_removed(id: number): void;
        vfunc_default_sink_changed(id: number): void;
        vfunc_default_source_changed(id: number): void;
        vfunc_input_added(id: number): void;
        vfunc_input_removed(id: number): void;
        vfunc_output_added(id: number): void;
        vfunc_output_removed(id: number): void;
        vfunc_state_changed(new_state: MixerControlState): void;
        vfunc_stream_added(id: number): void;
        vfunc_stream_changed(id: number): void;
        vfunc_stream_removed(id: number): void;

        // Own signals of Gvc-1.0.Gvc.MixerControl

        connect(
            sigName: 'active-input-update',
            callback: MixerControl.ActiveInputUpdateSignalCallback
        ): number;
        connect_after(
            sigName: 'active-input-update',
            callback: MixerControl.ActiveInputUpdateSignalCallback
        ): number;
        emit(
            sigName: 'active-input-update',
            object: number,
            ...args: any[]
        ): void;
        connect(
            sigName: 'active-output-update',
            callback: MixerControl.ActiveOutputUpdateSignalCallback
        ): number;
        connect_after(
            sigName: 'active-output-update',
            callback: MixerControl.ActiveOutputUpdateSignalCallback
        ): number;
        emit(
            sigName: 'active-output-update',
            object: number,
            ...args: any[]
        ): void;
        connect(
            sigName: 'audio-device-selection-needed',
            callback: MixerControl.AudioDeviceSelectionNeededSignalCallback
        ): number;
        connect_after(
            sigName: 'audio-device-selection-needed',
            callback: MixerControl.AudioDeviceSelectionNeededSignalCallback
        ): number;
        emit(
            sigName: 'audio-device-selection-needed',
            object: number,
            p0: boolean,
            p1: number,
            ...args: any[]
        ): void;
        connect(
            sigName: 'card-added',
            callback: MixerControl.CardAddedSignalCallback
        ): number;
        connect_after(
            sigName: 'card-added',
            callback: MixerControl.CardAddedSignalCallback
        ): number;
        emit(sigName: 'card-added', object: number, ...args: any[]): void;
        connect(
            sigName: 'card-removed',
            callback: MixerControl.CardRemovedSignalCallback
        ): number;
        connect_after(
            sigName: 'card-removed',
            callback: MixerControl.CardRemovedSignalCallback
        ): number;
        emit(sigName: 'card-removed', object: number, ...args: any[]): void;
        connect(
            sigName: 'default-sink-changed',
            callback: MixerControl.DefaultSinkChangedSignalCallback
        ): number;
        connect_after(
            sigName: 'default-sink-changed',
            callback: MixerControl.DefaultSinkChangedSignalCallback
        ): number;
        emit(
            sigName: 'default-sink-changed',
            object: number,
            ...args: any[]
        ): void;
        connect(
            sigName: 'default-source-changed',
            callback: MixerControl.DefaultSourceChangedSignalCallback
        ): number;
        connect_after(
            sigName: 'default-source-changed',
            callback: MixerControl.DefaultSourceChangedSignalCallback
        ): number;
        emit(
            sigName: 'default-source-changed',
            object: number,
            ...args: any[]
        ): void;
        connect(
            sigName: 'input-added',
            callback: MixerControl.InputAddedSignalCallback
        ): number;
        connect_after(
            sigName: 'input-added',
            callback: MixerControl.InputAddedSignalCallback
        ): number;
        emit(sigName: 'input-added', object: number, ...args: any[]): void;
        connect(
            sigName: 'input-removed',
            callback: MixerControl.InputRemovedSignalCallback
        ): number;
        connect_after(
            sigName: 'input-removed',
            callback: MixerControl.InputRemovedSignalCallback
        ): number;
        emit(sigName: 'input-removed', object: number, ...args: any[]): void;
        connect(
            sigName: 'output-added',
            callback: MixerControl.OutputAddedSignalCallback
        ): number;
        connect_after(
            sigName: 'output-added',
            callback: MixerControl.OutputAddedSignalCallback
        ): number;
        emit(sigName: 'output-added', object: number, ...args: any[]): void;
        connect(
            sigName: 'output-removed',
            callback: MixerControl.OutputRemovedSignalCallback
        ): number;
        connect_after(
            sigName: 'output-removed',
            callback: MixerControl.OutputRemovedSignalCallback
        ): number;
        emit(sigName: 'output-removed', object: number, ...args: any[]): void;
        connect(
            sigName: 'state-changed',
            callback: MixerControl.StateChangedSignalCallback
        ): number;
        connect_after(
            sigName: 'state-changed',
            callback: MixerControl.StateChangedSignalCallback
        ): number;
        emit(sigName: 'state-changed', object: number, ...args: any[]): void;
        connect(
            sigName: 'stream-added',
            callback: MixerControl.StreamAddedSignalCallback
        ): number;
        connect_after(
            sigName: 'stream-added',
            callback: MixerControl.StreamAddedSignalCallback
        ): number;
        emit(sigName: 'stream-added', object: number, ...args: any[]): void;
        connect(
            sigName: 'stream-changed',
            callback: MixerControl.StreamChangedSignalCallback
        ): number;
        connect_after(
            sigName: 'stream-changed',
            callback: MixerControl.StreamChangedSignalCallback
        ): number;
        emit(sigName: 'stream-changed', object: number, ...args: any[]): void;
        connect(
            sigName: 'stream-removed',
            callback: MixerControl.StreamRemovedSignalCallback
        ): number;
        connect_after(
            sigName: 'stream-removed',
            callback: MixerControl.StreamRemovedSignalCallback
        ): number;
        emit(sigName: 'stream-removed', object: number, ...args: any[]): void;

        // Class property signals of Gvc-1.0.Gvc.MixerControl

        connect(
            sigName: 'notify::name',
            callback: ($obj: MixerControl, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::name',
            callback: ($obj: MixerControl, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::name', ...args: any[]): void;
        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class MixerControl extends GObject.Object {
        // Own properties of Gvc-1.0.Gvc.MixerControl

        static name: string;
        static $gtype: GObject.GType<MixerControl>;

        // Constructors of Gvc-1.0.Gvc.MixerControl

        constructor(config?: MixerControl.ConstructorProperties);
        constructor(name: string | null);
        static new(name: string | null): MixerControl;
        _init(config?: MixerControl.ConstructorProperties): void;
    }

    module MixerEventRole {
        // Constructor properties interface

        interface ConstructorProperties
            extends MixerStream.ConstructorProperties {
            // Own constructor properties of Gvc-1.0.Gvc.MixerEventRole

            device?: string | null;
        }
    }

    interface MixerEventRole {
        // Own properties of Gvc-1.0.Gvc.MixerEventRole

        device: string | null;

        // Own fields of Gvc-1.0.Gvc.MixerEventRole

        parent: MixerStream & GObject.Object;
        priv: any;

        // Class property signals of Gvc-1.0.Gvc.MixerEventRole

        connect(
            sigName: 'notify::device',
            callback: ($obj: MixerEventRole, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::device',
            callback: ($obj: MixerEventRole, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::device', ...args: any[]): void;
        connect(
            sigName: 'notify::application-id',
            callback: ($obj: MixerEventRole, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::application-id',
            callback: ($obj: MixerEventRole, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::application-id', ...args: any[]): void;
        connect(
            sigName: 'notify::can-decibel',
            callback: ($obj: MixerEventRole, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::can-decibel',
            callback: ($obj: MixerEventRole, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::can-decibel', ...args: any[]): void;
        connect(
            sigName: 'notify::card-index',
            callback: ($obj: MixerEventRole, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::card-index',
            callback: ($obj: MixerEventRole, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::card-index', ...args: any[]): void;
        connect(
            sigName: 'notify::channel-map',
            callback: ($obj: MixerEventRole, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::channel-map',
            callback: ($obj: MixerEventRole, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::channel-map', ...args: any[]): void;
        connect(
            sigName: 'notify::decibel',
            callback: ($obj: MixerEventRole, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::decibel',
            callback: ($obj: MixerEventRole, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::decibel', ...args: any[]): void;
        connect(
            sigName: 'notify::description',
            callback: ($obj: MixerEventRole, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::description',
            callback: ($obj: MixerEventRole, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::description', ...args: any[]): void;
        connect(
            sigName: 'notify::form-factor',
            callback: ($obj: MixerEventRole, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::form-factor',
            callback: ($obj: MixerEventRole, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::form-factor', ...args: any[]): void;
        connect(
            sigName: 'notify::icon-name',
            callback: ($obj: MixerEventRole, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::icon-name',
            callback: ($obj: MixerEventRole, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::icon-name', ...args: any[]): void;
        connect(
            sigName: 'notify::id',
            callback: ($obj: MixerEventRole, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::id',
            callback: ($obj: MixerEventRole, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::id', ...args: any[]): void;
        connect(
            sigName: 'notify::index',
            callback: ($obj: MixerEventRole, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::index',
            callback: ($obj: MixerEventRole, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::index', ...args: any[]): void;
        connect(
            sigName: 'notify::is-event-stream',
            callback: ($obj: MixerEventRole, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::is-event-stream',
            callback: ($obj: MixerEventRole, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::is-event-stream', ...args: any[]): void;
        connect(
            sigName: 'notify::is-muted',
            callback: ($obj: MixerEventRole, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::is-muted',
            callback: ($obj: MixerEventRole, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::is-muted', ...args: any[]): void;
        connect(
            sigName: 'notify::is-virtual',
            callback: ($obj: MixerEventRole, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::is-virtual',
            callback: ($obj: MixerEventRole, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::is-virtual', ...args: any[]): void;
        connect(
            sigName: 'notify::name',
            callback: ($obj: MixerEventRole, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::name',
            callback: ($obj: MixerEventRole, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::name', ...args: any[]): void;
        connect(
            sigName: 'notify::pa-context',
            callback: ($obj: MixerEventRole, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::pa-context',
            callback: ($obj: MixerEventRole, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::pa-context', ...args: any[]): void;
        connect(
            sigName: 'notify::port',
            callback: ($obj: MixerEventRole, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::port',
            callback: ($obj: MixerEventRole, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::port', ...args: any[]): void;
        connect(
            sigName: 'notify::state',
            callback: ($obj: MixerEventRole, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::state',
            callback: ($obj: MixerEventRole, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::state', ...args: any[]): void;
        connect(
            sigName: 'notify::sysfs-path',
            callback: ($obj: MixerEventRole, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::sysfs-path',
            callback: ($obj: MixerEventRole, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::sysfs-path', ...args: any[]): void;
        connect(
            sigName: 'notify::volume',
            callback: ($obj: MixerEventRole, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::volume',
            callback: ($obj: MixerEventRole, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::volume', ...args: any[]): void;
        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class MixerEventRole extends MixerStream {
        // Own properties of Gvc-1.0.Gvc.MixerEventRole

        static name: string;
        static $gtype: GObject.GType<MixerEventRole>;

        // Constructors of Gvc-1.0.Gvc.MixerEventRole

        constructor(config?: MixerEventRole.ConstructorProperties);
        _init(config?: MixerEventRole.ConstructorProperties): void;
    }

    module MixerSink {
        // Constructor properties interface

        interface ConstructorProperties
            extends MixerStream.ConstructorProperties {}
    }

    interface MixerSink {
        // Own fields of Gvc-1.0.Gvc.MixerSink

        parent: MixerStream & GObject.Object;
        priv: any;

        // Class property signals of Gvc-1.0.Gvc.MixerSink

        connect(
            sigName: 'notify::application-id',
            callback: ($obj: MixerSink, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::application-id',
            callback: ($obj: MixerSink, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::application-id', ...args: any[]): void;
        connect(
            sigName: 'notify::can-decibel',
            callback: ($obj: MixerSink, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::can-decibel',
            callback: ($obj: MixerSink, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::can-decibel', ...args: any[]): void;
        connect(
            sigName: 'notify::card-index',
            callback: ($obj: MixerSink, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::card-index',
            callback: ($obj: MixerSink, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::card-index', ...args: any[]): void;
        connect(
            sigName: 'notify::channel-map',
            callback: ($obj: MixerSink, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::channel-map',
            callback: ($obj: MixerSink, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::channel-map', ...args: any[]): void;
        connect(
            sigName: 'notify::decibel',
            callback: ($obj: MixerSink, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::decibel',
            callback: ($obj: MixerSink, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::decibel', ...args: any[]): void;
        connect(
            sigName: 'notify::description',
            callback: ($obj: MixerSink, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::description',
            callback: ($obj: MixerSink, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::description', ...args: any[]): void;
        connect(
            sigName: 'notify::form-factor',
            callback: ($obj: MixerSink, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::form-factor',
            callback: ($obj: MixerSink, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::form-factor', ...args: any[]): void;
        connect(
            sigName: 'notify::icon-name',
            callback: ($obj: MixerSink, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::icon-name',
            callback: ($obj: MixerSink, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::icon-name', ...args: any[]): void;
        connect(
            sigName: 'notify::id',
            callback: ($obj: MixerSink, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::id',
            callback: ($obj: MixerSink, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::id', ...args: any[]): void;
        connect(
            sigName: 'notify::index',
            callback: ($obj: MixerSink, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::index',
            callback: ($obj: MixerSink, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::index', ...args: any[]): void;
        connect(
            sigName: 'notify::is-event-stream',
            callback: ($obj: MixerSink, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::is-event-stream',
            callback: ($obj: MixerSink, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::is-event-stream', ...args: any[]): void;
        connect(
            sigName: 'notify::is-muted',
            callback: ($obj: MixerSink, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::is-muted',
            callback: ($obj: MixerSink, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::is-muted', ...args: any[]): void;
        connect(
            sigName: 'notify::is-virtual',
            callback: ($obj: MixerSink, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::is-virtual',
            callback: ($obj: MixerSink, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::is-virtual', ...args: any[]): void;
        connect(
            sigName: 'notify::name',
            callback: ($obj: MixerSink, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::name',
            callback: ($obj: MixerSink, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::name', ...args: any[]): void;
        connect(
            sigName: 'notify::pa-context',
            callback: ($obj: MixerSink, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::pa-context',
            callback: ($obj: MixerSink, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::pa-context', ...args: any[]): void;
        connect(
            sigName: 'notify::port',
            callback: ($obj: MixerSink, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::port',
            callback: ($obj: MixerSink, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::port', ...args: any[]): void;
        connect(
            sigName: 'notify::state',
            callback: ($obj: MixerSink, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::state',
            callback: ($obj: MixerSink, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::state', ...args: any[]): void;
        connect(
            sigName: 'notify::sysfs-path',
            callback: ($obj: MixerSink, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::sysfs-path',
            callback: ($obj: MixerSink, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::sysfs-path', ...args: any[]): void;
        connect(
            sigName: 'notify::volume',
            callback: ($obj: MixerSink, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::volume',
            callback: ($obj: MixerSink, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::volume', ...args: any[]): void;
        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class MixerSink extends MixerStream {
        // Own properties of Gvc-1.0.Gvc.MixerSink

        static name: string;
        static $gtype: GObject.GType<MixerSink>;

        // Constructors of Gvc-1.0.Gvc.MixerSink

        constructor(config?: MixerSink.ConstructorProperties);
        _init(config?: MixerSink.ConstructorProperties): void;
    }

    module MixerSinkInput {
        // Constructor properties interface

        interface ConstructorProperties
            extends MixerStream.ConstructorProperties {}
    }

    interface MixerSinkInput {
        // Own fields of Gvc-1.0.Gvc.MixerSinkInput

        parent: MixerStream & GObject.Object;
        priv: any;

        // Class property signals of Gvc-1.0.Gvc.MixerSinkInput

        connect(
            sigName: 'notify::application-id',
            callback: ($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::application-id',
            callback: ($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::application-id', ...args: any[]): void;
        connect(
            sigName: 'notify::can-decibel',
            callback: ($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::can-decibel',
            callback: ($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::can-decibel', ...args: any[]): void;
        connect(
            sigName: 'notify::card-index',
            callback: ($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::card-index',
            callback: ($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::card-index', ...args: any[]): void;
        connect(
            sigName: 'notify::channel-map',
            callback: ($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::channel-map',
            callback: ($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::channel-map', ...args: any[]): void;
        connect(
            sigName: 'notify::decibel',
            callback: ($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::decibel',
            callback: ($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::decibel', ...args: any[]): void;
        connect(
            sigName: 'notify::description',
            callback: ($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::description',
            callback: ($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::description', ...args: any[]): void;
        connect(
            sigName: 'notify::form-factor',
            callback: ($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::form-factor',
            callback: ($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::form-factor', ...args: any[]): void;
        connect(
            sigName: 'notify::icon-name',
            callback: ($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::icon-name',
            callback: ($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::icon-name', ...args: any[]): void;
        connect(
            sigName: 'notify::id',
            callback: ($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::id',
            callback: ($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::id', ...args: any[]): void;
        connect(
            sigName: 'notify::index',
            callback: ($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::index',
            callback: ($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::index', ...args: any[]): void;
        connect(
            sigName: 'notify::is-event-stream',
            callback: ($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::is-event-stream',
            callback: ($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::is-event-stream', ...args: any[]): void;
        connect(
            sigName: 'notify::is-muted',
            callback: ($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::is-muted',
            callback: ($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::is-muted', ...args: any[]): void;
        connect(
            sigName: 'notify::is-virtual',
            callback: ($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::is-virtual',
            callback: ($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::is-virtual', ...args: any[]): void;
        connect(
            sigName: 'notify::name',
            callback: ($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::name',
            callback: ($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::name', ...args: any[]): void;
        connect(
            sigName: 'notify::pa-context',
            callback: ($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::pa-context',
            callback: ($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::pa-context', ...args: any[]): void;
        connect(
            sigName: 'notify::port',
            callback: ($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::port',
            callback: ($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::port', ...args: any[]): void;
        connect(
            sigName: 'notify::state',
            callback: ($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::state',
            callback: ($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::state', ...args: any[]): void;
        connect(
            sigName: 'notify::sysfs-path',
            callback: ($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::sysfs-path',
            callback: ($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::sysfs-path', ...args: any[]): void;
        connect(
            sigName: 'notify::volume',
            callback: ($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::volume',
            callback: ($obj: MixerSinkInput, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::volume', ...args: any[]): void;
        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class MixerSinkInput extends MixerStream {
        // Own properties of Gvc-1.0.Gvc.MixerSinkInput

        static name: string;
        static $gtype: GObject.GType<MixerSinkInput>;

        // Constructors of Gvc-1.0.Gvc.MixerSinkInput

        constructor(config?: MixerSinkInput.ConstructorProperties);
        _init(config?: MixerSinkInput.ConstructorProperties): void;
    }

    module MixerSource {
        // Constructor properties interface

        interface ConstructorProperties
            extends MixerStream.ConstructorProperties {}
    }

    interface MixerSource {
        // Own fields of Gvc-1.0.Gvc.MixerSource

        parent: MixerStream & GObject.Object;
        priv: any;

        // Class property signals of Gvc-1.0.Gvc.MixerSource

        connect(
            sigName: 'notify::application-id',
            callback: ($obj: MixerSource, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::application-id',
            callback: ($obj: MixerSource, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::application-id', ...args: any[]): void;
        connect(
            sigName: 'notify::can-decibel',
            callback: ($obj: MixerSource, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::can-decibel',
            callback: ($obj: MixerSource, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::can-decibel', ...args: any[]): void;
        connect(
            sigName: 'notify::card-index',
            callback: ($obj: MixerSource, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::card-index',
            callback: ($obj: MixerSource, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::card-index', ...args: any[]): void;
        connect(
            sigName: 'notify::channel-map',
            callback: ($obj: MixerSource, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::channel-map',
            callback: ($obj: MixerSource, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::channel-map', ...args: any[]): void;
        connect(
            sigName: 'notify::decibel',
            callback: ($obj: MixerSource, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::decibel',
            callback: ($obj: MixerSource, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::decibel', ...args: any[]): void;
        connect(
            sigName: 'notify::description',
            callback: ($obj: MixerSource, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::description',
            callback: ($obj: MixerSource, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::description', ...args: any[]): void;
        connect(
            sigName: 'notify::form-factor',
            callback: ($obj: MixerSource, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::form-factor',
            callback: ($obj: MixerSource, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::form-factor', ...args: any[]): void;
        connect(
            sigName: 'notify::icon-name',
            callback: ($obj: MixerSource, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::icon-name',
            callback: ($obj: MixerSource, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::icon-name', ...args: any[]): void;
        connect(
            sigName: 'notify::id',
            callback: ($obj: MixerSource, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::id',
            callback: ($obj: MixerSource, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::id', ...args: any[]): void;
        connect(
            sigName: 'notify::index',
            callback: ($obj: MixerSource, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::index',
            callback: ($obj: MixerSource, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::index', ...args: any[]): void;
        connect(
            sigName: 'notify::is-event-stream',
            callback: ($obj: MixerSource, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::is-event-stream',
            callback: ($obj: MixerSource, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::is-event-stream', ...args: any[]): void;
        connect(
            sigName: 'notify::is-muted',
            callback: ($obj: MixerSource, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::is-muted',
            callback: ($obj: MixerSource, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::is-muted', ...args: any[]): void;
        connect(
            sigName: 'notify::is-virtual',
            callback: ($obj: MixerSource, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::is-virtual',
            callback: ($obj: MixerSource, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::is-virtual', ...args: any[]): void;
        connect(
            sigName: 'notify::name',
            callback: ($obj: MixerSource, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::name',
            callback: ($obj: MixerSource, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::name', ...args: any[]): void;
        connect(
            sigName: 'notify::pa-context',
            callback: ($obj: MixerSource, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::pa-context',
            callback: ($obj: MixerSource, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::pa-context', ...args: any[]): void;
        connect(
            sigName: 'notify::port',
            callback: ($obj: MixerSource, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::port',
            callback: ($obj: MixerSource, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::port', ...args: any[]): void;
        connect(
            sigName: 'notify::state',
            callback: ($obj: MixerSource, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::state',
            callback: ($obj: MixerSource, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::state', ...args: any[]): void;
        connect(
            sigName: 'notify::sysfs-path',
            callback: ($obj: MixerSource, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::sysfs-path',
            callback: ($obj: MixerSource, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::sysfs-path', ...args: any[]): void;
        connect(
            sigName: 'notify::volume',
            callback: ($obj: MixerSource, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::volume',
            callback: ($obj: MixerSource, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::volume', ...args: any[]): void;
        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class MixerSource extends MixerStream {
        // Own properties of Gvc-1.0.Gvc.MixerSource

        static name: string;
        static $gtype: GObject.GType<MixerSource>;

        // Constructors of Gvc-1.0.Gvc.MixerSource

        constructor(config?: MixerSource.ConstructorProperties);
        _init(config?: MixerSource.ConstructorProperties): void;
    }

    module MixerSourceOutput {
        // Constructor properties interface

        interface ConstructorProperties
            extends MixerStream.ConstructorProperties {}
    }

    interface MixerSourceOutput {
        // Own fields of Gvc-1.0.Gvc.MixerSourceOutput

        parent: MixerStream & GObject.Object;
        priv: any;

        // Class property signals of Gvc-1.0.Gvc.MixerSourceOutput

        connect(
            sigName: 'notify::application-id',
            callback: (
                $obj: MixerSourceOutput,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::application-id',
            callback: (
                $obj: MixerSourceOutput,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::application-id', ...args: any[]): void;
        connect(
            sigName: 'notify::can-decibel',
            callback: (
                $obj: MixerSourceOutput,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::can-decibel',
            callback: (
                $obj: MixerSourceOutput,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::can-decibel', ...args: any[]): void;
        connect(
            sigName: 'notify::card-index',
            callback: (
                $obj: MixerSourceOutput,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::card-index',
            callback: (
                $obj: MixerSourceOutput,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::card-index', ...args: any[]): void;
        connect(
            sigName: 'notify::channel-map',
            callback: (
                $obj: MixerSourceOutput,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::channel-map',
            callback: (
                $obj: MixerSourceOutput,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::channel-map', ...args: any[]): void;
        connect(
            sigName: 'notify::decibel',
            callback: (
                $obj: MixerSourceOutput,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::decibel',
            callback: (
                $obj: MixerSourceOutput,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::decibel', ...args: any[]): void;
        connect(
            sigName: 'notify::description',
            callback: (
                $obj: MixerSourceOutput,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::description',
            callback: (
                $obj: MixerSourceOutput,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::description', ...args: any[]): void;
        connect(
            sigName: 'notify::form-factor',
            callback: (
                $obj: MixerSourceOutput,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::form-factor',
            callback: (
                $obj: MixerSourceOutput,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::form-factor', ...args: any[]): void;
        connect(
            sigName: 'notify::icon-name',
            callback: (
                $obj: MixerSourceOutput,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::icon-name',
            callback: (
                $obj: MixerSourceOutput,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::icon-name', ...args: any[]): void;
        connect(
            sigName: 'notify::id',
            callback: (
                $obj: MixerSourceOutput,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::id',
            callback: (
                $obj: MixerSourceOutput,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::id', ...args: any[]): void;
        connect(
            sigName: 'notify::index',
            callback: (
                $obj: MixerSourceOutput,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::index',
            callback: (
                $obj: MixerSourceOutput,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::index', ...args: any[]): void;
        connect(
            sigName: 'notify::is-event-stream',
            callback: (
                $obj: MixerSourceOutput,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::is-event-stream',
            callback: (
                $obj: MixerSourceOutput,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::is-event-stream', ...args: any[]): void;
        connect(
            sigName: 'notify::is-muted',
            callback: (
                $obj: MixerSourceOutput,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::is-muted',
            callback: (
                $obj: MixerSourceOutput,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::is-muted', ...args: any[]): void;
        connect(
            sigName: 'notify::is-virtual',
            callback: (
                $obj: MixerSourceOutput,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::is-virtual',
            callback: (
                $obj: MixerSourceOutput,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::is-virtual', ...args: any[]): void;
        connect(
            sigName: 'notify::name',
            callback: (
                $obj: MixerSourceOutput,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::name',
            callback: (
                $obj: MixerSourceOutput,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::name', ...args: any[]): void;
        connect(
            sigName: 'notify::pa-context',
            callback: (
                $obj: MixerSourceOutput,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::pa-context',
            callback: (
                $obj: MixerSourceOutput,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::pa-context', ...args: any[]): void;
        connect(
            sigName: 'notify::port',
            callback: (
                $obj: MixerSourceOutput,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::port',
            callback: (
                $obj: MixerSourceOutput,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::port', ...args: any[]): void;
        connect(
            sigName: 'notify::state',
            callback: (
                $obj: MixerSourceOutput,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::state',
            callback: (
                $obj: MixerSourceOutput,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::state', ...args: any[]): void;
        connect(
            sigName: 'notify::sysfs-path',
            callback: (
                $obj: MixerSourceOutput,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::sysfs-path',
            callback: (
                $obj: MixerSourceOutput,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::sysfs-path', ...args: any[]): void;
        connect(
            sigName: 'notify::volume',
            callback: (
                $obj: MixerSourceOutput,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        connect_after(
            sigName: 'notify::volume',
            callback: (
                $obj: MixerSourceOutput,
                pspec: GObject.ParamSpec
            ) => void
        ): number;
        emit(sigName: 'notify::volume', ...args: any[]): void;
        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class MixerSourceOutput extends MixerStream {
        // Own properties of Gvc-1.0.Gvc.MixerSourceOutput

        static name: string;
        static $gtype: GObject.GType<MixerSourceOutput>;

        // Constructors of Gvc-1.0.Gvc.MixerSourceOutput

        constructor(config?: MixerSourceOutput.ConstructorProperties);
        _init(config?: MixerSourceOutput.ConstructorProperties): void;
    }

    module MixerStream {
        // Constructor properties interface

        interface ConstructorProperties
            extends GObject.Object.ConstructorProperties {
            // Own constructor properties of Gvc-1.0.Gvc.MixerStream

            application_id?: string | null;
            can_decibel?: boolean | null;
            card_index?: number | null;
            channel_map?: ChannelMap | null;
            decibel?: number | null;
            description?: string | null;
            form_factor?: string | null;
            icon_name?: string | null;
            id?: number | null;
            index?: number | null;
            is_event_stream?: boolean | null;
            is_muted?: boolean | null;
            is_virtual?: boolean | null;
            name?: string | null;
            pa_context?: any | null;
            port?: string | null;
            state?: MixerStreamState | null;
            sysfs_path?: string | null;
            volume?: number | null;
        }
    }

    interface MixerStream {
        // Own properties of Gvc-1.0.Gvc.MixerStream

        application_id: string | null;
        can_decibel: boolean;
        card_index: number;
        channel_map: ChannelMap;
        decibel: number;
        description: string | null;
        form_factor: string | null;
        icon_name: string | null;
        readonly id: number;
        readonly index: number;
        is_event_stream: boolean;
        is_muted: boolean;
        is_virtual: boolean;
        name: string | null;
        readonly pa_context: any;
        port: string | null;
        state: MixerStreamState;
        sysfs_path: string | null;
        volume: number;

        // Own fields of Gvc-1.0.Gvc.MixerStream

        parent: GObject.Object;
        priv: MixerStreamPrivate;

        // Owm methods of Gvc-1.0.Gvc.MixerStream

        change_is_muted(is_muted: boolean): boolean;
        change_port(port: string | null): boolean;
        get_application_id(): string | null;
        get_base_volume(): number;
        get_can_decibel(): boolean;
        get_card_index(): number;
        get_channel_map(): ChannelMap;
        get_decibel(): number;
        get_description(): string | null;
        get_form_factor(): string | null;
        get_gicon(): Gio.Icon;
        get_icon_name(): string | null;
        get_id(): number;
        get_index(): number;
        get_is_muted(): boolean;
        get_name(): string | null;
        get_port(): MixerStreamPort;
        get_ports(): MixerStreamPort[];
        get_state(): MixerStreamState;
        get_sysfs_path(): string | null;
        get_volume(): number;
        is_running(): boolean;
        push_volume(): boolean;
        set_application_id(application_id: string | null): boolean;
        set_base_volume(base_volume: number): boolean;
        set_can_decibel(can_decibel: boolean): boolean;
        set_card_index(card_index: number): boolean;
        set_decibel(db: number): boolean;
        set_description(description: string | null): boolean;
        set_form_factor(form_factor: string | null): boolean;
        set_icon_name(name: string | null): boolean;
        set_is_event_stream(is_event_stream: boolean): boolean;
        set_is_muted(is_muted: boolean): boolean;
        set_is_virtual(is_event_stream: boolean): boolean;
        set_name(name: string | null): boolean;
        set_port(port: string | null): boolean;
        set_ports(ports: MixerStreamPort[]): boolean;
        set_state(state: MixerStreamState): boolean;
        set_sysfs_path(sysfs_path: string | null): boolean;
        set_volume(volume: number): boolean;

        // Own virtual methods of Gvc-1.0.Gvc.MixerStream

        vfunc_change_is_muted(is_muted: boolean): boolean;
        vfunc_change_port(port: string | null): boolean;
        vfunc_push_volume(operation: any | null): boolean;

        // Class property signals of Gvc-1.0.Gvc.MixerStream

        connect(
            sigName: 'notify::application-id',
            callback: ($obj: MixerStream, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::application-id',
            callback: ($obj: MixerStream, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::application-id', ...args: any[]): void;
        connect(
            sigName: 'notify::can-decibel',
            callback: ($obj: MixerStream, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::can-decibel',
            callback: ($obj: MixerStream, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::can-decibel', ...args: any[]): void;
        connect(
            sigName: 'notify::card-index',
            callback: ($obj: MixerStream, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::card-index',
            callback: ($obj: MixerStream, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::card-index', ...args: any[]): void;
        connect(
            sigName: 'notify::channel-map',
            callback: ($obj: MixerStream, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::channel-map',
            callback: ($obj: MixerStream, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::channel-map', ...args: any[]): void;
        connect(
            sigName: 'notify::decibel',
            callback: ($obj: MixerStream, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::decibel',
            callback: ($obj: MixerStream, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::decibel', ...args: any[]): void;
        connect(
            sigName: 'notify::description',
            callback: ($obj: MixerStream, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::description',
            callback: ($obj: MixerStream, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::description', ...args: any[]): void;
        connect(
            sigName: 'notify::form-factor',
            callback: ($obj: MixerStream, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::form-factor',
            callback: ($obj: MixerStream, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::form-factor', ...args: any[]): void;
        connect(
            sigName: 'notify::icon-name',
            callback: ($obj: MixerStream, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::icon-name',
            callback: ($obj: MixerStream, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::icon-name', ...args: any[]): void;
        connect(
            sigName: 'notify::id',
            callback: ($obj: MixerStream, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::id',
            callback: ($obj: MixerStream, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::id', ...args: any[]): void;
        connect(
            sigName: 'notify::index',
            callback: ($obj: MixerStream, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::index',
            callback: ($obj: MixerStream, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::index', ...args: any[]): void;
        connect(
            sigName: 'notify::is-event-stream',
            callback: ($obj: MixerStream, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::is-event-stream',
            callback: ($obj: MixerStream, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::is-event-stream', ...args: any[]): void;
        connect(
            sigName: 'notify::is-muted',
            callback: ($obj: MixerStream, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::is-muted',
            callback: ($obj: MixerStream, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::is-muted', ...args: any[]): void;
        connect(
            sigName: 'notify::is-virtual',
            callback: ($obj: MixerStream, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::is-virtual',
            callback: ($obj: MixerStream, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::is-virtual', ...args: any[]): void;
        connect(
            sigName: 'notify::name',
            callback: ($obj: MixerStream, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::name',
            callback: ($obj: MixerStream, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::name', ...args: any[]): void;
        connect(
            sigName: 'notify::pa-context',
            callback: ($obj: MixerStream, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::pa-context',
            callback: ($obj: MixerStream, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::pa-context', ...args: any[]): void;
        connect(
            sigName: 'notify::port',
            callback: ($obj: MixerStream, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::port',
            callback: ($obj: MixerStream, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::port', ...args: any[]): void;
        connect(
            sigName: 'notify::state',
            callback: ($obj: MixerStream, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::state',
            callback: ($obj: MixerStream, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::state', ...args: any[]): void;
        connect(
            sigName: 'notify::sysfs-path',
            callback: ($obj: MixerStream, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::sysfs-path',
            callback: ($obj: MixerStream, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::sysfs-path', ...args: any[]): void;
        connect(
            sigName: 'notify::volume',
            callback: ($obj: MixerStream, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::volume',
            callback: ($obj: MixerStream, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::volume', ...args: any[]): void;
        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class MixerStream extends GObject.Object {
        // Own properties of Gvc-1.0.Gvc.MixerStream

        static name: string;
        static $gtype: GObject.GType<MixerStream>;

        // Constructors of Gvc-1.0.Gvc.MixerStream

        constructor(config?: MixerStream.ConstructorProperties);
        _init(config?: MixerStream.ConstructorProperties): void;
    }

    module MixerUIDevice {
        // Constructor properties interface

        interface ConstructorProperties
            extends GObject.Object.ConstructorProperties {
            // Own constructor properties of Gvc-1.0.Gvc.MixerUIDevice

            card?: any | null;
            description?: string | null;
            icon_name?: string | null;
            origin?: string | null;
            port_available?: boolean | null;
            port_name?: string | null;
            stream_id?: number | null;
            type?: number | null;
        }
    }

    interface MixerUIDevice {
        // Own properties of Gvc-1.0.Gvc.MixerUIDevice

        card: any;
        description: string | null;
        icon_name: string | null;
        origin: string | null;
        port_available: boolean;
        port_name: string | null;
        stream_id: number;
        type: number;

        // Own fields of Gvc-1.0.Gvc.MixerUIDevice

        parent_instance: GObject.Object;
        priv: MixerUIDevicePrivate;

        // Owm methods of Gvc-1.0.Gvc.MixerUIDevice

        get_active_profile(): string | null;
        get_best_profile(
            selected: string | null,
            current: string | null
        ): string | null;
        get_description(): string | null;
        get_gicon(): Gio.Icon;
        get_icon_name(): string | null;
        get_id(): number;
        get_matching_profile(profile: string | null): string | null;
        get_origin(): string | null;
        get_port(): string | null;
        get_profiles(): MixerCardProfile[];
        get_stream_id(): number;
        get_supported_profiles(): MixerCardProfile[];
        get_top_priority_profile(): string | null;
        get_user_preferred_profile(): string | null;
        has_ports(): boolean;
        invalidate_stream(): void;
        is_output(): boolean;
        /**
         * Assigns value to
         *  - device->priv->profiles (profiles to be added to combobox)
         *  - device->priv->supported_profiles (all profiles of this port)
         *  - device->priv->disable_profile_swapping (whether to show the combobox)
         *
         * This method attempts to reduce the list of profiles visible to the user by figuring out
         * from the context of that device (whether it's an input or an output) what profiles
         * actually provide an alternative.
         *
         * It does this by the following.
         *  - It ignores off profiles.
         *  - It takes the canonical name of the profile. That name is what you get when you
         *    ignore the other direction.
         *  - In the first iteration, it only adds the names of canonical profiles - i e
         *    when the other side is turned off.
         *  - Normally the first iteration covers all cases, but sometimes (e g bluetooth)
         *    it doesn't, so add other profiles whose canonical name isn't already added
         *    in a second iteration.
         * @param in_profiles a list of GvcMixerCardProfile
         */
        set_profiles(in_profiles: MixerCardProfile[]): void;
        set_user_preferred_profile(profile: string | null): void;
        should_profiles_be_hidden(): boolean;

        // Class property signals of Gvc-1.0.Gvc.MixerUIDevice

        connect(
            sigName: 'notify::card',
            callback: ($obj: MixerUIDevice, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::card',
            callback: ($obj: MixerUIDevice, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::card', ...args: any[]): void;
        connect(
            sigName: 'notify::description',
            callback: ($obj: MixerUIDevice, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::description',
            callback: ($obj: MixerUIDevice, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::description', ...args: any[]): void;
        connect(
            sigName: 'notify::icon-name',
            callback: ($obj: MixerUIDevice, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::icon-name',
            callback: ($obj: MixerUIDevice, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::icon-name', ...args: any[]): void;
        connect(
            sigName: 'notify::origin',
            callback: ($obj: MixerUIDevice, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::origin',
            callback: ($obj: MixerUIDevice, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::origin', ...args: any[]): void;
        connect(
            sigName: 'notify::port-available',
            callback: ($obj: MixerUIDevice, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::port-available',
            callback: ($obj: MixerUIDevice, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::port-available', ...args: any[]): void;
        connect(
            sigName: 'notify::port-name',
            callback: ($obj: MixerUIDevice, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::port-name',
            callback: ($obj: MixerUIDevice, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::port-name', ...args: any[]): void;
        connect(
            sigName: 'notify::stream-id',
            callback: ($obj: MixerUIDevice, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::stream-id',
            callback: ($obj: MixerUIDevice, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::stream-id', ...args: any[]): void;
        connect(
            sigName: 'notify::type',
            callback: ($obj: MixerUIDevice, pspec: GObject.ParamSpec) => void
        ): number;
        connect_after(
            sigName: 'notify::type',
            callback: ($obj: MixerUIDevice, pspec: GObject.ParamSpec) => void
        ): number;
        emit(sigName: 'notify::type', ...args: any[]): void;
        connect(sigName: string, callback: (...args: any[]) => void): number;
        connect_after(
            sigName: string,
            callback: (...args: any[]) => void
        ): number;
        emit(sigName: string, ...args: any[]): void;
        disconnect(id: number): void;
    }

    class MixerUIDevice extends GObject.Object {
        // Own properties of Gvc-1.0.Gvc.MixerUIDevice

        static name: string;
        static $gtype: GObject.GType<MixerUIDevice>;

        // Constructors of Gvc-1.0.Gvc.MixerUIDevice

        constructor(config?: MixerUIDevice.ConstructorProperties);
        _init(config?: MixerUIDevice.ConstructorProperties): void;
    }

    interface ChannelMapClass {
        // Own fields of Gvc-1.0.Gvc.ChannelMapClass

        parent_class: GObject.ObjectClass;
        volume_changed: (channel_map: ChannelMap, set: boolean) => void;
    }

    abstract class ChannelMapClass {
        // Own properties of Gvc-1.0.Gvc.ChannelMapClass

        static name: string;
    }

    interface ChannelMapPrivate {}

    class ChannelMapPrivate {
        // Own properties of Gvc-1.0.Gvc.ChannelMapPrivate

        static name: string;
    }

    interface MixerCardClass {
        // Own fields of Gvc-1.0.Gvc.MixerCardClass

        parent_class: GObject.ObjectClass;
    }

    abstract class MixerCardClass {
        // Own properties of Gvc-1.0.Gvc.MixerCardClass

        static name: string;
    }

    interface MixerCardPort {
        // Own fields of Gvc-1.0.Gvc.MixerCardPort

        port: string | null;
        human_port: string | null;
        icon_name: string | null;
        priority: number;
        available: number;
        direction: number;
        profiles: any[];
    }

    class MixerCardPort {
        // Own properties of Gvc-1.0.Gvc.MixerCardPort

        static name: string;
    }

    interface MixerCardPrivate {}

    class MixerCardPrivate {
        // Own properties of Gvc-1.0.Gvc.MixerCardPrivate

        static name: string;
    }

    interface MixerCardProfile {
        // Own fields of Gvc-1.0.Gvc.MixerCardProfile

        profile: string | null;
        human_profile: string | null;
        status: string | null;
        priority: number;
        n_sinks: number;
        n_sources: number;

        // Owm methods of Gvc-1.0.Gvc.MixerCardProfile

        compare(b: MixerCardProfile): number;
    }

    class MixerCardProfile {
        // Own properties of Gvc-1.0.Gvc.MixerCardProfile

        static name: string;
    }

    interface MixerControlClass {
        // Own fields of Gvc-1.0.Gvc.MixerControlClass

        parent_class: GObject.ObjectClass;
        state_changed: (
            control: MixerControl,
            new_state: MixerControlState
        ) => void;
        stream_added: (control: MixerControl, id: number) => void;
        stream_changed: (control: MixerControl, id: number) => void;
        stream_removed: (control: MixerControl, id: number) => void;
        card_added: (control: MixerControl, id: number) => void;
        card_removed: (control: MixerControl, id: number) => void;
        default_sink_changed: (control: MixerControl, id: number) => void;
        default_source_changed: (control: MixerControl, id: number) => void;
        active_output_update: (control: MixerControl, id: number) => void;
        active_input_update: (control: MixerControl, id: number) => void;
        output_added: (control: MixerControl, id: number) => void;
        input_added: (control: MixerControl, id: number) => void;
        output_removed: (control: MixerControl, id: number) => void;
        input_removed: (control: MixerControl, id: number) => void;
        audio_device_selection_needed: (
            control: MixerControl,
            id: number,
            show_dialog: boolean,
            choices: HeadsetPortChoice
        ) => void;
    }

    abstract class MixerControlClass {
        // Own properties of Gvc-1.0.Gvc.MixerControlClass

        static name: string;
    }

    interface MixerControlPrivate {}

    class MixerControlPrivate {
        // Own properties of Gvc-1.0.Gvc.MixerControlPrivate

        static name: string;
    }

    interface MixerEventRoleClass {
        // Own fields of Gvc-1.0.Gvc.MixerEventRoleClass

        parent_class: MixerStreamClass;
    }

    abstract class MixerEventRoleClass {
        // Own properties of Gvc-1.0.Gvc.MixerEventRoleClass

        static name: string;
    }

    interface MixerEventRolePrivate {}

    class MixerEventRolePrivate {
        // Own properties of Gvc-1.0.Gvc.MixerEventRolePrivate

        static name: string;
    }

    interface MixerSinkClass {
        // Own fields of Gvc-1.0.Gvc.MixerSinkClass

        parent_class: MixerStreamClass;
    }

    abstract class MixerSinkClass {
        // Own properties of Gvc-1.0.Gvc.MixerSinkClass

        static name: string;
    }

    interface MixerSinkInputClass {
        // Own fields of Gvc-1.0.Gvc.MixerSinkInputClass

        parent_class: MixerStreamClass;
    }

    abstract class MixerSinkInputClass {
        // Own properties of Gvc-1.0.Gvc.MixerSinkInputClass

        static name: string;
    }

    interface MixerSinkInputPrivate {}

    class MixerSinkInputPrivate {
        // Own properties of Gvc-1.0.Gvc.MixerSinkInputPrivate

        static name: string;
    }

    interface MixerSinkPrivate {}

    class MixerSinkPrivate {
        // Own properties of Gvc-1.0.Gvc.MixerSinkPrivate

        static name: string;
    }

    interface MixerSourceClass {
        // Own fields of Gvc-1.0.Gvc.MixerSourceClass

        parent_class: MixerStreamClass;
    }

    abstract class MixerSourceClass {
        // Own properties of Gvc-1.0.Gvc.MixerSourceClass

        static name: string;
    }

    interface MixerSourceOutputClass {
        // Own fields of Gvc-1.0.Gvc.MixerSourceOutputClass

        parent_class: MixerStreamClass;
    }

    abstract class MixerSourceOutputClass {
        // Own properties of Gvc-1.0.Gvc.MixerSourceOutputClass

        static name: string;
    }

    interface MixerSourceOutputPrivate {}

    class MixerSourceOutputPrivate {
        // Own properties of Gvc-1.0.Gvc.MixerSourceOutputPrivate

        static name: string;
    }

    interface MixerSourcePrivate {}

    class MixerSourcePrivate {
        // Own properties of Gvc-1.0.Gvc.MixerSourcePrivate

        static name: string;
    }

    interface MixerStreamClass {
        // Own fields of Gvc-1.0.Gvc.MixerStreamClass

        parent_class: GObject.ObjectClass;
        push_volume: (stream: MixerStream, operation: any | null) => boolean;
        change_is_muted: (stream: MixerStream, is_muted: boolean) => boolean;
        change_port: (stream: MixerStream, port: string | null) => boolean;
    }

    abstract class MixerStreamClass {
        // Own properties of Gvc-1.0.Gvc.MixerStreamClass

        static name: string;
    }

    interface MixerStreamPort {
        // Own fields of Gvc-1.0.Gvc.MixerStreamPort

        port: string | null;
        human_port: string | null;
        priority: number;
        available: boolean;
    }

    class MixerStreamPort {
        // Own properties of Gvc-1.0.Gvc.MixerStreamPort

        static name: string;
    }

    interface MixerStreamPrivate {}

    class MixerStreamPrivate {
        // Own properties of Gvc-1.0.Gvc.MixerStreamPrivate

        static name: string;
    }

    interface MixerUIDeviceClass {
        // Own fields of Gvc-1.0.Gvc.MixerUIDeviceClass

        parent_class: GObject.ObjectClass;
    }

    abstract class MixerUIDeviceClass {
        // Own properties of Gvc-1.0.Gvc.MixerUIDeviceClass

        static name: string;
    }

    interface MixerUIDevicePrivate {}

    class MixerUIDevicePrivate {
        // Own properties of Gvc-1.0.Gvc.MixerUIDevicePrivate

        static name: string;
    }

    /**
     * Name of the imported GIR library
     * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
     */
    const __name__: string;
    /**
     * Version of the imported GIR library
     * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
     */
    const __version__: string;
}

export default Gvc;
// END
