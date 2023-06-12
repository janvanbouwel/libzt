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
exports.connect = exports.Socket = void 0;
var zts_1 = require("./zts");
var stream_1 = require("stream");
var net_1 = require("net");
var Socket = /** @class */ (function (_super) {
    __extends(Socket, _super);
    function Socket(fd) {
        var _this = _super.call(this, {
            decodeStrings: true
        }) || this;
        _this.reading = false;
        _this.fd = fd;
        _this.once("connect", function () {
            var sockname = zts_1.zts.getsockname(_this.fd);
            _this.localAddress = sockname.address;
            _this.localPort = sockname.port;
            var peername = zts_1.zts.getpeername(_this.fd);
            _this.remoteAddress = peername.address;
            _this.remotePort = peername.port;
        });
        return _this;
    }
    Socket.prototype._write = function (chunk, encoding, callback) {
        if (!(chunk instanceof Buffer)) {
            callback(Error("Why was this not a buffer?"));
            return;
        }
        zts_1.zts.bsd_send(this.fd, chunk, 0, function (err) {
            // if(err) {
            //     if(this.timeout && err.code === errors.ZTS_ERR_SOCKET && err.errno === errnos.ZTS_EAGAIN) {
            //         process.nextTick(()=>this.emit("timeout"));
            //         callback();
            //         return;
            //     }
            // }
            callback(err);
        });
    };
    Socket.prototype._final = function (callback) {
        zts_1.zts.shutdown_wr(this.fd);
        callback();
    };
    Socket.prototype._read = function (size) {
        var _this = this;
        if (this.reading)
            return;
        this.reading = true;
        zts_1.zts.bsd_recv(this.fd, size, 0, function (err, data) {
            _this.reading = false;
            if (err) {
                if (_this.timeout && err.code === zts_1.errors.ZTS_ERR_SOCKET && err.errno === zts_1.errnos.ZTS_EAGAIN) {
                    process.nextTick(function () { return _this.emit("timeout"); });
                    return;
                }
                console.log(err);
                _this.destroy(err);
                return;
            }
            if (data.length === 0) {
                _this.push(null);
                return;
            }
            var res = _this.push(data);
            if (res)
                _this._read(size);
        });
    };
    Socket.prototype._destroy = function (error, callback) {
        zts_1.zts.bsd_close(this.fd);
        callback(error);
    };
    Socket.prototype.address = function () {
        try {
            return zts_1.zts.getsockname(this.fd);
        }
        catch (error) {
            return {};
        }
    };
    Socket.prototype.setTimeout = function (timeout, callback) {
        if (callback)
            this.once("timeout", callback);
        this.timeout = timeout;
        zts_1.zts.set_recv_timeout(this.fd, Math.floor(timeout / 1000), (timeout % 1000) * 1000);
        zts_1.zts.set_send_timeout(this.fd, Math.floor(timeout / 1000), (timeout % 1000) * 1000);
    };
    return Socket;
}(stream_1.Duplex));
exports.Socket = Socket;
function connect(host, port) {
    var fd = zts_1.zts.bsd_socket((0, net_1.isIPv6)(host) ? zts_1.defs.ZTS_AF_INET6 : zts_1.defs.ZTS_AF_INET, zts_1.defs.ZTS_SOCK_STREAM, 0);
    console.log(fd);
    var s = new Socket(fd);
    zts_1.zts.connect(fd, host, port, 0, function (err) {
        if (err) {
            s.destroy(err);
            return;
        }
        s.emit("connect");
    });
    return s;
}
exports.connect = connect;
