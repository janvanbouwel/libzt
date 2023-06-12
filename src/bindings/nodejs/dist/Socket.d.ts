/// <reference types="node" />
/// <reference types="node" />
import { ZtsError } from "./zts";
import { Duplex } from "stream";
export interface SocketEvents {
    "connect": () => void;
    "timeout": () => void;
    "error": (err: ZtsError) => void;
    "data": (data: Buffer) => void;
}
export declare interface Socket {
    on<E extends keyof SocketEvents>(event: E, listener: SocketEvents[E]): this;
    once<E extends keyof SocketEvents>(event: E, listener: SocketEvents[E]): this;
    emit<E extends keyof SocketEvents>(event: E, ...args: Parameters<SocketEvents[E]>): boolean;
}
export declare class Socket extends Duplex {
    private fd;
    private reading;
    localAddress?: string;
    localPort?: number;
    remoteAddress?: string;
    remotePort?: number;
    timeout?: number;
    constructor(fd: number);
    _write(chunk: unknown, encoding: BufferEncoding, callback: (error?: Error) => void): void;
    _final(callback: (error?: Error) => void): void;
    _read(size: number): void;
    _destroy(error: Error, callback: (error: Error) => void): void;
    address(): {};
    setTimeout(timeout: number, callback?: () => void): void;
}
export declare function connect(host: string, port: number): Socket;
