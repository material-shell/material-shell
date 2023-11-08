import type GObject from './gobject-2.0.js';

export const programInvocationName: string;
export const version: number;
export const programPath: string | null;
/** Equal to ARGV */
export const programArgs: string[];
export function exit(code: number): void;
export function addressOfGObject(o: GObject.Object): object;
export function addressOf(o: any): object;
/** Runs the garbage collector */
export function gc(): void;
export function refcount(o: GObject.Object): number;
export function dumpHeap(path: string): void;
export function dumpMemoryInfo(path: string): void;

declare const System: {
    programInvocationName: typeof programInvocationName;
    version: typeof version;
    programPath: typeof programPath;
    programArgs: typeof programArgs;
    exit: typeof exit;
    addressOfGObject: typeof addressOfGObject;
    addressOf: typeof addressOf;
    gc: typeof gc;
    refcount: typeof refcount;
    dumpHeap: typeof dumpHeap;
    dumpMemoryInfo: typeof dumpMemoryInfo;
};

export default System;
