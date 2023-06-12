/** Stream socket */
export declare const ZTS_SOCK_STREAM = 1;
/** Datagram socket */
export declare const ZTS_SOCK_DGRAM = 2;
export declare const ZTS_SOCK_RAW = 3;
/** IPv4 address family */
export declare const ZTS_AF_INET = 2;
/** IPv6 address family */
export declare const ZTS_AF_INET6 = 10;
export declare const ZTS_PF_INET = 2;
export declare const ZTS_PF_INET6 = 10;
export declare const ZTS_IPPROTO_IP = 0;
export declare const ZTS_IPPROTO_ICMP = 1;
export declare const ZTS_IPPROTO_TCP = 6;
export declare const ZTS_IPPROTO_UDP = 17;
export declare const ZTS_IPPROTO_IPV6 = 41;
export declare const ZTS_IPPROTO_ICMPV6 = 58;
export declare const ZTS_IPPROTO_UDPLITE = 136;
export declare const ZTS_IPPROTO_RAW = 255;
export declare const ZTS_MSG_PEEK = 1;
export declare const ZTS_MSG_WAITALL = 2;
export declare const ZTS_MSG_OOB = 4;
export declare const ZTS_MSG_DONTWAIT = 8;
export declare const ZTS_MSG_MORE = 16;
export declare const ZTS_F_GETFL = 3;
export declare const ZTS_F_SETFL = 4;
export declare const ZTS_O_NONBLOCK = 1;
export declare const ZTS_O_NDELAY = 1;
export declare const ZTS_SHUT_RD = 0;
export declare const ZTS_SHUT_WR = 1;
export declare const ZTS_SHUT_RDWR = 2;
export declare const ZTS_FIONREAD = 1074292351;
export declare const ZTS_FIONBIO = 2148034174;
export declare const ZTS_SOL_SOCKET = 4095;
export declare const ZTS_SO_REUSEADDR = 4;
export declare const ZTS_SO_KEEPALIVE = 8;
export declare const ZTS_SO_BROADCAST = 32;
export declare const ZTS_IP_TOS = 1;
export declare const ZTS_IP_TTL = 2;
export declare const ZTS_TCP_NODELAY = 1;
export declare const ZTS_TCP_KEEPALIVE = 2;
export declare const ZTS_TCP_KEEPIDLE = 3;
export declare const ZTS_TCP_KEEPINTVL = 4;
export declare const ZTS_TCP_KEEPCNT = 5;
/**
     * Length of human-readable MAC address string
     */
export declare const ZTS_MAC_ADDRSTRLEN = 18;
/**
     * Max length of human-readable IPv4 string
     */
export declare const ZTS_INET_ADDRSTRLEN = 16;
/**
     * Max length of human-readable IPv6 string
     */
export declare const ZTS_INET6_ADDRSTRLEN = 46;
/**
     * Maximum (and required) length of string buffers used to receive
     * string-format IP addresses from the API. This is set to `ZTS_INET6_ADDRSTRLEN`
     * to handle all cases: `ZTS_AF_INET` and `ZTS_AF_INET6`
     */
export declare const ZTS_IP_MAX_STR_LEN = 46;
/**
     * Required buffer length to safely receive data store items
     */
export declare const ZTS_STORE_DATA_LEN = 4096;
/**
     * Maximum length of network short name
     */
export declare const ZTS_MAX_NETWORK_SHORT_NAME_LENGTH = 127;
/**
     * Maximum number of pushed routes on a network
     */
export declare const ZTS_MAX_NETWORK_ROUTES = 32;
/**
     * Maximum number of statically assigned IP addresses per network endpoint
     * using ZT address management (not DHCP)
     */
export declare const ZTS_MAX_ASSIGNED_ADDRESSES = 16;
/**
     * Maximum number of direct network paths to a given peer
     */
export declare const ZTS_MAX_PEER_NETWORK_PATHS = 64;
/**
     * Maximum number of multicast groups a device / network interface can be
     * subscribed to at once
     */
export declare const ZTS_MAX_MULTICAST_SUBSCRIPTIONS = 1024;
/**
     * The length of a human-friendly identity key pair string
     */
export declare const ZTS_ID_STR_BUF_LEN = 384;
