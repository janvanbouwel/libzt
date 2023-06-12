"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZTS_MAX_MULTICAST_SUBSCRIPTIONS = exports.ZTS_MAX_PEER_NETWORK_PATHS = exports.ZTS_MAX_ASSIGNED_ADDRESSES = exports.ZTS_MAX_NETWORK_ROUTES = exports.ZTS_MAX_NETWORK_SHORT_NAME_LENGTH = exports.ZTS_STORE_DATA_LEN = exports.ZTS_IP_MAX_STR_LEN = exports.ZTS_INET6_ADDRSTRLEN = exports.ZTS_INET_ADDRSTRLEN = exports.ZTS_MAC_ADDRSTRLEN = exports.ZTS_TCP_KEEPCNT = exports.ZTS_TCP_KEEPINTVL = exports.ZTS_TCP_KEEPIDLE = exports.ZTS_TCP_KEEPALIVE = exports.ZTS_TCP_NODELAY = exports.ZTS_IP_TTL = exports.ZTS_IP_TOS = exports.ZTS_SO_BROADCAST = exports.ZTS_SO_KEEPALIVE = exports.ZTS_SO_REUSEADDR = exports.ZTS_SOL_SOCKET = exports.ZTS_FIONBIO = exports.ZTS_FIONREAD = exports.ZTS_SHUT_RDWR = exports.ZTS_SHUT_WR = exports.ZTS_SHUT_RD = exports.ZTS_O_NDELAY = exports.ZTS_O_NONBLOCK = exports.ZTS_F_SETFL = exports.ZTS_F_GETFL = exports.ZTS_MSG_MORE = exports.ZTS_MSG_DONTWAIT = exports.ZTS_MSG_OOB = exports.ZTS_MSG_WAITALL = exports.ZTS_MSG_PEEK = exports.ZTS_IPPROTO_RAW = exports.ZTS_IPPROTO_UDPLITE = exports.ZTS_IPPROTO_ICMPV6 = exports.ZTS_IPPROTO_IPV6 = exports.ZTS_IPPROTO_UDP = exports.ZTS_IPPROTO_TCP = exports.ZTS_IPPROTO_ICMP = exports.ZTS_IPPROTO_IP = exports.ZTS_PF_INET6 = exports.ZTS_PF_INET = exports.ZTS_AF_INET6 = exports.ZTS_AF_INET = exports.ZTS_SOCK_RAW = exports.ZTS_SOCK_DGRAM = exports.ZTS_SOCK_STREAM = void 0;
exports.ZTS_ID_STR_BUF_LEN = void 0;
// Socket protocol types
/** Stream socket */
exports.ZTS_SOCK_STREAM = 0x00000001;
/** Datagram socket */
exports.ZTS_SOCK_DGRAM = 0x00000002;
exports.ZTS_SOCK_RAW = 0x00000003;
// Socket family types
/** IPv4 address family */
exports.ZTS_AF_INET = 0x00000002;
// another test comment
/** IPv6 address family */
exports.ZTS_AF_INET6 = 0x0000000a;
/* yet one more */
exports.ZTS_PF_INET = exports.ZTS_AF_INET;
exports.ZTS_PF_INET6 = exports.ZTS_AF_INET6;
// Used as level numbers for setsockopt() and getsockopt()
exports.ZTS_IPPROTO_IP = 0x00000000;
exports.ZTS_IPPROTO_ICMP = 0x00000001;
exports.ZTS_IPPROTO_TCP = 0x00000006;
exports.ZTS_IPPROTO_UDP = 0x00000011;
exports.ZTS_IPPROTO_IPV6 = 0x00000029;
exports.ZTS_IPPROTO_ICMPV6 = 0x0000003a;
exports.ZTS_IPPROTO_UDPLITE = 0x00000088;
exports.ZTS_IPPROTO_RAW = 0x000000ff;
// send() and recv() flags
exports.ZTS_MSG_PEEK = 0x00000001;
exports.ZTS_MSG_WAITALL = 0x00000002;
exports.ZTS_MSG_OOB = 0x00000004;
exports.ZTS_MSG_DONTWAIT = 0x00000008;
exports.ZTS_MSG_MORE = 0x00000010;
// fnctl() commands
exports.ZTS_F_GETFL = 0x00000003;
exports.ZTS_F_SETFL = 0x00000004;
// fnctl() flags
exports.ZTS_O_NONBLOCK = 0x00000001;
exports.ZTS_O_NDELAY = 0x00000001;
// Shutdown commands
exports.ZTS_SHUT_RD = 0x00000000;
exports.ZTS_SHUT_WR = 0x00000001;
exports.ZTS_SHUT_RDWR = 0x00000002;
// ioctl() commands
exports.ZTS_FIONREAD = 0x4008667F;
exports.ZTS_FIONBIO = 0x8008667E;
// Socket level option number
exports.ZTS_SOL_SOCKET = 0x00000FFF;
// Socket options
exports.ZTS_SO_REUSEADDR = 0x00000004;
exports.ZTS_SO_KEEPALIVE = 0x00000008;
exports.ZTS_SO_BROADCAST = 0x00000020;
// // Socket options
// export const ZTS_SO_DEBUG = 0x00000001;   // NOT YET SUPPORTED
// export const ZTS_SO_ACCEPTCONN = 0x00000002;
// export const ZTS_SO_DONTROUTE = 0x00000010;     // NOT YET SUPPORTED
// export const ZTS_SO_USELOOPBACK = 0x00000040;   // NOT YET SUPPORTED
// export const ZTS_SO_LINGER = 0x00000080;
// export const ZTS_SO_DONTLINGER = ((int)(~ZTS_SO_LINGER));
// export const ZTS_SO_OOBINLINE = 0x00000100;   // NOT YET SUPPORTED
// export const ZTS_SO_REUSEPORT = 0x00000200;   // NOT YET SUPPORTED
// export const ZTS_SO_SNDBUF = 0x00001001;      // NOT YET SUPPORTED
// export const ZTS_SO_RCVBUF = 0x00001002;
// export const ZTS_SO_SNDLOWAT = 0x00001003;   // NOT YET SUPPORTED
// export const ZTS_SO_RCVLOWAT = 0x00001004;   // NOT YET SUPPORTED
// export const ZTS_SO_SNDTIMEO = 0x00001005;
// export const ZTS_SO_RCVTIMEO = 0x00001006;
// export const ZTS_SO_ERROR = 0x00001007;
// export const ZTS_SO_TYPE = 0x00001008;
// export const ZTS_SO_CONTIMEO = 0x00001009;   // NOT YET SUPPORTED
// export const ZTS_SO_NO_CHECK = 0x0000100a;
// IPPROTO_IP options
exports.ZTS_IP_TOS = 0x00000001;
exports.ZTS_IP_TTL = 0x00000002;
// IPPROTO_TCP options
exports.ZTS_TCP_NODELAY = 0x00000001;
exports.ZTS_TCP_KEEPALIVE = 0x00000002;
exports.ZTS_TCP_KEEPIDLE = 0x00000003;
exports.ZTS_TCP_KEEPINTVL = 0x00000004;
exports.ZTS_TCP_KEEPCNT = 0x00000005;
//----------------------------------------------------------------------------//
// Misc definitions                                                           //
//----------------------------------------------------------------------------//
/**
     * Length of human-readable MAC address string
     */
exports.ZTS_MAC_ADDRSTRLEN = 18;
/**
     * Max length of human-readable IPv4 string
     */
exports.ZTS_INET_ADDRSTRLEN = 16;
/**
     * Max length of human-readable IPv6 string
     */
exports.ZTS_INET6_ADDRSTRLEN = 46;
/**
     * Maximum (and required) length of string buffers used to receive
     * string-format IP addresses from the API. This is set to `ZTS_INET6_ADDRSTRLEN`
     * to handle all cases: `ZTS_AF_INET` and `ZTS_AF_INET6`
     */
exports.ZTS_IP_MAX_STR_LEN = 46;
/**
     * Required buffer length to safely receive data store items
     */
exports.ZTS_STORE_DATA_LEN = 4096;
/**
     * Maximum length of network short name
     */
exports.ZTS_MAX_NETWORK_SHORT_NAME_LENGTH = 127;
/**
     * Maximum number of pushed routes on a network
     */
exports.ZTS_MAX_NETWORK_ROUTES = 32;
/**
     * Maximum number of statically assigned IP addresses per network endpoint
     * using ZT address management (not DHCP)
     */
exports.ZTS_MAX_ASSIGNED_ADDRESSES = 16;
/**
     * Maximum number of direct network paths to a given peer
     */
exports.ZTS_MAX_PEER_NETWORK_PATHS = 64;
/**
     * Maximum number of multicast groups a device / network interface can be
     * subscribed to at once
     */
exports.ZTS_MAX_MULTICAST_SUBSCRIPTIONS = 1024;
/**
     * The length of a human-friendly identity key pair string
     */
exports.ZTS_ID_STR_BUF_LEN = 384;
