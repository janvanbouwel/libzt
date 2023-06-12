"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defs = exports.errnos = exports.events = exports.errors = exports.zts = void 0;
// eslint-disable-next-line @typescript-eslint/no-var-requires
exports.zts = require("../build/Release/zts");
var errors;
(function (errors) {
    /** No ZtsError */
    errors[errors["ZTS_ERR_OK"] = 0] = "ZTS_ERR_OK";
    /** Socket ZtsError, see `zts_errno` */
    errors[errors["ZTS_ERR_SOCKET"] = -1] = "ZTS_ERR_SOCKET";
    /** This operation is not allowed at this time. Or possibly the node hasn't been started */
    errors[errors["ZTS_ERR_SERVICE"] = -2] = "ZTS_ERR_SERVICE";
    /** Invalid argument */
    errors[errors["ZTS_ERR_ARG"] = -3] = "ZTS_ERR_ARG";
    /** No result (not necessarily an ZtsError) */
    errors[errors["ZTS_ERR_NO_RESULT"] = -4] = "ZTS_ERR_NO_RESULT";
    /** Consider filing a bug report */
    errors[errors["ZTS_ERR_GENERAL"] = -5] = "ZTS_ERR_GENERAL";
})(errors || (exports.errors = errors = {}));
var events;
(function (events) {
    /**
     * Node has been initialized
     *
     * This is the first event generated, and is always sent. It may occur
     * before node's constructor returns.
     *
     */
    events[events["ZTS_EVENT_NODE_UP"] = 200] = "ZTS_EVENT_NODE_UP";
    /**
     * Node is online -- at least one upstream node appears reachable
     *
     */
    events[events["ZTS_EVENT_NODE_ONLINE"] = 201] = "ZTS_EVENT_NODE_ONLINE";
    /**
     * Node is offline -- network does not seem to be reachable by any available
     * strategy
     *
     */
    events[events["ZTS_EVENT_NODE_OFFLINE"] = 202] = "ZTS_EVENT_NODE_OFFLINE";
    /**
     * Node is shutting down
     *
     * This is generated within Node's destructor when it is being shut down.
     * It's done for convenience, since cleaning up other state in the event
     * handler may appear more idiomatic.
     *
     */
    events[events["ZTS_EVENT_NODE_DOWN"] = 203] = "ZTS_EVENT_NODE_DOWN";
    /**
     * A fatal ZtsError has occurred. One possible reason is:
     *
     * Your identity has collided with another node's ZeroTier address
     *
     * This happens if two different public keys both hash (via the algorithm
     * in Identity::generate()) to the same 40-bit ZeroTier address.
     *
     * This is something you should "never" see, where "never" is defined as
     * once per 2^39 new node initializations / identity creations. If you do
     * see it, you're going to see it very soon after a node is first
     * initialized.
     *
     * This is reported as an event rather than a return code since it's
     * detected asynchronously via ZtsError messages from authoritative nodes.
     *
     * If this occurs, you must shut down and delete the node, delete the
     * identity.secret record/file from the data store, and restart to generate
     * a new identity. If you don't do this, you will not be able to communicate
     * with other nodes.
     *
     * We'd automate this process, but we don't think silently deleting
     * private keys or changing our address without telling the calling code
     * is good form. It violates the principle of least surprise.
     *
     * You can technically get away with not handling this, but we recommend
     * doing so in a mature reliable application. Besides, handling this
     * condition is a good way to make sure it never arises. It's like how
     * umbrellas prevent rain and smoke detectors prevent fires. They do, right?
     *
     * Meta-data: none
     */
    events[events["ZTS_EVENT_NODE_FATAL_ZtsError"] = 204] = "ZTS_EVENT_NODE_FATAL_ZtsError";
    /** Network ID does not correspond to a known network */
    events[events["ZTS_EVENT_NETWORK_NOT_FOUND"] = 210] = "ZTS_EVENT_NETWORK_NOT_FOUND";
    /** The version of ZeroTier inside libzt is too old */
    events[events["ZTS_EVENT_NETWORK_CLIENT_TOO_OLD"] = 211] = "ZTS_EVENT_NETWORK_CLIENT_TOO_OLD";
    /** The configuration for a network has been requested (no action needed) */
    events[events["ZTS_EVENT_NETWORK_REQ_CONFIG"] = 212] = "ZTS_EVENT_NETWORK_REQ_CONFIG";
    /** The node joined the network successfully (no action needed) */
    events[events["ZTS_EVENT_NETWORK_OK"] = 213] = "ZTS_EVENT_NETWORK_OK";
    /** The node is not allowed to join the network (you must authorize node) */
    events[events["ZTS_EVENT_NETWORK_ACCESS_DENIED"] = 214] = "ZTS_EVENT_NETWORK_ACCESS_DENIED";
    /** The node has received an IPv4 address from the network controller */
    events[events["ZTS_EVENT_NETWORK_READY_IP4"] = 215] = "ZTS_EVENT_NETWORK_READY_IP4";
    /** The node has received an IPv6 address from the network controller */
    events[events["ZTS_EVENT_NETWORK_READY_IP6"] = 216] = "ZTS_EVENT_NETWORK_READY_IP6";
    /** Deprecated */
    events[events["ZTS_EVENT_NETWORK_READY_IP4_IP6"] = 217] = "ZTS_EVENT_NETWORK_READY_IP4_IP6";
    /** Network controller is unreachable */
    events[events["ZTS_EVENT_NETWORK_DOWN"] = 218] = "ZTS_EVENT_NETWORK_DOWN";
    /** Network change received from controller */
    events[events["ZTS_EVENT_NETWORK_UPDATE"] = 219] = "ZTS_EVENT_NETWORK_UPDATE";
    /** TCP/IP stack (lwIP) is up (for debug purposes) */
    events[events["ZTS_EVENT_STACK_UP"] = 220] = "ZTS_EVENT_STACK_UP";
    /** TCP/IP stack (lwIP) id down (for debug purposes) */
    events[events["ZTS_EVENT_STACK_DOWN"] = 221] = "ZTS_EVENT_STACK_DOWN";
    /** lwIP netif up (for debug purposes) */
    events[events["ZTS_EVENT_NETIF_UP"] = 230] = "ZTS_EVENT_NETIF_UP";
    /** lwIP netif down (for debug purposes) */
    events[events["ZTS_EVENT_NETIF_DOWN"] = 231] = "ZTS_EVENT_NETIF_DOWN";
    /** lwIP netif removed (for debug purposes) */
    events[events["ZTS_EVENT_NETIF_REMOVED"] = 232] = "ZTS_EVENT_NETIF_REMOVED";
    /** lwIP netif link up (for debug purposes) */
    events[events["ZTS_EVENT_NETIF_LINK_UP"] = 233] = "ZTS_EVENT_NETIF_LINK_UP";
    /** lwIP netif link down (for debug purposes) */
    events[events["ZTS_EVENT_NETIF_LINK_DOWN"] = 234] = "ZTS_EVENT_NETIF_LINK_DOWN";
    /** A direct P2P path to peer is known */
    events[events["ZTS_EVENT_PEER_DIRECT"] = 240] = "ZTS_EVENT_PEER_DIRECT";
    /** A direct P2P path to peer is NOT known. Traffic is now relayed  */
    events[events["ZTS_EVENT_PEER_RELAY"] = 241] = "ZTS_EVENT_PEER_RELAY";
    /** A peer is unreachable. Check NAT/Firewall settings */
    events[events["ZTS_EVENT_PEER_UNREACHABLE"] = 242] = "ZTS_EVENT_PEER_UNREACHABLE";
    /** A new path to a peer was discovered */
    events[events["ZTS_EVENT_PEER_PATH_DISCOVERED"] = 243] = "ZTS_EVENT_PEER_PATH_DISCOVERED";
    /** A known path to a peer is now considered dead */
    events[events["ZTS_EVENT_PEER_PATH_DEAD"] = 244] = "ZTS_EVENT_PEER_PATH_DEAD";
    /** A new managed network route was added */
    events[events["ZTS_EVENT_ROUTE_ADDED"] = 250] = "ZTS_EVENT_ROUTE_ADDED";
    /** A managed network route was removed */
    events[events["ZTS_EVENT_ROUTE_REMOVED"] = 251] = "ZTS_EVENT_ROUTE_REMOVED";
    /** A new managed IPv4 address was assigned to this peer */
    events[events["ZTS_EVENT_ADDR_ADDED_IP4"] = 260] = "ZTS_EVENT_ADDR_ADDED_IP4";
    /** A managed IPv4 address assignment was removed from this peer  */
    events[events["ZTS_EVENT_ADDR_REMOVED_IP4"] = 261] = "ZTS_EVENT_ADDR_REMOVED_IP4";
    /** A new managed IPv4 address was assigned to this peer  */
    events[events["ZTS_EVENT_ADDR_ADDED_IP6"] = 262] = "ZTS_EVENT_ADDR_ADDED_IP6";
    /** A managed IPv6 address assignment was removed from this peer  */
    events[events["ZTS_EVENT_ADDR_REMOVED_IP6"] = 263] = "ZTS_EVENT_ADDR_REMOVED_IP6";
    /** The node's secret key (identity) */
    events[events["ZTS_EVENT_STORE_IDENTITY_SECRET"] = 270] = "ZTS_EVENT_STORE_IDENTITY_SECRET";
    /** The node's public key (identity) */
    events[events["ZTS_EVENT_STORE_IDENTITY_PUBLIC"] = 271] = "ZTS_EVENT_STORE_IDENTITY_PUBLIC";
    /** The node has received an updated planet config */
    events[events["ZTS_EVENT_STORE_PLANET"] = 272] = "ZTS_EVENT_STORE_PLANET";
    /** New reachability hints and peer configuration */
    events[events["ZTS_EVENT_STORE_PEER"] = 273] = "ZTS_EVENT_STORE_PEER";
    /** New network config */
    events[events["ZTS_EVENT_STORE_NETWORK"] = 274] = "ZTS_EVENT_STORE_NETWORK";
})(events || (exports.events = events = {}));
var errnos;
(function (errnos) {
    errnos[errnos["ZTS_EPERM"] = 1] = "ZTS_EPERM";
    /** No such file or directory */
    errnos[errnos["ZTS_ENOENT"] = 2] = "ZTS_ENOENT";
    /** No such process */
    errnos[errnos["ZTS_ESRCH"] = 3] = "ZTS_ESRCH";
    /** Interrupted system call */
    errnos[errnos["ZTS_EINTR"] = 4] = "ZTS_EINTR";
    /** I/O ZtsError */
    errnos[errnos["ZTS_EIO"] = 5] = "ZTS_EIO";
    /** No such device or address */
    errnos[errnos["ZTS_ENXIO"] = 6] = "ZTS_ENXIO";
    /** Bad file number */
    errnos[errnos["ZTS_EBADF"] = 9] = "ZTS_EBADF";
    /** Try again */
    errnos[errnos["ZTS_EAGAIN"] = 11] = "ZTS_EAGAIN";
    /** Operation would block */
    errnos[errnos["ZTS_EWOULDBLOCK"] = 11] = "ZTS_EWOULDBLOCK";
    /** Out of memory */
    errnos[errnos["ZTS_ENOMEM"] = 12] = "ZTS_ENOMEM";
    /** Permission denied */
    errnos[errnos["ZTS_EACCES"] = 13] = "ZTS_EACCES";
    /** Bad address */
    errnos[errnos["ZTS_EFAULT"] = 14] = "ZTS_EFAULT";
    /** Device or resource busy */
    errnos[errnos["ZTS_EBUSY"] = 16] = "ZTS_EBUSY";
    /** File exists */
    errnos[errnos["ZTS_EEXIST"] = 17] = "ZTS_EEXIST";
    /** No such device */
    errnos[errnos["ZTS_ENODEV"] = 19] = "ZTS_ENODEV";
    /** Invalid argument */
    errnos[errnos["ZTS_EINVAL"] = 22] = "ZTS_EINVAL";
    /** File table overflow */
    errnos[errnos["ZTS_ENFILE"] = 23] = "ZTS_ENFILE";
    /** Too many open files */
    errnos[errnos["ZTS_EMFILE"] = 24] = "ZTS_EMFILE";
    /** Function not implemented */
    errnos[errnos["ZTS_ENOSYS"] = 38] = "ZTS_ENOSYS";
    /** Socket operation on non-socket */
    errnos[errnos["ZTS_ENOTSOCK"] = 88] = "ZTS_ENOTSOCK";
    /** Destination address required */
    errnos[errnos["ZTS_EDESTADDRREQ"] = 89] = "ZTS_EDESTADDRREQ";
    /** Message too long */
    errnos[errnos["ZTS_EMSGSIZE"] = 90] = "ZTS_EMSGSIZE";
    /** Protocol wrong type for socket */
    errnos[errnos["ZTS_EPROTOTYPE"] = 91] = "ZTS_EPROTOTYPE";
    /** Protocol not available */
    errnos[errnos["ZTS_ENOPROTOOPT"] = 92] = "ZTS_ENOPROTOOPT";
    /** Protocol not supported */
    errnos[errnos["ZTS_EPROTONOSUPPORT"] = 93] = "ZTS_EPROTONOSUPPORT";
    /** Socket type not supported */
    errnos[errnos["ZTS_ESOCKTNOSUPPORT"] = 94] = "ZTS_ESOCKTNOSUPPORT";
    /** Operation not supported on transport endpoint */
    errnos[errnos["ZTS_EOPNOTSUPP"] = 95] = "ZTS_EOPNOTSUPP";
    /** Protocol family not supported */
    errnos[errnos["ZTS_EPFNOSUPPORT"] = 96] = "ZTS_EPFNOSUPPORT";
    /** Address family not supported by protocol */
    errnos[errnos["ZTS_EAFNOSUPPORT"] = 97] = "ZTS_EAFNOSUPPORT";
    /** Address already in use */
    errnos[errnos["ZTS_EADDRINUSE"] = 98] = "ZTS_EADDRINUSE";
    /** Cannot assign requested address */
    errnos[errnos["ZTS_EADDRNOTAVAIL"] = 99] = "ZTS_EADDRNOTAVAIL";
    /** Network is down */
    errnos[errnos["ZTS_ENETDOWN"] = 100] = "ZTS_ENETDOWN";
    /** Network is unreachable */
    errnos[errnos["ZTS_ENETUNREACH"] = 101] = "ZTS_ENETUNREACH";
    /** Software caused connection abort */
    errnos[errnos["ZTS_ECONNABORTED"] = 103] = "ZTS_ECONNABORTED";
    /** Connection reset by peer */
    errnos[errnos["ZTS_ECONNRESET"] = 104] = "ZTS_ECONNRESET";
    /** No buffer space available */
    errnos[errnos["ZTS_ENOBUFS"] = 105] = "ZTS_ENOBUFS";
    /** Transport endpoint is already connected */
    errnos[errnos["ZTS_EISCONN"] = 106] = "ZTS_EISCONN";
    /** Transport endpoint is not connected */
    errnos[errnos["ZTS_ENOTCONN"] = 107] = "ZTS_ENOTCONN";
    /** Connection timed out */
    errnos[errnos["ZTS_ETIMEDOUT"] = 110] = "ZTS_ETIMEDOUT";
    /* Connection refused */
    errnos[errnos["ZTS_ECONNREFUSED"] = 111] = "ZTS_ECONNREFUSED";
    /** No route to host */
    errnos[errnos["ZTS_EHOSTUNREACH"] = 113] = "ZTS_EHOSTUNREACH";
    /** Operation already in progress */
    errnos[errnos["ZTS_EALREADY"] = 114] = "ZTS_EALREADY";
    /** Operation now in progress */
    errnos[errnos["ZTS_EINPROGRESS"] = 115] = "ZTS_EINPROGRESS";
})(errnos || (exports.errnos = errnos = {}));
exports.defs = require("./defs");
