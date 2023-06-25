"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var promises_1 = require("timers/promises");
var index_1 = require("./index");
var Server_1 = require("./Server");
var Socket_1 = require("./Socket");
var zts_1 = require("./zts");
var UDPSocket_1 = require("./UDPSocket");
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var protocol, server, port, host, nwid, s_1, s, msg, server_1, s_2, i_1;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    protocol = process.argv[2];
                    server = process.argv[3] === "server";
                    port = parseInt(process.argv[4]);
                    host = process.argv[5];
                    (0, index_1.init)("id/" + (server ? "server" : "client"));
                    _a.label = 1;
                case 1:
                    if (!!zts_1.zts.node_is_online()) return [3 /*break*/, 3];
                    return [4 /*yield*/, (0, promises_1.setTimeout)(50)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 1];
                case 3:
                    nwid = BigInt("0xff0000ffff000000");
                    // 40 node id + 24 net id
                    console.log(nwid.toString(16));
                    zts_1.zts.net_join(nwid);
                    _a.label = 4;
                case 4:
                    if (!!zts_1.zts.net_transport_is_ready(nwid)) return [3 /*break*/, 6];
                    return [4 /*yield*/, (0, promises_1.setTimeout)(50)];
                case 5:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 6:
                    try {
                        console.log(zts_1.zts.addr_get_str(nwid, false));
                    }
                    catch (error) {
                        console.log(error.toString());
                    }
                    try {
                        console.log(zts_1.zts.addr_get_str(nwid, true));
                    }
                    catch (error) {
                        console.log(error.toString());
                    }
                    if (!(protocol === "udp")) return [3 /*break*/, 11];
                    if (!server) return [3 /*break*/, 7];
                    s_1 = (0, UDPSocket_1.createSocket)({ type: "udp6" }, function (msg, rinfo) {
                        console.log("".concat(msg));
                        console.log(rinfo);
                        s_1.send(msg, rinfo.port, rinfo.address);
                    });
                    s_1.bind(port);
                    console.log(s_1.address());
                    return [3 /*break*/, 10];
                case 7:
                    s = (0, UDPSocket_1.createSocket)({ type: "udp6" }, function (msg, rinfo) {
                        console.log("".concat(msg));
                        console.log(rinfo);
                    });
                    s.on("error", function (err) {
                        console.log(err);
                    });
                    s.bind(port);
                    console.log(s.address());
                    _a.label = 8;
                case 8:
                    if (!true) return [3 /*break*/, 10];
                    console.log("sending");
                    msg = Buffer.from("abcdefg");
                    s.send(msg, port, host, function () { return console.log("sent"); });
                    return [4 /*yield*/, (0, promises_1.setTimeout)(1000)];
                case 9:
                    _a.sent();
                    return [3 /*break*/, 8];
                case 10: return [3 /*break*/, 12];
                case 11:
                    if (protocol === "tcp") {
                        if (server) {
                            console.log("starting server");
                            server_1 = new Server_1.Server({}, function (socket) {
                                console.log("new connection ".concat(socket.remoteAddress));
                                socket.on("data", function (data) {
                                    console.log("".concat(data));
                                    socket.write(data);
                                });
                                socket.on("error", function () { return console.log("error"); });
                            });
                            server_1.listen(port, "::", function () {
                                console.log(server_1.address());
                                console.log("listening");
                            });
                            server_1.on("error", function (err) { return console.log(err); });
                        }
                        else {
                            s_2 = (0, Socket_1.connect)(host, port);
                            i_1 = 0;
                            // s.setTimeout(1000);
                            s_2.on("connect", function () {
                                console.log("connected");
                                s_2.write(Buffer.from("ping" + i_1));
                                i_1++;
                            });
                            s_2.on("data", function (data) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            console.log("".concat(data));
                                            return [4 /*yield*/, (0, promises_1.setTimeout)(100)];
                                        case 1:
                                            _a.sent();
                                            s_2.write(Buffer.from("ping" + i_1));
                                            i_1++;
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                            s_2.on("error", function (err) { return console.log(err); });
                        }
                    }
                    _a.label = 12;
                case 12: return [2 /*return*/];
            }
        });
    });
}
main();
