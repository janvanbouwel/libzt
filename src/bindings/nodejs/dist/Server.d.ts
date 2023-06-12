/// <reference types="node" />
import { EventEmitter } from "events";
import { Socket } from "./Socket";
export interface ServerEvents {
    "connection": (socket: Socket) => void;
    "listening": () => void;
    "error": (err: Error) => void;
}
export declare interface Server {
    on<E extends keyof ServerEvents>(event: E, listener: ServerEvents[E]): this;
    once<E extends keyof ServerEvents>(event: E, listener: ServerEvents[E]): this;
    emit<E extends keyof ServerEvents>(event: E, ...args: Parameters<ServerEvents[E]>): boolean;
}
export declare class Server extends EventEmitter {
    private fd;
    private listening;
    constructor(options: Record<string, never>, connectionListener?: ServerEvents["connection"]);
    listen(port: number, host?: string, callback?: ServerEvents["listening"]): void;
    address(): {};
}
