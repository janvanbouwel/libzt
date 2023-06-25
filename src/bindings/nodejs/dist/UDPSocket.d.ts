/// <reference types="node" />
/// <reference types="node" />
import { EventEmitter } from "events";
import { ZtsError } from "./zts";
interface UDPSocketEvents {
    "close": () => void;
    "message": (msg: Buffer, rinfo: {
        address: string;
        family: "udp4" | "udp6";
        port: number;
        size: number;
    }) => void;
    "listening": () => void;
    "error": (err: Error) => void;
}
declare interface UDPSocket {
    on<E extends keyof UDPSocketEvents>(event: E, listener: UDPSocketEvents[E]): this;
    once<E extends keyof UDPSocketEvents>(event: E, listener: UDPSocketEvents[E]): this;
    emit<E extends keyof UDPSocketEvents>(event: E, ...args: Parameters<UDPSocketEvents[E]>): boolean;
}
declare class UDPSocket extends EventEmitter {
    private fd;
    private ipv6;
    private bound;
    private connection;
    constructor(ipv6: boolean);
    address(): {
        address: string;
        port: number;
        family: "udp4" | "udp6";
    };
    bind(port?: number, address?: string, callback?: UDPSocketEvents["listening"]): void;
    private _recv;
    private _err;
    send(msg: Buffer, port?: number, address?: string, callback?: (err?: ZtsError) => void): void;
}
export declare function createSocket(options: {
    type: "udp4" | "udp6";
}, callback?: UDPSocketEvents["message"]): UDPSocket;
export {};
