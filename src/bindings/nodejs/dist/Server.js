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
exports.Server = void 0;
var events_1 = require("events");
var zts_1 = require("./zts");
var Socket_1 = require("./Socket");
var net_1 = require("net");
var Server = /** @class */ (function (_super) {
    __extends(Server, _super);
    function Server(options, connectionListener) {
        var _this = _super.call(this) || this;
        _this.listening = false;
        if (connectionListener)
            _this.on("connection", connectionListener);
        return _this;
    }
    Server.prototype.listen = function (port, host, callback) {
        var _this = this;
        if (host === void 0) { host = "::"; }
        if (callback)
            this.on("listening", callback);
        this.fd = zts_1.zts.bsd_socket((0, net_1.isIPv6)(host) ? zts_1.defs.ZTS_AF_INET6 : zts_1.defs.ZTS_AF_INET, zts_1.defs.ZTS_SOCK_STREAM, 0);
        console.log(this.fd);
        zts_1.zts.bind(this.fd, host, port);
        zts_1.zts.listen(this.fd, 511);
        this.listening = true;
        process.nextTick(function () { return _this.emit("listening"); });
        var accept = function () {
            zts_1.zts.accept(_this.fd, function (err, fd) {
                if (err) {
                    _this.emit("error", err);
                    return;
                }
                var s = new Socket_1.Socket(fd);
                s.emit("connect");
                process.nextTick(function () { return _this.emit("connection", s); });
                if (_this.listening)
                    accept();
            });
        };
        accept();
    };
    Server.prototype.address = function () {
        try {
            return zts_1.zts.getsockname(this.fd);
        }
        catch (error) {
            return {};
        }
    };
    return Server;
}(events_1.EventEmitter));
exports.Server = Server;
