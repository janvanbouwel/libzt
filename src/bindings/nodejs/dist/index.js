"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
var zts_1 = require("./zts");
function init(path) {
    zts_1.zts.init_from_storage(path);
    zts_1.zts.init_set_event_handler(function (ev) { return console.log(ev); });
    zts_1.zts.node_start();
}
exports.init = init;
