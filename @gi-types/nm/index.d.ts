/**
 * NM 1.0
 *
 * Generated from 1.28.1
 */

import * as Gio from "@gi-types/gio";
import * as GObject from "@gi-types/gobject";
import * as GLib from "@gi-types/glib";

export const ACCESS_POINT_BSSID: string;
export const ACCESS_POINT_FLAGS: string;
export const ACCESS_POINT_FREQUENCY: string;
export const ACCESS_POINT_HW_ADDRESS: string;
export const ACCESS_POINT_LAST_SEEN: string;
export const ACCESS_POINT_MAX_BITRATE: string;
export const ACCESS_POINT_MODE: string;
export const ACCESS_POINT_RSN_FLAGS: string;
export const ACCESS_POINT_SSID: string;
export const ACCESS_POINT_STRENGTH: string;
export const ACCESS_POINT_WPA_FLAGS: string;
export const ACTIVE_CONNECTION_CONNECTION: string;
export const ACTIVE_CONNECTION_DEFAULT: string;
export const ACTIVE_CONNECTION_DEFAULT6: string;
export const ACTIVE_CONNECTION_DEVICES: string;
export const ACTIVE_CONNECTION_DHCP4_CONFIG: string;
export const ACTIVE_CONNECTION_DHCP6_CONFIG: string;
export const ACTIVE_CONNECTION_ID: string;
export const ACTIVE_CONNECTION_IP4_CONFIG: string;
export const ACTIVE_CONNECTION_IP6_CONFIG: string;
export const ACTIVE_CONNECTION_MASTER: string;
export const ACTIVE_CONNECTION_SPECIFIC_OBJECT_PATH: string;
export const ACTIVE_CONNECTION_STATE: string;
export const ACTIVE_CONNECTION_STATE_FLAGS: string;
export const ACTIVE_CONNECTION_TYPE: string;
export const ACTIVE_CONNECTION_UUID: string;
export const ACTIVE_CONNECTION_VPN: string;
export const BRIDGE_VLAN_VID_MAX: number;
export const BRIDGE_VLAN_VID_MIN: number;
export const CHECKPOINT_CREATED: string;
export const CHECKPOINT_DEVICES: string;
export const CHECKPOINT_ROLLBACK_TIMEOUT: string;
export const CLIENT_ACTIVATING_CONNECTION: string;
export const CLIENT_ACTIVE_CONNECTIONS: string;
export const CLIENT_ACTIVE_CONNECTION_ADDED: string;
export const CLIENT_ACTIVE_CONNECTION_REMOVED: string;
export const CLIENT_ALL_DEVICES: string;
export const CLIENT_ANY_DEVICE_ADDED: string;
export const CLIENT_ANY_DEVICE_REMOVED: string;
export const CLIENT_CAN_MODIFY: string;
export const CLIENT_CAPABILITIES: string;
export const CLIENT_CHECKPOINTS: string;
export const CLIENT_CONNECTIONS: string;
export const CLIENT_CONNECTION_ADDED: string;
export const CLIENT_CONNECTION_REMOVED: string;
export const CLIENT_CONNECTIVITY: string;
export const CLIENT_CONNECTIVITY_CHECK_AVAILABLE: string;
export const CLIENT_CONNECTIVITY_CHECK_ENABLED: string;
export const CLIENT_CONNECTIVITY_CHECK_URI: string;
export const CLIENT_DBUS_CONNECTION: string;
export const CLIENT_DBUS_NAME_OWNER: string;
export const CLIENT_DEVICES: string;
export const CLIENT_DEVICE_ADDED: string;
export const CLIENT_DEVICE_REMOVED: string;
export const CLIENT_DNS_CONFIGURATION: string;
export const CLIENT_DNS_MODE: string;
export const CLIENT_DNS_RC_MANAGER: string;
export const CLIENT_HOSTNAME: string;
export const CLIENT_INSTANCE_FLAGS: string;
export const CLIENT_METERED: string;
export const CLIENT_NETWORKING_ENABLED: string;
export const CLIENT_NM_RUNNING: string;
export const CLIENT_PERMISSIONS_STATE: string;
export const CLIENT_PERMISSION_CHANGED: string;
export const CLIENT_PRIMARY_CONNECTION: string;
export const CLIENT_STARTUP: string;
export const CLIENT_STATE: string;
export const CLIENT_VERSION: string;
export const CLIENT_WIMAX_ENABLED: string;
export const CLIENT_WIMAX_HARDWARE_ENABLED: string;
export const CLIENT_WIRELESS_ENABLED: string;
export const CLIENT_WIRELESS_HARDWARE_ENABLED: string;
export const CLIENT_WWAN_ENABLED: string;
export const CLIENT_WWAN_HARDWARE_ENABLED: string;
export const CONNECTION_CHANGED: string;
export const CONNECTION_NORMALIZE_PARAM_IP6_CONFIG_METHOD: string;
export const CONNECTION_SECRETS_CLEARED: string;
export const CONNECTION_SECRETS_UPDATED: string;
export const DBUS_INTERFACE: string;
export const DBUS_INTERFACE_DNS_MANAGER: string;
export const DBUS_INTERFACE_SETTINGS: string;
export const DBUS_INTERFACE_SETTINGS_CONNECTION: string;
export const DBUS_INTERFACE_SETTINGS_CONNECTION_SECRETS: string;
export const DBUS_INTERFACE_VPN: string;
export const DBUS_INTERFACE_VPN_CONNECTION: string;
export const DBUS_INVALID_VPN_CONNECTION: string;
export const DBUS_NO_ACTIVE_VPN_CONNECTION: string;
export const DBUS_NO_VPN_CONNECTIONS: string;
export const DBUS_PATH: string;
export const DBUS_PATH_AGENT_MANAGER: string;
export const DBUS_PATH_DNS_MANAGER: string;
export const DBUS_PATH_SECRET_AGENT: string;
export const DBUS_PATH_SETTINGS: string;
export const DBUS_PATH_SETTINGS_CONNECTION: string;
export const DBUS_PATH_VPN: string;
export const DBUS_PATH_VPN_CONNECTION: string;
export const DBUS_SERVICE: string;
export const DBUS_VPN_ALREADY_STARTED: string;
export const DBUS_VPN_ALREADY_STOPPED: string;
export const DBUS_VPN_BAD_ARGUMENTS: string;
export const DBUS_VPN_ERROR_PREFIX: string;
export const DBUS_VPN_INTERACTIVE_NOT_SUPPORTED: string;
export const DBUS_VPN_SIGNAL_CONNECT_FAILED: string;
export const DBUS_VPN_SIGNAL_IP4_CONFIG: string;
export const DBUS_VPN_SIGNAL_IP_CONFIG_BAD: string;
export const DBUS_VPN_SIGNAL_LAUNCH_FAILED: string;
export const DBUS_VPN_SIGNAL_LOGIN_BANNER: string;
export const DBUS_VPN_SIGNAL_LOGIN_FAILED: string;
export const DBUS_VPN_SIGNAL_STATE_CHANGE: string;
export const DBUS_VPN_SIGNAL_VPN_CONFIG_BAD: string;
export const DBUS_VPN_STARTING_IN_PROGRESS: string;
export const DBUS_VPN_STOPPING_IN_PROGRESS: string;
export const DBUS_VPN_WRONG_STATE: string;
export const DEVICE_6LOWPAN_HW_ADDRESS: string;
export const DEVICE_6LOWPAN_PARENT: string;
export const DEVICE_ACTIVE_CONNECTION: string;
export const DEVICE_ADSL_CARRIER: string;
export const DEVICE_AUTOCONNECT: string;
export const DEVICE_AVAILABLE_CONNECTIONS: string;
export const DEVICE_BOND_CARRIER: string;
export const DEVICE_BOND_HW_ADDRESS: string;
export const DEVICE_BOND_SLAVES: string;
export const DEVICE_BRIDGE_CARRIER: string;
export const DEVICE_BRIDGE_HW_ADDRESS: string;
export const DEVICE_BRIDGE_SLAVES: string;
export const DEVICE_BT_CAPABILITIES: string;
export const DEVICE_BT_HW_ADDRESS: string;
export const DEVICE_BT_NAME: string;
export const DEVICE_CAPABILITIES: string;
export const DEVICE_DEVICE_TYPE: string;
export const DEVICE_DHCP4_CONFIG: string;
export const DEVICE_DHCP6_CONFIG: string;
export const DEVICE_DRIVER: string;
export const DEVICE_DRIVER_VERSION: string;
export const DEVICE_DUMMY_HW_ADDRESS: string;
export const DEVICE_ETHERNET_CARRIER: string;
export const DEVICE_ETHERNET_HW_ADDRESS: string;
export const DEVICE_ETHERNET_PERMANENT_HW_ADDRESS: string;
export const DEVICE_ETHERNET_S390_SUBCHANNELS: string;
export const DEVICE_ETHERNET_SPEED: string;
export const DEVICE_FIRMWARE_MISSING: string;
export const DEVICE_FIRMWARE_VERSION: string;
export const DEVICE_GENERIC_HW_ADDRESS: string;
export const DEVICE_GENERIC_TYPE_DESCRIPTION: string;
export const DEVICE_HW_ADDRESS: string;
export const DEVICE_INFINIBAND_CARRIER: string;
export const DEVICE_INFINIBAND_HW_ADDRESS: string;
export const DEVICE_INTERFACE: string;
export const DEVICE_INTERFACE_FLAGS: string;
export const DEVICE_IP4_CONFIG: string;
export const DEVICE_IP4_CONNECTIVITY: string;
export const DEVICE_IP6_CONFIG: string;
export const DEVICE_IP6_CONNECTIVITY: string;
export const DEVICE_IP_INTERFACE: string;
export const DEVICE_IP_TUNNEL_ENCAPSULATION_LIMIT: string;
export const DEVICE_IP_TUNNEL_FLAGS: string;
export const DEVICE_IP_TUNNEL_FLOW_LABEL: string;
export const DEVICE_IP_TUNNEL_INPUT_KEY: string;
export const DEVICE_IP_TUNNEL_LOCAL: string;
export const DEVICE_IP_TUNNEL_MODE: string;
export const DEVICE_IP_TUNNEL_OUTPUT_KEY: string;
export const DEVICE_IP_TUNNEL_PARENT: string;
export const DEVICE_IP_TUNNEL_PATH_MTU_DISCOVERY: string;
export const DEVICE_IP_TUNNEL_REMOTE: string;
export const DEVICE_IP_TUNNEL_TOS: string;
export const DEVICE_IP_TUNNEL_TTL: string;
export const DEVICE_LLDP_NEIGHBORS: string;
export const DEVICE_MACSEC_CIPHER_SUITE: string;
export const DEVICE_MACSEC_ENCODING_SA: string;
export const DEVICE_MACSEC_ENCRYPT: string;
export const DEVICE_MACSEC_ES: string;
export const DEVICE_MACSEC_HW_ADDRESS: string;
export const DEVICE_MACSEC_ICV_LENGTH: string;
export const DEVICE_MACSEC_INCLUDE_SCI: string;
export const DEVICE_MACSEC_PARENT: string;
export const DEVICE_MACSEC_PROTECT: string;
export const DEVICE_MACSEC_REPLAY_PROTECT: string;
export const DEVICE_MACSEC_SCB: string;
export const DEVICE_MACSEC_SCI: string;
export const DEVICE_MACSEC_VALIDATION: string;
export const DEVICE_MACSEC_WINDOW: string;
export const DEVICE_MACVLAN_HW_ADDRESS: string;
export const DEVICE_MACVLAN_MODE: string;
export const DEVICE_MACVLAN_NO_PROMISC: string;
export const DEVICE_MACVLAN_PARENT: string;
export const DEVICE_MACVLAN_TAP: string;
export const DEVICE_MANAGED: string;
export const DEVICE_METERED: string;
export const DEVICE_MODEM_APN: string;
export const DEVICE_MODEM_CURRENT_CAPABILITIES: string;
export const DEVICE_MODEM_DEVICE_ID: string;
export const DEVICE_MODEM_MODEM_CAPABILITIES: string;
export const DEVICE_MODEM_OPERATOR_CODE: string;
export const DEVICE_MTU: string;
export const DEVICE_NM_PLUGIN_MISSING: string;
export const DEVICE_OLPC_MESH_ACTIVE_CHANNEL: string;
export const DEVICE_OLPC_MESH_COMPANION: string;
export const DEVICE_OLPC_MESH_HW_ADDRESS: string;
export const DEVICE_OVS_BRIDGE_SLAVES: string;
export const DEVICE_OVS_PORT_SLAVES: string;
export const DEVICE_PATH: string;
export const DEVICE_PHYSICAL_PORT_ID: string;
export const DEVICE_PRODUCT: string;
export const DEVICE_REAL: string;
export const DEVICE_STATE: string;
export const DEVICE_STATE_REASON: string;
export const DEVICE_TEAM_CARRIER: string;
export const DEVICE_TEAM_CONFIG: string;
export const DEVICE_TEAM_HW_ADDRESS: string;
export const DEVICE_TEAM_SLAVES: string;
export const DEVICE_TUN_GROUP: string;
export const DEVICE_TUN_HW_ADDRESS: string;
export const DEVICE_TUN_MODE: string;
export const DEVICE_TUN_MULTI_QUEUE: string;
export const DEVICE_TUN_NO_PI: string;
export const DEVICE_TUN_OWNER: string;
export const DEVICE_TUN_VNET_HDR: string;
export const DEVICE_UDI: string;
export const DEVICE_VENDOR: string;
export const DEVICE_VLAN_CARRIER: string;
export const DEVICE_VLAN_HW_ADDRESS: string;
export const DEVICE_VLAN_PARENT: string;
export const DEVICE_VLAN_VLAN_ID: string;
export const DEVICE_VRF_TABLE: string;
export const DEVICE_VXLAN_AGEING: string;
export const DEVICE_VXLAN_CARRIER: string;
export const DEVICE_VXLAN_DST_PORT: string;
export const DEVICE_VXLAN_GROUP: string;
export const DEVICE_VXLAN_HW_ADDRESS: string;
export const DEVICE_VXLAN_ID: string;
export const DEVICE_VXLAN_L2MISS: string;
export const DEVICE_VXLAN_L3MISS: string;
export const DEVICE_VXLAN_LEARNING: string;
export const DEVICE_VXLAN_LIMIT: string;
export const DEVICE_VXLAN_LOCAL: string;
export const DEVICE_VXLAN_PARENT: string;
export const DEVICE_VXLAN_PROXY: string;
export const DEVICE_VXLAN_RSC: string;
export const DEVICE_VXLAN_SRC_PORT_MAX: string;
export const DEVICE_VXLAN_SRC_PORT_MIN: string;
export const DEVICE_VXLAN_TOS: string;
export const DEVICE_VXLAN_TTL: string;
export const DEVICE_WIFI_ACCESS_POINTS: string;
export const DEVICE_WIFI_ACTIVE_ACCESS_POINT: string;
export const DEVICE_WIFI_BITRATE: string;
export const DEVICE_WIFI_CAPABILITIES: string;
export const DEVICE_WIFI_HW_ADDRESS: string;
export const DEVICE_WIFI_LAST_SCAN: string;
export const DEVICE_WIFI_MODE: string;
export const DEVICE_WIFI_P2P_HW_ADDRESS: string;
export const DEVICE_WIFI_P2P_PEERS: string;
export const DEVICE_WIFI_P2P_WFDIES: string;
export const DEVICE_WIFI_PERMANENT_HW_ADDRESS: string;
export const DEVICE_WIMAX_ACTIVE_NSP: string;
export const DEVICE_WIMAX_BSID: string;
export const DEVICE_WIMAX_CENTER_FREQUENCY: string;
export const DEVICE_WIMAX_CINR: string;
export const DEVICE_WIMAX_HW_ADDRESS: string;
export const DEVICE_WIMAX_NSPS: string;
export const DEVICE_WIMAX_RSSI: string;
export const DEVICE_WIMAX_TX_POWER: string;
export const DEVICE_WIREGUARD_FWMARK: string;
export const DEVICE_WIREGUARD_LISTEN_PORT: string;
export const DEVICE_WIREGUARD_PUBLIC_KEY: string;
export const DEVICE_WPAN_HW_ADDRESS: string;
export const DHCP_CONFIG_FAMILY: string;
export const DHCP_CONFIG_OPTIONS: string;
export const ETHTOOL_OPTNAME_COALESCE_ADAPTIVE_RX: string;
export const ETHTOOL_OPTNAME_COALESCE_ADAPTIVE_TX: string;
export const ETHTOOL_OPTNAME_COALESCE_PKT_RATE_HIGH: string;
export const ETHTOOL_OPTNAME_COALESCE_PKT_RATE_LOW: string;
export const ETHTOOL_OPTNAME_COALESCE_RX_FRAMES: string;
export const ETHTOOL_OPTNAME_COALESCE_RX_FRAMES_HIGH: string;
export const ETHTOOL_OPTNAME_COALESCE_RX_FRAMES_IRQ: string;
export const ETHTOOL_OPTNAME_COALESCE_RX_FRAMES_LOW: string;
export const ETHTOOL_OPTNAME_COALESCE_RX_USECS: string;
export const ETHTOOL_OPTNAME_COALESCE_RX_USECS_HIGH: string;
export const ETHTOOL_OPTNAME_COALESCE_RX_USECS_IRQ: string;
export const ETHTOOL_OPTNAME_COALESCE_RX_USECS_LOW: string;
export const ETHTOOL_OPTNAME_COALESCE_SAMPLE_INTERVAL: string;
export const ETHTOOL_OPTNAME_COALESCE_STATS_BLOCK_USECS: string;
export const ETHTOOL_OPTNAME_COALESCE_TX_FRAMES: string;
export const ETHTOOL_OPTNAME_COALESCE_TX_FRAMES_HIGH: string;
export const ETHTOOL_OPTNAME_COALESCE_TX_FRAMES_IRQ: string;
export const ETHTOOL_OPTNAME_COALESCE_TX_FRAMES_LOW: string;
export const ETHTOOL_OPTNAME_COALESCE_TX_USECS: string;
export const ETHTOOL_OPTNAME_COALESCE_TX_USECS_HIGH: string;
export const ETHTOOL_OPTNAME_COALESCE_TX_USECS_IRQ: string;
export const ETHTOOL_OPTNAME_COALESCE_TX_USECS_LOW: string;
export const ETHTOOL_OPTNAME_FEATURE_ESP_HW_OFFLOAD: string;
export const ETHTOOL_OPTNAME_FEATURE_ESP_TX_CSUM_HW_OFFLOAD: string;
export const ETHTOOL_OPTNAME_FEATURE_FCOE_MTU: string;
export const ETHTOOL_OPTNAME_FEATURE_GRO: string;
export const ETHTOOL_OPTNAME_FEATURE_GSO: string;
export const ETHTOOL_OPTNAME_FEATURE_HIGHDMA: string;
export const ETHTOOL_OPTNAME_FEATURE_HW_TC_OFFLOAD: string;
export const ETHTOOL_OPTNAME_FEATURE_L2_FWD_OFFLOAD: string;
export const ETHTOOL_OPTNAME_FEATURE_LOOPBACK: string;
export const ETHTOOL_OPTNAME_FEATURE_LRO: string;
export const ETHTOOL_OPTNAME_FEATURE_NTUPLE: string;
export const ETHTOOL_OPTNAME_FEATURE_RX: string;
export const ETHTOOL_OPTNAME_FEATURE_RXHASH: string;
export const ETHTOOL_OPTNAME_FEATURE_RXVLAN: string;
export const ETHTOOL_OPTNAME_FEATURE_RX_ALL: string;
export const ETHTOOL_OPTNAME_FEATURE_RX_FCS: string;
export const ETHTOOL_OPTNAME_FEATURE_RX_GRO_HW: string;
export const ETHTOOL_OPTNAME_FEATURE_RX_UDP_TUNNEL_PORT_OFFLOAD: string;
export const ETHTOOL_OPTNAME_FEATURE_RX_VLAN_FILTER: string;
export const ETHTOOL_OPTNAME_FEATURE_RX_VLAN_STAG_FILTER: string;
export const ETHTOOL_OPTNAME_FEATURE_RX_VLAN_STAG_HW_PARSE: string;
export const ETHTOOL_OPTNAME_FEATURE_SG: string;
export const ETHTOOL_OPTNAME_FEATURE_TLS_HW_RECORD: string;
export const ETHTOOL_OPTNAME_FEATURE_TLS_HW_TX_OFFLOAD: string;
export const ETHTOOL_OPTNAME_FEATURE_TSO: string;
export const ETHTOOL_OPTNAME_FEATURE_TX: string;
export const ETHTOOL_OPTNAME_FEATURE_TXVLAN: string;
export const ETHTOOL_OPTNAME_FEATURE_TX_CHECKSUM_FCOE_CRC: string;
export const ETHTOOL_OPTNAME_FEATURE_TX_CHECKSUM_IPV4: string;
export const ETHTOOL_OPTNAME_FEATURE_TX_CHECKSUM_IPV6: string;
export const ETHTOOL_OPTNAME_FEATURE_TX_CHECKSUM_IP_GENERIC: string;
export const ETHTOOL_OPTNAME_FEATURE_TX_CHECKSUM_SCTP: string;
export const ETHTOOL_OPTNAME_FEATURE_TX_ESP_SEGMENTATION: string;
export const ETHTOOL_OPTNAME_FEATURE_TX_FCOE_SEGMENTATION: string;
export const ETHTOOL_OPTNAME_FEATURE_TX_GRE_CSUM_SEGMENTATION: string;
export const ETHTOOL_OPTNAME_FEATURE_TX_GRE_SEGMENTATION: string;
export const ETHTOOL_OPTNAME_FEATURE_TX_GSO_PARTIAL: string;
export const ETHTOOL_OPTNAME_FEATURE_TX_GSO_ROBUST: string;
export const ETHTOOL_OPTNAME_FEATURE_TX_IPXIP4_SEGMENTATION: string;
export const ETHTOOL_OPTNAME_FEATURE_TX_IPXIP6_SEGMENTATION: string;
export const ETHTOOL_OPTNAME_FEATURE_TX_NOCACHE_COPY: string;
export const ETHTOOL_OPTNAME_FEATURE_TX_SCATTER_GATHER: string;
export const ETHTOOL_OPTNAME_FEATURE_TX_SCATTER_GATHER_FRAGLIST: string;
export const ETHTOOL_OPTNAME_FEATURE_TX_SCTP_SEGMENTATION: string;
export const ETHTOOL_OPTNAME_FEATURE_TX_TCP6_SEGMENTATION: string;
export const ETHTOOL_OPTNAME_FEATURE_TX_TCP_ECN_SEGMENTATION: string;
export const ETHTOOL_OPTNAME_FEATURE_TX_TCP_MANGLEID_SEGMENTATION: string;
export const ETHTOOL_OPTNAME_FEATURE_TX_TCP_SEGMENTATION: string;
export const ETHTOOL_OPTNAME_FEATURE_TX_UDP_SEGMENTATION: string;
export const ETHTOOL_OPTNAME_FEATURE_TX_UDP_TNL_CSUM_SEGMENTATION: string;
export const ETHTOOL_OPTNAME_FEATURE_TX_UDP_TNL_SEGMENTATION: string;
export const ETHTOOL_OPTNAME_FEATURE_TX_VLAN_STAG_HW_INSERT: string;
export const ETHTOOL_OPTNAME_RING_RX: string;
export const ETHTOOL_OPTNAME_RING_RX_JUMBO: string;
export const ETHTOOL_OPTNAME_RING_RX_MINI: string;
export const ETHTOOL_OPTNAME_RING_TX: string;
export const IP_ADDRESS_ATTRIBUTE_LABEL: string;
export const IP_CONFIG_ADDRESSES: string;
export const IP_CONFIG_DOMAINS: string;
export const IP_CONFIG_FAMILY: string;
export const IP_CONFIG_GATEWAY: string;
export const IP_CONFIG_NAMESERVERS: string;
export const IP_CONFIG_ROUTES: string;
export const IP_CONFIG_SEARCHES: string;
export const IP_CONFIG_WINS_SERVERS: string;
export const IP_ROUTE_ATTRIBUTE_CWND: string;
export const IP_ROUTE_ATTRIBUTE_FROM: string;
export const IP_ROUTE_ATTRIBUTE_INITCWND: string;
export const IP_ROUTE_ATTRIBUTE_INITRWND: string;
export const IP_ROUTE_ATTRIBUTE_LOCK_CWND: string;
export const IP_ROUTE_ATTRIBUTE_LOCK_INITCWND: string;
export const IP_ROUTE_ATTRIBUTE_LOCK_INITRWND: string;
export const IP_ROUTE_ATTRIBUTE_LOCK_MTU: string;
export const IP_ROUTE_ATTRIBUTE_LOCK_WINDOW: string;
export const IP_ROUTE_ATTRIBUTE_MTU: string;
export const IP_ROUTE_ATTRIBUTE_ONLINK: string;
export const IP_ROUTE_ATTRIBUTE_SCOPE: string;
export const IP_ROUTE_ATTRIBUTE_SRC: string;
export const IP_ROUTE_ATTRIBUTE_TABLE: string;
export const IP_ROUTE_ATTRIBUTE_TOS: string;
export const IP_ROUTE_ATTRIBUTE_TYPE: string;
export const IP_ROUTE_ATTRIBUTE_WINDOW: string;
export const LLDP_ATTR_CHASSIS_ID: string;
export const LLDP_ATTR_CHASSIS_ID_TYPE: string;
export const LLDP_ATTR_DESTINATION: string;
export const LLDP_ATTR_IEEE_802_1_PPVID: string;
export const LLDP_ATTR_IEEE_802_1_PPVIDS: string;
export const LLDP_ATTR_IEEE_802_1_PPVID_FLAGS: string;
export const LLDP_ATTR_IEEE_802_1_PVID: string;
export const LLDP_ATTR_IEEE_802_1_VID: string;
export const LLDP_ATTR_IEEE_802_1_VLANS: string;
export const LLDP_ATTR_IEEE_802_1_VLAN_NAME: string;
export const LLDP_ATTR_IEEE_802_3_MAC_PHY_CONF: string;
export const LLDP_ATTR_IEEE_802_3_MAX_FRAME_SIZE: string;
export const LLDP_ATTR_IEEE_802_3_POWER_VIA_MDI: string;
export const LLDP_ATTR_MANAGEMENT_ADDRESSES: string;
export const LLDP_ATTR_MUD_URL: string;
export const LLDP_ATTR_PORT_DESCRIPTION: string;
export const LLDP_ATTR_PORT_ID: string;
export const LLDP_ATTR_PORT_ID_TYPE: string;
export const LLDP_ATTR_RAW: string;
export const LLDP_ATTR_SYSTEM_CAPABILITIES: string;
export const LLDP_ATTR_SYSTEM_DESCRIPTION: string;
export const LLDP_ATTR_SYSTEM_NAME: string;
export const LLDP_DEST_NEAREST_BRIDGE: string;
export const LLDP_DEST_NEAREST_CUSTOMER_BRIDGE: string;
export const LLDP_DEST_NEAREST_NON_TPMR_BRIDGE: string;
export const MAJOR_VERSION: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
export const OBJECT_PATH: string;
export const REMOTE_CONNECTION_DBUS_CONNECTION: string;
export const REMOTE_CONNECTION_FILENAME: string;
export const REMOTE_CONNECTION_FLAGS: string;
export const REMOTE_CONNECTION_PATH: string;
export const REMOTE_CONNECTION_UNSAVED: string;
export const REMOTE_CONNECTION_VISIBLE: string;
export const SECRET_AGENT_OLD_AUTO_REGISTER: string;
export const SECRET_AGENT_OLD_CAPABILITIES: string;
export const SECRET_AGENT_OLD_DBUS_CONNECTION: string;
export const SECRET_AGENT_OLD_IDENTIFIER: string;
export const SECRET_AGENT_OLD_REGISTERED: string;
export const SETTING_6LOWPAN_PARENT: string;
export const SETTING_6LOWPAN_SETTING_NAME: string;
export const SETTING_802_1X_ALTSUBJECT_MATCHES: string;
export const SETTING_802_1X_ANONYMOUS_IDENTITY: string;
export const SETTING_802_1X_AUTH_TIMEOUT: string;
export const SETTING_802_1X_CA_CERT: string;
export const SETTING_802_1X_CA_CERT_PASSWORD: string;
export const SETTING_802_1X_CA_CERT_PASSWORD_FLAGS: string;
export const SETTING_802_1X_CA_PATH: string;
export const SETTING_802_1X_CERT_SCHEME_PREFIX_PATH: string;
export const SETTING_802_1X_CERT_SCHEME_PREFIX_PKCS11: string;
export const SETTING_802_1X_CLIENT_CERT: string;
export const SETTING_802_1X_CLIENT_CERT_PASSWORD: string;
export const SETTING_802_1X_CLIENT_CERT_PASSWORD_FLAGS: string;
export const SETTING_802_1X_DOMAIN_MATCH: string;
export const SETTING_802_1X_DOMAIN_SUFFIX_MATCH: string;
export const SETTING_802_1X_EAP: string;
export const SETTING_802_1X_IDENTITY: string;
export const SETTING_802_1X_OPTIONAL: string;
export const SETTING_802_1X_PAC_FILE: string;
export const SETTING_802_1X_PASSWORD: string;
export const SETTING_802_1X_PASSWORD_FLAGS: string;
export const SETTING_802_1X_PASSWORD_RAW: string;
export const SETTING_802_1X_PASSWORD_RAW_FLAGS: string;
export const SETTING_802_1X_PHASE1_AUTH_FLAGS: string;
export const SETTING_802_1X_PHASE1_FAST_PROVISIONING: string;
export const SETTING_802_1X_PHASE1_PEAPLABEL: string;
export const SETTING_802_1X_PHASE1_PEAPVER: string;
export const SETTING_802_1X_PHASE2_ALTSUBJECT_MATCHES: string;
export const SETTING_802_1X_PHASE2_AUTH: string;
export const SETTING_802_1X_PHASE2_AUTHEAP: string;
export const SETTING_802_1X_PHASE2_CA_CERT: string;
export const SETTING_802_1X_PHASE2_CA_CERT_PASSWORD: string;
export const SETTING_802_1X_PHASE2_CA_CERT_PASSWORD_FLAGS: string;
export const SETTING_802_1X_PHASE2_CA_PATH: string;
export const SETTING_802_1X_PHASE2_CLIENT_CERT: string;
export const SETTING_802_1X_PHASE2_CLIENT_CERT_PASSWORD: string;
export const SETTING_802_1X_PHASE2_CLIENT_CERT_PASSWORD_FLAGS: string;
export const SETTING_802_1X_PHASE2_DOMAIN_MATCH: string;
export const SETTING_802_1X_PHASE2_DOMAIN_SUFFIX_MATCH: string;
export const SETTING_802_1X_PHASE2_PRIVATE_KEY: string;
export const SETTING_802_1X_PHASE2_PRIVATE_KEY_PASSWORD: string;
export const SETTING_802_1X_PHASE2_PRIVATE_KEY_PASSWORD_FLAGS: string;
export const SETTING_802_1X_PHASE2_SUBJECT_MATCH: string;
export const SETTING_802_1X_PIN: string;
export const SETTING_802_1X_PIN_FLAGS: string;
export const SETTING_802_1X_PRIVATE_KEY: string;
export const SETTING_802_1X_PRIVATE_KEY_PASSWORD: string;
export const SETTING_802_1X_PRIVATE_KEY_PASSWORD_FLAGS: string;
export const SETTING_802_1X_SETTING_NAME: string;
export const SETTING_802_1X_SUBJECT_MATCH: string;
export const SETTING_802_1X_SYSTEM_CA_CERTS: string;
export const SETTING_ADSL_ENCAPSULATION: string;
export const SETTING_ADSL_ENCAPSULATION_LLC: string;
export const SETTING_ADSL_ENCAPSULATION_VCMUX: string;
export const SETTING_ADSL_PASSWORD: string;
export const SETTING_ADSL_PASSWORD_FLAGS: string;
export const SETTING_ADSL_PROTOCOL: string;
export const SETTING_ADSL_PROTOCOL_IPOATM: string;
export const SETTING_ADSL_PROTOCOL_PPPOA: string;
export const SETTING_ADSL_PROTOCOL_PPPOE: string;
export const SETTING_ADSL_SETTING_NAME: string;
export const SETTING_ADSL_USERNAME: string;
export const SETTING_ADSL_VCI: string;
export const SETTING_ADSL_VPI: string;
export const SETTING_BLUETOOTH_BDADDR: string;
export const SETTING_BLUETOOTH_SETTING_NAME: string;
export const SETTING_BLUETOOTH_TYPE: string;
export const SETTING_BLUETOOTH_TYPE_DUN: string;
export const SETTING_BLUETOOTH_TYPE_NAP: string;
export const SETTING_BLUETOOTH_TYPE_PANU: string;
export const SETTING_BOND_OPTIONS: string;
export const SETTING_BOND_OPTION_ACTIVE_SLAVE: string;
export const SETTING_BOND_OPTION_AD_ACTOR_SYSTEM: string;
export const SETTING_BOND_OPTION_AD_ACTOR_SYS_PRIO: string;
export const SETTING_BOND_OPTION_AD_SELECT: string;
export const SETTING_BOND_OPTION_AD_USER_PORT_KEY: string;
export const SETTING_BOND_OPTION_ALL_SLAVES_ACTIVE: string;
export const SETTING_BOND_OPTION_ARP_ALL_TARGETS: string;
export const SETTING_BOND_OPTION_ARP_INTERVAL: string;
export const SETTING_BOND_OPTION_ARP_IP_TARGET: string;
export const SETTING_BOND_OPTION_ARP_VALIDATE: string;
export const SETTING_BOND_OPTION_DOWNDELAY: string;
export const SETTING_BOND_OPTION_FAIL_OVER_MAC: string;
export const SETTING_BOND_OPTION_LACP_RATE: string;
export const SETTING_BOND_OPTION_LP_INTERVAL: string;
export const SETTING_BOND_OPTION_MIIMON: string;
export const SETTING_BOND_OPTION_MIN_LINKS: string;
export const SETTING_BOND_OPTION_MODE: string;
export const SETTING_BOND_OPTION_NUM_GRAT_ARP: string;
export const SETTING_BOND_OPTION_NUM_UNSOL_NA: string;
export const SETTING_BOND_OPTION_PACKETS_PER_SLAVE: string;
export const SETTING_BOND_OPTION_PRIMARY: string;
export const SETTING_BOND_OPTION_PRIMARY_RESELECT: string;
export const SETTING_BOND_OPTION_RESEND_IGMP: string;
export const SETTING_BOND_OPTION_TLB_DYNAMIC_LB: string;
export const SETTING_BOND_OPTION_UPDELAY: string;
export const SETTING_BOND_OPTION_USE_CARRIER: string;
export const SETTING_BOND_OPTION_XMIT_HASH_POLICY: string;
export const SETTING_BOND_SETTING_NAME: string;
export const SETTING_BRIDGE_AGEING_TIME: string;
export const SETTING_BRIDGE_FORWARD_DELAY: string;
export const SETTING_BRIDGE_GROUP_ADDRESS: string;
export const SETTING_BRIDGE_GROUP_FORWARD_MASK: string;
export const SETTING_BRIDGE_HELLO_TIME: string;
export const SETTING_BRIDGE_MAC_ADDRESS: string;
export const SETTING_BRIDGE_MAX_AGE: string;
export const SETTING_BRIDGE_MULTICAST_HASH_MAX: string;
export const SETTING_BRIDGE_MULTICAST_LAST_MEMBER_COUNT: string;
export const SETTING_BRIDGE_MULTICAST_LAST_MEMBER_INTERVAL: string;
export const SETTING_BRIDGE_MULTICAST_MEMBERSHIP_INTERVAL: string;
export const SETTING_BRIDGE_MULTICAST_QUERIER: string;
export const SETTING_BRIDGE_MULTICAST_QUERIER_INTERVAL: string;
export const SETTING_BRIDGE_MULTICAST_QUERY_INTERVAL: string;
export const SETTING_BRIDGE_MULTICAST_QUERY_RESPONSE_INTERVAL: string;
export const SETTING_BRIDGE_MULTICAST_QUERY_USE_IFADDR: string;
export const SETTING_BRIDGE_MULTICAST_ROUTER: string;
export const SETTING_BRIDGE_MULTICAST_SNOOPING: string;
export const SETTING_BRIDGE_MULTICAST_STARTUP_QUERY_COUNT: string;
export const SETTING_BRIDGE_MULTICAST_STARTUP_QUERY_INTERVAL: string;
export const SETTING_BRIDGE_PORT_HAIRPIN_MODE: string;
export const SETTING_BRIDGE_PORT_PATH_COST: string;
export const SETTING_BRIDGE_PORT_PRIORITY: string;
export const SETTING_BRIDGE_PORT_SETTING_NAME: string;
export const SETTING_BRIDGE_PORT_VLANS: string;
export const SETTING_BRIDGE_PRIORITY: string;
export const SETTING_BRIDGE_SETTING_NAME: string;
export const SETTING_BRIDGE_STP: string;
export const SETTING_BRIDGE_VLANS: string;
export const SETTING_BRIDGE_VLAN_DEFAULT_PVID: string;
export const SETTING_BRIDGE_VLAN_FILTERING: string;
export const SETTING_BRIDGE_VLAN_PROTOCOL: string;
export const SETTING_BRIDGE_VLAN_STATS_ENABLED: string;
export const SETTING_CDMA_MTU: string;
export const SETTING_CDMA_NUMBER: string;
export const SETTING_CDMA_PASSWORD: string;
export const SETTING_CDMA_PASSWORD_FLAGS: string;
export const SETTING_CDMA_SETTING_NAME: string;
export const SETTING_CDMA_USERNAME: string;
export const SETTING_CONNECTION_AUTH_RETRIES: string;
export const SETTING_CONNECTION_AUTOCONNECT: string;
export const SETTING_CONNECTION_AUTOCONNECT_PRIORITY: string;
export const SETTING_CONNECTION_AUTOCONNECT_PRIORITY_DEFAULT: number;
export const SETTING_CONNECTION_AUTOCONNECT_PRIORITY_MAX: number;
export const SETTING_CONNECTION_AUTOCONNECT_PRIORITY_MIN: number;
export const SETTING_CONNECTION_AUTOCONNECT_RETRIES: string;
export const SETTING_CONNECTION_AUTOCONNECT_SLAVES: string;
export const SETTING_CONNECTION_GATEWAY_PING_TIMEOUT: string;
export const SETTING_CONNECTION_ID: string;
export const SETTING_CONNECTION_INTERFACE_NAME: string;
export const SETTING_CONNECTION_LLDP: string;
export const SETTING_CONNECTION_LLMNR: string;
export const SETTING_CONNECTION_MASTER: string;
export const SETTING_CONNECTION_MDNS: string;
export const SETTING_CONNECTION_METERED: string;
export const SETTING_CONNECTION_MUD_URL: string;
export const SETTING_CONNECTION_MULTI_CONNECT: string;
export const SETTING_CONNECTION_PERMISSIONS: string;
export const SETTING_CONNECTION_READ_ONLY: string;
export const SETTING_CONNECTION_SECONDARIES: string;
export const SETTING_CONNECTION_SETTING_NAME: string;
export const SETTING_CONNECTION_SLAVE_TYPE: string;
export const SETTING_CONNECTION_STABLE_ID: string;
export const SETTING_CONNECTION_TIMESTAMP: string;
export const SETTING_CONNECTION_TYPE: string;
export const SETTING_CONNECTION_UUID: string;
export const SETTING_CONNECTION_WAIT_DEVICE_TIMEOUT: string;
export const SETTING_CONNECTION_ZONE: string;
export const SETTING_DCB_APP_FCOE_FLAGS: string;
export const SETTING_DCB_APP_FCOE_MODE: string;
export const SETTING_DCB_APP_FCOE_PRIORITY: string;
export const SETTING_DCB_APP_FIP_FLAGS: string;
export const SETTING_DCB_APP_FIP_PRIORITY: string;
export const SETTING_DCB_APP_ISCSI_FLAGS: string;
export const SETTING_DCB_APP_ISCSI_PRIORITY: string;
export const SETTING_DCB_FCOE_MODE_FABRIC: string;
export const SETTING_DCB_FCOE_MODE_VN2VN: string;
export const SETTING_DCB_PRIORITY_BANDWIDTH: string;
export const SETTING_DCB_PRIORITY_FLOW_CONTROL: string;
export const SETTING_DCB_PRIORITY_FLOW_CONTROL_FLAGS: string;
export const SETTING_DCB_PRIORITY_GROUP_BANDWIDTH: string;
export const SETTING_DCB_PRIORITY_GROUP_FLAGS: string;
export const SETTING_DCB_PRIORITY_GROUP_ID: string;
export const SETTING_DCB_PRIORITY_STRICT_BANDWIDTH: string;
export const SETTING_DCB_PRIORITY_TRAFFIC_CLASS: string;
export const SETTING_DCB_SETTING_NAME: string;
export const SETTING_DNS_OPTION_ATTEMPTS: string;
export const SETTING_DNS_OPTION_DEBUG: string;
export const SETTING_DNS_OPTION_EDNS0: string;
export const SETTING_DNS_OPTION_INET6: string;
export const SETTING_DNS_OPTION_IP6_BYTESTRING: string;
export const SETTING_DNS_OPTION_IP6_DOTINT: string;
export const SETTING_DNS_OPTION_NDOTS: string;
export const SETTING_DNS_OPTION_NO_CHECK_NAMES: string;
export const SETTING_DNS_OPTION_NO_IP6_DOTINT: string;
export const SETTING_DNS_OPTION_NO_RELOAD: string;
export const SETTING_DNS_OPTION_NO_TLD_QUERY: string;
export const SETTING_DNS_OPTION_ROTATE: string;
export const SETTING_DNS_OPTION_SINGLE_REQUEST: string;
export const SETTING_DNS_OPTION_SINGLE_REQUEST_REOPEN: string;
export const SETTING_DNS_OPTION_TIMEOUT: string;
export const SETTING_DNS_OPTION_TRUST_AD: string;
export const SETTING_DNS_OPTION_USE_VC: string;
export const SETTING_DUMMY_SETTING_NAME: string;
export const SETTING_ETHTOOL_SETTING_NAME: string;
export const SETTING_GENERIC_SETTING_NAME: string;
export const SETTING_GSM_APN: string;
export const SETTING_GSM_AUTO_CONFIG: string;
export const SETTING_GSM_DEVICE_ID: string;
export const SETTING_GSM_HOME_ONLY: string;
export const SETTING_GSM_MTU: string;
export const SETTING_GSM_NETWORK_ID: string;
export const SETTING_GSM_NUMBER: string;
export const SETTING_GSM_PASSWORD: string;
export const SETTING_GSM_PASSWORD_FLAGS: string;
export const SETTING_GSM_PIN: string;
export const SETTING_GSM_PIN_FLAGS: string;
export const SETTING_GSM_SETTING_NAME: string;
export const SETTING_GSM_SIM_ID: string;
export const SETTING_GSM_SIM_OPERATOR_ID: string;
export const SETTING_GSM_USERNAME: string;
export const SETTING_INFINIBAND_MAC_ADDRESS: string;
export const SETTING_INFINIBAND_MTU: string;
export const SETTING_INFINIBAND_PARENT: string;
export const SETTING_INFINIBAND_P_KEY: string;
export const SETTING_INFINIBAND_SETTING_NAME: string;
export const SETTING_INFINIBAND_TRANSPORT_MODE: string;
export const SETTING_IP4_CONFIG_DHCP_CLIENT_ID: string;
export const SETTING_IP4_CONFIG_DHCP_FQDN: string;
export const SETTING_IP4_CONFIG_DHCP_VENDOR_CLASS_IDENTIFIER: string;
export const SETTING_IP4_CONFIG_METHOD_AUTO: string;
export const SETTING_IP4_CONFIG_METHOD_DISABLED: string;
export const SETTING_IP4_CONFIG_METHOD_LINK_LOCAL: string;
export const SETTING_IP4_CONFIG_METHOD_MANUAL: string;
export const SETTING_IP4_CONFIG_METHOD_SHARED: string;
export const SETTING_IP4_CONFIG_SETTING_NAME: string;
export const SETTING_IP6_CONFIG_ADDR_GEN_MODE: string;
export const SETTING_IP6_CONFIG_DHCP_DUID: string;
export const SETTING_IP6_CONFIG_IP6_PRIVACY: string;
export const SETTING_IP6_CONFIG_METHOD_AUTO: string;
export const SETTING_IP6_CONFIG_METHOD_DHCP: string;
export const SETTING_IP6_CONFIG_METHOD_DISABLED: string;
export const SETTING_IP6_CONFIG_METHOD_IGNORE: string;
export const SETTING_IP6_CONFIG_METHOD_LINK_LOCAL: string;
export const SETTING_IP6_CONFIG_METHOD_MANUAL: string;
export const SETTING_IP6_CONFIG_METHOD_SHARED: string;
export const SETTING_IP6_CONFIG_RA_TIMEOUT: string;
export const SETTING_IP6_CONFIG_SETTING_NAME: string;
export const SETTING_IP6_CONFIG_TOKEN: string;
export const SETTING_IP_CONFIG_ADDRESSES: string;
export const SETTING_IP_CONFIG_DAD_TIMEOUT: string;
export const SETTING_IP_CONFIG_DAD_TIMEOUT_MAX: number;
export const SETTING_IP_CONFIG_DHCP_HOSTNAME: string;
export const SETTING_IP_CONFIG_DHCP_HOSTNAME_FLAGS: string;
export const SETTING_IP_CONFIG_DHCP_IAID: string;
export const SETTING_IP_CONFIG_DHCP_REJECT_SERVERS: string;
export const SETTING_IP_CONFIG_DHCP_SEND_HOSTNAME: string;
export const SETTING_IP_CONFIG_DHCP_TIMEOUT: string;
export const SETTING_IP_CONFIG_DNS: string;
export const SETTING_IP_CONFIG_DNS_OPTIONS: string;
export const SETTING_IP_CONFIG_DNS_PRIORITY: string;
export const SETTING_IP_CONFIG_DNS_SEARCH: string;
export const SETTING_IP_CONFIG_GATEWAY: string;
export const SETTING_IP_CONFIG_IGNORE_AUTO_DNS: string;
export const SETTING_IP_CONFIG_IGNORE_AUTO_ROUTES: string;
export const SETTING_IP_CONFIG_MAY_FAIL: string;
export const SETTING_IP_CONFIG_METHOD: string;
export const SETTING_IP_CONFIG_NEVER_DEFAULT: string;
export const SETTING_IP_CONFIG_ROUTES: string;
export const SETTING_IP_CONFIG_ROUTE_METRIC: string;
export const SETTING_IP_CONFIG_ROUTE_TABLE: string;
export const SETTING_IP_CONFIG_ROUTING_RULES: string;
export const SETTING_IP_TUNNEL_ENCAPSULATION_LIMIT: string;
export const SETTING_IP_TUNNEL_FLAGS: string;
export const SETTING_IP_TUNNEL_FLOW_LABEL: string;
export const SETTING_IP_TUNNEL_INPUT_KEY: string;
export const SETTING_IP_TUNNEL_LOCAL: string;
export const SETTING_IP_TUNNEL_MODE: string;
export const SETTING_IP_TUNNEL_MTU: string;
export const SETTING_IP_TUNNEL_OUTPUT_KEY: string;
export const SETTING_IP_TUNNEL_PARENT: string;
export const SETTING_IP_TUNNEL_PATH_MTU_DISCOVERY: string;
export const SETTING_IP_TUNNEL_REMOTE: string;
export const SETTING_IP_TUNNEL_SETTING_NAME: string;
export const SETTING_IP_TUNNEL_TOS: string;
export const SETTING_IP_TUNNEL_TTL: string;
export const SETTING_MACSEC_ENCRYPT: string;
export const SETTING_MACSEC_MKA_CAK: string;
export const SETTING_MACSEC_MKA_CAK_FLAGS: string;
export const SETTING_MACSEC_MKA_CAK_LENGTH: number;
export const SETTING_MACSEC_MKA_CKN: string;
export const SETTING_MACSEC_MKA_CKN_LENGTH: number;
export const SETTING_MACSEC_MODE: string;
export const SETTING_MACSEC_PARENT: string;
export const SETTING_MACSEC_PORT: string;
export const SETTING_MACSEC_SEND_SCI: string;
export const SETTING_MACSEC_SETTING_NAME: string;
export const SETTING_MACSEC_VALIDATION: string;
export const SETTING_MACVLAN_MODE: string;
export const SETTING_MACVLAN_PARENT: string;
export const SETTING_MACVLAN_PROMISCUOUS: string;
export const SETTING_MACVLAN_SETTING_NAME: string;
export const SETTING_MACVLAN_TAP: string;
export const SETTING_MATCH_DRIVER: string;
export const SETTING_MATCH_INTERFACE_NAME: string;
export const SETTING_MATCH_KERNEL_COMMAND_LINE: string;
export const SETTING_MATCH_PATH: string;
export const SETTING_MATCH_SETTING_NAME: string;
export const SETTING_NAME: string;
export const SETTING_OLPC_MESH_CHANNEL: string;
export const SETTING_OLPC_MESH_DHCP_ANYCAST_ADDRESS: string;
export const SETTING_OLPC_MESH_SETTING_NAME: string;
export const SETTING_OLPC_MESH_SSID: string;
export const SETTING_OVS_BRIDGE_DATAPATH_TYPE: string;
export const SETTING_OVS_BRIDGE_FAIL_MODE: string;
export const SETTING_OVS_BRIDGE_MCAST_SNOOPING_ENABLE: string;
export const SETTING_OVS_BRIDGE_RSTP_ENABLE: string;
export const SETTING_OVS_BRIDGE_SETTING_NAME: string;
export const SETTING_OVS_BRIDGE_STP_ENABLE: string;
export const SETTING_OVS_DPDK_DEVARGS: string;
export const SETTING_OVS_DPDK_SETTING_NAME: string;
export const SETTING_OVS_INTERFACE_SETTING_NAME: string;
export const SETTING_OVS_INTERFACE_TYPE: string;
export const SETTING_OVS_PATCH_PEER: string;
export const SETTING_OVS_PATCH_SETTING_NAME: string;
export const SETTING_OVS_PORT_BOND_DOWNDELAY: string;
export const SETTING_OVS_PORT_BOND_MODE: string;
export const SETTING_OVS_PORT_BOND_UPDELAY: string;
export const SETTING_OVS_PORT_LACP: string;
export const SETTING_OVS_PORT_SETTING_NAME: string;
export const SETTING_OVS_PORT_TAG: string;
export const SETTING_OVS_PORT_VLAN_MODE: string;
export const SETTING_PARAM_FUZZY_IGNORE: number;
export const SETTING_PARAM_REQUIRED: number;
export const SETTING_PARAM_SECRET: number;
export const SETTING_PPPOE_PARENT: string;
export const SETTING_PPPOE_PASSWORD: string;
export const SETTING_PPPOE_PASSWORD_FLAGS: string;
export const SETTING_PPPOE_SERVICE: string;
export const SETTING_PPPOE_SETTING_NAME: string;
export const SETTING_PPPOE_USERNAME: string;
export const SETTING_PPP_BAUD: string;
export const SETTING_PPP_CRTSCTS: string;
export const SETTING_PPP_LCP_ECHO_FAILURE: string;
export const SETTING_PPP_LCP_ECHO_INTERVAL: string;
export const SETTING_PPP_MPPE_STATEFUL: string;
export const SETTING_PPP_MRU: string;
export const SETTING_PPP_MTU: string;
export const SETTING_PPP_NOAUTH: string;
export const SETTING_PPP_NOBSDCOMP: string;
export const SETTING_PPP_NODEFLATE: string;
export const SETTING_PPP_NO_VJ_COMP: string;
export const SETTING_PPP_REFUSE_CHAP: string;
export const SETTING_PPP_REFUSE_EAP: string;
export const SETTING_PPP_REFUSE_MSCHAP: string;
export const SETTING_PPP_REFUSE_MSCHAPV2: string;
export const SETTING_PPP_REFUSE_PAP: string;
export const SETTING_PPP_REQUIRE_MPPE: string;
export const SETTING_PPP_REQUIRE_MPPE_128: string;
export const SETTING_PPP_SETTING_NAME: string;
export const SETTING_PROXY_BROWSER_ONLY: string;
export const SETTING_PROXY_METHOD: string;
export const SETTING_PROXY_PAC_SCRIPT: string;
export const SETTING_PROXY_PAC_URL: string;
export const SETTING_PROXY_SETTING_NAME: string;
export const SETTING_SERIAL_BAUD: string;
export const SETTING_SERIAL_BITS: string;
export const SETTING_SERIAL_PARITY: string;
export const SETTING_SERIAL_SEND_DELAY: string;
export const SETTING_SERIAL_SETTING_NAME: string;
export const SETTING_SERIAL_STOPBITS: string;
export const SETTING_SRIOV_AUTOPROBE_DRIVERS: string;
export const SETTING_SRIOV_SETTING_NAME: string;
export const SETTING_SRIOV_TOTAL_VFS: string;
export const SETTING_SRIOV_VFS: string;
export const SETTING_TC_CONFIG_QDISCS: string;
export const SETTING_TC_CONFIG_SETTING_NAME: string;
export const SETTING_TC_CONFIG_TFILTERS: string;
export const SETTING_TEAM_CONFIG: string;
export const SETTING_TEAM_LINK_WATCHERS: string;
export const SETTING_TEAM_MCAST_REJOIN_COUNT: string;
export const SETTING_TEAM_MCAST_REJOIN_INTERVAL: string;
export const SETTING_TEAM_NOTIFY_MCAST_COUNT_ACTIVEBACKUP_DEFAULT: number;
export const SETTING_TEAM_NOTIFY_PEERS_COUNT: string;
export const SETTING_TEAM_NOTIFY_PEERS_COUNT_ACTIVEBACKUP_DEFAULT: number;
export const SETTING_TEAM_NOTIFY_PEERS_INTERVAL: string;
export const SETTING_TEAM_PORT_CONFIG: string;
export const SETTING_TEAM_PORT_LACP_KEY: string;
export const SETTING_TEAM_PORT_LACP_PRIO: string;
export const SETTING_TEAM_PORT_LACP_PRIO_DEFAULT: number;
export const SETTING_TEAM_PORT_LINK_WATCHERS: string;
export const SETTING_TEAM_PORT_PRIO: string;
export const SETTING_TEAM_PORT_QUEUE_ID: string;
export const SETTING_TEAM_PORT_QUEUE_ID_DEFAULT: number;
export const SETTING_TEAM_PORT_SETTING_NAME: string;
export const SETTING_TEAM_PORT_STICKY: string;
export const SETTING_TEAM_RUNNER: string;
export const SETTING_TEAM_RUNNER_ACTIVE: string;
export const SETTING_TEAM_RUNNER_ACTIVEBACKUP: string;
export const SETTING_TEAM_RUNNER_AGG_SELECT_POLICY: string;
export const SETTING_TEAM_RUNNER_AGG_SELECT_POLICY_BANDWIDTH: string;
export const SETTING_TEAM_RUNNER_AGG_SELECT_POLICY_COUNT: string;
export const SETTING_TEAM_RUNNER_AGG_SELECT_POLICY_LACP_PRIO: string;
export const SETTING_TEAM_RUNNER_AGG_SELECT_POLICY_LACP_PRIO_STABLE: string;
export const SETTING_TEAM_RUNNER_AGG_SELECT_POLICY_PORT_CONFIG: string;
export const SETTING_TEAM_RUNNER_BROADCAST: string;
export const SETTING_TEAM_RUNNER_FAST_RATE: string;
export const SETTING_TEAM_RUNNER_HWADDR_POLICY: string;
export const SETTING_TEAM_RUNNER_HWADDR_POLICY_BY_ACTIVE: string;
export const SETTING_TEAM_RUNNER_HWADDR_POLICY_ONLY_ACTIVE: string;
export const SETTING_TEAM_RUNNER_HWADDR_POLICY_SAME_ALL: string;
export const SETTING_TEAM_RUNNER_LACP: string;
export const SETTING_TEAM_RUNNER_LOADBALANCE: string;
export const SETTING_TEAM_RUNNER_MIN_PORTS: string;
export const SETTING_TEAM_RUNNER_RANDOM: string;
export const SETTING_TEAM_RUNNER_ROUNDROBIN: string;
export const SETTING_TEAM_RUNNER_SYS_PRIO: string;
export const SETTING_TEAM_RUNNER_SYS_PRIO_DEFAULT: number;
export const SETTING_TEAM_RUNNER_TX_BALANCER: string;
export const SETTING_TEAM_RUNNER_TX_BALANCER_INTERVAL: string;
export const SETTING_TEAM_RUNNER_TX_BALANCER_INTERVAL_DEFAULT: number;
export const SETTING_TEAM_RUNNER_TX_HASH: string;
export const SETTING_TEAM_SETTING_NAME: string;
export const SETTING_TUN_GROUP: string;
export const SETTING_TUN_MODE: string;
export const SETTING_TUN_MULTI_QUEUE: string;
export const SETTING_TUN_OWNER: string;
export const SETTING_TUN_PI: string;
export const SETTING_TUN_SETTING_NAME: string;
export const SETTING_TUN_VNET_HDR: string;
export const SETTING_USER_DATA: string;
export const SETTING_USER_SETTING_NAME: string;
export const SETTING_VLAN_EGRESS_PRIORITY_MAP: string;
export const SETTING_VLAN_FLAGS: string;
export const SETTING_VLAN_ID: string;
export const SETTING_VLAN_INGRESS_PRIORITY_MAP: string;
export const SETTING_VLAN_PARENT: string;
export const SETTING_VLAN_SETTING_NAME: string;
export const SETTING_VPN_DATA: string;
export const SETTING_VPN_PERSISTENT: string;
export const SETTING_VPN_SECRETS: string;
export const SETTING_VPN_SERVICE_TYPE: string;
export const SETTING_VPN_SETTING_NAME: string;
export const SETTING_VPN_TIMEOUT: string;
export const SETTING_VPN_USER_NAME: string;
export const SETTING_VRF_SETTING_NAME: string;
export const SETTING_VRF_TABLE: string;
export const SETTING_VXLAN_AGEING: string;
export const SETTING_VXLAN_DESTINATION_PORT: string;
export const SETTING_VXLAN_ID: string;
export const SETTING_VXLAN_L2_MISS: string;
export const SETTING_VXLAN_L3_MISS: string;
export const SETTING_VXLAN_LEARNING: string;
export const SETTING_VXLAN_LIMIT: string;
export const SETTING_VXLAN_LOCAL: string;
export const SETTING_VXLAN_PARENT: string;
export const SETTING_VXLAN_PROXY: string;
export const SETTING_VXLAN_REMOTE: string;
export const SETTING_VXLAN_RSC: string;
export const SETTING_VXLAN_SETTING_NAME: string;
export const SETTING_VXLAN_SOURCE_PORT_MAX: string;
export const SETTING_VXLAN_SOURCE_PORT_MIN: string;
export const SETTING_VXLAN_TOS: string;
export const SETTING_VXLAN_TTL: string;
export const SETTING_WIFI_P2P_PEER: string;
export const SETTING_WIFI_P2P_SETTING_NAME: string;
export const SETTING_WIFI_P2P_WFD_IES: string;
export const SETTING_WIFI_P2P_WPS_METHOD: string;
export const SETTING_WIMAX_MAC_ADDRESS: string;
export const SETTING_WIMAX_NETWORK_NAME: string;
export const SETTING_WIMAX_SETTING_NAME: string;
export const SETTING_WIRED_AUTO_NEGOTIATE: string;
export const SETTING_WIRED_CLONED_MAC_ADDRESS: string;
export const SETTING_WIRED_DUPLEX: string;
export const SETTING_WIRED_GENERATE_MAC_ADDRESS_MASK: string;
export const SETTING_WIRED_MAC_ADDRESS: string;
export const SETTING_WIRED_MAC_ADDRESS_BLACKLIST: string;
export const SETTING_WIRED_MTU: string;
export const SETTING_WIRED_PORT: string;
export const SETTING_WIRED_S390_NETTYPE: string;
export const SETTING_WIRED_S390_OPTIONS: string;
export const SETTING_WIRED_S390_SUBCHANNELS: string;
export const SETTING_WIRED_SETTING_NAME: string;
export const SETTING_WIRED_SPEED: string;
export const SETTING_WIRED_WAKE_ON_LAN: string;
export const SETTING_WIRED_WAKE_ON_LAN_PASSWORD: string;
export const SETTING_WIREGUARD_FWMARK: string;
export const SETTING_WIREGUARD_IP4_AUTO_DEFAULT_ROUTE: string;
export const SETTING_WIREGUARD_IP6_AUTO_DEFAULT_ROUTE: string;
export const SETTING_WIREGUARD_LISTEN_PORT: string;
export const SETTING_WIREGUARD_MTU: string;
export const SETTING_WIREGUARD_PEERS: string;
export const SETTING_WIREGUARD_PEER_ROUTES: string;
export const SETTING_WIREGUARD_PRIVATE_KEY: string;
export const SETTING_WIREGUARD_PRIVATE_KEY_FLAGS: string;
export const SETTING_WIREGUARD_SETTING_NAME: string;
export const SETTING_WIRELESS_AP_ISOLATION: string;
export const SETTING_WIRELESS_BAND: string;
export const SETTING_WIRELESS_BSSID: string;
export const SETTING_WIRELESS_CHANNEL: string;
export const SETTING_WIRELESS_CLONED_MAC_ADDRESS: string;
export const SETTING_WIRELESS_GENERATE_MAC_ADDRESS_MASK: string;
export const SETTING_WIRELESS_HIDDEN: string;
export const SETTING_WIRELESS_MAC_ADDRESS: string;
export const SETTING_WIRELESS_MAC_ADDRESS_BLACKLIST: string;
export const SETTING_WIRELESS_MAC_ADDRESS_RANDOMIZATION: string;
export const SETTING_WIRELESS_MODE: string;
export const SETTING_WIRELESS_MODE_ADHOC: string;
export const SETTING_WIRELESS_MODE_AP: string;
export const SETTING_WIRELESS_MODE_INFRA: string;
export const SETTING_WIRELESS_MODE_MESH: string;
export const SETTING_WIRELESS_MTU: string;
export const SETTING_WIRELESS_POWERSAVE: string;
export const SETTING_WIRELESS_RATE: string;
export const SETTING_WIRELESS_SECURITY_AUTH_ALG: string;
export const SETTING_WIRELESS_SECURITY_FILS: string;
export const SETTING_WIRELESS_SECURITY_GROUP: string;
export const SETTING_WIRELESS_SECURITY_KEY_MGMT: string;
export const SETTING_WIRELESS_SECURITY_LEAP_PASSWORD: string;
export const SETTING_WIRELESS_SECURITY_LEAP_PASSWORD_FLAGS: string;
export const SETTING_WIRELESS_SECURITY_LEAP_USERNAME: string;
export const SETTING_WIRELESS_SECURITY_PAIRWISE: string;
export const SETTING_WIRELESS_SECURITY_PMF: string;
export const SETTING_WIRELESS_SECURITY_PROTO: string;
export const SETTING_WIRELESS_SECURITY_PSK: string;
export const SETTING_WIRELESS_SECURITY_PSK_FLAGS: string;
export const SETTING_WIRELESS_SECURITY_SETTING_NAME: string;
export const SETTING_WIRELESS_SECURITY_WEP_KEY0: string;
export const SETTING_WIRELESS_SECURITY_WEP_KEY1: string;
export const SETTING_WIRELESS_SECURITY_WEP_KEY2: string;
export const SETTING_WIRELESS_SECURITY_WEP_KEY3: string;
export const SETTING_WIRELESS_SECURITY_WEP_KEY_FLAGS: string;
export const SETTING_WIRELESS_SECURITY_WEP_KEY_TYPE: string;
export const SETTING_WIRELESS_SECURITY_WEP_TX_KEYIDX: string;
export const SETTING_WIRELESS_SECURITY_WPS_METHOD: string;
export const SETTING_WIRELESS_SEEN_BSSIDS: string;
export const SETTING_WIRELESS_SETTING_NAME: string;
export const SETTING_WIRELESS_SSID: string;
export const SETTING_WIRELESS_TX_POWER: string;
export const SETTING_WIRELESS_WAKE_ON_WLAN: string;
export const SETTING_WPAN_CHANNEL: string;
export const SETTING_WPAN_CHANNEL_DEFAULT: number;
export const SETTING_WPAN_MAC_ADDRESS: string;
export const SETTING_WPAN_PAGE: string;
export const SETTING_WPAN_PAGE_DEFAULT: number;
export const SETTING_WPAN_PAN_ID: string;
export const SETTING_WPAN_SETTING_NAME: string;
export const SETTING_WPAN_SHORT_ADDRESS: string;
export const SRIOV_VF_ATTRIBUTE_MAC: string;
export const SRIOV_VF_ATTRIBUTE_MAX_TX_RATE: string;
export const SRIOV_VF_ATTRIBUTE_MIN_TX_RATE: string;
export const SRIOV_VF_ATTRIBUTE_SPOOF_CHECK: string;
export const SRIOV_VF_ATTRIBUTE_TRUST: string;
export const TEAM_LINK_WATCHER_ARP_PING: string;
export const TEAM_LINK_WATCHER_ETHTOOL: string;
export const TEAM_LINK_WATCHER_NSNA_PING: string;
export const UTILS_HWADDR_LEN_MAX: number;
export const VLAN_FLAGS_ALL: number;
export const VPN_CONNECTION_BANNER: string;
export const VPN_CONNECTION_VPN_STATE: string;
export const VPN_DBUS_PLUGIN_INTERFACE: string;
export const VPN_DBUS_PLUGIN_PATH: string;
export const VPN_EDITOR_PLUGIN_DESCRIPTION: string;
export const VPN_EDITOR_PLUGIN_NAME: string;
export const VPN_EDITOR_PLUGIN_SERVICE: string;
export const VPN_PLUGIN_CAN_PERSIST: string;
export const VPN_PLUGIN_CONFIG_BANNER: string;
export const VPN_PLUGIN_CONFIG_EXT_GATEWAY: string;
export const VPN_PLUGIN_CONFIG_HAS_IP4: string;
export const VPN_PLUGIN_CONFIG_HAS_IP6: string;
export const VPN_PLUGIN_CONFIG_MTU: string;
export const VPN_PLUGIN_CONFIG_PROXY_PAC: string;
export const VPN_PLUGIN_CONFIG_TUNDEV: string;
export const VPN_PLUGIN_INFO_FILENAME: string;
export const VPN_PLUGIN_INFO_KEYFILE: string;
export const VPN_PLUGIN_INFO_KF_GROUP_CONNECTION: string;
export const VPN_PLUGIN_INFO_KF_GROUP_GNOME: string;
export const VPN_PLUGIN_INFO_KF_GROUP_LIBNM: string;
export const VPN_PLUGIN_INFO_NAME: string;
export const VPN_PLUGIN_IP4_CONFIG_ADDRESS: string;
export const VPN_PLUGIN_IP4_CONFIG_DNS: string;
export const VPN_PLUGIN_IP4_CONFIG_DOMAIN: string;
export const VPN_PLUGIN_IP4_CONFIG_DOMAINS: string;
export const VPN_PLUGIN_IP4_CONFIG_INT_GATEWAY: string;
export const VPN_PLUGIN_IP4_CONFIG_MSS: string;
export const VPN_PLUGIN_IP4_CONFIG_NBNS: string;
export const VPN_PLUGIN_IP4_CONFIG_NEVER_DEFAULT: string;
export const VPN_PLUGIN_IP4_CONFIG_PREFIX: string;
export const VPN_PLUGIN_IP4_CONFIG_PRESERVE_ROUTES: string;
export const VPN_PLUGIN_IP4_CONFIG_PTP: string;
export const VPN_PLUGIN_IP4_CONFIG_ROUTES: string;
export const VPN_PLUGIN_IP6_CONFIG_ADDRESS: string;
export const VPN_PLUGIN_IP6_CONFIG_DNS: string;
export const VPN_PLUGIN_IP6_CONFIG_DOMAIN: string;
export const VPN_PLUGIN_IP6_CONFIG_DOMAINS: string;
export const VPN_PLUGIN_IP6_CONFIG_INT_GATEWAY: string;
export const VPN_PLUGIN_IP6_CONFIG_MSS: string;
export const VPN_PLUGIN_IP6_CONFIG_NEVER_DEFAULT: string;
export const VPN_PLUGIN_IP6_CONFIG_PREFIX: string;
export const VPN_PLUGIN_IP6_CONFIG_PRESERVE_ROUTES: string;
export const VPN_PLUGIN_IP6_CONFIG_PTP: string;
export const VPN_PLUGIN_IP6_CONFIG_ROUTES: string;
export const VPN_PLUGIN_OLD_DBUS_SERVICE_NAME: string;
export const VPN_PLUGIN_OLD_STATE: string;
export const VPN_SERVICE_PLUGIN_DBUS_SERVICE_NAME: string;
export const VPN_SERVICE_PLUGIN_DBUS_WATCH_PEER: string;
export const VPN_SERVICE_PLUGIN_STATE: string;
export const WIFI_P2P_PEER_FLAGS: string;
export const WIFI_P2P_PEER_HW_ADDRESS: string;
export const WIFI_P2P_PEER_LAST_SEEN: string;
export const WIFI_P2P_PEER_MANUFACTURER: string;
export const WIFI_P2P_PEER_MODEL: string;
export const WIFI_P2P_PEER_MODEL_NUMBER: string;
export const WIFI_P2P_PEER_NAME: string;
export const WIFI_P2P_PEER_SERIAL: string;
export const WIFI_P2P_PEER_STRENGTH: string;
export const WIFI_P2P_PEER_WFD_IES: string;
export const WIMAX_NSP_NAME: string;
export const WIMAX_NSP_NETWORK_TYPE: string;
export const WIMAX_NSP_SIGNAL_QUALITY: string;
export const WIREGUARD_PEER_ATTR_ALLOWED_IPS: string;
export const WIREGUARD_PEER_ATTR_ENDPOINT: string;
export const WIREGUARD_PEER_ATTR_PERSISTENT_KEEPALIVE: string;
export const WIREGUARD_PEER_ATTR_PRESHARED_KEY: string;
export const WIREGUARD_PEER_ATTR_PRESHARED_KEY_FLAGS: string;
export const WIREGUARD_PEER_ATTR_PUBLIC_KEY: string;
export const WIREGUARD_PUBLIC_KEY_LEN: number;
export const WIREGUARD_SYMMETRIC_KEY_LEN: number;
export function agent_manager_error_quark(): GLib.Quark;
export function bridge_vlan_from_str(str: string): BridgeVlan;
export function client_error_quark(): GLib.Quark;
export function connection_error_quark(): GLib.Quark;
export function crypto_error_quark(): GLib.Quark;
export function device_error_quark(): GLib.Quark;
export function ethtool_optname_is_coalesce(optname?: string | null): boolean;
export function ethtool_optname_is_feature(optname?: string | null): boolean;
export function ethtool_optname_is_ring(optname?: string | null): boolean;
export function ip_route_attribute_validate(name: string, value: GLib.Variant, family: number): [boolean, boolean];
export function ip_route_get_variant_attribute_spec(): VariantAttributeSpec;
export function ip_routing_rule_from_string(
    str: string,
    to_string_flags: IPRoutingRuleAsStringFlags,
    extra_args?: GLib.HashTable<any, any> | null
): IPRoutingRule;
export function manager_error_quark(): GLib.Quark;
export function secret_agent_error_quark(): GLib.Quark;
export function settings_error_quark(): GLib.Quark;
export function sriov_vf_attribute_validate(name: string, value: GLib.Variant): [boolean, boolean];
export function utils_ap_mode_security_valid(type: UtilsSecurityType, wifi_caps: DeviceWifiCapabilities): boolean;
export function utils_base64secret_decode(
    base64_key: string,
    required_key_len: number,
    out_key?: number | null
): boolean;
export function utils_bin2hexstr(src: Uint8Array | string, final_len: number): string;
export function utils_bond_mode_int_to_string(mode: number): string;
export function utils_bond_mode_string_to_int(mode: string): number;
export function utils_check_virtual_device_compatibility(
    virtual_type: GObject.GType,
    other_type: GObject.GType
): boolean;
export function utils_enum_from_str(type: GObject.GType, str: string): [boolean, number | null, string | null];
export function utils_enum_get_values(type: GObject.GType, from: number, to: number): string[];
export function utils_enum_to_str(type: GObject.GType, value: number): string;
export function utils_escape_ssid(ssid: Uint8Array | string): string;
export function utils_file_is_certificate(filename: string): boolean;
export function utils_file_is_pkcs12(filename: string): boolean;
export function utils_file_is_private_key(filename: string): [boolean, boolean];
export function utils_file_search_in_paths(
    progname: string,
    try_first: string | null,
    paths: string | null,
    file_test_flags: GLib.FileTest,
    predicate: UtilsFileSearchInPathsPredicate
): string;
export function utils_format_variant_attributes(
    attributes: GLib.HashTable<any, any>,
    attr_separator: number,
    key_value_separator: number
): string;
export function utils_get_timestamp_msec(): number;
export function utils_hexstr2bin(hex: string): GLib.Bytes;
export function utils_hwaddr_atoba(asc: string, length: number): Uint8Array;
export function utils_hwaddr_aton(asc: string, buffer: Uint8Array | string): number;
export function utils_hwaddr_canonical(asc: string, length: number): string;
export function utils_hwaddr_len(type: number): number;
export function utils_hwaddr_matches(
    hwaddr1: any | null,
    hwaddr1_len: number,
    hwaddr2: any | null,
    hwaddr2_len: number
): boolean;
export function utils_hwaddr_ntoa(addr: Uint8Array | string): string;
export function utils_hwaddr_valid(asc: string, length: number): boolean;
export function utils_iface_valid_name(name?: string | null): boolean;
export function utils_ip4_addresses_from_variant(value: GLib.Variant): [IPAddress[], string | null];
export function utils_ip4_addresses_to_variant(addresses: IPAddress[], gateway?: string | null): GLib.Variant;
export function utils_ip4_dns_from_variant(value: GLib.Variant): string;
export function utils_ip4_dns_to_variant(dns: string): GLib.Variant;
export function utils_ip4_get_default_prefix(ip: number): number;
export function utils_ip4_netmask_to_prefix(netmask: number): number;
export function utils_ip4_prefix_to_netmask(prefix: number): number;
export function utils_ip4_routes_from_variant(value: GLib.Variant): IPRoute[];
export function utils_ip4_routes_to_variant(routes: IPRoute[]): GLib.Variant;
export function utils_ip6_addresses_from_variant(value: GLib.Variant): [IPAddress[], string | null];
export function utils_ip6_addresses_to_variant(addresses: IPAddress[], gateway?: string | null): GLib.Variant;
export function utils_ip6_dns_from_variant(value: GLib.Variant): string;
export function utils_ip6_dns_to_variant(dns: string): GLib.Variant;
export function utils_ip6_routes_from_variant(value: GLib.Variant): IPRoute[];
export function utils_ip6_routes_to_variant(routes: IPRoute[]): GLib.Variant;
export function utils_ip_addresses_from_variant(value: GLib.Variant, family: number): IPAddress[];
export function utils_ip_addresses_to_variant(addresses: IPAddress[]): GLib.Variant;
export function utils_ip_routes_from_variant(value: GLib.Variant, family: number): IPRoute[];
export function utils_ip_routes_to_variant(routes: IPRoute[]): GLib.Variant;
export function utils_ipaddr_valid(family: number, ip: string): boolean;
export function utils_is_empty_ssid(ssid: Uint8Array | string): boolean;
export function utils_is_json_object(str: string): boolean;
export function utils_is_uuid(str?: string | null): boolean;
export function utils_is_valid_iface_name(name?: string | null): boolean;
export function utils_parse_variant_attributes(
    string: string,
    attr_separator: number,
    key_value_separator: number,
    ignore_unknown: boolean,
    spec: VariantAttributeSpec
): GLib.HashTable<string, GLib.Variant>;
export function utils_same_ssid(
    ssid1: Uint8Array | string,
    ssid2: Uint8Array | string,
    ignore_trailing_null: boolean
): boolean;
export function utils_security_valid(
    type: UtilsSecurityType,
    wifi_caps: DeviceWifiCapabilities,
    have_ap: boolean,
    adhoc: boolean,
    ap_flags: __80211ApFlags,
    ap_wpa: __80211ApSecurityFlags,
    ap_rsn: __80211ApSecurityFlags
): boolean;
export function utils_sriov_vf_from_str(str: string): SriovVF;
export function utils_sriov_vf_to_str(vf: SriovVF, omit_index: boolean): string;
export function utils_ssid_to_utf8(ssid: Uint8Array | string): string;
export function utils_tc_action_from_str(str: string): TCAction;
export function utils_tc_action_to_str(action: TCAction): string;
export function utils_tc_qdisc_from_str(str: string): TCQdisc;
export function utils_tc_qdisc_to_str(qdisc: TCQdisc): string;
export function utils_tc_tfilter_from_str(str: string): TCTfilter;
export function utils_tc_tfilter_to_str(tfilter: TCTfilter): string;
export function utils_uuid_generate(): string;
export function utils_version(): number;
export function utils_wep_key_valid(key: string, wep_type: WepKeyType): boolean;
export function utils_wifi_2ghz_freqs(): number;
export function utils_wifi_5ghz_freqs(): number;
export function utils_wifi_channel_to_freq(channel: number, band: string): number;
export function utils_wifi_find_next_channel(channel: number, direction: number, band: string): number;
export function utils_wifi_freq_to_channel(freq: number): number;
export function utils_wifi_is_channel_valid(channel: number, band: string): boolean;
export function utils_wifi_strength_bars(strength: number): string;
export function utils_wpa_psk_valid(psk: string): boolean;
export function vpn_editor_plugin_load(plugin_name: string, check_service: string): VpnEditorPlugin;
export function vpn_editor_plugin_load_from_file(
    plugin_name: string,
    check_service: string,
    check_owner: number,
    check_file: UtilsCheckFilePredicate
): VpnEditorPlugin;
export function vpn_plugin_error_quark(): GLib.Quark;
export type SecretAgentOldDeleteSecretsFunc = (
    agent: SecretAgentOld,
    connection: Connection,
    error: GLib.Error
) => void;
export type SecretAgentOldGetSecretsFunc = (
    agent: SecretAgentOld,
    connection: Connection,
    secrets: GLib.Variant,
    error: GLib.Error
) => void;
export type SecretAgentOldSaveSecretsFunc = (agent: SecretAgentOld, connection: Connection, error: GLib.Error) => void;
export type SettingClearSecretsWithFlagsFn = (setting: Setting, secret: string, flags: SettingSecretFlags) => boolean;
export type SettingValueIterFn = (setting: Setting, key: string, value: any, flags: GObject.ParamFlags) => void;
export type UtilsCheckFilePredicate = (filename: string, stat?: any | null) => boolean;
export type UtilsFileSearchInPathsPredicate = (filename: string) => boolean;
export type UtilsPredicateStr = (str: string) => boolean;
export type VpnIterFunc = (key: string, value: string) => void;
export type _ConnectionForEachSecretFunc = (flags: SettingSecretFlags) => boolean;

export namespace __80211Mode {
    export const $gtype: GObject.GType<__80211Mode>;
}

export enum __80211Mode {
    UNKNOWN = 0,
    ADHOC = 1,
    INFRA = 2,
    AP = 3,
    MESH = 4,
}

export namespace ActiveConnectionState {
    export const $gtype: GObject.GType<ActiveConnectionState>;
}

export enum ActiveConnectionState {
    UNKNOWN = 0,
    ACTIVATING = 1,
    ACTIVATED = 2,
    DEACTIVATING = 3,
    DEACTIVATED = 4,
}

export namespace ActiveConnectionStateReason {
    export const $gtype: GObject.GType<ActiveConnectionStateReason>;
}

export enum ActiveConnectionStateReason {
    UNKNOWN = 0,
    NONE = 1,
    USER_DISCONNECTED = 2,
    DEVICE_DISCONNECTED = 3,
    SERVICE_STOPPED = 4,
    IP_CONFIG_INVALID = 5,
    CONNECT_TIMEOUT = 6,
    SERVICE_START_TIMEOUT = 7,
    SERVICE_START_FAILED = 8,
    NO_SECRETS = 9,
    LOGIN_FAILED = 10,
    CONNECTION_REMOVED = 11,
    DEPENDENCY_FAILED = 12,
    DEVICE_REALIZE_FAILED = 13,
    DEVICE_REMOVED = 14,
}

export class AgentManagerError extends GLib.Error {
    static $gtype: GObject.GType<AgentManagerError>;

    constructor(options: { message: string; code: number });
    constructor(copy: AgentManagerError);

    // Properties
    static FAILED: number;
    static PERMISSIONDENIED: number;
    static INVALIDIDENTIFIER: number;
    static NOTREGISTERED: number;
    static NOSECRETS: number;
    static USERCANCELED: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace Capability {
    export const $gtype: GObject.GType<Capability>;
}

export enum Capability {
    TEAM = 1,
    OVS = 2,
}

export class ClientError extends GLib.Error {
    static $gtype: GObject.GType<ClientError>;

    constructor(options: { message: string; code: number });
    constructor(copy: ClientError);

    // Properties
    static FAILED: number;
    static MANAGER_NOT_RUNNING: number;
    static OBJECT_CREATION_FAILED: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace ClientPermission {
    export const $gtype: GObject.GType<ClientPermission>;
}

export enum ClientPermission {
    NONE = 0,
    ENABLE_DISABLE_NETWORK = 1,
    ENABLE_DISABLE_WIFI = 2,
    ENABLE_DISABLE_WWAN = 3,
    ENABLE_DISABLE_WIMAX = 4,
    SLEEP_WAKE = 5,
    NETWORK_CONTROL = 6,
    WIFI_SHARE_PROTECTED = 7,
    WIFI_SHARE_OPEN = 8,
    SETTINGS_MODIFY_SYSTEM = 9,
    SETTINGS_MODIFY_OWN = 10,
    SETTINGS_MODIFY_HOSTNAME = 11,
    SETTINGS_MODIFY_GLOBAL_DNS = 12,
    RELOAD = 13,
    CHECKPOINT_ROLLBACK = 14,
    ENABLE_DISABLE_STATISTICS = 15,
    ENABLE_DISABLE_CONNECTIVITY_CHECK = 16,
    WIFI_SCAN = 17,
    LAST = 17,
}

export namespace ClientPermissionResult {
    export const $gtype: GObject.GType<ClientPermissionResult>;
}

export enum ClientPermissionResult {
    UNKNOWN = 0,
    YES = 1,
    AUTH = 2,
    NO = 3,
}

export class ConnectionError extends GLib.Error {
    static $gtype: GObject.GType<ConnectionError>;

    constructor(options: { message: string; code: number });
    constructor(copy: ConnectionError);

    // Properties
    static FAILED: number;
    static SETTINGNOTFOUND: number;
    static PROPERTYNOTFOUND: number;
    static PROPERTYNOTSECRET: number;
    static MISSINGSETTING: number;
    static INVALIDSETTING: number;
    static MISSINGPROPERTY: number;
    static INVALIDPROPERTY: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace ConnectionMultiConnect {
    export const $gtype: GObject.GType<ConnectionMultiConnect>;
}

export enum ConnectionMultiConnect {
    DEFAULT = 0,
    SINGLE = 1,
    MANUAL_MULTIPLE = 2,
    MULTIPLE = 3,
}

export namespace ConnectivityState {
    export const $gtype: GObject.GType<ConnectivityState>;
}

export enum ConnectivityState {
    UNKNOWN = 0,
    NONE = 1,
    PORTAL = 2,
    LIMITED = 3,
    FULL = 4,
}

export class CryptoError extends GLib.Error {
    static $gtype: GObject.GType<CryptoError>;

    constructor(options: { message: string; code: number });
    constructor(copy: CryptoError);

    // Properties
    static FAILED: number;
    static INVALID_DATA: number;
    static INVALID_PASSWORD: number;
    static UNKNOWN_CIPHER: number;
    static DECRYPTION_FAILED: number;
    static ENCRYPTION_FAILED: number;

    // Members
    static quark(): GLib.Quark;
}

export class DeviceError extends GLib.Error {
    static $gtype: GObject.GType<DeviceError>;

    constructor(options: { message: string; code: number });
    constructor(copy: DeviceError);

    // Properties
    static FAILED: number;
    static CREATIONFAILED: number;
    static INVALIDCONNECTION: number;
    static INCOMPATIBLECONNECTION: number;
    static NOTACTIVE: number;
    static NOTSOFTWARE: number;
    static NOTALLOWED: number;
    static SPECIFICOBJECTNOTFOUND: number;
    static VERSIONIDMISMATCH: number;
    static MISSINGDEPENDENCIES: number;
    static INVALIDARGUMENT: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace DeviceState {
    export const $gtype: GObject.GType<DeviceState>;
}

export enum DeviceState {
    UNKNOWN = 0,
    UNMANAGED = 10,
    UNAVAILABLE = 20,
    DISCONNECTED = 30,
    PREPARE = 40,
    CONFIG = 50,
    NEED_AUTH = 60,
    IP_CONFIG = 70,
    IP_CHECK = 80,
    SECONDARIES = 90,
    ACTIVATED = 100,
    DEACTIVATING = 110,
    FAILED = 120,
}

export namespace DeviceStateReason {
    export const $gtype: GObject.GType<DeviceStateReason>;
}

export enum DeviceStateReason {
    NONE = 0,
    UNKNOWN = 1,
    NOW_MANAGED = 2,
    NOW_UNMANAGED = 3,
    CONFIG_FAILED = 4,
    IP_CONFIG_UNAVAILABLE = 5,
    IP_CONFIG_EXPIRED = 6,
    NO_SECRETS = 7,
    SUPPLICANT_DISCONNECT = 8,
    SUPPLICANT_CONFIG_FAILED = 9,
    SUPPLICANT_FAILED = 10,
    SUPPLICANT_TIMEOUT = 11,
    PPP_START_FAILED = 12,
    PPP_DISCONNECT = 13,
    PPP_FAILED = 14,
    DHCP_START_FAILED = 15,
    DHCP_ERROR = 16,
    DHCP_FAILED = 17,
    SHARED_START_FAILED = 18,
    SHARED_FAILED = 19,
    AUTOIP_START_FAILED = 20,
    AUTOIP_ERROR = 21,
    AUTOIP_FAILED = 22,
    MODEM_BUSY = 23,
    MODEM_NO_DIAL_TONE = 24,
    MODEM_NO_CARRIER = 25,
    MODEM_DIAL_TIMEOUT = 26,
    MODEM_DIAL_FAILED = 27,
    MODEM_INIT_FAILED = 28,
    GSM_APN_FAILED = 29,
    GSM_REGISTRATION_NOT_SEARCHING = 30,
    GSM_REGISTRATION_DENIED = 31,
    GSM_REGISTRATION_TIMEOUT = 32,
    GSM_REGISTRATION_FAILED = 33,
    GSM_PIN_CHECK_FAILED = 34,
    FIRMWARE_MISSING = 35,
    REMOVED = 36,
    SLEEPING = 37,
    CONNECTION_REMOVED = 38,
    USER_REQUESTED = 39,
    CARRIER = 40,
    CONNECTION_ASSUMED = 41,
    SUPPLICANT_AVAILABLE = 42,
    MODEM_NOT_FOUND = 43,
    BT_FAILED = 44,
    GSM_SIM_NOT_INSERTED = 45,
    GSM_SIM_PIN_REQUIRED = 46,
    GSM_SIM_PUK_REQUIRED = 47,
    GSM_SIM_WRONG = 48,
    INFINIBAND_MODE = 49,
    DEPENDENCY_FAILED = 50,
    BR2684_FAILED = 51,
    MODEM_MANAGER_UNAVAILABLE = 52,
    SSID_NOT_FOUND = 53,
    SECONDARY_CONNECTION_FAILED = 54,
    DCB_FCOE_FAILED = 55,
    TEAMD_CONTROL_FAILED = 56,
    MODEM_FAILED = 57,
    MODEM_AVAILABLE = 58,
    SIM_PIN_INCORRECT = 59,
    NEW_ACTIVATION = 60,
    PARENT_CHANGED = 61,
    PARENT_MANAGED_CHANGED = 62,
    OVSDB_FAILED = 63,
    IP_ADDRESS_DUPLICATE = 64,
    IP_METHOD_UNSUPPORTED = 65,
    SRIOV_CONFIGURATION_FAILED = 66,
    PEER_NOT_FOUND = 67,
}

export namespace DeviceType {
    export const $gtype: GObject.GType<DeviceType>;
}

export enum DeviceType {
    UNKNOWN = 0,
    ETHERNET = 1,
    WIFI = 2,
    UNUSED1 = 3,
    UNUSED2 = 4,
    BT = 5,
    OLPC_MESH = 6,
    WIMAX = 7,
    MODEM = 8,
    INFINIBAND = 9,
    BOND = 10,
    VLAN = 11,
    ADSL = 12,
    BRIDGE = 13,
    GENERIC = 14,
    TEAM = 15,
    TUN = 16,
    IP_TUNNEL = 17,
    MACVLAN = 18,
    VXLAN = 19,
    VETH = 20,
    MACSEC = 21,
    DUMMY = 22,
    PPP = 23,
    OVS_INTERFACE = 24,
    OVS_PORT = 25,
    OVS_BRIDGE = 26,
    WPAN = 27,
    "6LOWPAN" = 28,
    WIREGUARD = 29,
    WIFI_P2P = 30,
    VRF = 31,
}

export namespace IPTunnelMode {
    export const $gtype: GObject.GType<IPTunnelMode>;
}

export enum IPTunnelMode {
    UNKNOWN = 0,
    IPIP = 1,
    GRE = 2,
    SIT = 3,
    ISATAP = 4,
    VTI = 5,
    IP6IP6 = 6,
    IPIP6 = 7,
    IP6GRE = 8,
    VTI6 = 9,
    GRETAP = 10,
    IP6GRETAP = 11,
}

export class ManagerError extends GLib.Error {
    static $gtype: GObject.GType<ManagerError>;

    constructor(options: { message: string; code: number });
    constructor(copy: ManagerError);

    // Properties
    static FAILED: number;
    static PERMISSIONDENIED: number;
    static UNKNOWNCONNECTION: number;
    static UNKNOWNDEVICE: number;
    static CONNECTIONNOTAVAILABLE: number;
    static CONNECTIONNOTACTIVE: number;
    static CONNECTIONALREADYACTIVE: number;
    static DEPENDENCYFAILED: number;
    static ALREADYASLEEPORAWAKE: number;
    static ALREADYENABLEDORDISABLED: number;
    static UNKNOWNLOGLEVEL: number;
    static UNKNOWNLOGDOMAIN: number;
    static INVALIDARGUMENTS: number;
    static MISSINGPLUGIN: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace Metered {
    export const $gtype: GObject.GType<Metered>;
}

export enum Metered {
    UNKNOWN = 0,
    YES = 1,
    NO = 2,
    GUESS_YES = 3,
    GUESS_NO = 4,
}

export namespace RollbackResult {
    export const $gtype: GObject.GType<RollbackResult>;
}

export enum RollbackResult {
    OK = 0,
    ERR_NO_DEVICE = 1,
    ERR_DEVICE_UNMANAGED = 2,
    ERR_FAILED = 3,
}

export class SecretAgentError extends GLib.Error {
    static $gtype: GObject.GType<SecretAgentError>;

    constructor(options: { message: string; code: number });
    constructor(copy: SecretAgentError);

    // Properties
    static FAILED: number;
    static PERMISSIONDENIED: number;
    static INVALIDCONNECTION: number;
    static USERCANCELED: number;
    static AGENTCANCELED: number;
    static NOSECRETS: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace Setting8021xCKFormat {
    export const $gtype: GObject.GType<Setting8021xCKFormat>;
}

export enum Setting8021xCKFormat {
    UNKNOWN = 0,
    X509 = 1,
    RAW_KEY = 2,
    PKCS12 = 3,
}

export namespace Setting8021xCKScheme {
    export const $gtype: GObject.GType<Setting8021xCKScheme>;
}

export enum Setting8021xCKScheme {
    UNKNOWN = 0,
    BLOB = 1,
    PATH = 2,
    PKCS11 = 3,
}

export namespace SettingCompareFlags {
    export const $gtype: GObject.GType<SettingCompareFlags>;
}

export enum SettingCompareFlags {
    EXACT = 0,
    FUZZY = 1,
    IGNORE_ID = 2,
    IGNORE_SECRETS = 4,
    IGNORE_AGENT_OWNED_SECRETS = 8,
    IGNORE_NOT_SAVED_SECRETS = 16,
    DIFF_RESULT_WITH_DEFAULT = 32,
    DIFF_RESULT_NO_DEFAULT = 64,
    IGNORE_TIMESTAMP = 128,
}

export namespace SettingConnectionAutoconnectSlaves {
    export const $gtype: GObject.GType<SettingConnectionAutoconnectSlaves>;
}

export enum SettingConnectionAutoconnectSlaves {
    DEFAULT = -1,
    NO = 0,
    YES = 1,
}

export namespace SettingConnectionLldp {
    export const $gtype: GObject.GType<SettingConnectionLldp>;
}

export enum SettingConnectionLldp {
    DEFAULT = -1,
    DISABLE = 0,
    ENABLE_RX = 1,
}

export namespace SettingConnectionLlmnr {
    export const $gtype: GObject.GType<SettingConnectionLlmnr>;
}

export enum SettingConnectionLlmnr {
    DEFAULT = -1,
    NO = 0,
    RESOLVE = 1,
    YES = 2,
}

export namespace SettingConnectionMdns {
    export const $gtype: GObject.GType<SettingConnectionMdns>;
}

export enum SettingConnectionMdns {
    DEFAULT = -1,
    NO = 0,
    RESOLVE = 1,
    YES = 2,
}

export namespace SettingDiffResult {
    export const $gtype: GObject.GType<SettingDiffResult>;
}

export enum SettingDiffResult {
    UNKNOWN = 0,
    IN_A = 1,
    IN_B = 2,
    IN_A_DEFAULT = 4,
    IN_B_DEFAULT = 8,
}

export namespace SettingIP6ConfigAddrGenMode {
    export const $gtype: GObject.GType<SettingIP6ConfigAddrGenMode>;
}

export enum SettingIP6ConfigAddrGenMode {
    EUI64 = 0,
    STABLE_PRIVACY = 1,
}

export namespace SettingIP6ConfigPrivacy {
    export const $gtype: GObject.GType<SettingIP6ConfigPrivacy>;
}

export enum SettingIP6ConfigPrivacy {
    UNKNOWN = -1,
    DISABLED = 0,
    PREFER_PUBLIC_ADDR = 1,
    PREFER_TEMP_ADDR = 2,
}

export namespace SettingMacRandomization {
    export const $gtype: GObject.GType<SettingMacRandomization>;
}

export enum SettingMacRandomization {
    DEFAULT = 0,
    NEVER = 1,
    ALWAYS = 2,
}

export namespace SettingMacsecMode {
    export const $gtype: GObject.GType<SettingMacsecMode>;
}

export enum SettingMacsecMode {
    PSK = 0,
    EAP = 1,
}

export namespace SettingMacsecValidation {
    export const $gtype: GObject.GType<SettingMacsecValidation>;
}

export enum SettingMacsecValidation {
    DISABLE = 0,
    CHECK = 1,
    STRICT = 2,
}

export namespace SettingMacvlanMode {
    export const $gtype: GObject.GType<SettingMacvlanMode>;
}

export enum SettingMacvlanMode {
    UNKNOWN = 0,
    VEPA = 1,
    BRIDGE = 2,
    PRIVATE = 3,
    PASSTHRU = 4,
    SOURCE = 5,
}

export namespace SettingProxyMethod {
    export const $gtype: GObject.GType<SettingProxyMethod>;
}

export enum SettingProxyMethod {
    NONE = 0,
    AUTO = 1,
}

export namespace SettingSerialParity {
    export const $gtype: GObject.GType<SettingSerialParity>;
}

export enum SettingSerialParity {
    NONE = 0,
    EVEN = 1,
    ODD = 2,
}

export namespace SettingTunMode {
    export const $gtype: GObject.GType<SettingTunMode>;
}

export enum SettingTunMode {
    UNKNOWN = 0,
    TUN = 1,
    TAP = 2,
}

export namespace SettingWirelessPowersave {
    export const $gtype: GObject.GType<SettingWirelessPowersave>;
}

export enum SettingWirelessPowersave {
    DEFAULT = 0,
    IGNORE = 1,
    DISABLE = 2,
    ENABLE = 3,
}

export namespace SettingWirelessSecurityFils {
    export const $gtype: GObject.GType<SettingWirelessSecurityFils>;
}

export enum SettingWirelessSecurityFils {
    DEFAULT = 0,
    DISABLE = 1,
    OPTIONAL = 2,
    REQUIRED = 3,
}

export namespace SettingWirelessSecurityPmf {
    export const $gtype: GObject.GType<SettingWirelessSecurityPmf>;
}

export enum SettingWirelessSecurityPmf {
    DEFAULT = 0,
    DISABLE = 1,
    OPTIONAL = 2,
    REQUIRED = 3,
}

export class SettingsError extends GLib.Error {
    static $gtype: GObject.GType<SettingsError>;

    constructor(options: { message: string; code: number });
    constructor(copy: SettingsError);

    // Properties
    static FAILED: number;
    static PERMISSIONDENIED: number;
    static NOTSUPPORTED: number;
    static INVALIDCONNECTION: number;
    static READONLYCONNECTION: number;
    static UUIDEXISTS: number;
    static INVALIDHOSTNAME: number;
    static INVALIDARGUMENTS: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace SriovVFVlanProtocol {
    export const $gtype: GObject.GType<SriovVFVlanProtocol>;
}

export enum SriovVFVlanProtocol {
    "1Q" = 0,
    "1AD" = 1,
}

export namespace State {
    export const $gtype: GObject.GType<State>;
}

export enum State {
    UNKNOWN = 0,
    ASLEEP = 10,
    DISCONNECTED = 20,
    DISCONNECTING = 30,
    CONNECTING = 40,
    CONNECTED_LOCAL = 50,
    CONNECTED_SITE = 60,
    CONNECTED_GLOBAL = 70,
}

export namespace Ternary {
    export const $gtype: GObject.GType<Ternary>;
}

export enum Ternary {
    DEFAULT = -1,
    FALSE = 0,
    TRUE = 1,
}

export namespace UtilsSecurityType {
    export const $gtype: GObject.GType<UtilsSecurityType>;
}

export enum UtilsSecurityType {
    INVALID = 0,
    NONE = 1,
    STATIC_WEP = 2,
    LEAP = 3,
    DYNAMIC_WEP = 4,
    WPA_PSK = 5,
    WPA_ENTERPRISE = 6,
    WPA2_PSK = 7,
    WPA2_ENTERPRISE = 8,
    SAE = 9,
    OWE = 10,
}

export namespace VlanPriorityMap {
    export const $gtype: GObject.GType<VlanPriorityMap>;
}

export enum VlanPriorityMap {
    INGRESS_MAP = 0,
    EGRESS_MAP = 1,
}

export namespace VpnConnectionState {
    export const $gtype: GObject.GType<VpnConnectionState>;
}

export enum VpnConnectionState {
    UNKNOWN = 0,
    PREPARE = 1,
    NEED_AUTH = 2,
    CONNECT = 3,
    IP_CONFIG_GET = 4,
    ACTIVATED = 5,
    FAILED = 6,
    DISCONNECTED = 7,
}

export namespace VpnConnectionStateReason {
    export const $gtype: GObject.GType<VpnConnectionStateReason>;
}

export enum VpnConnectionStateReason {
    VPN_CONNECTION_STATE_REASON_UNKNOWN = 0,
    VPN_CONNECTION_STATE_REASON_NONE = 1,
    VPN_CONNECTION_STATE_REASON_USER_DISCONNECTED = 2,
    ACTIVE_CONNECTION_STATE_REASON_USER_DISCONNECTED = 2,
    VPN_CONNECTION_STATE_REASON_DEVICE_DISCONNECTED = 3,
    ACTIVE_CONNECTION_STATE_REASON_DEVICE_DISCONNECTED = 3,
    VPN_CONNECTION_STATE_REASON_SERVICE_STOPPED = 4,
    ACTIVE_CONNECTION_STATE_REASON_SERVICE_STOPPED = 4,
    VPN_CONNECTION_STATE_REASON_IP_CONFIG_INVALID = 5,
    ACTIVE_CONNECTION_STATE_REASON_IP_CONFIG_INVALID = 5,
    VPN_CONNECTION_STATE_REASON_CONNECT_TIMEOUT = 6,
    ACTIVE_CONNECTION_STATE_REASON_CONNECT_TIMEOUT = 6,
    VPN_CONNECTION_STATE_REASON_SERVICE_START_TIMEOUT = 7,
    ACTIVE_CONNECTION_STATE_REASON_SERVICE_START_TIMEOUT = 7,
    VPN_CONNECTION_STATE_REASON_SERVICE_START_FAILED = 8,
    ACTIVE_CONNECTION_STATE_REASON_SERVICE_START_FAILED = 8,
    VPN_CONNECTION_STATE_REASON_NO_SECRETS = 9,
    VPN_CONNECTION_STATE_REASON_LOGIN_FAILED = 10,
    VPN_CONNECTION_STATE_REASON_CONNECTION_REMOVED = 11,
    ACTIVE_CONNECTION_STATE_REASON_CONNECTION_REMOVED = 11,
}

export class VpnPluginError extends GLib.Error {
    static $gtype: GObject.GType<VpnPluginError>;

    constructor(options: { message: string; code: number });
    constructor(copy: VpnPluginError);

    // Properties
    static FAILED: number;
    static STARTINGINPROGRESS: number;
    static ALREADYSTARTED: number;
    static STOPPINGINPROGRESS: number;
    static ALREADYSTOPPED: number;
    static WRONGSTATE: number;
    static BADARGUMENTS: number;
    static LAUNCHFAILED: number;
    static INVALIDCONNECTION: number;
    static INTERACTIVENOTSUPPORTED: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace VpnPluginFailure {
    export const $gtype: GObject.GType<VpnPluginFailure>;
}

export enum VpnPluginFailure {
    LOGIN_FAILED = 0,
    CONNECT_FAILED = 1,
    BAD_IP_CONFIG = 2,
}

export namespace VpnServiceState {
    export const $gtype: GObject.GType<VpnServiceState>;
}

export enum VpnServiceState {
    UNKNOWN = 0,
    INIT = 1,
    SHUTDOWN = 2,
    STARTING = 3,
    STARTED = 4,
    STOPPING = 5,
    STOPPED = 6,
}

export namespace WepKeyType {
    export const $gtype: GObject.GType<WepKeyType>;
}

export enum WepKeyType {
    UNKNOWN = 0,
    KEY = 1,
    PASSPHRASE = 2,
}

export namespace WimaxNspNetworkType {
    export const $gtype: GObject.GType<WimaxNspNetworkType>;
}

export enum WimaxNspNetworkType {
    UNKNOWN = 0,
    HOME = 1,
    PARTNER = 2,
    ROAMING_PARTNER = 3,
}

export namespace __80211ApFlags {
    export const $gtype: GObject.GType<__80211ApFlags>;
}

export enum __80211ApFlags {
    NONE = 0,
    PRIVACY = 1,
    WPS = 2,
    WPS_PBC = 4,
    WPS_PIN = 8,
}

export namespace __80211ApSecurityFlags {
    export const $gtype: GObject.GType<__80211ApSecurityFlags>;
}

export enum __80211ApSecurityFlags {
    NONE = 0,
    PAIR_WEP40 = 1,
    PAIR_WEP104 = 2,
    PAIR_TKIP = 4,
    PAIR_CCMP = 8,
    GROUP_WEP40 = 16,
    GROUP_WEP104 = 32,
    GROUP_TKIP = 64,
    GROUP_CCMP = 128,
    KEY_MGMT_PSK = 256,
    KEY_MGMT_802_1X = 512,
    KEY_MGMT_SAE = 1024,
    KEY_MGMT_OWE = 2048,
    KEY_MGMT_OWE_TM = 4096,
}

export namespace ActivationStateFlags {
    export const $gtype: GObject.GType<ActivationStateFlags>;
}

export enum ActivationStateFlags {
    NONE = 0,
    IS_MASTER = 1,
    IS_SLAVE = 2,
    LAYER2_READY = 4,
    IP4_READY = 8,
    IP6_READY = 16,
    MASTER_HAS_SLAVES = 32,
    LIFETIME_BOUND_TO_PROFILE_VISIBILITY = 64,
    EXTERNAL = 128,
}

export namespace BluetoothCapabilities {
    export const $gtype: GObject.GType<BluetoothCapabilities>;
}

export enum BluetoothCapabilities {
    NONE = 0,
    DUN = 1,
    NAP = 2,
}

export namespace CheckpointCreateFlags {
    export const $gtype: GObject.GType<CheckpointCreateFlags>;
}

export enum CheckpointCreateFlags {
    NONE = 0,
    DESTROY_ALL = 1,
    DELETE_NEW_CONNECTIONS = 2,
    DISCONNECT_NEW_DEVICES = 4,
    ALLOW_OVERLAPPING = 8,
}

export namespace ClientInstanceFlags {
    export const $gtype: GObject.GType<ClientInstanceFlags>;
}

export enum ClientInstanceFlags {
    NONE = 0,
    NO_AUTO_FETCH_PERMISSIONS = 1,
}

export namespace ConnectionSerializationFlags {
    export const $gtype: GObject.GType<ConnectionSerializationFlags>;
}

export enum ConnectionSerializationFlags {
    ALL = 0,
    NO_SECRETS = 1,
    ONLY_SECRETS = 2,
    WITH_SECRETS_AGENT_OWNED = 4,
}

export namespace DeviceCapabilities {
    export const $gtype: GObject.GType<DeviceCapabilities>;
}

export enum DeviceCapabilities {
    NONE = 0,
    NM_SUPPORTED = 1,
    CARRIER_DETECT = 2,
    IS_SOFTWARE = 4,
    SRIOV = 8,
}

export namespace DeviceInterfaceFlags {
    export const $gtype: GObject.GType<DeviceInterfaceFlags>;
}

export enum DeviceInterfaceFlags {
    UP = 1,
    LOWER_UP = 2,
    CARRIER = 65536,
}

export namespace DeviceModemCapabilities {
    export const $gtype: GObject.GType<DeviceModemCapabilities>;
}

export enum DeviceModemCapabilities {
    NONE = 0,
    POTS = 1,
    CDMA_EVDO = 2,
    GSM_UMTS = 4,
    LTE = 8,
}

export namespace DeviceWifiCapabilities {
    export const $gtype: GObject.GType<DeviceWifiCapabilities>;
}

export enum DeviceWifiCapabilities {
    NONE = 0,
    CIPHER_WEP40 = 1,
    CIPHER_WEP104 = 2,
    CIPHER_TKIP = 4,
    CIPHER_CCMP = 8,
    WPA = 16,
    RSN = 32,
    AP = 64,
    ADHOC = 128,
    FREQ_VALID = 256,
    FREQ_2GHZ = 512,
    FREQ_5GHZ = 1024,
    MESH = 4096,
    IBSS_RSN = 8192,
}

export namespace DhcpHostnameFlags {
    export const $gtype: GObject.GType<DhcpHostnameFlags>;
}

export enum DhcpHostnameFlags {
    NONE = 0,
    FQDN_SERV_UPDATE = 1,
    FQDN_ENCODED = 2,
    FQDN_NO_UPDATE = 4,
    FQDN_CLEAR_FLAGS = 8,
}

export namespace IPAddressCmpFlags {
    export const $gtype: GObject.GType<IPAddressCmpFlags>;
}

export enum IPAddressCmpFlags {
    NONE = 0,
    WITH_ATTRS = 1,
}

export namespace IPRoutingRuleAsStringFlags {
    export const $gtype: GObject.GType<IPRoutingRuleAsStringFlags>;
}

export enum IPRoutingRuleAsStringFlags {
    NONE = 0,
    AF_INET = 1,
    AF_INET6 = 2,
    VALIDATE = 4,
}

export namespace IPTunnelFlags {
    export const $gtype: GObject.GType<IPTunnelFlags>;
}

export enum IPTunnelFlags {
    NONE = 0,
    IP6_IGN_ENCAP_LIMIT = 1,
    IP6_USE_ORIG_TCLASS = 2,
    IP6_USE_ORIG_FLOWLABEL = 4,
    IP6_MIP6_DEV = 8,
    IP6_RCV_DSCP_COPY = 16,
    IP6_USE_ORIG_FWMARK = 32,
}

export namespace ManagerReloadFlags {
    export const $gtype: GObject.GType<ManagerReloadFlags>;
}

export enum ManagerReloadFlags {
    CONF = 1,
    DNS_RC = 2,
    DNS_FULL = 4,
}

export namespace SecretAgentCapabilities {
    export const $gtype: GObject.GType<SecretAgentCapabilities>;
}

export enum SecretAgentCapabilities {
    NONE = 0,
    VPN_HINTS = 1,
    LAST = 1,
}

export namespace SecretAgentGetSecretsFlags {
    export const $gtype: GObject.GType<SecretAgentGetSecretsFlags>;
}

export enum SecretAgentGetSecretsFlags {
    NONE = 0,
    ALLOW_INTERACTION = 1,
    REQUEST_NEW = 2,
    USER_REQUESTED = 4,
    WPS_PBC_ACTIVE = 8,
    ONLY_SYSTEM = 2147483648,
    NO_ERRORS = 1073741824,
}

export namespace Setting8021xAuthFlags {
    export const $gtype: GObject.GType<Setting8021xAuthFlags>;
}

export enum Setting8021xAuthFlags {
    NONE = 0,
    TLS_1_0_DISABLE = 1,
    TLS_1_1_DISABLE = 2,
    TLS_1_2_DISABLE = 4,
    ALL = 7,
}

export namespace SettingDcbFlags {
    export const $gtype: GObject.GType<SettingDcbFlags>;
}

export enum SettingDcbFlags {
    NONE = 0,
    ENABLE = 1,
    ADVERTISE = 2,
    WILLING = 4,
}

export namespace SettingSecretFlags {
    export const $gtype: GObject.GType<SettingSecretFlags>;
}

export enum SettingSecretFlags {
    NONE = 0,
    AGENT_OWNED = 1,
    NOT_SAVED = 2,
    NOT_REQUIRED = 4,
}

export namespace SettingWiredWakeOnLan {
    export const $gtype: GObject.GType<SettingWiredWakeOnLan>;
}

export enum SettingWiredWakeOnLan {
    PHY = 2,
    UNICAST = 4,
    MULTICAST = 8,
    BROADCAST = 16,
    ARP = 32,
    MAGIC = 64,
    DEFAULT = 1,
    IGNORE = 32768,
}

export namespace SettingWirelessSecurityWpsMethod {
    export const $gtype: GObject.GType<SettingWirelessSecurityWpsMethod>;
}

export enum SettingWirelessSecurityWpsMethod {
    DEFAULT = 0,
    DISABLED = 1,
    AUTO = 2,
    PBC = 4,
    PIN = 8,
}

export namespace SettingWirelessWakeOnWLan {
    export const $gtype: GObject.GType<SettingWirelessWakeOnWLan>;
}

export enum SettingWirelessWakeOnWLan {
    ANY = 2,
    DISCONNECT = 4,
    MAGIC = 8,
    GTK_REKEY_FAILURE = 16,
    EAP_IDENTITY_REQUEST = 32,
    "4WAY_HANDSHAKE" = 64,
    RFKILL_RELEASE = 128,
    TCP = 256,
    ALL = 510,
    DEFAULT = 1,
    IGNORE = 32768,
}

export namespace SettingsAddConnection2Flags {
    export const $gtype: GObject.GType<SettingsAddConnection2Flags>;
}

export enum SettingsAddConnection2Flags {
    NONE = 0,
    TO_DISK = 1,
    IN_MEMORY = 2,
    BLOCK_AUTOCONNECT = 32,
}

export namespace SettingsConnectionFlags {
    export const $gtype: GObject.GType<SettingsConnectionFlags>;
}

export enum SettingsConnectionFlags {
    NONE = 0,
    UNSAVED = 1,
    NM_GENERATED = 2,
    VOLATILE = 4,
    EXTERNAL = 8,
}

export namespace SettingsUpdate2Flags {
    export const $gtype: GObject.GType<SettingsUpdate2Flags>;
}

export enum SettingsUpdate2Flags {
    NONE = 0,
    TO_DISK = 1,
    IN_MEMORY = 2,
    IN_MEMORY_DETACHED = 4,
    IN_MEMORY_ONLY = 8,
    VOLATILE = 16,
    BLOCK_AUTOCONNECT = 32,
    NO_REAPPLY = 64,
}

export namespace TeamLinkWatcherArpPingFlags {
    export const $gtype: GObject.GType<TeamLinkWatcherArpPingFlags>;
}

export enum TeamLinkWatcherArpPingFlags {
    VALIDATE_ACTIVE = 2,
    VALIDATE_INACTIVE = 4,
    SEND_ALWAYS = 8,
}

export namespace VlanFlags {
    export const $gtype: GObject.GType<VlanFlags>;
}

export enum VlanFlags {
    REORDER_HEADERS = 1,
    GVRP = 2,
    LOOSE_BINDING = 4,
    MVRP = 8,
}

export namespace VpnEditorPluginCapability {
    export const $gtype: GObject.GType<VpnEditorPluginCapability>;
}

export enum VpnEditorPluginCapability {
    NONE = 0,
    IMPORT = 1,
    EXPORT = 2,
    IPV6 = 4,
}
export module AccessPoint {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
        bssid: string;
        flags: __80211ApFlags;
        frequency: number;
        hw_address: string;
        hwAddress: string;
        last_seen: number;
        lastSeen: number;
        max_bitrate: number;
        maxBitrate: number;
        mode: __80211Mode;
        rsn_flags: __80211ApSecurityFlags;
        rsnFlags: __80211ApSecurityFlags;
        ssid: GLib.Bytes;
        strength: number;
        wpa_flags: __80211ApSecurityFlags;
        wpaFlags: __80211ApSecurityFlags;
    }
}
export class AccessPoint extends Object {
    static $gtype: GObject.GType<AccessPoint>;

    constructor(properties?: Partial<AccessPoint.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AccessPoint.ConstructorProperties>, ...args: any[]): void;

    // Properties
    bssid: string;
    flags: __80211ApFlags;
    frequency: number;
    hw_address: string;
    hwAddress: string;
    last_seen: number;
    lastSeen: number;
    max_bitrate: number;
    maxBitrate: number;
    mode: __80211Mode;
    rsn_flags: __80211ApSecurityFlags;
    rsnFlags: __80211ApSecurityFlags;
    ssid: GLib.Bytes;
    strength: number;
    wpa_flags: __80211ApSecurityFlags;
    wpaFlags: __80211ApSecurityFlags;

    // Members

    connection_valid(connection: Connection): boolean;
    filter_connections(connections: Connection[]): Connection[];
    get_bssid(): string;
    get_flags(): __80211ApFlags;
    get_frequency(): number;
    get_last_seen(): number;
    get_max_bitrate(): number;
    get_mode(): __80211Mode;
    get_rsn_flags(): __80211ApSecurityFlags;
    get_ssid(): GLib.Bytes;
    get_strength(): number;
    get_wpa_flags(): __80211ApSecurityFlags;
}
export module ActiveConnection {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
        connection: RemoteConnection;
        default: boolean;
        default6: boolean;
        devices: Device[];
        dhcp4_config: DhcpConfig;
        dhcp4Config: DhcpConfig;
        dhcp6_config: DhcpConfig;
        dhcp6Config: DhcpConfig;
        id: string;
        ip4_config: IPConfig;
        ip4Config: IPConfig;
        ip6_config: IPConfig;
        ip6Config: IPConfig;
        master: Device;
        specific_object_path: string;
        specificObjectPath: string;
        state: ActiveConnectionState;
        state_flags: number;
        stateFlags: number;
        type: string;
        uuid: string;
        vpn: boolean;
    }
}
export class ActiveConnection extends Object {
    static $gtype: GObject.GType<ActiveConnection>;

    constructor(properties?: Partial<ActiveConnection.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ActiveConnection.ConstructorProperties>, ...args: any[]): void;

    // Properties
    connection: RemoteConnection;
    "default": boolean;
    default6: boolean;
    devices: Device[];
    dhcp4_config: DhcpConfig;
    dhcp4Config: DhcpConfig;
    dhcp6_config: DhcpConfig;
    dhcp6Config: DhcpConfig;
    id: string;
    ip4_config: IPConfig;
    ip4Config: IPConfig;
    ip6_config: IPConfig;
    ip6Config: IPConfig;
    master: Device;
    specific_object_path: string;
    specificObjectPath: string;
    state: ActiveConnectionState;
    state_flags: number;
    stateFlags: number;
    type: string;
    uuid: string;
    vpn: boolean;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "state-changed", callback: (_source: this, state: number, reason: number) => void): number;
    connect_after(signal: "state-changed", callback: (_source: this, state: number, reason: number) => void): number;
    emit(signal: "state-changed", state: number, reason: number): void;

    // Members

    get_connection(): RemoteConnection;
    get_connection_type(): string;
    get_default(): boolean;
    get_default6(): boolean;
    get_devices(): Device[];
    get_dhcp4_config(): DhcpConfig;
    get_dhcp6_config(): DhcpConfig;
    get_id(): string;
    get_ip4_config(): IPConfig;
    get_ip6_config(): IPConfig;
    get_master(): Device;
    get_specific_object_path(): string;
    get_state(): ActiveConnectionState;
    get_state_flags(): ActivationStateFlags;
    get_state_reason(): ActiveConnectionStateReason;
    get_uuid(): string;
    get_vpn(): boolean;
}
export module Checkpoint {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
        created: number;
        devices: Device[];
        rollback_timeout: number;
        rollbackTimeout: number;
    }
}
export class Checkpoint extends Object {
    static $gtype: GObject.GType<Checkpoint>;

    constructor(properties?: Partial<Checkpoint.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Checkpoint.ConstructorProperties>, ...args: any[]): void;

    // Properties
    created: number;
    devices: Device[];
    rollback_timeout: number;
    rollbackTimeout: number;

    // Members

    get_created(): number;
    get_devices(): Device[];
    get_rollback_timeout(): number;
}
export module Client {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        activating_connection: ActiveConnection;
        activatingConnection: ActiveConnection;
        active_connections: ActiveConnection[];
        activeConnections: ActiveConnection[];
        all_devices: Device[];
        allDevices: Device[];
        can_modify: boolean;
        canModify: boolean;
        capabilities: number[];
        checkpoints: Checkpoint[];
        connections: RemoteConnection[];
        connectivity: ConnectivityState;
        connectivity_check_available: boolean;
        connectivityCheckAvailable: boolean;
        connectivity_check_enabled: boolean;
        connectivityCheckEnabled: boolean;
        connectivity_check_uri: string;
        connectivityCheckUri: string;
        dbus_connection: Gio.DBusConnection;
        dbusConnection: Gio.DBusConnection;
        dbus_name_owner: string;
        dbusNameOwner: string;
        devices: Device[];
        dns_configuration: DnsEntry[];
        dnsConfiguration: DnsEntry[];
        dns_mode: string;
        dnsMode: string;
        dns_rc_manager: string;
        dnsRcManager: string;
        hostname: string;
        instance_flags: number;
        instanceFlags: number;
        metered: number;
        networking_enabled: boolean;
        networkingEnabled: boolean;
        nm_running: boolean;
        nmRunning: boolean;
        permissions_state: Ternary;
        permissionsState: Ternary;
        primary_connection: ActiveConnection;
        primaryConnection: ActiveConnection;
        startup: boolean;
        state: State;
        version: string;
        wimax_enabled: boolean;
        wimaxEnabled: boolean;
        wimax_hardware_enabled: boolean;
        wimaxHardwareEnabled: boolean;
        wireless_enabled: boolean;
        wirelessEnabled: boolean;
        wireless_hardware_enabled: boolean;
        wirelessHardwareEnabled: boolean;
        wwan_enabled: boolean;
        wwanEnabled: boolean;
        wwan_hardware_enabled: boolean;
        wwanHardwareEnabled: boolean;
    }
}
export class Client extends GObject.Object implements Gio.AsyncInitable<Client>, Gio.Initable {
    static $gtype: GObject.GType<Client>;

    constructor(properties?: Partial<Client.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Client.ConstructorProperties>, ...args: any[]): void;

    // Properties
    activating_connection: ActiveConnection;
    activatingConnection: ActiveConnection;
    active_connections: ActiveConnection[];
    activeConnections: ActiveConnection[];
    all_devices: Device[];
    allDevices: Device[];
    can_modify: boolean;
    canModify: boolean;
    capabilities: number[];
    checkpoints: Checkpoint[];
    connections: RemoteConnection[];
    connectivity: ConnectivityState;
    connectivity_check_available: boolean;
    connectivityCheckAvailable: boolean;
    connectivity_check_enabled: boolean;
    connectivityCheckEnabled: boolean;
    connectivity_check_uri: string;
    connectivityCheckUri: string;
    dbus_connection: Gio.DBusConnection;
    dbusConnection: Gio.DBusConnection;
    dbus_name_owner: string;
    dbusNameOwner: string;
    devices: Device[];
    dns_configuration: DnsEntry[];
    dnsConfiguration: DnsEntry[];
    dns_mode: string;
    dnsMode: string;
    dns_rc_manager: string;
    dnsRcManager: string;
    hostname: string;
    instance_flags: number;
    instanceFlags: number;
    metered: number;
    networking_enabled: boolean;
    networkingEnabled: boolean;
    nm_running: boolean;
    nmRunning: boolean;
    permissions_state: Ternary;
    permissionsState: Ternary;
    primary_connection: ActiveConnection;
    primaryConnection: ActiveConnection;
    startup: boolean;
    state: State;
    version: string;
    wimax_enabled: boolean;
    wimaxEnabled: boolean;
    wimax_hardware_enabled: boolean;
    wimaxHardwareEnabled: boolean;
    wireless_enabled: boolean;
    wirelessEnabled: boolean;
    wireless_hardware_enabled: boolean;
    wirelessHardwareEnabled: boolean;
    wwan_enabled: boolean;
    wwanEnabled: boolean;
    wwan_hardware_enabled: boolean;
    wwanHardwareEnabled: boolean;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: "active-connection-added",
        callback: (_source: this, active_connection: ActiveConnection) => void
    ): number;
    connect_after(
        signal: "active-connection-added",
        callback: (_source: this, active_connection: ActiveConnection) => void
    ): number;
    emit(signal: "active-connection-added", active_connection: ActiveConnection): void;
    connect(
        signal: "active-connection-removed",
        callback: (_source: this, active_connection: ActiveConnection) => void
    ): number;
    connect_after(
        signal: "active-connection-removed",
        callback: (_source: this, active_connection: ActiveConnection) => void
    ): number;
    emit(signal: "active-connection-removed", active_connection: ActiveConnection): void;
    connect(signal: "any-device-added", callback: (_source: this, device: Device) => void): number;
    connect_after(signal: "any-device-added", callback: (_source: this, device: Device) => void): number;
    emit(signal: "any-device-added", device: Device): void;
    connect(signal: "any-device-removed", callback: (_source: this, device: Device) => void): number;
    connect_after(signal: "any-device-removed", callback: (_source: this, device: Device) => void): number;
    emit(signal: "any-device-removed", device: Device): void;
    connect(signal: "connection-added", callback: (_source: this, connection: RemoteConnection) => void): number;
    connect_after(signal: "connection-added", callback: (_source: this, connection: RemoteConnection) => void): number;
    emit(signal: "connection-added", connection: RemoteConnection): void;
    connect(signal: "connection-removed", callback: (_source: this, connection: RemoteConnection) => void): number;
    connect_after(
        signal: "connection-removed",
        callback: (_source: this, connection: RemoteConnection) => void
    ): number;
    emit(signal: "connection-removed", connection: RemoteConnection): void;
    connect(signal: "device-added", callback: (_source: this, device: Device) => void): number;
    connect_after(signal: "device-added", callback: (_source: this, device: Device) => void): number;
    emit(signal: "device-added", device: Device): void;
    connect(signal: "device-removed", callback: (_source: this, device: Device) => void): number;
    connect_after(signal: "device-removed", callback: (_source: this, device: Device) => void): number;
    emit(signal: "device-removed", device: Device): void;
    connect(
        signal: "permission-changed",
        callback: (_source: this, permission: number, result: number) => void
    ): number;
    connect_after(
        signal: "permission-changed",
        callback: (_source: this, permission: number, result: number) => void
    ): number;
    emit(signal: "permission-changed", permission: number, result: number): void;

    // Constructors

    static ["new"](cancellable?: Gio.Cancellable | null): Client;
    static new_finish(result: Gio.AsyncResult): Client;
    static new_finish(...args: never[]): never;

    // Members

    activate_connection_async(
        connection?: Connection | null,
        device?: Device | null,
        specific_object?: string | null,
        cancellable?: Gio.Cancellable | null
    ): Promise<ActiveConnection>;
    activate_connection_async(
        connection: Connection | null,
        device: Device | null,
        specific_object: string | null,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    activate_connection_async(
        connection?: Connection | null,
        device?: Device | null,
        specific_object?: string | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<ActiveConnection> | void;
    activate_connection_finish(result: Gio.AsyncResult): ActiveConnection;
    add_and_activate_connection2(
        partial: Connection | null,
        device: Device,
        specific_object: string | null,
        options: GLib.Variant,
        cancellable?: Gio.Cancellable | null
    ): Promise<ActiveConnection>;
    add_and_activate_connection2(
        partial: Connection | null,
        device: Device,
        specific_object: string | null,
        options: GLib.Variant,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    add_and_activate_connection2(
        partial: Connection | null,
        device: Device,
        specific_object: string | null,
        options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<ActiveConnection> | void;
    add_and_activate_connection2_finish(result: Gio.AsyncResult, out_result?: GLib.Variant | null): ActiveConnection;
    add_and_activate_connection_async(
        partial: Connection | null,
        device: Device,
        specific_object?: string | null,
        cancellable?: Gio.Cancellable | null
    ): Promise<ActiveConnection>;
    add_and_activate_connection_async(
        partial: Connection | null,
        device: Device,
        specific_object: string | null,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    add_and_activate_connection_async(
        partial: Connection | null,
        device: Device,
        specific_object?: string | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<ActiveConnection> | void;
    add_and_activate_connection_finish(result: Gio.AsyncResult): ActiveConnection;
    add_connection2(
        settings: GLib.Variant,
        flags: SettingsAddConnection2Flags,
        args: GLib.Variant | null,
        ignore_out_result: boolean,
        cancellable?: Gio.Cancellable | null
    ): Promise<[RemoteConnection, GLib.Variant | null]>;
    add_connection2(
        settings: GLib.Variant,
        flags: SettingsAddConnection2Flags,
        args: GLib.Variant | null,
        ignore_out_result: boolean,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    add_connection2(
        settings: GLib.Variant,
        flags: SettingsAddConnection2Flags,
        args: GLib.Variant | null,
        ignore_out_result: boolean,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[RemoteConnection, GLib.Variant | null]> | void;
    add_connection2_finish(result: Gio.AsyncResult): [RemoteConnection, GLib.Variant | null];
    add_connection_async(
        connection: Connection,
        save_to_disk: boolean,
        cancellable?: Gio.Cancellable | null
    ): Promise<RemoteConnection>;
    add_connection_async(
        connection: Connection,
        save_to_disk: boolean,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    add_connection_async(
        connection: Connection,
        save_to_disk: boolean,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<RemoteConnection> | void;
    add_connection_finish(result: Gio.AsyncResult): RemoteConnection;
    check_connectivity(cancellable?: Gio.Cancellable | null): ConnectivityState;
    check_connectivity_async(cancellable?: Gio.Cancellable | null): Promise<ConnectivityState>;
    check_connectivity_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    check_connectivity_async(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<ConnectivityState> | void;
    check_connectivity_finish(result: Gio.AsyncResult): ConnectivityState;
    checkpoint_adjust_rollback_timeout(
        checkpoint_path: string,
        add_timeout: number,
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
    checkpoint_adjust_rollback_timeout(
        checkpoint_path: string,
        add_timeout: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    checkpoint_adjust_rollback_timeout(
        checkpoint_path: string,
        add_timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    checkpoint_adjust_rollback_timeout_finish(result: Gio.AsyncResult): boolean;
    checkpoint_create(
        devices: Device[],
        rollback_timeout: number,
        flags: CheckpointCreateFlags,
        cancellable?: Gio.Cancellable | null
    ): Promise<Checkpoint>;
    checkpoint_create(
        devices: Device[],
        rollback_timeout: number,
        flags: CheckpointCreateFlags,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    checkpoint_create(
        devices: Device[],
        rollback_timeout: number,
        flags: CheckpointCreateFlags,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<Checkpoint> | void;
    checkpoint_create_finish(result: Gio.AsyncResult): Checkpoint;
    checkpoint_destroy(checkpoint_path: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    checkpoint_destroy(
        checkpoint_path: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    checkpoint_destroy(
        checkpoint_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    checkpoint_destroy_finish(result: Gio.AsyncResult): boolean;
    checkpoint_rollback(
        checkpoint_path: string,
        cancellable?: Gio.Cancellable | null
    ): Promise<GLib.HashTable<string, number>>;
    checkpoint_rollback(
        checkpoint_path: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    checkpoint_rollback(
        checkpoint_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<GLib.HashTable<string, number>> | void;
    checkpoint_rollback_finish(result: Gio.AsyncResult): GLib.HashTable<string, number>;
    connectivity_check_get_available(): boolean;
    connectivity_check_get_enabled(): boolean;
    connectivity_check_get_uri(): string;
    connectivity_check_set_enabled(enabled: boolean): void;
    dbus_call(
        object_path: string,
        interface_name: string,
        method_name: string,
        parameters: GLib.Variant | null,
        reply_type: GLib.VariantType | null,
        timeout_msec: number,
        cancellable?: Gio.Cancellable | null
    ): Promise<GLib.Variant>;
    dbus_call(
        object_path: string,
        interface_name: string,
        method_name: string,
        parameters: GLib.Variant | null,
        reply_type: GLib.VariantType | null,
        timeout_msec: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    dbus_call(
        object_path: string,
        interface_name: string,
        method_name: string,
        parameters: GLib.Variant | null,
        reply_type: GLib.VariantType | null,
        timeout_msec: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<GLib.Variant> | void;
    dbus_call_finish(result: Gio.AsyncResult): GLib.Variant;
    dbus_set_property(
        object_path: string,
        interface_name: string,
        property_name: string,
        value: GLib.Variant,
        timeout_msec: number,
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
    dbus_set_property(
        object_path: string,
        interface_name: string,
        property_name: string,
        value: GLib.Variant,
        timeout_msec: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    dbus_set_property(
        object_path: string,
        interface_name: string,
        property_name: string,
        value: GLib.Variant,
        timeout_msec: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    dbus_set_property_finish(result: Gio.AsyncResult): boolean;
    deactivate_connection(active: ActiveConnection, cancellable?: Gio.Cancellable | null): boolean;
    deactivate_connection_async(active: ActiveConnection, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    deactivate_connection_async(
        active: ActiveConnection,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    deactivate_connection_async(
        active: ActiveConnection,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    deactivate_connection_finish(result: Gio.AsyncResult): boolean;
    get_activating_connection(): ActiveConnection;
    get_active_connections(): ActiveConnection[];
    get_all_devices(): Device[];
    get_capabilities(): number[];
    get_checkpoints(): Checkpoint[];
    get_connection_by_id(id: string): RemoteConnection;
    get_connection_by_path(path: string): RemoteConnection;
    get_connection_by_uuid(uuid: string): RemoteConnection;
    get_connections(): RemoteConnection[];
    get_connectivity(): ConnectivityState;
    get_context_busy_watcher<T = GObject.Object>(): T;
    get_dbus_connection(): Gio.DBusConnection;
    get_dbus_name_owner(): string;
    get_device_by_iface(iface: string): Device;
    get_device_by_path(object_path: string): Device;
    get_devices(): Device[];
    get_dns_configuration(): DnsEntry[];
    get_dns_mode(): string;
    get_dns_rc_manager(): string;
    get_instance_flags(): ClientInstanceFlags;
    get_logging(level?: string | null, domains?: string | null): boolean;
    get_main_context(): GLib.MainContext;
    get_metered(): Metered;
    get_nm_running(): boolean;
    get_object_by_path(dbus_path: string): Object;
    get_permission_result(permission: ClientPermission): ClientPermissionResult;
    get_permissions_state(): Ternary;
    get_primary_connection(): ActiveConnection;
    get_startup(): boolean;
    get_state(): State;
    get_version(): string;
    load_connections(filenames: string[], cancellable?: Gio.Cancellable | null): [boolean, string];
    load_connections_async(filenames: string[], cancellable?: Gio.Cancellable | null): Promise<[string[]]>;
    load_connections_async(
        filenames: string[],
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    load_connections_async(
        filenames: string[],
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[string[]]> | void;
    load_connections_finish(result: Gio.AsyncResult): [boolean, string[]];
    networking_get_enabled(): boolean;
    networking_set_enabled(enabled: boolean): boolean;
    reload(flags: ManagerReloadFlags, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    reload(
        flags: ManagerReloadFlags,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    reload(
        flags: ManagerReloadFlags,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    reload_connections(cancellable?: Gio.Cancellable | null): boolean;
    reload_connections_async(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    reload_connections_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    reload_connections_async(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    reload_connections_finish(result: Gio.AsyncResult): boolean;
    reload_finish(result: Gio.AsyncResult): boolean;
    save_hostname(hostname?: string | null, cancellable?: Gio.Cancellable | null): boolean;
    save_hostname_async(hostname?: string | null, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    save_hostname_async(
        hostname: string | null,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    save_hostname_async(
        hostname?: string | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    save_hostname_finish(result: Gio.AsyncResult): boolean;
    set_logging(level?: string | null, domains?: string | null): boolean;
    wimax_get_enabled(): boolean;
    wimax_hardware_get_enabled(): boolean;
    wimax_set_enabled(enabled: boolean): void;
    wireless_get_enabled(): boolean;
    wireless_hardware_get_enabled(): boolean;
    wireless_set_enabled(enabled: boolean): void;
    wwan_get_enabled(): boolean;
    wwan_hardware_get_enabled(): boolean;
    wwan_set_enabled(enabled: boolean): void;
    static new_async(cancellable?: Gio.Cancellable | null): Promise<Client>;
    static new_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Client> | null): void;
    static new_async(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<Client> | null
    ): Promise<Client> | void;

    // Implemented Members

    init_async(io_priority: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    init_async(
        io_priority: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    init_finish(res: Gio.AsyncResult): boolean;
    new_finish(res: Gio.AsyncResult): Client;
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    vfunc_init_async(
        io_priority: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    vfunc_init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    vfunc_init_finish(res: Gio.AsyncResult): boolean;
    init(cancellable?: Gio.Cancellable | null): boolean;
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}
export module Device {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
        active_connection: ActiveConnection;
        activeConnection: ActiveConnection;
        autoconnect: boolean;
        available_connections: RemoteConnection[];
        availableConnections: RemoteConnection[];
        capabilities: DeviceCapabilities;
        device_type: DeviceType;
        deviceType: DeviceType;
        dhcp4_config: DhcpConfig;
        dhcp4Config: DhcpConfig;
        dhcp6_config: DhcpConfig;
        dhcp6Config: DhcpConfig;
        driver: string;
        driver_version: string;
        driverVersion: string;
        firmware_missing: boolean;
        firmwareMissing: boolean;
        firmware_version: string;
        firmwareVersion: string;
        hw_address: string;
        hwAddress: string;
        interface: string;
        interface_flags: number;
        interfaceFlags: number;
        ip_interface: string;
        ipInterface: string;
        ip4_config: IPConfig;
        ip4Config: IPConfig;
        ip4_connectivity: ConnectivityState;
        ip4Connectivity: ConnectivityState;
        ip6_config: IPConfig;
        ip6Config: IPConfig;
        ip6_connectivity: ConnectivityState;
        ip6Connectivity: ConnectivityState;
        lldp_neighbors: any[];
        lldpNeighbors: any[];
        managed: boolean;
        metered: number;
        mtu: number;
        nm_plugin_missing: boolean;
        nmPluginMissing: boolean;
        path: string;
        physical_port_id: string;
        physicalPortId: string;
        product: string;
        real: boolean;
        state: DeviceState;
        state_reason: number;
        stateReason: number;
        udi: string;
        vendor: string;
    }
}
export abstract class Device extends Object {
    static $gtype: GObject.GType<Device>;

    constructor(properties?: Partial<Device.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Device.ConstructorProperties>, ...args: any[]): void;

    // Properties
    active_connection: ActiveConnection;
    activeConnection: ActiveConnection;
    autoconnect: boolean;
    available_connections: RemoteConnection[];
    availableConnections: RemoteConnection[];
    capabilities: DeviceCapabilities;
    device_type: DeviceType;
    deviceType: DeviceType;
    dhcp4_config: DhcpConfig;
    dhcp4Config: DhcpConfig;
    dhcp6_config: DhcpConfig;
    dhcp6Config: DhcpConfig;
    driver: string;
    driver_version: string;
    driverVersion: string;
    firmware_missing: boolean;
    firmwareMissing: boolean;
    firmware_version: string;
    firmwareVersion: string;
    hw_address: string;
    hwAddress: string;
    "interface": string;
    interface_flags: number;
    interfaceFlags: number;
    ip_interface: string;
    ipInterface: string;
    ip4_config: IPConfig;
    ip4Config: IPConfig;
    ip4_connectivity: ConnectivityState;
    ip4Connectivity: ConnectivityState;
    ip6_config: IPConfig;
    ip6Config: IPConfig;
    ip6_connectivity: ConnectivityState;
    ip6Connectivity: ConnectivityState;
    lldp_neighbors: any[];
    lldpNeighbors: any[];
    managed: boolean;
    metered: number;
    mtu: number;
    nm_plugin_missing: boolean;
    nmPluginMissing: boolean;
    path: string;
    physical_port_id: string;
    physicalPortId: string;
    product: string;
    real: boolean;
    state: DeviceState;
    state_reason: number;
    stateReason: number;
    udi: string;
    vendor: string;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: "state-changed",
        callback: (_source: this, new_state: number, old_state: number, reason: number) => void
    ): number;
    connect_after(
        signal: "state-changed",
        callback: (_source: this, new_state: number, old_state: number, reason: number) => void
    ): number;
    emit(signal: "state-changed", new_state: number, old_state: number, reason: number): void;

    // Members

    connection_compatible(connection: Connection): boolean;
    connection_valid(connection: Connection): boolean;
    ["delete"](cancellable?: Gio.Cancellable | null): boolean;
    delete_async(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    delete_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    delete_async(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    delete_finish(result: Gio.AsyncResult): boolean;
    disconnect(cancellable?: Gio.Cancellable | null): boolean;
    disconnect(...args: never[]): never;
    disconnect_async(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    disconnect_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    disconnect_async(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    disconnect_finish(result: Gio.AsyncResult): boolean;
    filter_connections(connections: Connection[]): Connection[];
    get_active_connection(): ActiveConnection;
    get_applied_connection(flags: number, cancellable?: Gio.Cancellable | null): [Connection, number | null];
    get_applied_connection_async(
        flags: number,
        cancellable?: Gio.Cancellable | null
    ): Promise<[Connection, number | null]>;
    get_applied_connection_async(
        flags: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    get_applied_connection_async(
        flags: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[Connection, number | null]> | void;
    get_applied_connection_finish(result: Gio.AsyncResult): [Connection, number | null];
    get_autoconnect(): boolean;
    get_available_connections(): RemoteConnection[];
    get_capabilities(): DeviceCapabilities;
    get_connectivity(addr_family: number): ConnectivityState;
    get_description(): string;
    get_device_type(): DeviceType;
    get_dhcp4_config(): DhcpConfig;
    get_dhcp6_config(): DhcpConfig;
    get_driver(): string;
    get_driver_version(): string;
    get_firmware_missing(): boolean;
    get_firmware_version(): string;
    get_hw_address(): string;
    get_iface(): string;
    get_interface_flags(): DeviceInterfaceFlags;
    get_ip4_config(): IPConfig;
    get_ip6_config(): IPConfig;
    get_ip_iface(): string;
    get_lldp_neighbors(): LldpNeighbor[];
    get_managed(): boolean;
    get_metered(): Metered;
    get_mtu(): number;
    get_nm_plugin_missing(): boolean;
    get_path(): string;
    get_physical_port_id(): string;
    get_product(): string;
    get_setting_type(): GObject.GType;
    get_state(): DeviceState;
    get_state_reason(): DeviceStateReason;
    get_type_description(): string;
    get_udi(): string;
    get_vendor(): string;
    is_real(): boolean;
    is_software(): boolean;
    reapply(
        connection: Connection | null,
        version_id: number,
        flags: number,
        cancellable?: Gio.Cancellable | null
    ): boolean;
    reapply_async(
        connection: Connection | null,
        version_id: number,
        flags: number,
        cancellable?: Gio.Cancellable | null
    ): Promise<boolean>;
    reapply_async(
        connection: Connection | null,
        version_id: number,
        flags: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    reapply_async(
        connection: Connection | null,
        version_id: number,
        flags: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    reapply_finish(result: Gio.AsyncResult): boolean;
    set_autoconnect(autoconnect: boolean): void;
    set_managed(managed: boolean): void;
    static disambiguate_names(devices: Device[]): string[];
}
export module Device6Lowpan {
    export interface ConstructorProperties extends Device.ConstructorProperties {
        [key: string]: any;
    }
}
export class Device6Lowpan extends Device {
    static $gtype: GObject.GType<Device6Lowpan>;

    constructor(properties?: Partial<Device6Lowpan.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Device6Lowpan.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_parent(): Device;
}
export module DeviceAdsl {
    export interface ConstructorProperties extends Device.ConstructorProperties {
        [key: string]: any;
        carrier: boolean;
    }
}
export class DeviceAdsl extends Device {
    static $gtype: GObject.GType<DeviceAdsl>;

    constructor(properties?: Partial<DeviceAdsl.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DeviceAdsl.ConstructorProperties>, ...args: any[]): void;

    // Properties
    carrier: boolean;

    // Members

    get_carrier(): boolean;
}
export module DeviceBond {
    export interface ConstructorProperties extends Device.ConstructorProperties {
        [key: string]: any;
        carrier: boolean;
        slaves: Device[];
    }
}
export class DeviceBond extends Device {
    static $gtype: GObject.GType<DeviceBond>;

    constructor(properties?: Partial<DeviceBond.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DeviceBond.ConstructorProperties>, ...args: any[]): void;

    // Properties
    carrier: boolean;
    slaves: Device[];

    // Members

    get_carrier(): boolean;
    get_slaves(): Device[];
}
export module DeviceBridge {
    export interface ConstructorProperties extends Device.ConstructorProperties {
        [key: string]: any;
        carrier: boolean;
        slaves: Device[];
    }
}
export class DeviceBridge extends Device {
    static $gtype: GObject.GType<DeviceBridge>;

    constructor(properties?: Partial<DeviceBridge.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DeviceBridge.ConstructorProperties>, ...args: any[]): void;

    // Properties
    carrier: boolean;
    slaves: Device[];

    // Members

    get_carrier(): boolean;
    get_slaves(): Device[];
}
export module DeviceBt {
    export interface ConstructorProperties extends Device.ConstructorProperties {
        [key: string]: any;
        bt_capabilities: BluetoothCapabilities;
        btCapabilities: BluetoothCapabilities;
        name: string;
    }
}
export class DeviceBt extends Device {
    static $gtype: GObject.GType<DeviceBt>;

    constructor(properties?: Partial<DeviceBt.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DeviceBt.ConstructorProperties>, ...args: any[]): void;

    // Properties
    bt_capabilities: BluetoothCapabilities;
    btCapabilities: BluetoothCapabilities;
    name: string;

    // Members

    get_capabilities(): BluetoothCapabilities;
    get_capabilities(...args: never[]): never;
    get_name(): string;
}
export module DeviceDummy {
    export interface ConstructorProperties extends Device.ConstructorProperties {
        [key: string]: any;
    }
}
export class DeviceDummy extends Device {
    static $gtype: GObject.GType<DeviceDummy>;

    constructor(properties?: Partial<DeviceDummy.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DeviceDummy.ConstructorProperties>, ...args: any[]): void;
}
export module DeviceEthernet {
    export interface ConstructorProperties extends Device.ConstructorProperties {
        [key: string]: any;
        carrier: boolean;
        perm_hw_address: string;
        permHwAddress: string;
        s390_subchannels: string[];
        s390Subchannels: string[];
        speed: number;
    }
}
export class DeviceEthernet extends Device {
    static $gtype: GObject.GType<DeviceEthernet>;

    constructor(properties?: Partial<DeviceEthernet.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DeviceEthernet.ConstructorProperties>, ...args: any[]): void;

    // Properties
    carrier: boolean;
    perm_hw_address: string;
    permHwAddress: string;
    s390_subchannels: string[];
    s390Subchannels: string[];
    speed: number;

    // Members

    get_carrier(): boolean;
    get_permanent_hw_address(): string;
    get_s390_subchannels(): string[];
    get_speed(): number;
}
export module DeviceGeneric {
    export interface ConstructorProperties extends Device.ConstructorProperties {
        [key: string]: any;
        type_description: string;
        typeDescription: string;
    }
}
export class DeviceGeneric extends Device {
    static $gtype: GObject.GType<DeviceGeneric>;

    constructor(properties?: Partial<DeviceGeneric.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DeviceGeneric.ConstructorProperties>, ...args: any[]): void;

    // Properties
    type_description: string;
    typeDescription: string;
}
export module DeviceIPTunnel {
    export interface ConstructorProperties extends Device.ConstructorProperties {
        [key: string]: any;
        encapsulation_limit: number;
        encapsulationLimit: number;
        flags: number;
        flow_label: number;
        flowLabel: number;
        input_key: string;
        inputKey: string;
        local: string;
        mode: number;
        output_key: string;
        outputKey: string;
        path_mtu_discovery: boolean;
        pathMtuDiscovery: boolean;
        remote: string;
        tos: number;
        ttl: number;
    }
}
export class DeviceIPTunnel extends Device {
    static $gtype: GObject.GType<DeviceIPTunnel>;

    constructor(properties?: Partial<DeviceIPTunnel.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DeviceIPTunnel.ConstructorProperties>, ...args: any[]): void;

    // Properties
    encapsulation_limit: number;
    encapsulationLimit: number;
    flags: number;
    flow_label: number;
    flowLabel: number;
    input_key: string;
    inputKey: string;
    local: string;
    mode: number;
    output_key: string;
    outputKey: string;
    path_mtu_discovery: boolean;
    pathMtuDiscovery: boolean;
    remote: string;
    tos: number;
    ttl: number;

    // Members

    get_encapsulation_limit(): number;
    get_flags(): IPTunnelFlags;
    get_flow_label(): number;
    get_input_key(): string;
    get_local(): string;
    get_mode(): IPTunnelMode;
    get_output_key(): string;
    get_parent(): Device;
    get_path_mtu_discovery(): boolean;
    get_remote(): string;
    get_tos(): number;
    get_ttl(): number;
}
export module DeviceInfiniband {
    export interface ConstructorProperties extends Device.ConstructorProperties {
        [key: string]: any;
        carrier: boolean;
    }
}
export class DeviceInfiniband extends Device {
    static $gtype: GObject.GType<DeviceInfiniband>;

    constructor(properties?: Partial<DeviceInfiniband.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DeviceInfiniband.ConstructorProperties>, ...args: any[]): void;

    // Properties
    carrier: boolean;

    // Members

    get_carrier(): boolean;
}
export module DeviceMacsec {
    export interface ConstructorProperties extends Device.ConstructorProperties {
        [key: string]: any;
        cipher_suite: number;
        cipherSuite: number;
        encoding_sa: number;
        encodingSa: number;
        encrypt: boolean;
        es: boolean;
        icv_length: number;
        icvLength: number;
        include_sci: boolean;
        includeSci: boolean;
        protect: boolean;
        replay_protect: boolean;
        replayProtect: boolean;
        scb: boolean;
        sci: number;
        validation: string;
        window: number;
    }
}
export class DeviceMacsec extends Device {
    static $gtype: GObject.GType<DeviceMacsec>;

    constructor(properties?: Partial<DeviceMacsec.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DeviceMacsec.ConstructorProperties>, ...args: any[]): void;

    // Properties
    cipher_suite: number;
    cipherSuite: number;
    encoding_sa: number;
    encodingSa: number;
    encrypt: boolean;
    es: boolean;
    icv_length: number;
    icvLength: number;
    include_sci: boolean;
    includeSci: boolean;
    protect: boolean;
    replay_protect: boolean;
    replayProtect: boolean;
    scb: boolean;
    sci: number;
    validation: string;
    window: number;

    // Members

    get_cipher_suite(): number;
    get_encoding_sa(): number;
    get_encrypt(): boolean;
    get_es(): boolean;
    get_icv_length(): number;
    get_include_sci(): boolean;
    get_parent(): Device;
    get_protect(): boolean;
    get_replay_protect(): boolean;
    get_scb(): boolean;
    get_sci(): number;
    get_validation(): string;
    get_window(): number;
}
export module DeviceMacvlan {
    export interface ConstructorProperties extends Device.ConstructorProperties {
        [key: string]: any;
        mode: string;
        no_promisc: boolean;
        noPromisc: boolean;
        tap: boolean;
    }
}
export class DeviceMacvlan extends Device {
    static $gtype: GObject.GType<DeviceMacvlan>;

    constructor(properties?: Partial<DeviceMacvlan.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DeviceMacvlan.ConstructorProperties>, ...args: any[]): void;

    // Properties
    mode: string;
    no_promisc: boolean;
    noPromisc: boolean;
    tap: boolean;

    // Members

    get_mode(): string;
    get_no_promisc(): boolean;
    get_parent(): Device;
    get_tap(): boolean;
}
export module DeviceModem {
    export interface ConstructorProperties extends Device.ConstructorProperties {
        [key: string]: any;
        apn: string;
        current_capabilities: DeviceModemCapabilities;
        currentCapabilities: DeviceModemCapabilities;
        device_id: string;
        deviceId: string;
        modem_capabilities: DeviceModemCapabilities;
        modemCapabilities: DeviceModemCapabilities;
        operator_code: string;
        operatorCode: string;
    }
}
export class DeviceModem extends Device {
    static $gtype: GObject.GType<DeviceModem>;

    constructor(properties?: Partial<DeviceModem.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DeviceModem.ConstructorProperties>, ...args: any[]): void;

    // Properties
    apn: string;
    current_capabilities: DeviceModemCapabilities;
    currentCapabilities: DeviceModemCapabilities;
    device_id: string;
    deviceId: string;
    modem_capabilities: DeviceModemCapabilities;
    modemCapabilities: DeviceModemCapabilities;
    operator_code: string;
    operatorCode: string;

    // Members

    get_apn(): string;
    get_current_capabilities(): DeviceModemCapabilities;
    get_device_id(): string;
    get_modem_capabilities(): DeviceModemCapabilities;
    get_operator_code(): string;
}
export module DeviceOlpcMesh {
    export interface ConstructorProperties extends Device.ConstructorProperties {
        [key: string]: any;
        active_channel: number;
        activeChannel: number;
        companion: DeviceWifi;
    }
}
export class DeviceOlpcMesh extends Device {
    static $gtype: GObject.GType<DeviceOlpcMesh>;

    constructor(properties?: Partial<DeviceOlpcMesh.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DeviceOlpcMesh.ConstructorProperties>, ...args: any[]): void;

    // Properties
    active_channel: number;
    activeChannel: number;
    companion: DeviceWifi;

    // Members

    get_active_channel(): number;
    get_companion(): DeviceWifi;
}
export module DeviceOvsBridge {
    export interface ConstructorProperties extends Device.ConstructorProperties {
        [key: string]: any;
        slaves: Device[];
    }
}
export class DeviceOvsBridge extends Device {
    static $gtype: GObject.GType<DeviceOvsBridge>;

    constructor(properties?: Partial<DeviceOvsBridge.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DeviceOvsBridge.ConstructorProperties>, ...args: any[]): void;

    // Properties
    slaves: Device[];

    // Members

    get_slaves(): Device[];
}
export module DeviceOvsInterface {
    export interface ConstructorProperties extends Device.ConstructorProperties {
        [key: string]: any;
    }
}
export class DeviceOvsInterface extends Device {
    static $gtype: GObject.GType<DeviceOvsInterface>;

    constructor(properties?: Partial<DeviceOvsInterface.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DeviceOvsInterface.ConstructorProperties>, ...args: any[]): void;
}
export module DeviceOvsPort {
    export interface ConstructorProperties extends Device.ConstructorProperties {
        [key: string]: any;
        slaves: Device[];
    }
}
export class DeviceOvsPort extends Device {
    static $gtype: GObject.GType<DeviceOvsPort>;

    constructor(properties?: Partial<DeviceOvsPort.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DeviceOvsPort.ConstructorProperties>, ...args: any[]): void;

    // Properties
    slaves: Device[];

    // Members

    get_slaves(): Device[];
}
export module DevicePpp {
    export interface ConstructorProperties extends Device.ConstructorProperties {
        [key: string]: any;
    }
}
export class DevicePpp extends Device {
    static $gtype: GObject.GType<DevicePpp>;

    constructor(properties?: Partial<DevicePpp.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DevicePpp.ConstructorProperties>, ...args: any[]): void;
}
export module DeviceTeam {
    export interface ConstructorProperties extends Device.ConstructorProperties {
        [key: string]: any;
        carrier: boolean;
        config: string;
        slaves: Device[];
    }
}
export class DeviceTeam extends Device {
    static $gtype: GObject.GType<DeviceTeam>;

    constructor(properties?: Partial<DeviceTeam.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DeviceTeam.ConstructorProperties>, ...args: any[]): void;

    // Properties
    carrier: boolean;
    config: string;
    slaves: Device[];

    // Members

    get_carrier(): boolean;
    get_config(): string;
    get_slaves(): Device[];
}
export module DeviceTun {
    export interface ConstructorProperties extends Device.ConstructorProperties {
        [key: string]: any;
        group: number;
        mode: string;
        multi_queue: boolean;
        multiQueue: boolean;
        no_pi: boolean;
        noPi: boolean;
        owner: number;
        vnet_hdr: boolean;
        vnetHdr: boolean;
    }
}
export class DeviceTun extends Device {
    static $gtype: GObject.GType<DeviceTun>;

    constructor(properties?: Partial<DeviceTun.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DeviceTun.ConstructorProperties>, ...args: any[]): void;

    // Properties
    group: number;
    mode: string;
    multi_queue: boolean;
    multiQueue: boolean;
    no_pi: boolean;
    noPi: boolean;
    owner: number;
    vnet_hdr: boolean;
    vnetHdr: boolean;

    // Members

    get_group(): number;
    get_mode(): string;
    get_multi_queue(): boolean;
    get_no_pi(): boolean;
    get_owner(): number;
    get_vnet_hdr(): boolean;
}
export module DeviceVlan {
    export interface ConstructorProperties extends Device.ConstructorProperties {
        [key: string]: any;
        carrier: boolean;
        vlan_id: number;
        vlanId: number;
    }
}
export class DeviceVlan extends Device {
    static $gtype: GObject.GType<DeviceVlan>;

    constructor(properties?: Partial<DeviceVlan.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DeviceVlan.ConstructorProperties>, ...args: any[]): void;

    // Properties
    carrier: boolean;
    vlan_id: number;
    vlanId: number;

    // Members

    get_carrier(): boolean;
    get_parent(): Device;
    get_vlan_id(): number;
}
export module DeviceVrf {
    export interface ConstructorProperties extends Device.ConstructorProperties {
        [key: string]: any;
        table: number;
    }
}
export class DeviceVrf extends Device {
    static $gtype: GObject.GType<DeviceVrf>;

    constructor(properties?: Partial<DeviceVrf.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DeviceVrf.ConstructorProperties>, ...args: any[]): void;

    // Properties
    table: number;

    // Members

    get_table(): number;
}
export module DeviceVxlan {
    export interface ConstructorProperties extends Device.ConstructorProperties {
        [key: string]: any;
        ageing: number;
        carrier: boolean;
        dst_port: number;
        dstPort: number;
        group: string;
        id: number;
        l2miss: boolean;
        l3miss: boolean;
        learning: boolean;
        limit: number;
        local: string;
        proxy: boolean;
        rsc: boolean;
        src_port_max: number;
        srcPortMax: number;
        src_port_min: number;
        srcPortMin: number;
        tos: number;
        ttl: number;
    }
}
export class DeviceVxlan extends Device {
    static $gtype: GObject.GType<DeviceVxlan>;

    constructor(properties?: Partial<DeviceVxlan.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DeviceVxlan.ConstructorProperties>, ...args: any[]): void;

    // Properties
    ageing: number;
    carrier: boolean;
    dst_port: number;
    dstPort: number;
    group: string;
    id: number;
    l2miss: boolean;
    l3miss: boolean;
    learning: boolean;
    limit: number;
    local: string;
    proxy: boolean;
    rsc: boolean;
    src_port_max: number;
    srcPortMax: number;
    src_port_min: number;
    srcPortMin: number;
    tos: number;
    ttl: number;

    // Members

    get_ageing(): number;
    get_carrier(): boolean;
    get_dst_port(): number;
    get_group(): string;
    get_id(): number;
    get_l2miss(): boolean;
    get_l3miss(): boolean;
    get_learning(): boolean;
    get_limit(): number;
    get_local(): string;
    get_parent(): Device;
    get_proxy(): boolean;
    get_rsc(): boolean;
    get_src_port_max(): number;
    get_src_port_min(): number;
    get_tos(): number;
    get_ttl(): number;
}
export module DeviceWifi {
    export interface ConstructorProperties extends Device.ConstructorProperties {
        [key: string]: any;
        access_points: AccessPoint[];
        accessPoints: AccessPoint[];
        active_access_point: AccessPoint;
        activeAccessPoint: AccessPoint;
        bitrate: number;
        last_scan: number;
        lastScan: number;
        mode: __80211Mode;
        perm_hw_address: string;
        permHwAddress: string;
        wireless_capabilities: DeviceWifiCapabilities;
        wirelessCapabilities: DeviceWifiCapabilities;
    }
}
export class DeviceWifi extends Device {
    static $gtype: GObject.GType<DeviceWifi>;

    constructor(properties?: Partial<DeviceWifi.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DeviceWifi.ConstructorProperties>, ...args: any[]): void;

    // Properties
    access_points: AccessPoint[];
    accessPoints: AccessPoint[];
    active_access_point: AccessPoint;
    activeAccessPoint: AccessPoint;
    bitrate: number;
    last_scan: number;
    lastScan: number;
    mode: __80211Mode;
    perm_hw_address: string;
    permHwAddress: string;
    wireless_capabilities: DeviceWifiCapabilities;
    wirelessCapabilities: DeviceWifiCapabilities;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "access-point-added", callback: (_source: this, ap: GObject.Object) => void): number;
    connect_after(signal: "access-point-added", callback: (_source: this, ap: GObject.Object) => void): number;
    emit(signal: "access-point-added", ap: GObject.Object): void;
    connect(signal: "access-point-removed", callback: (_source: this, ap: GObject.Object) => void): number;
    connect_after(signal: "access-point-removed", callback: (_source: this, ap: GObject.Object) => void): number;
    emit(signal: "access-point-removed", ap: GObject.Object): void;

    // Members

    get_access_point_by_path(path: string): AccessPoint;
    get_access_points(): AccessPoint[];
    get_active_access_point(): AccessPoint;
    get_bitrate(): number;
    get_capabilities(): DeviceWifiCapabilities;
    get_capabilities(...args: never[]): never;
    get_last_scan(): number;
    get_mode(): __80211Mode;
    get_permanent_hw_address(): string;
    request_scan(cancellable?: Gio.Cancellable | null): boolean;
    request_scan_async(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    request_scan_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    request_scan_async(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    request_scan_finish(result: Gio.AsyncResult): boolean;
    request_scan_options(options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
    request_scan_options_async(
        options: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;
}
export module DeviceWifiP2P {
    export interface ConstructorProperties extends Device.ConstructorProperties {
        [key: string]: any;
        peers: WifiP2PPeer[];
    }
}
export class DeviceWifiP2P extends Device {
    static $gtype: GObject.GType<DeviceWifiP2P>;

    constructor(properties?: Partial<DeviceWifiP2P.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DeviceWifiP2P.ConstructorProperties>, ...args: any[]): void;

    // Properties
    peers: WifiP2PPeer[];

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "peer-added", callback: (_source: this, peer: GObject.Object) => void): number;
    connect_after(signal: "peer-added", callback: (_source: this, peer: GObject.Object) => void): number;
    emit(signal: "peer-added", peer: GObject.Object): void;
    connect(signal: "peer-removed", callback: (_source: this, peer: GObject.Object) => void): number;
    connect_after(signal: "peer-removed", callback: (_source: this, peer: GObject.Object) => void): number;
    emit(signal: "peer-removed", peer: GObject.Object): void;

    // Members

    get_peer_by_path(path: string): WifiP2PPeer;
    get_peers(): WifiP2PPeer[];
    start_find(options?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    start_find(
        options: GLib.Variant | null,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    start_find(
        options?: GLib.Variant | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    start_find_finish(result: Gio.AsyncResult): boolean;
    stop_find(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    stop_find(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    stop_find(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    stop_find_finish(result: Gio.AsyncResult): boolean;
}
export module DeviceWimax {
    export interface ConstructorProperties extends Device.ConstructorProperties {
        [key: string]: any;
        active_nsp: WimaxNsp;
        activeNsp: WimaxNsp;
        bsid: string;
        center_frequency: number;
        centerFrequency: number;
        cinr: number;
        hw_address: string;
        hwAddress: string;
        nsps: WimaxNsp[];
        rssi: number;
        tx_power: number;
        txPower: number;
    }
}
export class DeviceWimax extends Device {
    static $gtype: GObject.GType<DeviceWimax>;

    constructor(properties?: Partial<DeviceWimax.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DeviceWimax.ConstructorProperties>, ...args: any[]): void;

    // Properties
    active_nsp: WimaxNsp;
    activeNsp: WimaxNsp;
    bsid: string;
    center_frequency: number;
    centerFrequency: number;
    cinr: number;
    hw_address: string;
    hwAddress: string;
    nsps: WimaxNsp[];
    rssi: number;
    tx_power: number;
    txPower: number;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "nsp-added", callback: (_source: this, nsp: GObject.Object) => void): number;
    connect_after(signal: "nsp-added", callback: (_source: this, nsp: GObject.Object) => void): number;
    emit(signal: "nsp-added", nsp: GObject.Object): void;
    connect(signal: "nsp-removed", callback: (_source: this, nsp: GObject.Object) => void): number;
    connect_after(signal: "nsp-removed", callback: (_source: this, nsp: GObject.Object) => void): number;
    emit(signal: "nsp-removed", nsp: GObject.Object): void;

    // Members

    get_active_nsp(): WimaxNsp;
    get_bsid(): string;
    get_center_frequency(): number;
    get_cinr(): number;
    get_hw_address(): string;
    get_nsp_by_path(path: string): WimaxNsp;
    get_nsps(): WimaxNsp[];
    get_rssi(): number;
    get_tx_power(): number;
}
export module DeviceWireGuard {
    export interface ConstructorProperties extends Device.ConstructorProperties {
        [key: string]: any;
        fwmark: number;
        listen_port: number;
        listenPort: number;
        public_key: GLib.Bytes;
        publicKey: GLib.Bytes;
    }
}
export class DeviceWireGuard extends Device {
    static $gtype: GObject.GType<DeviceWireGuard>;

    constructor(properties?: Partial<DeviceWireGuard.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DeviceWireGuard.ConstructorProperties>, ...args: any[]): void;

    // Properties
    fwmark: number;
    listen_port: number;
    listenPort: number;
    public_key: GLib.Bytes;
    publicKey: GLib.Bytes;

    // Members

    get_fwmark(): number;
    get_listen_port(): number;
    get_public_key(): GLib.Bytes;
}
export module DeviceWpan {
    export interface ConstructorProperties extends Device.ConstructorProperties {
        [key: string]: any;
    }
}
export class DeviceWpan extends Device {
    static $gtype: GObject.GType<DeviceWpan>;

    constructor(properties?: Partial<DeviceWpan.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DeviceWpan.ConstructorProperties>, ...args: any[]): void;
}
export module DhcpConfig {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
        family: number;
        options: GLib.HashTable<string, string>;
    }
}
export abstract class DhcpConfig extends Object {
    static $gtype: GObject.GType<DhcpConfig>;

    constructor(properties?: Partial<DhcpConfig.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DhcpConfig.ConstructorProperties>, ...args: any[]): void;

    // Properties
    family: number;
    options: GLib.HashTable<string, string>;

    // Members

    get_family(): number;
    get_one_option(option: string): string;
    get_options(): GLib.HashTable<string, string>;
}
export module IPConfig {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
        addresses: any[];
        domains: string[];
        family: number;
        gateway: string;
        nameservers: string[];
        routes: IPRoute[];
        searches: string[];
        wins_servers: string[];
        winsServers: string[];
    }
}
export abstract class IPConfig extends Object {
    static $gtype: GObject.GType<IPConfig>;

    constructor(properties?: Partial<IPConfig.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<IPConfig.ConstructorProperties>, ...args: any[]): void;

    // Properties
    addresses: any[];
    domains: string[];
    family: number;
    gateway: string;
    nameservers: string[];
    routes: IPRoute[];
    searches: string[];
    wins_servers: string[];
    winsServers: string[];

    // Members

    get_addresses(): IPAddress[];
    get_domains(): string[];
    get_family(): number;
    get_gateway(): string;
    get_nameservers(): string[];
    get_routes(): IPRoute[];
    get_searches(): string[];
    get_wins_servers(): string[];
}
export module Object {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        path: string;
    }
}
export abstract class Object extends GObject.Object {
    static $gtype: GObject.GType<Object>;

    constructor(properties?: Partial<Object.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Object.ConstructorProperties>, ...args: any[]): void;

    // Properties
    path: string;

    // Members

    get_client(): Client;
    get_path(): string;
}
export module RemoteConnection {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
        filename: string;
        flags: number;
        unsaved: boolean;
        visible: boolean;
    }
}
export class RemoteConnection extends Object implements Connection {
    static $gtype: GObject.GType<RemoteConnection>;

    constructor(properties?: Partial<RemoteConnection.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<RemoteConnection.ConstructorProperties>, ...args: any[]): void;

    // Properties
    filename: string;
    flags: number;
    unsaved: boolean;
    visible: boolean;

    // Members

    commit_changes(save_to_disk: boolean, cancellable?: Gio.Cancellable | null): boolean;
    commit_changes_async(save_to_disk: boolean, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    commit_changes_async(
        save_to_disk: boolean,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    commit_changes_async(
        save_to_disk: boolean,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    commit_changes_finish(result: Gio.AsyncResult): boolean;
    ["delete"](cancellable?: Gio.Cancellable | null): boolean;
    delete_async(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    delete_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    delete_async(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    delete_finish(result: Gio.AsyncResult): boolean;
    get_filename(): string;
    get_flags(): SettingsConnectionFlags;
    get_secrets(setting_name: string, cancellable?: Gio.Cancellable | null): GLib.Variant;
    get_secrets_async(setting_name: string, cancellable?: Gio.Cancellable | null): Promise<GLib.Variant>;
    get_secrets_async(
        setting_name: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    get_secrets_async(
        setting_name: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<GLib.Variant> | void;
    get_secrets_finish(result: Gio.AsyncResult): GLib.Variant;
    get_unsaved(): boolean;
    get_visible(): boolean;
    save(cancellable?: Gio.Cancellable | null): boolean;
    save_async(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    save_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    save_async(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    save_finish(result: Gio.AsyncResult): boolean;
    update2(
        settings: GLib.Variant | null,
        flags: SettingsUpdate2Flags,
        args?: GLib.Variant | null,
        cancellable?: Gio.Cancellable | null
    ): Promise<GLib.Variant>;
    update2(
        settings: GLib.Variant | null,
        flags: SettingsUpdate2Flags,
        args: GLib.Variant | null,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    update2(
        settings: GLib.Variant | null,
        flags: SettingsUpdate2Flags,
        args?: GLib.Variant | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<GLib.Variant> | void;
    update2_finish(result: Gio.AsyncResult): GLib.Variant;

    // Implemented Members

    add_setting(setting: Setting): void;
    clear_secrets(): void;
    clear_secrets_with_flags(func?: SettingClearSecretsWithFlagsFn | null): void;
    clear_settings(): void;
    compare(b: Connection, flags: SettingCompareFlags): boolean;
    diff(b: Connection, flags: SettingCompareFlags, out_settings: GLib.HashTable<string, GLib.HashTable>): boolean;
    dump(): void;
    for_each_setting_value(func: SettingValueIterFn): void;
    get_connection_type(): string;
    get_id(): string;
    get_interface_name(): string;
    get_path(): string;
    get_setting(setting_type: GObject.GType): Setting;
    get_setting_802_1x(): Setting8021x;
    get_setting_adsl(): SettingAdsl;
    get_setting_bluetooth(): SettingBluetooth;
    get_setting_bond(): SettingBond;
    get_setting_bridge(): SettingBridge;
    get_setting_bridge_port(): SettingBridgePort;
    get_setting_by_name(name: string): Setting;
    get_setting_cdma(): SettingCdma;
    get_setting_connection(): SettingConnection;
    get_setting_dcb(): SettingDcb;
    get_setting_dummy(): SettingDummy;
    get_setting_generic(): SettingGeneric;
    get_setting_gsm(): SettingGsm;
    get_setting_infiniband(): SettingInfiniband;
    get_setting_ip4_config(): SettingIP4Config;
    get_setting_ip6_config(): SettingIP6Config;
    get_setting_ip_tunnel(): SettingIPTunnel;
    get_setting_macsec(): SettingMacsec;
    get_setting_macvlan(): SettingMacvlan;
    get_setting_olpc_mesh(): SettingOlpcMesh;
    get_setting_ovs_bridge(): SettingOvsBridge;
    get_setting_ovs_interface(): SettingOvsInterface;
    get_setting_ovs_patch(): SettingOvsPatch;
    get_setting_ovs_port(): SettingOvsPort;
    get_setting_ppp(): SettingPpp;
    get_setting_pppoe(): SettingPppoe;
    get_setting_proxy(): SettingProxy;
    get_setting_serial(): SettingSerial;
    get_setting_tc_config(): SettingTCConfig;
    get_setting_team(): SettingTeam;
    get_setting_team_port(): SettingTeamPort;
    get_setting_tun(): SettingTun;
    get_setting_vlan(): SettingVlan;
    get_setting_vpn(): SettingVpn;
    get_setting_vxlan(): SettingVxlan;
    get_setting_wimax(): SettingWimax;
    get_setting_wired(): SettingWired;
    get_setting_wireless(): SettingWireless;
    get_setting_wireless_security(): SettingWirelessSecurity;
    get_settings(): Setting[];
    get_uuid(): string;
    get_virtual_device_description(): string;
    is_type(type: string): boolean;
    is_virtual(): boolean;
    need_secrets(): [string, string[] | null];
    normalize(parameters?: GLib.HashTable<string, any> | null): [boolean, boolean | null];
    remove_setting(setting_type: GObject.GType): void;
    replace_settings(new_settings: GLib.Variant): boolean;
    replace_settings_from_connection(new_connection: Connection): void;
    set_path(path: string): void;
    to_dbus(flags: ConnectionSerializationFlags): GLib.Variant;
    update_secrets(setting_name: string, secrets: GLib.Variant): boolean;
    verify(): boolean;
    verify_secrets(): boolean;
    vfunc_changed(): void;
    vfunc_secrets_cleared(): void;
    vfunc_secrets_updated(setting: string): void;
}
export module SecretAgentOld {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        auto_register: boolean;
        autoRegister: boolean;
        capabilities: SecretAgentCapabilities;
        dbus_connection: Gio.DBusConnection;
        dbusConnection: Gio.DBusConnection;
        identifier: string;
        registered: boolean;
    }
}
export abstract class SecretAgentOld extends GObject.Object implements Gio.AsyncInitable<SecretAgentOld>, Gio.Initable {
    static $gtype: GObject.GType<SecretAgentOld>;

    constructor(properties?: Partial<SecretAgentOld.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SecretAgentOld.ConstructorProperties>, ...args: any[]): void;

    // Properties
    auto_register: boolean;
    autoRegister: boolean;
    capabilities: SecretAgentCapabilities;
    dbus_connection: Gio.DBusConnection;
    dbusConnection: Gio.DBusConnection;
    identifier: string;
    registered: boolean;

    // Members

    delete_secrets(connection: Connection, callback: SecretAgentOldDeleteSecretsFunc): void;
    destroy(): void;
    enable(enable: boolean): void;
    get_context_busy_watcher<T = GObject.Object>(): T;
    get_dbus_connection(): Gio.DBusConnection;
    get_dbus_name_owner(): string;
    get_main_context(): GLib.MainContext;
    get_registered(): boolean;
    get_secrets(
        connection: Connection,
        setting_name: string,
        hints: string[],
        flags: SecretAgentGetSecretsFlags,
        callback: SecretAgentOldGetSecretsFunc
    ): void;
    register(cancellable?: Gio.Cancellable | null): boolean;
    register_async(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    register_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    register_async(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    register_finish(result: Gio.AsyncResult): boolean;
    save_secrets(connection: Connection, callback: SecretAgentOldSaveSecretsFunc): void;
    unregister(cancellable?: Gio.Cancellable | null): boolean;
    unregister_async(cancellable?: Gio.Cancellable | null): Promise<boolean>;
    unregister_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    unregister_async(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    unregister_finish(result: Gio.AsyncResult): boolean;
    vfunc_cancel_get_secrets(connection_path: string, setting_name: string): void;
    vfunc_delete_secrets(
        connection: Connection,
        connection_path: string,
        callback: SecretAgentOldDeleteSecretsFunc
    ): void;
    vfunc_get_secrets(
        connection: Connection,
        connection_path: string,
        setting_name: string,
        hints: string[],
        flags: SecretAgentGetSecretsFlags,
        callback: SecretAgentOldGetSecretsFunc
    ): void;
    vfunc_save_secrets(connection: Connection, connection_path: string, callback: SecretAgentOldSaveSecretsFunc): void;

    // Implemented Members

    init_async(io_priority: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    init_async(
        io_priority: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    init_finish(res: Gio.AsyncResult): boolean;
    new_finish(res: Gio.AsyncResult): SecretAgentOld;
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
    vfunc_init_async(
        io_priority: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    vfunc_init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<boolean> | void;
    vfunc_init_finish(res: Gio.AsyncResult): boolean;
    init(cancellable?: Gio.Cancellable | null): boolean;
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}
export module Setting {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        name: string;
    }
}
export abstract class Setting extends GObject.Object {
    static $gtype: GObject.GType<Setting>;

    constructor(properties?: Partial<Setting.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Setting.ConstructorProperties>, ...args: any[]): void;

    // Properties
    name: string;

    // Members

    compare(b: Setting, flags: SettingCompareFlags): boolean;
    diff(
        b: Setting,
        flags: SettingCompareFlags,
        invert_results: boolean,
        results: GLib.HashTable<string, number>
    ): [boolean, GLib.HashTable<string, number>];
    duplicate(): Setting;
    enumerate_values(func: SettingValueIterFn): void;
    get_dbus_property_type(property_name: string): GLib.VariantType;
    get_name(): string;
    get_secret_flags(secret_name: string, out_flags: SettingSecretFlags): boolean;
    option_clear_by_name(predicate?: UtilsPredicateStr | null): void;
    option_get(opt_name: string): GLib.Variant;
    option_get_all_names(): string[];
    option_get_boolean(opt_name: string): [boolean, boolean | null];
    option_get_uint32(opt_name: string): [boolean, number | null];
    option_set(opt_name: string, variant?: GLib.Variant | null): void;
    option_set_boolean(opt_name: string, value: boolean): void;
    option_set_uint32(opt_name: string, value: number): void;
    set_secret_flags(secret_name: string, flags: SettingSecretFlags): boolean;
    to_string(): string;
    verify(connection?: Connection | null): boolean;
    verify_secrets(connection?: Connection | null): boolean;
    vfunc_aggregate(type_i: number, arg?: any | null): boolean;
    vfunc_get_secret_flags(secret_name: string, out_flags: SettingSecretFlags): boolean;
    vfunc_init_from_dbus(
        keys: GLib.HashTable<any, any>,
        setting_dict: GLib.Variant,
        connection_dict: GLib.Variant,
        parse_flags: number
    ): boolean;
    vfunc_set_secret_flags(secret_name: string, flags: SettingSecretFlags): boolean;
    vfunc_update_one_secret(key: string, value: GLib.Variant): number;
    vfunc_verify(connection: Connection): number;
    vfunc_verify_secrets(connection?: Connection | null): boolean;
    static lookup_type(name: string): GObject.GType;
}
export module Setting6Lowpan {
    export interface ConstructorProperties extends Setting.ConstructorProperties {
        [key: string]: any;
    }
}
export class Setting6Lowpan extends Setting {
    static $gtype: GObject.GType<Setting6Lowpan>;

    constructor(properties?: Partial<Setting6Lowpan.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Setting6Lowpan.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): Setting6Lowpan;

    // Members

    get_parent(): string;
}
export module Setting8021x {
    export interface ConstructorProperties extends Setting.ConstructorProperties {
        [key: string]: any;
        altsubject_matches: string[];
        altsubjectMatches: string[];
        anonymous_identity: string;
        anonymousIdentity: string;
        auth_timeout: number;
        authTimeout: number;
        ca_cert: GLib.Bytes;
        caCert: GLib.Bytes;
        ca_cert_password: string;
        caCertPassword: string;
        ca_cert_password_flags: SettingSecretFlags;
        caCertPasswordFlags: SettingSecretFlags;
        ca_path: string;
        caPath: string;
        client_cert: GLib.Bytes;
        clientCert: GLib.Bytes;
        client_cert_password: string;
        clientCertPassword: string;
        client_cert_password_flags: SettingSecretFlags;
        clientCertPasswordFlags: SettingSecretFlags;
        domain_match: string;
        domainMatch: string;
        domain_suffix_match: string;
        domainSuffixMatch: string;
        eap: string[];
        identity: string;
        optional: boolean;
        pac_file: string;
        pacFile: string;
        password: string;
        password_flags: SettingSecretFlags;
        passwordFlags: SettingSecretFlags;
        password_raw: GLib.Bytes;
        passwordRaw: GLib.Bytes;
        password_raw_flags: SettingSecretFlags;
        passwordRawFlags: SettingSecretFlags;
        phase1_auth_flags: number;
        phase1AuthFlags: number;
        phase1_fast_provisioning: string;
        phase1FastProvisioning: string;
        phase1_peaplabel: string;
        phase1Peaplabel: string;
        phase1_peapver: string;
        phase1Peapver: string;
        phase2_altsubject_matches: string[];
        phase2AltsubjectMatches: string[];
        phase2_auth: string;
        phase2Auth: string;
        phase2_autheap: string;
        phase2Autheap: string;
        phase2_ca_cert: GLib.Bytes;
        phase2CaCert: GLib.Bytes;
        phase2_ca_cert_password: string;
        phase2CaCertPassword: string;
        phase2_ca_cert_password_flags: SettingSecretFlags;
        phase2CaCertPasswordFlags: SettingSecretFlags;
        phase2_ca_path: string;
        phase2CaPath: string;
        phase2_client_cert: GLib.Bytes;
        phase2ClientCert: GLib.Bytes;
        phase2_client_cert_password: string;
        phase2ClientCertPassword: string;
        phase2_client_cert_password_flags: SettingSecretFlags;
        phase2ClientCertPasswordFlags: SettingSecretFlags;
        phase2_domain_match: string;
        phase2DomainMatch: string;
        phase2_domain_suffix_match: string;
        phase2DomainSuffixMatch: string;
        phase2_private_key: GLib.Bytes;
        phase2PrivateKey: GLib.Bytes;
        phase2_private_key_password: string;
        phase2PrivateKeyPassword: string;
        phase2_private_key_password_flags: SettingSecretFlags;
        phase2PrivateKeyPasswordFlags: SettingSecretFlags;
        phase2_subject_match: string;
        phase2SubjectMatch: string;
        pin: string;
        pin_flags: SettingSecretFlags;
        pinFlags: SettingSecretFlags;
        private_key: GLib.Bytes;
        privateKey: GLib.Bytes;
        private_key_password: string;
        privateKeyPassword: string;
        private_key_password_flags: SettingSecretFlags;
        privateKeyPasswordFlags: SettingSecretFlags;
        subject_match: string;
        subjectMatch: string;
        system_ca_certs: boolean;
        systemCaCerts: boolean;
    }
}
export class Setting8021x extends Setting {
    static $gtype: GObject.GType<Setting8021x>;

    constructor(properties?: Partial<Setting8021x.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Setting8021x.ConstructorProperties>, ...args: any[]): void;

    // Properties
    altsubject_matches: string[];
    altsubjectMatches: string[];
    anonymous_identity: string;
    anonymousIdentity: string;
    auth_timeout: number;
    authTimeout: number;
    ca_cert: GLib.Bytes;
    caCert: GLib.Bytes;
    ca_cert_password: string;
    caCertPassword: string;
    ca_cert_password_flags: SettingSecretFlags;
    caCertPasswordFlags: SettingSecretFlags;
    ca_path: string;
    caPath: string;
    client_cert: GLib.Bytes;
    clientCert: GLib.Bytes;
    client_cert_password: string;
    clientCertPassword: string;
    client_cert_password_flags: SettingSecretFlags;
    clientCertPasswordFlags: SettingSecretFlags;
    domain_match: string;
    domainMatch: string;
    domain_suffix_match: string;
    domainSuffixMatch: string;
    eap: string[];
    identity: string;
    optional: boolean;
    pac_file: string;
    pacFile: string;
    password: string;
    password_flags: SettingSecretFlags;
    passwordFlags: SettingSecretFlags;
    password_raw: GLib.Bytes;
    passwordRaw: GLib.Bytes;
    password_raw_flags: SettingSecretFlags;
    passwordRawFlags: SettingSecretFlags;
    phase1_auth_flags: number;
    phase1AuthFlags: number;
    phase1_fast_provisioning: string;
    phase1FastProvisioning: string;
    phase1_peaplabel: string;
    phase1Peaplabel: string;
    phase1_peapver: string;
    phase1Peapver: string;
    phase2_altsubject_matches: string[];
    phase2AltsubjectMatches: string[];
    phase2_auth: string;
    phase2Auth: string;
    phase2_autheap: string;
    phase2Autheap: string;
    phase2_ca_cert: GLib.Bytes;
    phase2CaCert: GLib.Bytes;
    phase2_ca_cert_password: string;
    phase2CaCertPassword: string;
    phase2_ca_cert_password_flags: SettingSecretFlags;
    phase2CaCertPasswordFlags: SettingSecretFlags;
    phase2_ca_path: string;
    phase2CaPath: string;
    phase2_client_cert: GLib.Bytes;
    phase2ClientCert: GLib.Bytes;
    phase2_client_cert_password: string;
    phase2ClientCertPassword: string;
    phase2_client_cert_password_flags: SettingSecretFlags;
    phase2ClientCertPasswordFlags: SettingSecretFlags;
    phase2_domain_match: string;
    phase2DomainMatch: string;
    phase2_domain_suffix_match: string;
    phase2DomainSuffixMatch: string;
    phase2_private_key: GLib.Bytes;
    phase2PrivateKey: GLib.Bytes;
    phase2_private_key_password: string;
    phase2PrivateKeyPassword: string;
    phase2_private_key_password_flags: SettingSecretFlags;
    phase2PrivateKeyPasswordFlags: SettingSecretFlags;
    phase2_subject_match: string;
    phase2SubjectMatch: string;
    pin: string;
    pin_flags: SettingSecretFlags;
    pinFlags: SettingSecretFlags;
    private_key: GLib.Bytes;
    privateKey: GLib.Bytes;
    private_key_password: string;
    privateKeyPassword: string;
    private_key_password_flags: SettingSecretFlags;
    privateKeyPasswordFlags: SettingSecretFlags;
    subject_match: string;
    subjectMatch: string;
    system_ca_certs: boolean;
    systemCaCerts: boolean;

    // Constructors

    static ["new"](): Setting8021x;

    // Members

    add_altsubject_match(altsubject_match: string): boolean;
    add_eap_method(eap: string): boolean;
    add_phase2_altsubject_match(phase2_altsubject_match: string): boolean;
    clear_altsubject_matches(): void;
    clear_eap_methods(): void;
    clear_phase2_altsubject_matches(): void;
    get_altsubject_match(i: number): string;
    get_anonymous_identity(): string;
    get_auth_timeout(): number;
    get_ca_cert_blob(): GLib.Bytes;
    get_ca_cert_password(): string;
    get_ca_cert_password_flags(): SettingSecretFlags;
    get_ca_cert_path(): string;
    get_ca_cert_scheme(): Setting8021xCKScheme;
    get_ca_cert_uri(): string;
    get_ca_path(): string;
    get_client_cert_blob(): GLib.Bytes;
    get_client_cert_password(): string;
    get_client_cert_password_flags(): SettingSecretFlags;
    get_client_cert_path(): string;
    get_client_cert_scheme(): Setting8021xCKScheme;
    get_client_cert_uri(): string;
    get_domain_match(): string;
    get_domain_suffix_match(): string;
    get_eap_method(i: number): string;
    get_identity(): string;
    get_num_altsubject_matches(): number;
    get_num_eap_methods(): number;
    get_num_phase2_altsubject_matches(): number;
    get_optional(): boolean;
    get_pac_file(): string;
    get_password(): string;
    get_password_flags(): SettingSecretFlags;
    get_password_raw(): GLib.Bytes;
    get_password_raw_flags(): SettingSecretFlags;
    get_phase1_auth_flags(): Setting8021xAuthFlags;
    get_phase1_fast_provisioning(): string;
    get_phase1_peaplabel(): string;
    get_phase1_peapver(): string;
    get_phase2_altsubject_match(i: number): string;
    get_phase2_auth(): string;
    get_phase2_autheap(): string;
    get_phase2_ca_cert_blob(): GLib.Bytes;
    get_phase2_ca_cert_password(): string;
    get_phase2_ca_cert_password_flags(): SettingSecretFlags;
    get_phase2_ca_cert_path(): string;
    get_phase2_ca_cert_scheme(): Setting8021xCKScheme;
    get_phase2_ca_cert_uri(): string;
    get_phase2_ca_path(): string;
    get_phase2_client_cert_blob(): GLib.Bytes;
    get_phase2_client_cert_password(): string;
    get_phase2_client_cert_password_flags(): SettingSecretFlags;
    get_phase2_client_cert_path(): string;
    get_phase2_client_cert_scheme(): Setting8021xCKScheme;
    get_phase2_client_cert_uri(): string;
    get_phase2_domain_match(): string;
    get_phase2_domain_suffix_match(): string;
    get_phase2_private_key_blob(): GLib.Bytes;
    get_phase2_private_key_format(): Setting8021xCKFormat;
    get_phase2_private_key_password(): string;
    get_phase2_private_key_password_flags(): SettingSecretFlags;
    get_phase2_private_key_path(): string;
    get_phase2_private_key_scheme(): Setting8021xCKScheme;
    get_phase2_private_key_uri(): string;
    get_phase2_subject_match(): string;
    get_pin(): string;
    get_pin_flags(): SettingSecretFlags;
    get_private_key_blob(): GLib.Bytes;
    get_private_key_format(): Setting8021xCKFormat;
    get_private_key_password(): string;
    get_private_key_password_flags(): SettingSecretFlags;
    get_private_key_path(): string;
    get_private_key_scheme(): Setting8021xCKScheme;
    get_private_key_uri(): string;
    get_subject_match(): string;
    get_system_ca_certs(): boolean;
    remove_altsubject_match(i: number): void;
    remove_altsubject_match_by_value(altsubject_match: string): boolean;
    remove_eap_method(i: number): void;
    remove_eap_method_by_value(eap: string): boolean;
    remove_phase2_altsubject_match(i: number): void;
    remove_phase2_altsubject_match_by_value(phase2_altsubject_match: string): boolean;
    set_ca_cert(value: string, scheme: Setting8021xCKScheme, out_format: Setting8021xCKFormat): boolean;
    set_client_cert(value: string, scheme: Setting8021xCKScheme, out_format: Setting8021xCKFormat): boolean;
    set_phase2_ca_cert(value: string, scheme: Setting8021xCKScheme, out_format: Setting8021xCKFormat): boolean;
    set_phase2_client_cert(value: string, scheme: Setting8021xCKScheme, out_format: Setting8021xCKFormat): boolean;
    set_phase2_private_key(
        value: string,
        password: string,
        scheme: Setting8021xCKScheme,
        out_format: Setting8021xCKFormat
    ): boolean;
    set_private_key(
        value: string,
        password: string,
        scheme: Setting8021xCKScheme,
        out_format: Setting8021xCKFormat
    ): boolean;
    static check_cert_scheme(pdata: any | null, length: number): Setting8021xCKScheme;
}
export module SettingAdsl {
    export interface ConstructorProperties extends Setting.ConstructorProperties {
        [key: string]: any;
        encapsulation: string;
        password: string;
        password_flags: SettingSecretFlags;
        passwordFlags: SettingSecretFlags;
        protocol: string;
        username: string;
        vci: number;
        vpi: number;
    }
}
export class SettingAdsl extends Setting {
    static $gtype: GObject.GType<SettingAdsl>;

    constructor(properties?: Partial<SettingAdsl.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SettingAdsl.ConstructorProperties>, ...args: any[]): void;

    // Properties
    encapsulation: string;
    password: string;
    password_flags: SettingSecretFlags;
    passwordFlags: SettingSecretFlags;
    protocol: string;
    username: string;
    vci: number;
    vpi: number;

    // Constructors

    static ["new"](): SettingAdsl;

    // Members

    get_encapsulation(): string;
    get_password(): string;
    get_password_flags(): SettingSecretFlags;
    get_protocol(): string;
    get_username(): string;
    get_vci(): number;
    get_vpi(): number;
}
export module SettingBluetooth {
    export interface ConstructorProperties extends Setting.ConstructorProperties {
        [key: string]: any;
        bdaddr: string;
        type: string;
    }
}
export class SettingBluetooth extends Setting {
    static $gtype: GObject.GType<SettingBluetooth>;

    constructor(properties?: Partial<SettingBluetooth.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SettingBluetooth.ConstructorProperties>, ...args: any[]): void;

    // Properties
    bdaddr: string;
    type: string;

    // Constructors

    static ["new"](): SettingBluetooth;

    // Members

    get_bdaddr(): string;
    get_connection_type(): string;
}
export module SettingBond {
    export interface ConstructorProperties extends Setting.ConstructorProperties {
        [key: string]: any;
        options: GLib.HashTable<string, string>;
    }
}
export class SettingBond extends Setting {
    static $gtype: GObject.GType<SettingBond>;

    constructor(properties?: Partial<SettingBond.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SettingBond.ConstructorProperties>, ...args: any[]): void;

    // Properties
    options: GLib.HashTable<string, string>;

    // Constructors

    static ["new"](): SettingBond;

    // Members

    add_option(name: string, value: string): boolean;
    get_num_options(): number;
    get_option(idx: number): [boolean, string, string];
    get_option_by_name(name: string): string;
    get_option_default(name: string): string;
    get_option_normalized(name: string): string;
    get_valid_options(): string[];
    remove_option(name: string): boolean;
    static validate_option(name: string, value: string): boolean;
}
export module SettingBridge {
    export interface ConstructorProperties extends Setting.ConstructorProperties {
        [key: string]: any;
        ageing_time: number;
        ageingTime: number;
        forward_delay: number;
        forwardDelay: number;
        group_address: string;
        groupAddress: string;
        group_forward_mask: number;
        groupForwardMask: number;
        hello_time: number;
        helloTime: number;
        mac_address: string;
        macAddress: string;
        max_age: number;
        maxAge: number;
        multicast_hash_max: number;
        multicastHashMax: number;
        multicast_last_member_count: number;
        multicastLastMemberCount: number;
        multicast_last_member_interval: number;
        multicastLastMemberInterval: number;
        multicast_membership_interval: number;
        multicastMembershipInterval: number;
        multicast_querier: boolean;
        multicastQuerier: boolean;
        multicast_querier_interval: number;
        multicastQuerierInterval: number;
        multicast_query_interval: number;
        multicastQueryInterval: number;
        multicast_query_response_interval: number;
        multicastQueryResponseInterval: number;
        multicast_query_use_ifaddr: boolean;
        multicastQueryUseIfaddr: boolean;
        multicast_router: string;
        multicastRouter: string;
        multicast_snooping: boolean;
        multicastSnooping: boolean;
        multicast_startup_query_count: number;
        multicastStartupQueryCount: number;
        multicast_startup_query_interval: number;
        multicastStartupQueryInterval: number;
        priority: number;
        stp: boolean;
        vlan_default_pvid: number;
        vlanDefaultPvid: number;
        vlan_filtering: boolean;
        vlanFiltering: boolean;
        vlan_protocol: string;
        vlanProtocol: string;
        vlan_stats_enabled: boolean;
        vlanStatsEnabled: boolean;
        vlans: BridgeVlan[];
    }
}
export class SettingBridge extends Setting {
    static $gtype: GObject.GType<SettingBridge>;

    constructor(properties?: Partial<SettingBridge.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SettingBridge.ConstructorProperties>, ...args: any[]): void;

    // Properties
    ageing_time: number;
    ageingTime: number;
    forward_delay: number;
    forwardDelay: number;
    group_address: string;
    groupAddress: string;
    group_forward_mask: number;
    groupForwardMask: number;
    hello_time: number;
    helloTime: number;
    mac_address: string;
    macAddress: string;
    max_age: number;
    maxAge: number;
    multicast_hash_max: number;
    multicastHashMax: number;
    multicast_last_member_count: number;
    multicastLastMemberCount: number;
    multicast_last_member_interval: number;
    multicastLastMemberInterval: number;
    multicast_membership_interval: number;
    multicastMembershipInterval: number;
    multicast_querier: boolean;
    multicastQuerier: boolean;
    multicast_querier_interval: number;
    multicastQuerierInterval: number;
    multicast_query_interval: number;
    multicastQueryInterval: number;
    multicast_query_response_interval: number;
    multicastQueryResponseInterval: number;
    multicast_query_use_ifaddr: boolean;
    multicastQueryUseIfaddr: boolean;
    multicast_router: string;
    multicastRouter: string;
    multicast_snooping: boolean;
    multicastSnooping: boolean;
    multicast_startup_query_count: number;
    multicastStartupQueryCount: number;
    multicast_startup_query_interval: number;
    multicastStartupQueryInterval: number;
    priority: number;
    stp: boolean;
    vlan_default_pvid: number;
    vlanDefaultPvid: number;
    vlan_filtering: boolean;
    vlanFiltering: boolean;
    vlan_protocol: string;
    vlanProtocol: string;
    vlan_stats_enabled: boolean;
    vlanStatsEnabled: boolean;
    vlans: BridgeVlan[];

    // Constructors

    static ["new"](): SettingBridge;

    // Members

    add_vlan(vlan: BridgeVlan): void;
    clear_vlans(): void;
    get_ageing_time(): number;
    get_forward_delay(): number;
    get_group_address(): string;
    get_group_forward_mask(): number;
    get_hello_time(): number;
    get_mac_address(): string;
    get_max_age(): number;
    get_multicast_hash_max(): number;
    get_multicast_last_member_count(): number;
    get_multicast_last_member_interval(): number;
    get_multicast_membership_interval(): number;
    get_multicast_querier(): boolean;
    get_multicast_querier_interval(): number;
    get_multicast_query_interval(): number;
    get_multicast_query_response_interval(): number;
    get_multicast_query_use_ifaddr(): boolean;
    get_multicast_router(): string;
    get_multicast_snooping(): boolean;
    get_multicast_startup_query_count(): number;
    get_multicast_startup_query_interval(): number;
    get_num_vlans(): number;
    get_priority(): number;
    get_stp(): boolean;
    get_vlan(idx: number): BridgeVlan;
    get_vlan_default_pvid(): number;
    get_vlan_filtering(): boolean;
    get_vlan_protocol(): string;
    get_vlan_stats_enabled(): boolean;
    remove_vlan(idx: number): void;
    remove_vlan_by_vid(vid_start: number, vid_end: number): boolean;
}
export module SettingBridgePort {
    export interface ConstructorProperties extends Setting.ConstructorProperties {
        [key: string]: any;
        hairpin_mode: boolean;
        hairpinMode: boolean;
        path_cost: number;
        pathCost: number;
        priority: number;
        vlans: BridgeVlan[];
    }
}
export class SettingBridgePort extends Setting {
    static $gtype: GObject.GType<SettingBridgePort>;

    constructor(properties?: Partial<SettingBridgePort.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SettingBridgePort.ConstructorProperties>, ...args: any[]): void;

    // Properties
    hairpin_mode: boolean;
    hairpinMode: boolean;
    path_cost: number;
    pathCost: number;
    priority: number;
    vlans: BridgeVlan[];

    // Constructors

    static ["new"](): SettingBridgePort;

    // Members

    add_vlan(vlan: BridgeVlan): void;
    clear_vlans(): void;
    get_hairpin_mode(): boolean;
    get_num_vlans(): number;
    get_path_cost(): number;
    get_priority(): number;
    get_vlan(idx: number): BridgeVlan;
    remove_vlan(idx: number): void;
    remove_vlan_by_vid(vid_start: number, vid_end: number): boolean;
}
export module SettingCdma {
    export interface ConstructorProperties extends Setting.ConstructorProperties {
        [key: string]: any;
        mtu: number;
        number: string;
        password: string;
        password_flags: SettingSecretFlags;
        passwordFlags: SettingSecretFlags;
        username: string;
    }
}
export class SettingCdma extends Setting {
    static $gtype: GObject.GType<SettingCdma>;

    constructor(properties?: Partial<SettingCdma.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SettingCdma.ConstructorProperties>, ...args: any[]): void;

    // Properties
    mtu: number;
    number: string;
    password: string;
    password_flags: SettingSecretFlags;
    passwordFlags: SettingSecretFlags;
    username: string;

    // Constructors

    static ["new"](): SettingCdma;

    // Members

    get_mtu(): number;
    get_number(): string;
    get_password(): string;
    get_password_flags(): SettingSecretFlags;
    get_username(): string;
}
export module SettingConnection {
    export interface ConstructorProperties extends Setting.ConstructorProperties {
        [key: string]: any;
        auth_retries: number;
        authRetries: number;
        autoconnect: boolean;
        autoconnect_priority: number;
        autoconnectPriority: number;
        autoconnect_retries: number;
        autoconnectRetries: number;
        autoconnect_slaves: SettingConnectionAutoconnectSlaves;
        autoconnectSlaves: SettingConnectionAutoconnectSlaves;
        gateway_ping_timeout: number;
        gatewayPingTimeout: number;
        id: string;
        interface_name: string;
        interfaceName: string;
        lldp: number;
        llmnr: number;
        master: string;
        mdns: number;
        metered: Metered;
        mud_url: string;
        mudUrl: string;
        multi_connect: number;
        multiConnect: number;
        permissions: string[];
        read_only: boolean;
        readOnly: boolean;
        secondaries: string[];
        slave_type: string;
        slaveType: string;
        stable_id: string;
        stableId: string;
        timestamp: number;
        type: string;
        uuid: string;
        wait_device_timeout: number;
        waitDeviceTimeout: number;
        zone: string;
    }
}
export class SettingConnection extends Setting {
    static $gtype: GObject.GType<SettingConnection>;

    constructor(properties?: Partial<SettingConnection.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SettingConnection.ConstructorProperties>, ...args: any[]): void;

    // Properties
    auth_retries: number;
    authRetries: number;
    autoconnect: boolean;
    autoconnect_priority: number;
    autoconnectPriority: number;
    autoconnect_retries: number;
    autoconnectRetries: number;
    autoconnect_slaves: SettingConnectionAutoconnectSlaves;
    autoconnectSlaves: SettingConnectionAutoconnectSlaves;
    gateway_ping_timeout: number;
    gatewayPingTimeout: number;
    id: string;
    interface_name: string;
    interfaceName: string;
    lldp: number;
    llmnr: number;
    master: string;
    mdns: number;
    metered: Metered;
    mud_url: string;
    mudUrl: string;
    multi_connect: number;
    multiConnect: number;
    permissions: string[];
    read_only: boolean;
    readOnly: boolean;
    secondaries: string[];
    slave_type: string;
    slaveType: string;
    stable_id: string;
    stableId: string;
    timestamp: number;
    type: string;
    uuid: string;
    wait_device_timeout: number;
    waitDeviceTimeout: number;
    zone: string;

    // Constructors

    static ["new"](): SettingConnection;

    // Members

    add_permission(ptype: string, pitem: string, detail?: string | null): boolean;
    add_secondary(sec_uuid: string): boolean;
    get_auth_retries(): number;
    get_autoconnect(): boolean;
    get_autoconnect_priority(): number;
    get_autoconnect_retries(): number;
    get_autoconnect_slaves(): SettingConnectionAutoconnectSlaves;
    get_connection_type(): string;
    get_gateway_ping_timeout(): number;
    get_id(): string;
    get_interface_name(): string;
    get_lldp(): SettingConnectionLldp;
    get_llmnr(): SettingConnectionLlmnr;
    get_master(): string;
    get_mdns(): SettingConnectionMdns;
    get_metered(): Metered;
    get_mud_url(): string;
    get_multi_connect(): ConnectionMultiConnect;
    get_num_permissions(): number;
    get_num_secondaries(): number;
    get_permission(idx: number, out_ptype: string, out_pitem: string, out_detail: string): boolean;
    get_read_only(): boolean;
    get_secondary(idx: number): string;
    get_slave_type(): string;
    get_stable_id(): string;
    get_timestamp(): number;
    get_uuid(): string;
    get_wait_device_timeout(): number;
    get_zone(): string;
    is_slave_type(type: string): boolean;
    permissions_user_allowed(uname: string): boolean;
    remove_permission(idx: number): void;
    remove_permission_by_value(ptype: string, pitem: string, detail?: string | null): boolean;
    remove_secondary(idx: number): void;
    remove_secondary_by_value(sec_uuid: string): boolean;
}
export module SettingDcb {
    export interface ConstructorProperties extends Setting.ConstructorProperties {
        [key: string]: any;
        app_fcoe_flags: SettingDcbFlags;
        appFcoeFlags: SettingDcbFlags;
        app_fcoe_mode: string;
        appFcoeMode: string;
        app_fcoe_priority: number;
        appFcoePriority: number;
        app_fip_flags: SettingDcbFlags;
        appFipFlags: SettingDcbFlags;
        app_fip_priority: number;
        appFipPriority: number;
        app_iscsi_flags: SettingDcbFlags;
        appIscsiFlags: SettingDcbFlags;
        app_iscsi_priority: number;
        appIscsiPriority: number;
        priority_bandwidth: number[];
        priorityBandwidth: number[];
        priority_flow_control: boolean[];
        priorityFlowControl: boolean[];
        priority_flow_control_flags: SettingDcbFlags;
        priorityFlowControlFlags: SettingDcbFlags;
        priority_group_bandwidth: number[];
        priorityGroupBandwidth: number[];
        priority_group_flags: SettingDcbFlags;
        priorityGroupFlags: SettingDcbFlags;
        priority_group_id: number[];
        priorityGroupId: number[];
        priority_strict_bandwidth: boolean[];
        priorityStrictBandwidth: boolean[];
        priority_traffic_class: number[];
        priorityTrafficClass: number[];
    }
}
export class SettingDcb extends Setting {
    static $gtype: GObject.GType<SettingDcb>;

    constructor(properties?: Partial<SettingDcb.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SettingDcb.ConstructorProperties>, ...args: any[]): void;

    // Properties
    app_fcoe_flags: SettingDcbFlags;
    appFcoeFlags: SettingDcbFlags;
    app_fcoe_mode: string;
    appFcoeMode: string;
    app_fcoe_priority: number;
    appFcoePriority: number;
    app_fip_flags: SettingDcbFlags;
    appFipFlags: SettingDcbFlags;
    app_fip_priority: number;
    appFipPriority: number;
    app_iscsi_flags: SettingDcbFlags;
    appIscsiFlags: SettingDcbFlags;
    app_iscsi_priority: number;
    appIscsiPriority: number;
    priority_bandwidth: number[];
    priorityBandwidth: number[];
    priority_flow_control: boolean[];
    priorityFlowControl: boolean[];
    priority_flow_control_flags: SettingDcbFlags;
    priorityFlowControlFlags: SettingDcbFlags;
    priority_group_bandwidth: number[];
    priorityGroupBandwidth: number[];
    priority_group_flags: SettingDcbFlags;
    priorityGroupFlags: SettingDcbFlags;
    priority_group_id: number[];
    priorityGroupId: number[];
    priority_strict_bandwidth: boolean[];
    priorityStrictBandwidth: boolean[];
    priority_traffic_class: number[];
    priorityTrafficClass: number[];

    // Constructors

    static ["new"](): SettingDcb;

    // Members

    get_app_fcoe_flags(): SettingDcbFlags;
    get_app_fcoe_mode(): string;
    get_app_fcoe_priority(): number;
    get_app_fip_flags(): SettingDcbFlags;
    get_app_fip_priority(): number;
    get_app_iscsi_flags(): SettingDcbFlags;
    get_app_iscsi_priority(): number;
    get_priority_bandwidth(user_priority: number): number;
    get_priority_flow_control(user_priority: number): boolean;
    get_priority_flow_control_flags(): SettingDcbFlags;
    get_priority_group_bandwidth(group_id: number): number;
    get_priority_group_flags(): SettingDcbFlags;
    get_priority_group_id(user_priority: number): number;
    get_priority_strict_bandwidth(user_priority: number): boolean;
    get_priority_traffic_class(user_priority: number): number;
    set_priority_bandwidth(user_priority: number, bandwidth_percent: number): void;
    set_priority_flow_control(user_priority: number, enabled: boolean): void;
    set_priority_group_bandwidth(group_id: number, bandwidth_percent: number): void;
    set_priority_group_id(user_priority: number, group_id: number): void;
    set_priority_strict_bandwidth(user_priority: number, strict: boolean): void;
    set_priority_traffic_class(user_priority: number, traffic_class: number): void;
}
export module SettingDummy {
    export interface ConstructorProperties extends Setting.ConstructorProperties {
        [key: string]: any;
    }
}
export class SettingDummy extends Setting {
    static $gtype: GObject.GType<SettingDummy>;

    constructor(properties?: Partial<SettingDummy.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SettingDummy.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): SettingDummy;
}
export module SettingEthtool {
    export interface ConstructorProperties extends Setting.ConstructorProperties {
        [key: string]: any;
    }
}
export class SettingEthtool extends Setting {
    static $gtype: GObject.GType<SettingEthtool>;

    constructor(properties?: Partial<SettingEthtool.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SettingEthtool.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): SettingEthtool;

    // Members

    clear_features(): void;
    get_feature(optname: string): Ternary;
    get_optnames(): [string[], number | null];
    set_feature(optname: string, value: Ternary): void;
}
export module SettingGeneric {
    export interface ConstructorProperties extends Setting.ConstructorProperties {
        [key: string]: any;
    }
}
export class SettingGeneric extends Setting {
    static $gtype: GObject.GType<SettingGeneric>;

    constructor(properties?: Partial<SettingGeneric.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SettingGeneric.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): SettingGeneric;
}
export module SettingGsm {
    export interface ConstructorProperties extends Setting.ConstructorProperties {
        [key: string]: any;
        apn: string;
        auto_config: boolean;
        autoConfig: boolean;
        device_id: string;
        deviceId: string;
        home_only: boolean;
        homeOnly: boolean;
        mtu: number;
        network_id: string;
        networkId: string;
        number: string;
        password: string;
        password_flags: SettingSecretFlags;
        passwordFlags: SettingSecretFlags;
        pin: string;
        pin_flags: SettingSecretFlags;
        pinFlags: SettingSecretFlags;
        sim_id: string;
        simId: string;
        sim_operator_id: string;
        simOperatorId: string;
        username: string;
    }
}
export class SettingGsm extends Setting {
    static $gtype: GObject.GType<SettingGsm>;

    constructor(properties?: Partial<SettingGsm.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SettingGsm.ConstructorProperties>, ...args: any[]): void;

    // Properties
    apn: string;
    auto_config: boolean;
    autoConfig: boolean;
    device_id: string;
    deviceId: string;
    home_only: boolean;
    homeOnly: boolean;
    mtu: number;
    network_id: string;
    networkId: string;
    number: string;
    password: string;
    password_flags: SettingSecretFlags;
    passwordFlags: SettingSecretFlags;
    pin: string;
    pin_flags: SettingSecretFlags;
    pinFlags: SettingSecretFlags;
    sim_id: string;
    simId: string;
    sim_operator_id: string;
    simOperatorId: string;
    username: string;

    // Constructors

    static ["new"](): SettingGsm;

    // Members

    get_apn(): string;
    get_auto_config(): boolean;
    get_device_id(): string;
    get_home_only(): boolean;
    get_mtu(): number;
    get_network_id(): string;
    get_number(): string;
    get_password(): string;
    get_password_flags(): SettingSecretFlags;
    get_pin(): string;
    get_pin_flags(): SettingSecretFlags;
    get_sim_id(): string;
    get_sim_operator_id(): string;
    get_username(): string;
}
export module SettingIP4Config {
    export interface ConstructorProperties extends SettingIPConfig.ConstructorProperties {
        [key: string]: any;
        dhcp_client_id: string;
        dhcpClientId: string;
        dhcp_fqdn: string;
        dhcpFqdn: string;
        dhcp_vendor_class_identifier: string;
        dhcpVendorClassIdentifier: string;
    }
}
export class SettingIP4Config extends SettingIPConfig {
    static $gtype: GObject.GType<SettingIP4Config>;

    constructor(properties?: Partial<SettingIP4Config.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SettingIP4Config.ConstructorProperties>, ...args: any[]): void;

    // Properties
    dhcp_client_id: string;
    dhcpClientId: string;
    dhcp_fqdn: string;
    dhcpFqdn: string;
    dhcp_vendor_class_identifier: string;
    dhcpVendorClassIdentifier: string;

    // Constructors

    static ["new"](): SettingIP4Config;

    // Members

    get_dhcp_client_id(): string;
    get_dhcp_fqdn(): string;
    get_dhcp_vendor_class_identifier(): string;
}
export module SettingIP6Config {
    export interface ConstructorProperties extends SettingIPConfig.ConstructorProperties {
        [key: string]: any;
        addr_gen_mode: number;
        addrGenMode: number;
        dhcp_duid: string;
        dhcpDuid: string;
        ip6_privacy: SettingIP6ConfigPrivacy;
        ip6Privacy: SettingIP6ConfigPrivacy;
        ra_timeout: number;
        raTimeout: number;
        token: string;
    }
}
export class SettingIP6Config extends SettingIPConfig {
    static $gtype: GObject.GType<SettingIP6Config>;

    constructor(properties?: Partial<SettingIP6Config.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SettingIP6Config.ConstructorProperties>, ...args: any[]): void;

    // Properties
    addr_gen_mode: number;
    addrGenMode: number;
    dhcp_duid: string;
    dhcpDuid: string;
    ip6_privacy: SettingIP6ConfigPrivacy;
    ip6Privacy: SettingIP6ConfigPrivacy;
    ra_timeout: number;
    raTimeout: number;
    token: string;

    // Constructors

    static ["new"](): SettingIP6Config;

    // Members

    get_addr_gen_mode(): SettingIP6ConfigAddrGenMode;
    get_dhcp_duid(): string;
    get_ip6_privacy(): SettingIP6ConfigPrivacy;
    get_ra_timeout(): number;
    get_token(): string;
}
export module SettingIPConfig {
    export interface ConstructorProperties extends Setting.ConstructorProperties {
        [key: string]: any;
        addresses: IPAddress[];
        dad_timeout: number;
        dadTimeout: number;
        dhcp_hostname: string;
        dhcpHostname: string;
        dhcp_hostname_flags: number;
        dhcpHostnameFlags: number;
        dhcp_iaid: string;
        dhcpIaid: string;
        dhcp_reject_servers: string[];
        dhcpRejectServers: string[];
        dhcp_send_hostname: boolean;
        dhcpSendHostname: boolean;
        dhcp_timeout: number;
        dhcpTimeout: number;
        dns: string[];
        dns_options: string[];
        dnsOptions: string[];
        dns_priority: number;
        dnsPriority: number;
        dns_search: string[];
        dnsSearch: string[];
        gateway: string;
        ignore_auto_dns: boolean;
        ignoreAutoDns: boolean;
        ignore_auto_routes: boolean;
        ignoreAutoRoutes: boolean;
        may_fail: boolean;
        mayFail: boolean;
        method: string;
        never_default: boolean;
        neverDefault: boolean;
        route_metric: number;
        routeMetric: number;
        route_table: number;
        routeTable: number;
        routes: IPRoute[];
    }
}
export abstract class SettingIPConfig extends Setting {
    static $gtype: GObject.GType<SettingIPConfig>;

    constructor(properties?: Partial<SettingIPConfig.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SettingIPConfig.ConstructorProperties>, ...args: any[]): void;

    // Properties
    addresses: IPAddress[];
    dad_timeout: number;
    dadTimeout: number;
    dhcp_hostname: string;
    dhcpHostname: string;
    dhcp_hostname_flags: number;
    dhcpHostnameFlags: number;
    dhcp_iaid: string;
    dhcpIaid: string;
    dhcp_reject_servers: string[];
    dhcpRejectServers: string[];
    dhcp_send_hostname: boolean;
    dhcpSendHostname: boolean;
    dhcp_timeout: number;
    dhcpTimeout: number;
    dns: string[];
    dns_options: string[];
    dnsOptions: string[];
    dns_priority: number;
    dnsPriority: number;
    dns_search: string[];
    dnsSearch: string[];
    gateway: string;
    ignore_auto_dns: boolean;
    ignoreAutoDns: boolean;
    ignore_auto_routes: boolean;
    ignoreAutoRoutes: boolean;
    may_fail: boolean;
    mayFail: boolean;
    method: string;
    never_default: boolean;
    neverDefault: boolean;
    route_metric: number;
    routeMetric: number;
    route_table: number;
    routeTable: number;
    routes: IPRoute[];

    // Members

    add_address(address: IPAddress): boolean;
    add_dhcp_reject_server(server: string): void;
    add_dns(dns: string): boolean;
    add_dns_option(dns_option: string): boolean;
    add_dns_search(dns_search: string): boolean;
    add_route(route: IPRoute): boolean;
    add_routing_rule(routing_rule: IPRoutingRule): void;
    clear_addresses(): void;
    clear_dhcp_reject_servers(): void;
    clear_dns(): void;
    clear_dns_options(is_set: boolean): void;
    clear_dns_searches(): void;
    clear_routes(): void;
    clear_routing_rules(): void;
    get_address(idx: number): IPAddress;
    get_dad_timeout(): number;
    get_dhcp_hostname(): string;
    get_dhcp_hostname_flags(): DhcpHostnameFlags;
    get_dhcp_iaid(): string;
    get_dhcp_reject_servers(): string[];
    get_dhcp_send_hostname(): boolean;
    get_dhcp_timeout(): number;
    get_dns(idx: number): string;
    get_dns_option(idx: number): string;
    get_dns_priority(): number;
    get_dns_search(idx: number): string;
    get_gateway(): string;
    get_ignore_auto_dns(): boolean;
    get_ignore_auto_routes(): boolean;
    get_may_fail(): boolean;
    get_method(): string;
    get_never_default(): boolean;
    get_num_addresses(): number;
    get_num_dns(): number;
    get_num_dns_options(): number;
    get_num_dns_searches(): number;
    get_num_routes(): number;
    get_num_routing_rules(): number;
    get_route(idx: number): IPRoute;
    get_route_metric(): number;
    get_route_table(): number;
    get_routing_rule(idx: number): IPRoutingRule;
    has_dns_options(): boolean;
    remove_address(idx: number): void;
    remove_address_by_value(address: IPAddress): boolean;
    remove_dhcp_reject_server(idx: number): void;
    remove_dns(idx: number): void;
    remove_dns_by_value(dns: string): boolean;
    remove_dns_option(idx: number): void;
    remove_dns_option_by_value(dns_option: string): boolean;
    remove_dns_search(idx: number): void;
    remove_dns_search_by_value(dns_search: string): boolean;
    remove_route(idx: number): void;
    remove_route_by_value(route: IPRoute): boolean;
    remove_routing_rule(idx: number): void;
}
export module SettingIPTunnel {
    export interface ConstructorProperties extends Setting.ConstructorProperties {
        [key: string]: any;
        encapsulation_limit: number;
        encapsulationLimit: number;
        flags: number;
        flow_label: number;
        flowLabel: number;
        input_key: string;
        inputKey: string;
        local: string;
        mode: number;
        mtu: number;
        output_key: string;
        outputKey: string;
        path_mtu_discovery: boolean;
        pathMtuDiscovery: boolean;
        remote: string;
        tos: number;
        ttl: number;
    }
}
export class SettingIPTunnel extends Setting {
    static $gtype: GObject.GType<SettingIPTunnel>;

    constructor(properties?: Partial<SettingIPTunnel.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SettingIPTunnel.ConstructorProperties>, ...args: any[]): void;

    // Properties
    encapsulation_limit: number;
    encapsulationLimit: number;
    flags: number;
    flow_label: number;
    flowLabel: number;
    input_key: string;
    inputKey: string;
    local: string;
    mode: number;
    mtu: number;
    output_key: string;
    outputKey: string;
    path_mtu_discovery: boolean;
    pathMtuDiscovery: boolean;
    remote: string;
    tos: number;
    ttl: number;

    // Constructors

    static ["new"](): SettingIPTunnel;

    // Members

    get_encapsulation_limit(): number;
    get_flags(): IPTunnelFlags;
    get_flow_label(): number;
    get_input_key(): string;
    get_local(): string;
    get_mode(): IPTunnelMode;
    get_mtu(): number;
    get_output_key(): string;
    get_parent(): string;
    get_path_mtu_discovery(): boolean;
    get_remote(): string;
    get_tos(): number;
    get_ttl(): number;
}
export module SettingInfiniband {
    export interface ConstructorProperties extends Setting.ConstructorProperties {
        [key: string]: any;
        mac_address: string;
        macAddress: string;
        mtu: number;
        p_key: number;
        pKey: number;
        transport_mode: string;
        transportMode: string;
    }
}
export class SettingInfiniband extends Setting {
    static $gtype: GObject.GType<SettingInfiniband>;

    constructor(properties?: Partial<SettingInfiniband.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SettingInfiniband.ConstructorProperties>, ...args: any[]): void;

    // Properties
    mac_address: string;
    macAddress: string;
    mtu: number;
    p_key: number;
    pKey: number;
    transport_mode: string;
    transportMode: string;

    // Constructors

    static ["new"](): SettingInfiniband;

    // Members

    get_mac_address(): string;
    get_mtu(): number;
    get_p_key(): number;
    get_parent(): string;
    get_transport_mode(): string;
    get_virtual_interface_name(): string;
}
export module SettingMacsec {
    export interface ConstructorProperties extends Setting.ConstructorProperties {
        [key: string]: any;
        encrypt: boolean;
        mka_cak: string;
        mkaCak: string;
        mka_cak_flags: SettingSecretFlags;
        mkaCakFlags: SettingSecretFlags;
        mka_ckn: string;
        mkaCkn: string;
        mode: number;
        port: number;
        send_sci: boolean;
        sendSci: boolean;
        validation: number;
    }
}
export class SettingMacsec extends Setting {
    static $gtype: GObject.GType<SettingMacsec>;

    constructor(properties?: Partial<SettingMacsec.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SettingMacsec.ConstructorProperties>, ...args: any[]): void;

    // Properties
    encrypt: boolean;
    mka_cak: string;
    mkaCak: string;
    mka_cak_flags: SettingSecretFlags;
    mkaCakFlags: SettingSecretFlags;
    mka_ckn: string;
    mkaCkn: string;
    mode: number;
    port: number;
    send_sci: boolean;
    sendSci: boolean;
    validation: number;

    // Constructors

    static ["new"](): SettingMacsec;

    // Members

    get_encrypt(): boolean;
    get_mka_cak(): string;
    get_mka_cak_flags(): SettingSecretFlags;
    get_mka_ckn(): string;
    get_mode(): SettingMacsecMode;
    get_parent(): string;
    get_port(): number;
    get_send_sci(): boolean;
    get_validation(): SettingMacsecValidation;
}
export module SettingMacvlan {
    export interface ConstructorProperties extends Setting.ConstructorProperties {
        [key: string]: any;
        mode: number;
        promiscuous: boolean;
        tap: boolean;
    }
}
export class SettingMacvlan extends Setting {
    static $gtype: GObject.GType<SettingMacvlan>;

    constructor(properties?: Partial<SettingMacvlan.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SettingMacvlan.ConstructorProperties>, ...args: any[]): void;

    // Properties
    mode: number;
    promiscuous: boolean;
    tap: boolean;

    // Constructors

    static ["new"](): SettingMacvlan;

    // Members

    get_mode(): SettingMacvlanMode;
    get_parent(): string;
    get_promiscuous(): boolean;
    get_tap(): boolean;
}
export module SettingMatch {
    export interface ConstructorProperties extends Setting.ConstructorProperties {
        [key: string]: any;
        driver: string[];
        interface_name: string[];
        interfaceName: string[];
        kernel_command_line: string[];
        kernelCommandLine: string[];
        path: string[];
    }
}
export class SettingMatch extends Setting {
    static $gtype: GObject.GType<SettingMatch>;

    constructor(properties?: Partial<SettingMatch.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SettingMatch.ConstructorProperties>, ...args: any[]): void;

    // Properties
    driver: string[];
    interface_name: string[];
    interfaceName: string[];
    kernel_command_line: string[];
    kernelCommandLine: string[];
    path: string[];

    // Constructors

    static ["new"](): SettingMatch;

    // Members

    add_driver(driver: string): void;
    add_interface_name(interface_name: string): void;
    add_kernel_command_line(kernel_command_line: string): void;
    add_path(path: string): void;
    clear_drivers(): void;
    clear_interface_names(): void;
    clear_kernel_command_lines(): void;
    clear_paths(): void;
    get_driver(idx: number): string;
    get_drivers(): string[];
    get_interface_name(idx: number): string;
    get_interface_names(): string[];
    get_kernel_command_line(idx: number): string;
    get_kernel_command_lines(): string[];
    get_num_drivers(): number;
    get_num_interface_names(): number;
    get_num_kernel_command_lines(): number;
    get_num_paths(): number;
    get_path(idx: number): string;
    get_paths(): string[];
    remove_driver(idx: number): void;
    remove_driver_by_value(driver: string): boolean;
    remove_interface_name(idx: number): void;
    remove_interface_name_by_value(interface_name: string): boolean;
    remove_kernel_command_line(idx: number): void;
    remove_kernel_command_line_by_value(kernel_command_line: string): boolean;
    remove_path(idx: number): void;
    remove_path_by_value(path: string): boolean;
}
export module SettingOlpcMesh {
    export interface ConstructorProperties extends Setting.ConstructorProperties {
        [key: string]: any;
        channel: number;
        dhcp_anycast_address: string;
        dhcpAnycastAddress: string;
        ssid: GLib.Bytes;
    }
}
export class SettingOlpcMesh extends Setting {
    static $gtype: GObject.GType<SettingOlpcMesh>;

    constructor(properties?: Partial<SettingOlpcMesh.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SettingOlpcMesh.ConstructorProperties>, ...args: any[]): void;

    // Properties
    channel: number;
    dhcp_anycast_address: string;
    dhcpAnycastAddress: string;
    ssid: GLib.Bytes;

    // Constructors

    static ["new"](): SettingOlpcMesh;

    // Members

    get_channel(): number;
    get_dhcp_anycast_address(): string;
    get_ssid(): GLib.Bytes;
}
export module SettingOvsBridge {
    export interface ConstructorProperties extends Setting.ConstructorProperties {
        [key: string]: any;
        datapath_type: string;
        datapathType: string;
        fail_mode: string;
        failMode: string;
        mcast_snooping_enable: boolean;
        mcastSnoopingEnable: boolean;
        rstp_enable: boolean;
        rstpEnable: boolean;
        stp_enable: boolean;
        stpEnable: boolean;
    }
}
export class SettingOvsBridge extends Setting {
    static $gtype: GObject.GType<SettingOvsBridge>;

    constructor(properties?: Partial<SettingOvsBridge.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SettingOvsBridge.ConstructorProperties>, ...args: any[]): void;

    // Properties
    datapath_type: string;
    datapathType: string;
    fail_mode: string;
    failMode: string;
    mcast_snooping_enable: boolean;
    mcastSnoopingEnable: boolean;
    rstp_enable: boolean;
    rstpEnable: boolean;
    stp_enable: boolean;
    stpEnable: boolean;

    // Constructors

    static ["new"](): SettingOvsBridge;

    // Members

    get_datapath_type(): string;
    get_fail_mode(): string;
    get_mcast_snooping_enable(): boolean;
    get_rstp_enable(): boolean;
    get_stp_enable(): boolean;
}
export module SettingOvsDpdk {
    export interface ConstructorProperties extends Setting.ConstructorProperties {
        [key: string]: any;
        devargs: string;
    }
}
export class SettingOvsDpdk extends Setting {
    static $gtype: GObject.GType<SettingOvsDpdk>;

    constructor(properties?: Partial<SettingOvsDpdk.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SettingOvsDpdk.ConstructorProperties>, ...args: any[]): void;

    // Properties
    devargs: string;

    // Constructors

    static ["new"](): SettingOvsDpdk;

    // Members

    get_devargs(): string;
}
export module SettingOvsInterface {
    export interface ConstructorProperties extends Setting.ConstructorProperties {
        [key: string]: any;
        type: string;
    }
}
export class SettingOvsInterface extends Setting {
    static $gtype: GObject.GType<SettingOvsInterface>;

    constructor(properties?: Partial<SettingOvsInterface.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SettingOvsInterface.ConstructorProperties>, ...args: any[]): void;

    // Properties
    type: string;

    // Constructors

    static ["new"](): SettingOvsInterface;

    // Members

    get_interface_type(): string;
}
export module SettingOvsPatch {
    export interface ConstructorProperties extends Setting.ConstructorProperties {
        [key: string]: any;
        peer: string;
    }
}
export class SettingOvsPatch extends Setting {
    static $gtype: GObject.GType<SettingOvsPatch>;

    constructor(properties?: Partial<SettingOvsPatch.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SettingOvsPatch.ConstructorProperties>, ...args: any[]): void;

    // Properties
    peer: string;

    // Constructors

    static ["new"](): SettingOvsPatch;

    // Members

    get_peer(): string;
}
export module SettingOvsPort {
    export interface ConstructorProperties extends Setting.ConstructorProperties {
        [key: string]: any;
        bond_downdelay: number;
        bondDowndelay: number;
        bond_mode: string;
        bondMode: string;
        bond_updelay: number;
        bondUpdelay: number;
        lacp: string;
        tag: number;
        vlan_mode: string;
        vlanMode: string;
    }
}
export class SettingOvsPort extends Setting {
    static $gtype: GObject.GType<SettingOvsPort>;

    constructor(properties?: Partial<SettingOvsPort.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SettingOvsPort.ConstructorProperties>, ...args: any[]): void;

    // Properties
    bond_downdelay: number;
    bondDowndelay: number;
    bond_mode: string;
    bondMode: string;
    bond_updelay: number;
    bondUpdelay: number;
    lacp: string;
    tag: number;
    vlan_mode: string;
    vlanMode: string;

    // Constructors

    static ["new"](): SettingOvsPort;

    // Members

    get_bond_downdelay(): number;
    get_bond_mode(): string;
    get_bond_updelay(): number;
    get_lacp(): string;
    get_tag(): number;
    get_vlan_mode(): string;
}
export module SettingPpp {
    export interface ConstructorProperties extends Setting.ConstructorProperties {
        [key: string]: any;
        baud: number;
        crtscts: boolean;
        lcp_echo_failure: number;
        lcpEchoFailure: number;
        lcp_echo_interval: number;
        lcpEchoInterval: number;
        mppe_stateful: boolean;
        mppeStateful: boolean;
        mru: number;
        mtu: number;
        no_vj_comp: boolean;
        noVjComp: boolean;
        noauth: boolean;
        nobsdcomp: boolean;
        nodeflate: boolean;
        refuse_chap: boolean;
        refuseChap: boolean;
        refuse_eap: boolean;
        refuseEap: boolean;
        refuse_mschap: boolean;
        refuseMschap: boolean;
        refuse_mschapv2: boolean;
        refuseMschapv2: boolean;
        refuse_pap: boolean;
        refusePap: boolean;
        require_mppe: boolean;
        requireMppe: boolean;
        require_mppe_128: boolean;
        requireMppe128: boolean;
    }
}
export class SettingPpp extends Setting {
    static $gtype: GObject.GType<SettingPpp>;

    constructor(properties?: Partial<SettingPpp.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SettingPpp.ConstructorProperties>, ...args: any[]): void;

    // Properties
    baud: number;
    crtscts: boolean;
    lcp_echo_failure: number;
    lcpEchoFailure: number;
    lcp_echo_interval: number;
    lcpEchoInterval: number;
    mppe_stateful: boolean;
    mppeStateful: boolean;
    mru: number;
    mtu: number;
    no_vj_comp: boolean;
    noVjComp: boolean;
    noauth: boolean;
    nobsdcomp: boolean;
    nodeflate: boolean;
    refuse_chap: boolean;
    refuseChap: boolean;
    refuse_eap: boolean;
    refuseEap: boolean;
    refuse_mschap: boolean;
    refuseMschap: boolean;
    refuse_mschapv2: boolean;
    refuseMschapv2: boolean;
    refuse_pap: boolean;
    refusePap: boolean;
    require_mppe: boolean;
    requireMppe: boolean;
    require_mppe_128: boolean;
    requireMppe128: boolean;

    // Constructors

    static ["new"](): SettingPpp;

    // Members

    get_baud(): number;
    get_crtscts(): boolean;
    get_lcp_echo_failure(): number;
    get_lcp_echo_interval(): number;
    get_mppe_stateful(): boolean;
    get_mru(): number;
    get_mtu(): number;
    get_no_vj_comp(): boolean;
    get_noauth(): boolean;
    get_nobsdcomp(): boolean;
    get_nodeflate(): boolean;
    get_refuse_chap(): boolean;
    get_refuse_eap(): boolean;
    get_refuse_mschap(): boolean;
    get_refuse_mschapv2(): boolean;
    get_refuse_pap(): boolean;
    get_require_mppe(): boolean;
    get_require_mppe_128(): boolean;
}
export module SettingPppoe {
    export interface ConstructorProperties extends Setting.ConstructorProperties {
        [key: string]: any;
        password: string;
        password_flags: SettingSecretFlags;
        passwordFlags: SettingSecretFlags;
        service: string;
        username: string;
    }
}
export class SettingPppoe extends Setting {
    static $gtype: GObject.GType<SettingPppoe>;

    constructor(properties?: Partial<SettingPppoe.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SettingPppoe.ConstructorProperties>, ...args: any[]): void;

    // Properties
    password: string;
    password_flags: SettingSecretFlags;
    passwordFlags: SettingSecretFlags;
    service: string;
    username: string;

    // Constructors

    static ["new"](): SettingPppoe;

    // Members

    get_parent(): string;
    get_password(): string;
    get_password_flags(): SettingSecretFlags;
    get_service(): string;
    get_username(): string;
}
export module SettingProxy {
    export interface ConstructorProperties extends Setting.ConstructorProperties {
        [key: string]: any;
        browser_only: boolean;
        browserOnly: boolean;
        method: number;
        pac_script: string;
        pacScript: string;
        pac_url: string;
        pacUrl: string;
    }
}
export class SettingProxy extends Setting {
    static $gtype: GObject.GType<SettingProxy>;

    constructor(properties?: Partial<SettingProxy.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SettingProxy.ConstructorProperties>, ...args: any[]): void;

    // Properties
    browser_only: boolean;
    browserOnly: boolean;
    method: number;
    pac_script: string;
    pacScript: string;
    pac_url: string;
    pacUrl: string;

    // Constructors

    static ["new"](): SettingProxy;

    // Members

    get_browser_only(): boolean;
    get_method(): SettingProxyMethod;
    get_pac_script(): string;
    get_pac_url(): string;
}
export module SettingSerial {
    export interface ConstructorProperties extends Setting.ConstructorProperties {
        [key: string]: any;
        baud: number;
        bits: number;
        parity: SettingSerialParity;
        send_delay: number;
        sendDelay: number;
        stopbits: number;
    }
}
export class SettingSerial extends Setting {
    static $gtype: GObject.GType<SettingSerial>;

    constructor(properties?: Partial<SettingSerial.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SettingSerial.ConstructorProperties>, ...args: any[]): void;

    // Properties
    baud: number;
    bits: number;
    parity: SettingSerialParity;
    send_delay: number;
    sendDelay: number;
    stopbits: number;

    // Constructors

    static ["new"](): SettingSerial;

    // Members

    get_baud(): number;
    get_bits(): number;
    get_parity(): SettingSerialParity;
    get_send_delay(): number;
    get_stopbits(): number;
}
export module SettingSriov {
    export interface ConstructorProperties extends Setting.ConstructorProperties {
        [key: string]: any;
        autoprobe_drivers: Ternary;
        autoprobeDrivers: Ternary;
        total_vfs: number;
        totalVfs: number;
        vfs: SriovVF[];
    }
}
export class SettingSriov extends Setting {
    static $gtype: GObject.GType<SettingSriov>;

    constructor(properties?: Partial<SettingSriov.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SettingSriov.ConstructorProperties>, ...args: any[]): void;

    // Properties
    autoprobe_drivers: Ternary;
    autoprobeDrivers: Ternary;
    total_vfs: number;
    totalVfs: number;
    vfs: SriovVF[];

    // Constructors

    static ["new"](): SettingSriov;

    // Members

    add_vf(vf: SriovVF): void;
    clear_vfs(): void;
    get_autoprobe_drivers(): Ternary;
    get_num_vfs(): number;
    get_total_vfs(): number;
    get_vf(idx: number): SriovVF;
    remove_vf(idx: number): void;
    remove_vf_by_index(index: number): boolean;
}
export module SettingTCConfig {
    export interface ConstructorProperties extends Setting.ConstructorProperties {
        [key: string]: any;
        qdiscs: TCQdisc[];
        tfilters: TCTfilter[];
    }
}
export class SettingTCConfig extends Setting {
    static $gtype: GObject.GType<SettingTCConfig>;

    constructor(properties?: Partial<SettingTCConfig.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SettingTCConfig.ConstructorProperties>, ...args: any[]): void;

    // Properties
    qdiscs: TCQdisc[];
    tfilters: TCTfilter[];

    // Constructors

    static ["new"](): SettingTCConfig;

    // Members

    add_qdisc(qdisc: TCQdisc): boolean;
    add_tfilter(tfilter: TCTfilter): boolean;
    clear_qdiscs(): void;
    clear_tfilters(): void;
    get_num_qdiscs(): number;
    get_num_tfilters(): number;
    get_qdisc(idx: number): TCQdisc;
    get_tfilter(idx: number): TCTfilter;
    remove_qdisc(idx: number): void;
    remove_qdisc_by_value(qdisc: TCQdisc): boolean;
    remove_tfilter(idx: number): void;
    remove_tfilter_by_value(tfilter: TCTfilter): boolean;
}
export module SettingTeam {
    export interface ConstructorProperties extends Setting.ConstructorProperties {
        [key: string]: any;
        config: string;
        link_watchers: TeamLinkWatcher[];
        linkWatchers: TeamLinkWatcher[];
        mcast_rejoin_count: number;
        mcastRejoinCount: number;
        mcast_rejoin_interval: number;
        mcastRejoinInterval: number;
        notify_peers_count: number;
        notifyPeersCount: number;
        notify_peers_interval: number;
        notifyPeersInterval: number;
        runner: string;
        runner_active: boolean;
        runnerActive: boolean;
        runner_agg_select_policy: string;
        runnerAggSelectPolicy: string;
        runner_fast_rate: boolean;
        runnerFastRate: boolean;
        runner_hwaddr_policy: string;
        runnerHwaddrPolicy: string;
        runner_min_ports: number;
        runnerMinPorts: number;
        runner_sys_prio: number;
        runnerSysPrio: number;
        runner_tx_balancer: string;
        runnerTxBalancer: string;
        runner_tx_balancer_interval: number;
        runnerTxBalancerInterval: number;
        runner_tx_hash: string[];
        runnerTxHash: string[];
    }
}
export class SettingTeam extends Setting {
    static $gtype: GObject.GType<SettingTeam>;

    constructor(properties?: Partial<SettingTeam.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SettingTeam.ConstructorProperties>, ...args: any[]): void;

    // Properties
    config: string;
    link_watchers: TeamLinkWatcher[];
    linkWatchers: TeamLinkWatcher[];
    mcast_rejoin_count: number;
    mcastRejoinCount: number;
    mcast_rejoin_interval: number;
    mcastRejoinInterval: number;
    notify_peers_count: number;
    notifyPeersCount: number;
    notify_peers_interval: number;
    notifyPeersInterval: number;
    runner: string;
    runner_active: boolean;
    runnerActive: boolean;
    runner_agg_select_policy: string;
    runnerAggSelectPolicy: string;
    runner_fast_rate: boolean;
    runnerFastRate: boolean;
    runner_hwaddr_policy: string;
    runnerHwaddrPolicy: string;
    runner_min_ports: number;
    runnerMinPorts: number;
    runner_sys_prio: number;
    runnerSysPrio: number;
    runner_tx_balancer: string;
    runnerTxBalancer: string;
    runner_tx_balancer_interval: number;
    runnerTxBalancerInterval: number;
    runner_tx_hash: string[];
    runnerTxHash: string[];

    // Constructors

    static ["new"](): SettingTeam;

    // Members

    add_link_watcher(link_watcher: TeamLinkWatcher): boolean;
    add_runner_tx_hash(txhash: string): boolean;
    clear_link_watchers(): void;
    get_config(): string;
    get_link_watcher(idx: number): TeamLinkWatcher;
    get_mcast_rejoin_count(): number;
    get_mcast_rejoin_interval(): number;
    get_notify_peers_count(): number;
    get_notify_peers_interval(): number;
    get_num_link_watchers(): number;
    get_num_runner_tx_hash(): number;
    get_runner(): string;
    get_runner_active(): boolean;
    get_runner_agg_select_policy(): string;
    get_runner_fast_rate(): boolean;
    get_runner_hwaddr_policy(): string;
    get_runner_min_ports(): number;
    get_runner_sys_prio(): number;
    get_runner_tx_balancer(): string;
    get_runner_tx_balancer_interval(): number;
    get_runner_tx_hash(idx: number): string;
    remove_link_watcher(idx: number): void;
    remove_link_watcher_by_value(link_watcher: TeamLinkWatcher): boolean;
    remove_runner_tx_hash(idx: number): void;
    remove_runner_tx_hash_by_value(txhash: string): boolean;
}
export module SettingTeamPort {
    export interface ConstructorProperties extends Setting.ConstructorProperties {
        [key: string]: any;
        config: string;
        lacp_key: number;
        lacpKey: number;
        lacp_prio: number;
        lacpPrio: number;
        link_watchers: TeamLinkWatcher[];
        linkWatchers: TeamLinkWatcher[];
        prio: number;
        queue_id: number;
        queueId: number;
        sticky: boolean;
    }
}
export class SettingTeamPort extends Setting {
    static $gtype: GObject.GType<SettingTeamPort>;

    constructor(properties?: Partial<SettingTeamPort.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SettingTeamPort.ConstructorProperties>, ...args: any[]): void;

    // Properties
    config: string;
    lacp_key: number;
    lacpKey: number;
    lacp_prio: number;
    lacpPrio: number;
    link_watchers: TeamLinkWatcher[];
    linkWatchers: TeamLinkWatcher[];
    prio: number;
    queue_id: number;
    queueId: number;
    sticky: boolean;

    // Constructors

    static ["new"](): SettingTeamPort;

    // Members

    add_link_watcher(link_watcher: TeamLinkWatcher): boolean;
    clear_link_watchers(): void;
    get_config(): string;
    get_lacp_key(): number;
    get_lacp_prio(): number;
    get_link_watcher(idx: number): TeamLinkWatcher;
    get_num_link_watchers(): number;
    get_prio(): number;
    get_queue_id(): number;
    get_sticky(): boolean;
    remove_link_watcher(idx: number): void;
    remove_link_watcher_by_value(link_watcher: TeamLinkWatcher): boolean;
}
export module SettingTun {
    export interface ConstructorProperties extends Setting.ConstructorProperties {
        [key: string]: any;
        group: string;
        mode: number;
        multi_queue: boolean;
        multiQueue: boolean;
        owner: string;
        pi: boolean;
        vnet_hdr: boolean;
        vnetHdr: boolean;
    }
}
export class SettingTun extends Setting {
    static $gtype: GObject.GType<SettingTun>;

    constructor(properties?: Partial<SettingTun.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SettingTun.ConstructorProperties>, ...args: any[]): void;

    // Properties
    group: string;
    mode: number;
    multi_queue: boolean;
    multiQueue: boolean;
    owner: string;
    pi: boolean;
    vnet_hdr: boolean;
    vnetHdr: boolean;

    // Constructors

    static ["new"](): SettingTun;

    // Members

    get_group(): string;
    get_mode(): SettingTunMode;
    get_multi_queue(): boolean;
    get_owner(): string;
    get_pi(): boolean;
    get_vnet_hdr(): boolean;
}
export module SettingUser {
    export interface ConstructorProperties extends Setting.ConstructorProperties {
        [key: string]: any;
        data: GLib.HashTable<string, string>;
    }
}
export class SettingUser extends Setting {
    static $gtype: GObject.GType<SettingUser>;

    constructor(properties?: Partial<SettingUser.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SettingUser.ConstructorProperties>, ...args: any[]): void;

    // Properties
    data: GLib.HashTable<string, string>;

    // Constructors

    static ["new"](): SettingUser;

    // Members

    get_data(key: string): string;
    get_data(...args: never[]): never;
    get_keys(): string[];
    set_data(key: string, val?: string | null): boolean;
    set_data(...args: never[]): never;
    static check_key(key: string): boolean;
    static check_val(val: string): boolean;
}
export module SettingVlan {
    export interface ConstructorProperties extends Setting.ConstructorProperties {
        [key: string]: any;
        egress_priority_map: string[];
        egressPriorityMap: string[];
        flags: VlanFlags;
        id: number;
        ingress_priority_map: string[];
        ingressPriorityMap: string[];
    }
}
export class SettingVlan extends Setting {
    static $gtype: GObject.GType<SettingVlan>;

    constructor(properties?: Partial<SettingVlan.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SettingVlan.ConstructorProperties>, ...args: any[]): void;

    // Properties
    egress_priority_map: string[];
    egressPriorityMap: string[];
    flags: VlanFlags;
    id: number;
    ingress_priority_map: string[];
    ingressPriorityMap: string[];

    // Constructors

    static ["new"](): SettingVlan;

    // Members

    add_priority(map: VlanPriorityMap, from: number, to: number): boolean;
    add_priority_str(map: VlanPriorityMap, str: string): boolean;
    clear_priorities(map: VlanPriorityMap): void;
    get_flags(): number;
    get_id(): number;
    get_num_priorities(map: VlanPriorityMap): number;
    get_parent(): string;
    get_priority(map: VlanPriorityMap, idx: number): [boolean, number | null, number | null];
    remove_priority(map: VlanPriorityMap, idx: number): void;
    remove_priority_by_value(map: VlanPriorityMap, from: number, to: number): boolean;
    remove_priority_str_by_value(map: VlanPriorityMap, str: string): boolean;
}
export module SettingVpn {
    export interface ConstructorProperties extends Setting.ConstructorProperties {
        [key: string]: any;
        data: GLib.HashTable<string, string>;
        persistent: boolean;
        secrets: GLib.HashTable<string, string>;
        service_type: string;
        serviceType: string;
        timeout: number;
        user_name: string;
        userName: string;
    }
}
export class SettingVpn extends Setting {
    static $gtype: GObject.GType<SettingVpn>;

    constructor(properties?: Partial<SettingVpn.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SettingVpn.ConstructorProperties>, ...args: any[]): void;

    // Properties
    data: GLib.HashTable<string, string>;
    persistent: boolean;
    secrets: GLib.HashTable<string, string>;
    service_type: string;
    serviceType: string;
    timeout: number;
    user_name: string;
    userName: string;

    // Constructors

    static ["new"](): SettingVpn;

    // Members

    add_data_item(key: string, item?: string | null): void;
    add_secret(key: string, secret?: string | null): void;
    foreach_data_item(func: VpnIterFunc): void;
    foreach_secret(func: VpnIterFunc): void;
    get_data_item(key: string): string;
    get_data_keys(): string[];
    get_num_data_items(): number;
    get_num_secrets(): number;
    get_persistent(): boolean;
    get_secret(key: string): string;
    get_secret_keys(): string[];
    get_service_type(): string;
    get_timeout(): number;
    get_user_name(): string;
    remove_data_item(key: string): boolean;
    remove_secret(key: string): boolean;
}
export module SettingVrf {
    export interface ConstructorProperties extends Setting.ConstructorProperties {
        [key: string]: any;
        table: number;
    }
}
export class SettingVrf extends Setting {
    static $gtype: GObject.GType<SettingVrf>;

    constructor(properties?: Partial<SettingVrf.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SettingVrf.ConstructorProperties>, ...args: any[]): void;

    // Properties
    table: number;

    // Constructors

    static ["new"](): SettingVrf;

    // Members

    get_table(): number;
}
export module SettingVxlan {
    export interface ConstructorProperties extends Setting.ConstructorProperties {
        [key: string]: any;
        ageing: number;
        destination_port: number;
        destinationPort: number;
        id: number;
        l2_miss: boolean;
        l2Miss: boolean;
        l3_miss: boolean;
        l3Miss: boolean;
        learning: boolean;
        limit: number;
        local: string;
        proxy: boolean;
        remote: string;
        rsc: boolean;
        source_port_max: number;
        sourcePortMax: number;
        source_port_min: number;
        sourcePortMin: number;
        tos: number;
        ttl: number;
    }
}
export class SettingVxlan extends Setting {
    static $gtype: GObject.GType<SettingVxlan>;

    constructor(properties?: Partial<SettingVxlan.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SettingVxlan.ConstructorProperties>, ...args: any[]): void;

    // Properties
    ageing: number;
    destination_port: number;
    destinationPort: number;
    id: number;
    l2_miss: boolean;
    l2Miss: boolean;
    l3_miss: boolean;
    l3Miss: boolean;
    learning: boolean;
    limit: number;
    local: string;
    proxy: boolean;
    remote: string;
    rsc: boolean;
    source_port_max: number;
    sourcePortMax: number;
    source_port_min: number;
    sourcePortMin: number;
    tos: number;
    ttl: number;

    // Constructors

    static ["new"](): SettingVxlan;

    // Members

    get_ageing(): number;
    get_destination_port(): number;
    get_id(): number;
    get_l2_miss(): boolean;
    get_l3_miss(): boolean;
    get_learning(): boolean;
    get_limit(): number;
    get_local(): string;
    get_parent(): string;
    get_proxy(): boolean;
    get_remote(): string;
    get_rsc(): boolean;
    get_source_port_max(): number;
    get_source_port_min(): number;
    get_tos(): number;
    get_ttl(): number;
}
export module SettingWifiP2P {
    export interface ConstructorProperties extends Setting.ConstructorProperties {
        [key: string]: any;
        peer: string;
        wfd_ies: GLib.Bytes;
        wfdIes: GLib.Bytes;
        wps_method: number;
        wpsMethod: number;
    }
}
export class SettingWifiP2P extends Setting {
    static $gtype: GObject.GType<SettingWifiP2P>;

    constructor(properties?: Partial<SettingWifiP2P.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SettingWifiP2P.ConstructorProperties>, ...args: any[]): void;

    // Properties
    peer: string;
    wfd_ies: GLib.Bytes;
    wfdIes: GLib.Bytes;
    wps_method: number;
    wpsMethod: number;

    // Constructors

    static ["new"](): SettingWifiP2P;

    // Members

    get_peer(): string;
    get_wfd_ies(): GLib.Bytes;
    get_wps_method(): SettingWirelessSecurityWpsMethod;
}
export module SettingWimax {
    export interface ConstructorProperties extends Setting.ConstructorProperties {
        [key: string]: any;
        mac_address: string;
        macAddress: string;
        network_name: string;
        networkName: string;
    }
}
export class SettingWimax extends Setting {
    static $gtype: GObject.GType<SettingWimax>;

    constructor(properties?: Partial<SettingWimax.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SettingWimax.ConstructorProperties>, ...args: any[]): void;

    // Properties
    mac_address: string;
    macAddress: string;
    network_name: string;
    networkName: string;

    // Constructors

    static ["new"](): SettingWimax;

    // Members

    get_mac_address(): string;
    get_network_name(): string;
}
export module SettingWireGuard {
    export interface ConstructorProperties extends Setting.ConstructorProperties {
        [key: string]: any;
        fwmark: number;
        ip4_auto_default_route: Ternary;
        ip4AutoDefaultRoute: Ternary;
        ip6_auto_default_route: Ternary;
        ip6AutoDefaultRoute: Ternary;
        listen_port: number;
        listenPort: number;
        mtu: number;
        peer_routes: boolean;
        peerRoutes: boolean;
        private_key: string;
        privateKey: string;
        private_key_flags: SettingSecretFlags;
        privateKeyFlags: SettingSecretFlags;
    }
}
export class SettingWireGuard extends Setting {
    static $gtype: GObject.GType<SettingWireGuard>;

    constructor(properties?: Partial<SettingWireGuard.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SettingWireGuard.ConstructorProperties>, ...args: any[]): void;

    // Properties
    fwmark: number;
    ip4_auto_default_route: Ternary;
    ip4AutoDefaultRoute: Ternary;
    ip6_auto_default_route: Ternary;
    ip6AutoDefaultRoute: Ternary;
    listen_port: number;
    listenPort: number;
    mtu: number;
    peer_routes: boolean;
    peerRoutes: boolean;
    private_key: string;
    privateKey: string;
    private_key_flags: SettingSecretFlags;
    privateKeyFlags: SettingSecretFlags;

    // Constructors

    static ["new"](): SettingWireGuard;

    // Members

    append_peer(peer: WireGuardPeer): void;
    clear_peers(): number;
    get_fwmark(): number;
    get_ip4_auto_default_route(): Ternary;
    get_ip6_auto_default_route(): Ternary;
    get_listen_port(): number;
    get_mtu(): number;
    get_peer(idx: number): WireGuardPeer;
    get_peer_by_public_key(public_key: string): [WireGuardPeer, number | null];
    get_peer_routes(): boolean;
    get_peers_len(): number;
    get_private_key(): string;
    get_private_key_flags(): SettingSecretFlags;
    remove_peer(idx: number): boolean;
    set_peer(peer: WireGuardPeer, idx: number): void;
}
export module SettingWired {
    export interface ConstructorProperties extends Setting.ConstructorProperties {
        [key: string]: any;
        auto_negotiate: boolean;
        autoNegotiate: boolean;
        cloned_mac_address: string;
        clonedMacAddress: string;
        duplex: string;
        generate_mac_address_mask: string;
        generateMacAddressMask: string;
        mac_address: string;
        macAddress: string;
        mac_address_blacklist: string[];
        macAddressBlacklist: string[];
        mtu: number;
        port: string;
        s390_nettype: string;
        s390Nettype: string;
        s390_options: GLib.HashTable<string, string>;
        s390Options: GLib.HashTable<string, string>;
        s390_subchannels: string[];
        s390Subchannels: string[];
        speed: number;
        wake_on_lan: number;
        wakeOnLan: number;
        wake_on_lan_password: string;
        wakeOnLanPassword: string;
    }
}
export class SettingWired extends Setting {
    static $gtype: GObject.GType<SettingWired>;

    constructor(properties?: Partial<SettingWired.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SettingWired.ConstructorProperties>, ...args: any[]): void;

    // Properties
    auto_negotiate: boolean;
    autoNegotiate: boolean;
    cloned_mac_address: string;
    clonedMacAddress: string;
    duplex: string;
    generate_mac_address_mask: string;
    generateMacAddressMask: string;
    mac_address: string;
    macAddress: string;
    mac_address_blacklist: string[];
    macAddressBlacklist: string[];
    mtu: number;
    port: string;
    s390_nettype: string;
    s390Nettype: string;
    s390_options: GLib.HashTable<string, string>;
    s390Options: GLib.HashTable<string, string>;
    s390_subchannels: string[];
    s390Subchannels: string[];
    speed: number;
    wake_on_lan: number;
    wakeOnLan: number;
    wake_on_lan_password: string;
    wakeOnLanPassword: string;

    // Constructors

    static ["new"](): SettingWired;

    // Members

    add_mac_blacklist_item(mac: string): boolean;
    add_s390_option(key: string, value: string): boolean;
    clear_mac_blacklist_items(): void;
    get_auto_negotiate(): boolean;
    get_cloned_mac_address(): string;
    get_duplex(): string;
    get_generate_mac_address_mask(): string;
    get_mac_address(): string;
    get_mac_address_blacklist(): string[];
    get_mac_blacklist_item(idx: number): string;
    get_mtu(): number;
    get_num_mac_blacklist_items(): number;
    get_num_s390_options(): number;
    get_port(): string;
    get_s390_nettype(): string;
    get_s390_option(idx: number): [boolean, string, string];
    get_s390_option_by_key(key: string): string;
    get_s390_subchannels(): string[];
    get_speed(): number;
    get_valid_s390_options(): string[];
    get_wake_on_lan(): SettingWiredWakeOnLan;
    get_wake_on_lan_password(): string;
    remove_mac_blacklist_item(idx: number): void;
    remove_mac_blacklist_item_by_value(mac: string): boolean;
    remove_s390_option(key: string): boolean;
}
export module SettingWireless {
    export interface ConstructorProperties extends Setting.ConstructorProperties {
        [key: string]: any;
        ap_isolation: Ternary;
        apIsolation: Ternary;
        band: string;
        bssid: string;
        channel: number;
        cloned_mac_address: string;
        clonedMacAddress: string;
        generate_mac_address_mask: string;
        generateMacAddressMask: string;
        hidden: boolean;
        mac_address: string;
        macAddress: string;
        mac_address_blacklist: string[];
        macAddressBlacklist: string[];
        mac_address_randomization: number;
        macAddressRandomization: number;
        mode: string;
        mtu: number;
        powersave: number;
        rate: number;
        seen_bssids: string[];
        seenBssids: string[];
        ssid: GLib.Bytes;
        tx_power: number;
        txPower: number;
        wake_on_wlan: number;
        wakeOnWlan: number;
    }
}
export class SettingWireless extends Setting {
    static $gtype: GObject.GType<SettingWireless>;

    constructor(properties?: Partial<SettingWireless.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SettingWireless.ConstructorProperties>, ...args: any[]): void;

    // Properties
    ap_isolation: Ternary;
    apIsolation: Ternary;
    band: string;
    bssid: string;
    channel: number;
    cloned_mac_address: string;
    clonedMacAddress: string;
    generate_mac_address_mask: string;
    generateMacAddressMask: string;
    hidden: boolean;
    mac_address: string;
    macAddress: string;
    mac_address_blacklist: string[];
    macAddressBlacklist: string[];
    mac_address_randomization: number;
    macAddressRandomization: number;
    mode: string;
    mtu: number;
    powersave: number;
    rate: number;
    seen_bssids: string[];
    seenBssids: string[];
    ssid: GLib.Bytes;
    tx_power: number;
    txPower: number;
    wake_on_wlan: number;
    wakeOnWlan: number;

    // Constructors

    static ["new"](): SettingWireless;

    // Members

    add_mac_blacklist_item(mac: string): boolean;
    add_seen_bssid(bssid: string): boolean;
    ap_security_compatible(
        s_wireless_sec: SettingWirelessSecurity,
        ap_flags: __80211ApFlags,
        ap_wpa: __80211ApSecurityFlags,
        ap_rsn: __80211ApSecurityFlags,
        ap_mode: __80211Mode
    ): boolean;
    clear_mac_blacklist_items(): void;
    get_ap_isolation(): Ternary;
    get_band(): string;
    get_bssid(): string;
    get_channel(): number;
    get_cloned_mac_address(): string;
    get_generate_mac_address_mask(): string;
    get_hidden(): boolean;
    get_mac_address(): string;
    get_mac_address_blacklist(): string[];
    get_mac_address_randomization(): SettingMacRandomization;
    get_mac_blacklist_item(idx: number): string;
    get_mode(): string;
    get_mtu(): number;
    get_num_mac_blacklist_items(): number;
    get_num_seen_bssids(): number;
    get_powersave(): number;
    get_rate(): number;
    get_seen_bssid(i: number): string;
    get_ssid(): GLib.Bytes;
    get_tx_power(): number;
    get_wake_on_wlan(): SettingWirelessWakeOnWLan;
    remove_mac_blacklist_item(idx: number): void;
    remove_mac_blacklist_item_by_value(mac: string): boolean;
}
export module SettingWirelessSecurity {
    export interface ConstructorProperties extends Setting.ConstructorProperties {
        [key: string]: any;
        auth_alg: string;
        authAlg: string;
        fils: number;
        group: string[];
        key_mgmt: string;
        keyMgmt: string;
        leap_password: string;
        leapPassword: string;
        leap_password_flags: SettingSecretFlags;
        leapPasswordFlags: SettingSecretFlags;
        leap_username: string;
        leapUsername: string;
        pairwise: string[];
        pmf: number;
        proto: string[];
        psk: string;
        psk_flags: SettingSecretFlags;
        pskFlags: SettingSecretFlags;
        wep_key_flags: SettingSecretFlags;
        wepKeyFlags: SettingSecretFlags;
        wep_key_type: WepKeyType;
        wepKeyType: WepKeyType;
        wep_key0: string;
        wepKey0: string;
        wep_key1: string;
        wepKey1: string;
        wep_key2: string;
        wepKey2: string;
        wep_key3: string;
        wepKey3: string;
        wep_tx_keyidx: number;
        wepTxKeyidx: number;
        wps_method: number;
        wpsMethod: number;
    }
}
export class SettingWirelessSecurity extends Setting {
    static $gtype: GObject.GType<SettingWirelessSecurity>;

    constructor(properties?: Partial<SettingWirelessSecurity.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SettingWirelessSecurity.ConstructorProperties>, ...args: any[]): void;

    // Properties
    auth_alg: string;
    authAlg: string;
    fils: number;
    group: string[];
    key_mgmt: string;
    keyMgmt: string;
    leap_password: string;
    leapPassword: string;
    leap_password_flags: SettingSecretFlags;
    leapPasswordFlags: SettingSecretFlags;
    leap_username: string;
    leapUsername: string;
    pairwise: string[];
    pmf: number;
    proto: string[];
    psk: string;
    psk_flags: SettingSecretFlags;
    pskFlags: SettingSecretFlags;
    wep_key_flags: SettingSecretFlags;
    wepKeyFlags: SettingSecretFlags;
    wep_key_type: WepKeyType;
    wepKeyType: WepKeyType;
    wep_key0: string;
    wepKey0: string;
    wep_key1: string;
    wepKey1: string;
    wep_key2: string;
    wepKey2: string;
    wep_key3: string;
    wepKey3: string;
    wep_tx_keyidx: number;
    wepTxKeyidx: number;
    wps_method: number;
    wpsMethod: number;

    // Constructors

    static ["new"](): SettingWirelessSecurity;

    // Members

    add_group(group: string): boolean;
    add_pairwise(pairwise: string): boolean;
    add_proto(proto: string): boolean;
    clear_groups(): void;
    clear_pairwise(): void;
    clear_protos(): void;
    get_auth_alg(): string;
    get_fils(): SettingWirelessSecurityFils;
    get_group(i: number): string;
    get_key_mgmt(): string;
    get_leap_password(): string;
    get_leap_password_flags(): SettingSecretFlags;
    get_leap_username(): string;
    get_num_groups(): number;
    get_num_pairwise(): number;
    get_num_protos(): number;
    get_pairwise(i: number): string;
    get_pmf(): SettingWirelessSecurityPmf;
    get_proto(i: number): string;
    get_psk(): string;
    get_psk_flags(): SettingSecretFlags;
    get_wep_key(idx: number): string;
    get_wep_key_flags(): SettingSecretFlags;
    get_wep_key_type(): WepKeyType;
    get_wep_tx_keyidx(): number;
    get_wps_method(): SettingWirelessSecurityWpsMethod;
    remove_group(i: number): void;
    remove_group_by_value(group: string): boolean;
    remove_pairwise(i: number): void;
    remove_pairwise_by_value(pairwise: string): boolean;
    remove_proto(i: number): void;
    remove_proto_by_value(proto: string): boolean;
    set_wep_key(idx: number, key: string): void;
}
export module SettingWpan {
    export interface ConstructorProperties extends Setting.ConstructorProperties {
        [key: string]: any;
        channel: number;
        mac_address: string;
        macAddress: string;
        page: number;
        pan_id: number;
        panId: number;
        short_address: number;
        shortAddress: number;
    }
}
export class SettingWpan extends Setting {
    static $gtype: GObject.GType<SettingWpan>;

    constructor(properties?: Partial<SettingWpan.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SettingWpan.ConstructorProperties>, ...args: any[]): void;

    // Properties
    channel: number;
    mac_address: string;
    macAddress: string;
    page: number;
    pan_id: number;
    panId: number;
    short_address: number;
    shortAddress: number;

    // Constructors

    static ["new"](): SettingWpan;

    // Members

    get_channel(): number;
    get_mac_address(): string;
    get_page(): number;
    get_pan_id(): number;
    get_short_address(): number;
}
export module SimpleConnection {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class SimpleConnection extends GObject.Object implements Connection {
    static $gtype: GObject.GType<SimpleConnection>;

    constructor(properties?: Partial<SimpleConnection.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SimpleConnection.ConstructorProperties>, ...args: any[]): void;

    // Members

    static new(): Connection;
    static new_clone(connection: Connection): Connection;
    static new_from_dbus(dict: GLib.Variant): Connection;

    // Implemented Members

    add_setting(setting: Setting): void;
    clear_secrets(): void;
    clear_secrets_with_flags(func?: SettingClearSecretsWithFlagsFn | null): void;
    clear_settings(): void;
    compare(b: Connection, flags: SettingCompareFlags): boolean;
    diff(b: Connection, flags: SettingCompareFlags, out_settings: GLib.HashTable<string, GLib.HashTable>): boolean;
    dump(): void;
    for_each_setting_value(func: SettingValueIterFn): void;
    get_connection_type(): string;
    get_id(): string;
    get_interface_name(): string;
    get_path(): string;
    get_setting(setting_type: GObject.GType): Setting;
    get_setting_802_1x(): Setting8021x;
    get_setting_adsl(): SettingAdsl;
    get_setting_bluetooth(): SettingBluetooth;
    get_setting_bond(): SettingBond;
    get_setting_bridge(): SettingBridge;
    get_setting_bridge_port(): SettingBridgePort;
    get_setting_by_name(name: string): Setting;
    get_setting_cdma(): SettingCdma;
    get_setting_connection(): SettingConnection;
    get_setting_dcb(): SettingDcb;
    get_setting_dummy(): SettingDummy;
    get_setting_generic(): SettingGeneric;
    get_setting_gsm(): SettingGsm;
    get_setting_infiniband(): SettingInfiniband;
    get_setting_ip4_config(): SettingIP4Config;
    get_setting_ip6_config(): SettingIP6Config;
    get_setting_ip_tunnel(): SettingIPTunnel;
    get_setting_macsec(): SettingMacsec;
    get_setting_macvlan(): SettingMacvlan;
    get_setting_olpc_mesh(): SettingOlpcMesh;
    get_setting_ovs_bridge(): SettingOvsBridge;
    get_setting_ovs_interface(): SettingOvsInterface;
    get_setting_ovs_patch(): SettingOvsPatch;
    get_setting_ovs_port(): SettingOvsPort;
    get_setting_ppp(): SettingPpp;
    get_setting_pppoe(): SettingPppoe;
    get_setting_proxy(): SettingProxy;
    get_setting_serial(): SettingSerial;
    get_setting_tc_config(): SettingTCConfig;
    get_setting_team(): SettingTeam;
    get_setting_team_port(): SettingTeamPort;
    get_setting_tun(): SettingTun;
    get_setting_vlan(): SettingVlan;
    get_setting_vpn(): SettingVpn;
    get_setting_vxlan(): SettingVxlan;
    get_setting_wimax(): SettingWimax;
    get_setting_wired(): SettingWired;
    get_setting_wireless(): SettingWireless;
    get_setting_wireless_security(): SettingWirelessSecurity;
    get_settings(): Setting[];
    get_uuid(): string;
    get_virtual_device_description(): string;
    is_type(type: string): boolean;
    is_virtual(): boolean;
    need_secrets(): [string, string[] | null];
    normalize(parameters?: GLib.HashTable<string, any> | null): [boolean, boolean | null];
    remove_setting(setting_type: GObject.GType): void;
    replace_settings(new_settings: GLib.Variant): boolean;
    replace_settings_from_connection(new_connection: Connection): void;
    set_path(path: string): void;
    to_dbus(flags: ConnectionSerializationFlags): GLib.Variant;
    update_secrets(setting_name: string, secrets: GLib.Variant): boolean;
    verify(): boolean;
    verify_secrets(): boolean;
    vfunc_changed(): void;
    vfunc_secrets_cleared(): void;
    vfunc_secrets_updated(setting: string): void;
}
export module VpnConnection {
    export interface ConstructorProperties extends ActiveConnection.ConstructorProperties {
        [key: string]: any;
        banner: string;
        vpn_state: VpnConnectionState;
        vpnState: VpnConnectionState;
    }
}
export class VpnConnection extends ActiveConnection {
    static $gtype: GObject.GType<VpnConnection>;

    constructor(properties?: Partial<VpnConnection.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<VpnConnection.ConstructorProperties>, ...args: any[]): void;

    // Properties
    banner: string;
    vpn_state: VpnConnectionState;
    vpnState: VpnConnectionState;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "vpn-state-changed", callback: (_source: this, object: number, p0: number) => void): number;
    connect_after(signal: "vpn-state-changed", callback: (_source: this, object: number, p0: number) => void): number;
    emit(signal: "vpn-state-changed", object: number, p0: number): void;

    // Members

    get_banner(): string;
    get_vpn_state(): VpnConnectionState;
}
export module VpnPluginInfo {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        filename: string;
        keyfile: GLib.KeyFile;
        name: string;
    }
}
export class VpnPluginInfo extends GObject.Object implements Gio.Initable {
    static $gtype: GObject.GType<VpnPluginInfo>;

    constructor(properties?: Partial<VpnPluginInfo.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<VpnPluginInfo.ConstructorProperties>, ...args: any[]): void;

    // Properties
    filename: string;
    keyfile: GLib.KeyFile;
    name: string;

    // Constructors

    static new_from_file(filename: string): VpnPluginInfo;
    static new_search_file(name?: string | null, service?: string | null): VpnPluginInfo;
    static new_with_data(filename: string, keyfile: GLib.KeyFile): VpnPluginInfo;

    // Members

    get_aliases(): string[];
    get_auth_dialog(): string;
    get_editor_plugin(): VpnEditorPlugin;
    get_filename(): string;
    get_name(): string;
    get_plugin(): string;
    get_program(): string;
    get_service(): string;
    load_editor_plugin(): VpnEditorPlugin;
    lookup_property(group: string, key: string): string;
    set_editor_plugin(plugin?: VpnEditorPlugin | null): void;
    supports_hints(): boolean;
    supports_multiple(): boolean;
    static list_add(list: VpnPluginInfo[], plugin_info: VpnPluginInfo): boolean;
    static list_find_by_filename(list: VpnPluginInfo[], filename: string): VpnPluginInfo;
    static list_find_by_name(list: VpnPluginInfo[], name: string): VpnPluginInfo;
    static list_find_by_service(list: VpnPluginInfo[], service: string): VpnPluginInfo;
    static list_find_service_type(list: VpnPluginInfo[], name: string): string;
    static list_get_service_types(list: VpnPluginInfo[], only_existing: boolean, with_abbreviations: boolean): string[];
    static list_load(): VpnPluginInfo[];
    static list_remove(list: VpnPluginInfo[], plugin_info: VpnPluginInfo): boolean;
    static validate_filename(filename: string): boolean;

    // Implemented Members

    init(cancellable?: Gio.Cancellable | null): boolean;
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}
export module VpnPluginOld {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        service_name: string;
        serviceName: string;
        state: VpnServiceState;
    }
}
export abstract class VpnPluginOld extends GObject.Object implements Gio.Initable {
    static $gtype: GObject.GType<VpnPluginOld>;

    constructor(properties?: Partial<VpnPluginOld.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<VpnPluginOld.ConstructorProperties>, ...args: any[]): void;

    // Properties
    service_name: string;
    serviceName: string;
    state: VpnServiceState;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "config", callback: (_source: this, object: GLib.Variant) => void): number;
    connect_after(signal: "config", callback: (_source: this, object: GLib.Variant) => void): number;
    emit(signal: "config", object: GLib.Variant): void;
    connect(signal: "failure", callback: (_source: this, object: number) => void): number;
    connect_after(signal: "failure", callback: (_source: this, object: number) => void): number;
    emit(signal: "failure", object: number): void;
    connect(signal: "ip4-config", callback: (_source: this, object: GLib.Variant) => void): number;
    connect_after(signal: "ip4-config", callback: (_source: this, object: GLib.Variant) => void): number;
    emit(signal: "ip4-config", object: GLib.Variant): void;
    connect(signal: "ip6-config", callback: (_source: this, object: GLib.Variant) => void): number;
    connect_after(signal: "ip6-config", callback: (_source: this, object: GLib.Variant) => void): number;
    emit(signal: "ip6-config", object: GLib.Variant): void;
    connect(signal: "login-banner", callback: (_source: this, object: string) => void): number;
    connect_after(signal: "login-banner", callback: (_source: this, object: string) => void): number;
    emit(signal: "login-banner", object: string): void;
    connect(signal: "quit", callback: (_source: this) => void): number;
    connect_after(signal: "quit", callback: (_source: this) => void): number;
    emit(signal: "quit"): void;
    connect(signal: "secrets-required", callback: (_source: this, object: string, p0: string[]) => void): number;
    connect_after(signal: "secrets-required", callback: (_source: this, object: string, p0: string[]) => void): number;
    emit(signal: "secrets-required", object: string, p0: string[]): void;
    connect(signal: "state-changed", callback: (_source: this, object: number) => void): number;
    connect_after(signal: "state-changed", callback: (_source: this, object: number) => void): number;
    emit(signal: "state-changed", object: number): void;

    // Members

    disconnect(): boolean;
    disconnect(...args: never[]): never;
    failure(reason: VpnPluginFailure): void;
    get_connection(): Gio.DBusConnection;
    get_state(): VpnServiceState;
    secrets_required(message: string, hints: string): void;
    set_config(config: GLib.Variant): void;
    set_ip4_config(ip4_config: GLib.Variant): void;
    set_ip6_config(ip6_config: GLib.Variant): void;
    set_login_banner(banner: string): void;
    set_state(state: VpnServiceState): void;
    vfunc_config(config: GLib.Variant): void;
    vfunc_connect(connection: Connection): boolean;
    vfunc_connect_interactive(connection: Connection, details: GLib.Variant): boolean;
    vfunc_disconnect(): boolean;
    vfunc_failure(reason: VpnPluginFailure): void;
    vfunc_ip4_config(ip4_config: GLib.Variant): void;
    vfunc_ip6_config(config: GLib.Variant): void;
    vfunc_login_banner(banner: string): void;
    vfunc_need_secrets(connection: Connection, setting_name: string): boolean;
    vfunc_new_secrets(connection: Connection): boolean;
    vfunc_quit(): void;
    vfunc_state_changed(state: VpnServiceState): void;
    static get_secret_flags(data: GLib.HashTable<any, any>, secret_name: string): [boolean, SettingSecretFlags];
    static read_vpn_details(fd: number): [boolean, GLib.HashTable<any, any>, GLib.HashTable<any, any>];

    // Implemented Members

    init(cancellable?: Gio.Cancellable | null): boolean;
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}
export module VpnServicePlugin {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        service_name: string;
        serviceName: string;
        state: VpnServiceState;
        watch_peer: boolean;
        watchPeer: boolean;
    }
}
export abstract class VpnServicePlugin extends GObject.Object implements Gio.Initable {
    static $gtype: GObject.GType<VpnServicePlugin>;

    constructor(properties?: Partial<VpnServicePlugin.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<VpnServicePlugin.ConstructorProperties>, ...args: any[]): void;

    // Properties
    service_name: string;
    serviceName: string;
    state: VpnServiceState;
    watch_peer: boolean;
    watchPeer: boolean;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "config", callback: (_source: this, object: GLib.Variant) => void): number;
    connect_after(signal: "config", callback: (_source: this, object: GLib.Variant) => void): number;
    emit(signal: "config", object: GLib.Variant): void;
    connect(signal: "failure", callback: (_source: this, object: number) => void): number;
    connect_after(signal: "failure", callback: (_source: this, object: number) => void): number;
    emit(signal: "failure", object: number): void;
    connect(signal: "ip4-config", callback: (_source: this, object: GLib.Variant) => void): number;
    connect_after(signal: "ip4-config", callback: (_source: this, object: GLib.Variant) => void): number;
    emit(signal: "ip4-config", object: GLib.Variant): void;
    connect(signal: "ip6-config", callback: (_source: this, object: GLib.Variant) => void): number;
    connect_after(signal: "ip6-config", callback: (_source: this, object: GLib.Variant) => void): number;
    emit(signal: "ip6-config", object: GLib.Variant): void;
    connect(signal: "login-banner", callback: (_source: this, object: string) => void): number;
    connect_after(signal: "login-banner", callback: (_source: this, object: string) => void): number;
    emit(signal: "login-banner", object: string): void;
    connect(signal: "quit", callback: (_source: this) => void): number;
    connect_after(signal: "quit", callback: (_source: this) => void): number;
    emit(signal: "quit"): void;
    connect(signal: "secrets-required", callback: (_source: this, object: string, p0: string[]) => void): number;
    connect_after(signal: "secrets-required", callback: (_source: this, object: string, p0: string[]) => void): number;
    emit(signal: "secrets-required", object: string, p0: string[]): void;
    connect(signal: "state-changed", callback: (_source: this, object: number) => void): number;
    connect_after(signal: "state-changed", callback: (_source: this, object: number) => void): number;
    emit(signal: "state-changed", object: number): void;

    // Members

    disconnect(): boolean;
    disconnect(...args: never[]): never;
    failure(reason: VpnPluginFailure): void;
    get_connection(): Gio.DBusConnection;
    secrets_required(message: string, hints: string): void;
    set_config(config: GLib.Variant): void;
    set_ip4_config(ip4_config: GLib.Variant): void;
    set_ip6_config(ip6_config: GLib.Variant): void;
    set_login_banner(banner: string): void;
    shutdown(): void;
    vfunc_config(config: GLib.Variant): void;
    vfunc_connect(connection: Connection): boolean;
    vfunc_connect_interactive(connection: Connection, details: GLib.Variant): boolean;
    vfunc_disconnect(): boolean;
    vfunc_failure(reason: VpnPluginFailure): void;
    vfunc_ip4_config(ip4_config: GLib.Variant): void;
    vfunc_ip6_config(config: GLib.Variant): void;
    vfunc_login_banner(banner: string): void;
    vfunc_need_secrets(connection: Connection, setting_name: string): boolean;
    vfunc_new_secrets(connection: Connection): boolean;
    vfunc_quit(): void;
    vfunc_state_changed(state: VpnServiceState): void;
    static get_secret_flags(data: GLib.HashTable<any, any>, secret_name: string): [boolean, SettingSecretFlags];
    static read_vpn_details(fd: number): [boolean, GLib.HashTable<any, any>, GLib.HashTable<any, any>];

    // Implemented Members

    init(cancellable?: Gio.Cancellable | null): boolean;
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}
export module WifiP2PPeer {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
        flags: __80211ApFlags;
        hw_address: string;
        hwAddress: string;
        last_seen: number;
        lastSeen: number;
        manufacturer: string;
        model: string;
        model_number: string;
        modelNumber: string;
        name: string;
        serial: string;
        strength: number;
        wfd_ies: GLib.Bytes;
        wfdIes: GLib.Bytes;
    }
}
export class WifiP2PPeer extends Object {
    static $gtype: GObject.GType<WifiP2PPeer>;

    constructor(properties?: Partial<WifiP2PPeer.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<WifiP2PPeer.ConstructorProperties>, ...args: any[]): void;

    // Properties
    flags: __80211ApFlags;
    hw_address: string;
    hwAddress: string;
    last_seen: number;
    lastSeen: number;
    manufacturer: string;
    model: string;
    model_number: string;
    modelNumber: string;
    name: string;
    serial: string;
    strength: number;
    wfd_ies: GLib.Bytes;
    wfdIes: GLib.Bytes;

    // Members

    connection_valid(connection: Connection): boolean;
    filter_connections(connections: Connection[]): Connection[];
    get_flags(): __80211ApFlags;
    get_hw_address(): string;
    get_last_seen(): number;
    get_manufacturer(): string;
    get_model(): string;
    get_model_number(): string;
    get_name(): string;
    get_serial(): string;
    get_strength(): number;
    get_wfd_ies(): GLib.Bytes;
}
export module WimaxNsp {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
        name: string;
        network_type: WimaxNspNetworkType;
        networkType: WimaxNspNetworkType;
        signal_quality: number;
        signalQuality: number;
    }
}
export class WimaxNsp extends Object {
    static $gtype: GObject.GType<WimaxNsp>;

    constructor(properties?: Partial<WimaxNsp.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<WimaxNsp.ConstructorProperties>, ...args: any[]): void;

    // Properties
    name: string;
    network_type: WimaxNspNetworkType;
    networkType: WimaxNspNetworkType;
    signal_quality: number;
    signalQuality: number;

    // Members

    connection_valid(connection: Connection): boolean;
    filter_connections(connections: Connection[]): Connection[];
    get_name(): string;
    get_network_type(): WimaxNspNetworkType;
    get_signal_quality(): number;
}

export class BridgeVlan {
    static $gtype: GObject.GType<BridgeVlan>;

    constructor(vid_start: number, vid_end: number);
    constructor(copy: BridgeVlan);

    // Constructors
    static ["new"](vid_start: number, vid_end: number): BridgeVlan;

    // Members
    cmp(b: BridgeVlan): number;
    get_vid_range(): [boolean, number, number];
    is_pvid(): boolean;
    is_sealed(): boolean;
    is_untagged(): boolean;
    new_clone(): BridgeVlan;
    ref(): BridgeVlan;
    seal(): void;
    set_pvid(value: boolean): void;
    set_untagged(value: boolean): void;
    to_str(): string;
    unref(): void;
    static from_str(str: string): BridgeVlan;
}

export class DnsEntry {
    static $gtype: GObject.GType<DnsEntry>;

    constructor(copy: DnsEntry);

    // Members
    get_domains(): string[];
    get_interface(): string;
    get_nameservers(): string[];
    get_priority(): number;
    get_vpn(): boolean;
    unref(): void;
}

export class IPAddress {
    static $gtype: GObject.GType<IPAddress>;

    constructor(family: number, addr: string, prefix: number);
    constructor(copy: IPAddress);

    // Constructors
    static ["new"](family: number, addr: string, prefix: number): IPAddress;
    static new_binary(family: number, addr: any | null, prefix: number): IPAddress;

    // Members
    cmp_full(b: IPAddress, cmp_flags: IPAddressCmpFlags): number;
    dup(): IPAddress;
    equal(other: IPAddress): boolean;
    get_address(): string;
    get_attribute(name: string): GLib.Variant;
    get_attribute_names(): string[];
    get_family(): number;
    get_prefix(): number;
    ref(): void;
    set_address(addr: string): void;
    set_attribute(name: string, value?: GLib.Variant | null): void;
    set_prefix(prefix: number): void;
    unref(): void;
}

export class IPRoute {
    static $gtype: GObject.GType<IPRoute>;

    constructor(family: number, dest: string, prefix: number, next_hop: string | null, metric: number);
    constructor(copy: IPRoute);

    // Constructors
    static ["new"](family: number, dest: string, prefix: number, next_hop: string | null, metric: number): IPRoute;
    static new_binary(family: number, dest: any | null, prefix: number, next_hop: any | null, metric: number): IPRoute;

    // Members
    dup(): IPRoute;
    equal(other: IPRoute): boolean;
    equal_full(other: IPRoute, cmp_flags: number): boolean;
    get_attribute(name: string): GLib.Variant;
    get_attribute_names(): string[];
    get_dest(): string;
    get_family(): number;
    get_metric(): number;
    get_next_hop(): string;
    get_prefix(): number;
    ref(): void;
    set_attribute(name: string, value?: GLib.Variant | null): void;
    set_dest(dest: string): void;
    set_metric(metric: number): void;
    set_next_hop(next_hop?: string | null): void;
    set_prefix(prefix: number): void;
    unref(): void;
    static attribute_validate(name: string, value: GLib.Variant, family: number): [boolean, boolean];
    static get_variant_attribute_spec(): VariantAttributeSpec;
}

export class IPRoutingRule {
    static $gtype: GObject.GType<IPRoutingRule>;

    constructor(addr_family: number);
    constructor(copy: IPRoutingRule);

    // Constructors
    static ["new"](addr_family: number): IPRoutingRule;

    // Members
    cmp(other?: IPRoutingRule | null): number;
    get_action(): number;
    get_addr_family(): number;
    get_destination_port_end(): number;
    get_destination_port_start(): number;
    get_from(): string;
    get_from_len(): number;
    get_fwmark(): number;
    get_fwmask(): number;
    get_iifname(): string;
    get_invert(): boolean;
    get_ipproto(): number;
    get_oifname(): string;
    get_priority(): number;
    get_source_port_end(): number;
    get_source_port_start(): number;
    get_suppress_prefixlength(): number;
    get_table(): number;
    get_to(): string;
    get_to_len(): number;
    get_tos(): number;
    is_sealed(): boolean;
    new_clone(): IPRoutingRule;
    ref(): IPRoutingRule;
    seal(): void;
    set_action(action: number): void;
    set_destination_port(start: number, end: number): void;
    set_from(from: string | null, len: number): void;
    set_fwmark(fwmark: number, fwmask: number): void;
    set_iifname(iifname?: string | null): void;
    set_invert(invert: boolean): void;
    set_ipproto(ipproto: number): void;
    set_oifname(oifname?: string | null): void;
    set_priority(priority: number): void;
    set_source_port(start: number, end: number): void;
    set_suppress_prefixlength(suppress_prefixlength: number): void;
    set_table(table: number): void;
    set_to(to: string | null, len: number): void;
    set_tos(tos: number): void;
    to_string(to_string_flags: IPRoutingRuleAsStringFlags, extra_args?: GLib.HashTable<any, any> | null): string;
    unref(): void;
    validate(): boolean;
    static from_string(
        str: string,
        to_string_flags: IPRoutingRuleAsStringFlags,
        extra_args?: GLib.HashTable<any, any> | null
    ): IPRoutingRule;
}

export class LldpNeighbor {
    static $gtype: GObject.GType<LldpNeighbor>;

    constructor();
    constructor(copy: LldpNeighbor);

    // Constructors
    static ["new"](): LldpNeighbor;

    // Members
    get_attr_names(): string[];
    get_attr_string_value(name: string): [boolean, string | null];
    get_attr_type(name: string): GLib.VariantType;
    get_attr_uint_value(name: string): [boolean, number | null];
    get_attr_value(name: string): GLib.Variant;
    ref(): void;
    unref(): void;
}

export class SriovVF {
    static $gtype: GObject.GType<SriovVF>;

    constructor(index: number);
    constructor(copy: SriovVF);

    // Constructors
    static ["new"](index: number): SriovVF;

    // Members
    add_vlan(vlan_id: number): boolean;
    dup(): SriovVF;
    equal(other: SriovVF): boolean;
    get_attribute(name: string): GLib.Variant;
    get_attribute_names(): string[];
    get_index(): number;
    get_vlan_ids(): number[];
    get_vlan_protocol(vlan_id: number): SriovVFVlanProtocol;
    get_vlan_qos(vlan_id: number): number;
    ref(): void;
    remove_vlan(vlan_id: number): boolean;
    set_attribute(name: string, value?: GLib.Variant | null): void;
    set_vlan_protocol(vlan_id: number, protocol: SriovVFVlanProtocol): void;
    set_vlan_qos(vlan_id: number, qos: number): void;
    unref(): void;
    static attribute_validate(name: string, value: GLib.Variant): [boolean, boolean];
}

export class TCAction {
    static $gtype: GObject.GType<TCAction>;

    constructor(kind: string);
    constructor(copy: TCAction);

    // Constructors
    static ["new"](kind: string): TCAction;

    // Members
    dup(): TCAction;
    equal(other: TCAction): boolean;
    get_attribute(name: string): GLib.Variant;
    get_attribute_names(): string[];
    get_kind(): string;
    ref(): void;
    set_attribute(name: string, value?: GLib.Variant | null): void;
    unref(): void;
}

export class TCQdisc {
    static $gtype: GObject.GType<TCQdisc>;

    constructor(kind: string, parent: number);
    constructor(copy: TCQdisc);

    // Constructors
    static ["new"](kind: string, parent: number): TCQdisc;

    // Members
    dup(): TCQdisc;
    equal(other: TCQdisc): boolean;
    get_attribute(name: string): GLib.Variant;
    get_attribute_names(): string[];
    get_handle(): number;
    get_kind(): string;
    get_parent(): number;
    ref(): void;
    set_attribute(name: string, value?: GLib.Variant | null): void;
    set_handle(handle: number): void;
    unref(): void;
}

export class TCTfilter {
    static $gtype: GObject.GType<TCTfilter>;

    constructor(kind: string, parent: number);
    constructor(copy: TCTfilter);

    // Constructors
    static ["new"](kind: string, parent: number): TCTfilter;

    // Members
    dup(): TCTfilter;
    equal(other: TCTfilter): boolean;
    get_action(): TCAction;
    get_handle(): number;
    get_kind(): string;
    get_parent(): number;
    ref(): void;
    set_action(action: TCAction): void;
    set_handle(handle: number): void;
    unref(): void;
}

export class TeamLinkWatcher {
    static $gtype: GObject.GType<TeamLinkWatcher>;

    constructor(
        init_wait: number,
        interval: number,
        missed_max: number,
        target_host: string,
        source_host: string,
        flags: TeamLinkWatcherArpPingFlags
    );
    constructor(copy: TeamLinkWatcher);

    // Constructors
    static new_arp_ping(
        init_wait: number,
        interval: number,
        missed_max: number,
        target_host: string,
        source_host: string,
        flags: TeamLinkWatcherArpPingFlags
    ): TeamLinkWatcher;
    static new_arp_ping2(
        init_wait: number,
        interval: number,
        missed_max: number,
        vlanid: number,
        target_host: string,
        source_host: string,
        flags: TeamLinkWatcherArpPingFlags
    ): TeamLinkWatcher;
    static new_ethtool(delay_up: number, delay_down: number): TeamLinkWatcher;
    static new_nsna_ping(init_wait: number, interval: number, missed_max: number, target_host: string): TeamLinkWatcher;

    // Members
    dup(): TeamLinkWatcher;
    equal(other: TeamLinkWatcher): boolean;
    get_delay_down(): number;
    get_delay_up(): number;
    get_flags(): TeamLinkWatcherArpPingFlags;
    get_init_wait(): number;
    get_interval(): number;
    get_missed_max(): number;
    get_name(): string;
    get_source_host(): string;
    get_target_host(): string;
    get_vlanid(): number;
    ref(): void;
    unref(): void;
}

export class VariantAttributeSpec {
    static $gtype: GObject.GType<VariantAttributeSpec>;

    constructor(copy: VariantAttributeSpec);
}

export class VpnEditorPluginVT {
    static $gtype: GObject.GType<VpnEditorPluginVT>;

    constructor(copy: VpnEditorPluginVT);
}

export class WireGuardPeer {
    static $gtype: GObject.GType<WireGuardPeer>;

    constructor();
    constructor(copy: WireGuardPeer);

    // Constructors
    static ["new"](): WireGuardPeer;

    // Members
    append_allowed_ip(allowed_ip: string, accept_invalid: boolean): boolean;
    clear_allowed_ips(): void;
    cmp(b: WireGuardPeer | null, compare_flags: SettingCompareFlags): number;
    get_allowed_ip(idx: number, out_is_valid?: boolean | null): string;
    get_allowed_ips_len(): number;
    get_endpoint(): string;
    get_persistent_keepalive(): number;
    get_preshared_key(): string;
    get_preshared_key_flags(): SettingSecretFlags;
    get_public_key(): string;
    is_sealed(): boolean;
    is_valid(check_non_secrets: boolean, check_secrets: boolean): boolean;
    new_clone(with_secrets: boolean): WireGuardPeer;
    ref(): WireGuardPeer;
    remove_allowed_ip(idx: number): boolean;
    seal(): void;
    set_endpoint(endpoint: string, allow_invalid: boolean): boolean;
    set_persistent_keepalive(persistent_keepalive: number): void;
    set_preshared_key(preshared_key: string | null, accept_invalid: boolean): boolean;
    set_preshared_key_flags(preshared_key_flags: SettingSecretFlags): void;
    set_public_key(public_key: string | null, accept_invalid: boolean): boolean;
    unref(): void;
}

export interface ConnectionNamespace {
    $gtype: GObject.GType<Connection>;
    prototype: ConnectionPrototype;
}
export type Connection = ConnectionPrototype;
export interface ConnectionPrototype extends GObject.Object {
    // Members

    add_setting(setting: Setting): void;
    clear_secrets(): void;
    clear_secrets_with_flags(func?: SettingClearSecretsWithFlagsFn | null): void;
    clear_settings(): void;
    compare(b: Connection, flags: SettingCompareFlags): boolean;
    diff(b: Connection, flags: SettingCompareFlags, out_settings: GLib.HashTable<string, GLib.HashTable>): boolean;
    dump(): void;
    for_each_setting_value(func: SettingValueIterFn): void;
    get_connection_type(): string;
    get_id(): string;
    get_interface_name(): string;
    get_path(): string;
    get_setting(setting_type: GObject.GType): Setting;
    get_setting_802_1x(): Setting8021x;
    get_setting_adsl(): SettingAdsl;
    get_setting_bluetooth(): SettingBluetooth;
    get_setting_bond(): SettingBond;
    get_setting_bridge(): SettingBridge;
    get_setting_bridge_port(): SettingBridgePort;
    get_setting_by_name(name: string): Setting;
    get_setting_cdma(): SettingCdma;
    get_setting_connection(): SettingConnection;
    get_setting_dcb(): SettingDcb;
    get_setting_dummy(): SettingDummy;
    get_setting_generic(): SettingGeneric;
    get_setting_gsm(): SettingGsm;
    get_setting_infiniband(): SettingInfiniband;
    get_setting_ip4_config(): SettingIP4Config;
    get_setting_ip6_config(): SettingIP6Config;
    get_setting_ip_tunnel(): SettingIPTunnel;
    get_setting_macsec(): SettingMacsec;
    get_setting_macvlan(): SettingMacvlan;
    get_setting_olpc_mesh(): SettingOlpcMesh;
    get_setting_ovs_bridge(): SettingOvsBridge;
    get_setting_ovs_interface(): SettingOvsInterface;
    get_setting_ovs_patch(): SettingOvsPatch;
    get_setting_ovs_port(): SettingOvsPort;
    get_setting_ppp(): SettingPpp;
    get_setting_pppoe(): SettingPppoe;
    get_setting_proxy(): SettingProxy;
    get_setting_serial(): SettingSerial;
    get_setting_tc_config(): SettingTCConfig;
    get_setting_team(): SettingTeam;
    get_setting_team_port(): SettingTeamPort;
    get_setting_tun(): SettingTun;
    get_setting_vlan(): SettingVlan;
    get_setting_vpn(): SettingVpn;
    get_setting_vxlan(): SettingVxlan;
    get_setting_wimax(): SettingWimax;
    get_setting_wired(): SettingWired;
    get_setting_wireless(): SettingWireless;
    get_setting_wireless_security(): SettingWirelessSecurity;
    get_settings(): Setting[];
    get_uuid(): string;
    get_virtual_device_description(): string;
    is_type(type: string): boolean;
    is_virtual(): boolean;
    need_secrets(): [string, string[] | null];
    normalize(parameters?: GLib.HashTable<string, any> | null): [boolean, boolean | null];
    remove_setting(setting_type: GObject.GType): void;
    replace_settings(new_settings: GLib.Variant): boolean;
    replace_settings_from_connection(new_connection: Connection): void;
    set_path(path: string): void;
    to_dbus(flags: ConnectionSerializationFlags): GLib.Variant;
    update_secrets(setting_name: string, secrets: GLib.Variant): boolean;
    verify(): boolean;
    verify_secrets(): boolean;
    vfunc_changed(): void;
    vfunc_secrets_cleared(): void;
    vfunc_secrets_updated(setting: string): void;
}

export const Connection: ConnectionNamespace;

export interface VpnEditorNamespace {
    $gtype: GObject.GType<VpnEditor>;
    prototype: VpnEditorPrototype;
}
export type VpnEditor = VpnEditorPrototype;
export interface VpnEditorPrototype extends GObject.Object {
    // Members

    get_widget<T = GObject.Object>(): T;
    update_connection(connection: Connection): boolean;
    vfunc_changed(): void;
    vfunc_get_widget<T = GObject.Object>(): T;
    vfunc_update_connection(connection: Connection): boolean;
}

export const VpnEditor: VpnEditorNamespace;

export interface VpnEditorPluginNamespace {
    $gtype: GObject.GType<VpnEditorPlugin>;
    prototype: VpnEditorPluginPrototype;

    load(plugin_name: string, check_service: string): VpnEditorPlugin;
    load_from_file(
        plugin_name: string,
        check_service: string,
        check_owner: number,
        check_file: UtilsCheckFilePredicate
    ): VpnEditorPlugin;
}
export type VpnEditorPlugin = VpnEditorPluginPrototype;
export interface VpnEditorPluginPrototype extends GObject.Object {
    // Properties
    description: string;
    name: string;
    service: string;

    // Members

    ["export"](path: string, connection: Connection): boolean;
    get_capabilities(): VpnEditorPluginCapability;
    get_editor(connection: Connection): VpnEditor;
    get_plugin_info(): VpnPluginInfo;
    get_suggested_filename(connection: Connection): string;
    get_vt(vt_size: number): [number, VpnEditorPluginVT];
    ["import"](path: string): Connection;
    set_plugin_info(plugin_info?: VpnPluginInfo | null): void;
    vfunc_export_to_file(path: string, connection: Connection): boolean;
    vfunc_get_capabilities(): VpnEditorPluginCapability;
    vfunc_get_editor(connection: Connection): VpnEditor;
    vfunc_get_suggested_filename(connection: Connection): string;
    vfunc_get_vt(out_vt_size: number): VpnEditorPluginVT;
    vfunc_notify_plugin_info_set(plugin_info: VpnPluginInfo): void;
}

export const VpnEditorPlugin: VpnEditorPluginNamespace;
