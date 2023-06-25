"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSocket = void 0;
var events_1 = require("events");
var zts_1 = require("./zts");
var defs_1 = require("./defs");
var net_1 = require("net");
var UDPSocket = /** @class */ (function (_super) {
    __extends(UDPSocket, _super);
    function UDPSocket(ipv6) {
        var _this = _super.call(this) || this;
        _this.bound = false;
        _this.connection = { connected: false };
        _this.ipv6 = ipv6;
        return _this;
    }
    UDPSocket.prototype.address = function () {
        if (!this.bound)
            throw (Error("Socket not connected"));
        var sname = zts_1.zts.getsockname(this.fd);
        return { address: sname.address, port: sname.port, family: this.ipv6 ? "udp6" : "udp4" };
    };
    UDPSocket.prototype.bind = function (port, address, callback) {
        var _this = this;
        if (this.bound)
            throw Error("UDPSocket already bound");
        if (callback)
            this.once("listening", callback);
        if (!address)
            address = this.ipv6 ? "::0" : "0.0.0.0";
        if (!port)
            port = 0;
        this.fd = zts_1.zts.bsd_socket(this.ipv6 ? defs_1.ZTS_AF_INET6 : defs_1.ZTS_AF_INET, defs_1.ZTS_SOCK_DGRAM, 0);
        zts_1.zts.bind(this.fd, address, port);
        this.bound = true;
        process.nextTick(function () { return _this.emit("listening"); });
        this._recv();
    };
    UDPSocket.prototype._recv = function () {
        var _this = this;
        zts_1.zts.bsd_recvfrom(this.fd, 16384, 0, function (err, data, address, port) {
            if (err)
                return _this._err(err);
            _this._recv();
            _this.emit("message", data, { address: address, family: (0, net_1.isIPv6)(address) ? "udp6" : "udp4", port: port, size: data.length });
        });
    };
    UDPSocket.prototype._err = function (err) {
        if (!this.emit("error", err)) {
            throw (err);
        }
    };
    UDPSocket.prototype.send = function (msg, port, address, callback) {
        var _this = this;
        var handleError = function (err) {
            if (callback)
                callback(err);
            else
                _this._err(err);
        };
        if (!this.bound)
            this.bind();
        if (this.connection.connected) {
            address = this.connection.address;
            port = this.connection.port;
        }
        else {
            if (!port)
                return handleError(Error("Port not specified on send of unconnected UDP Socket"));
            if (!address)
                address = this.ipv6 ? "::1" : "127.0.0.1";
        }
        zts_1.zts.bsd_sendto(this.fd, msg, 0, address, port, function (err) {
            if (err)
                return handleError(err);
            if (callback)
                callback();
        });
    };
    return UDPSocket;
}(events_1.EventEmitter));
function createSocket(options, callback) {
    var ipv6 = options.type === "udp6";
    var s = new UDPSocket(ipv6);
    if (callback)
        s.on("message", callback);
    return s;
}
exports.createSocket = createSocket;
