export const XIAOMI_MI_ROUTER_PATH = `/cgi-bin/luci/`;

export const AppRouteMain = {
  LOGIN: `/web`,
  HOME: `/web/home`,
  STORE: `/web/store`,
  SETTING: `/web/setting`,
  PROSETTING: `/web/prosetting`
};

export const AppRouteSetting = {
  WIFI_SETTINGS: `/wifi`,
  WAN_sETTINGS: `/wan`,
  SAFETY_SETTINGS: `/safe`,
  LAN_SETTINGS: `/lannetset`,
  UPDATE_SETTINGS: `/upgrade`,
};

export const AppRouteProsetting = {
  QOS_SETTINGS: `/qos`,
  DHCP_SETTINGS: `/dhcpipmacband`,
  DDNS_SETTINGS: `/ddns`,
  NAT_SETTINGS: `/nat`,
  VPN_SETTINGS: `/vpn`,
  UPNP_SETTIGNS: `/upnp`
};

export const name = {
  DEVICES: {
      CHINESE: `终端设备`,
      ENGLISH: `Devices`,
      RUSSIAN: `Устройства`
  },
  INTERNET: {
      CHINESE: `互联网`,
      ENGLISH: `Internet`,
      RUSSIAN: `Интернет`
  },
  STATUS: {
      CHINESE: `路由状态`,
      ENGLISH: `Status`,
      RUSSIAN: `Статус`
  },
  STORAGE: {
      CHINESE: `存储状态`,
      ENGLISH: `Storage`,
      RUSSIAN: `Хранилище`
  },
  SETTINGS_COMMON: {
      CHINESE: `常用设置`,
      ENGLISH: `Settings`,
      RUSSIAN: `Настройки`
  },
  SETTINGS_ADVANCED: {
      CHINESE: `高级设置`,
      ENGLISH: `Advanced`,
      RUSSIAN: `Дополнительно`
  }
}
