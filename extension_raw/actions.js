const XIAOMI_MI_ROUTER_PATH = `/cgi-bin/luci/`;


const AppRouteMain = {
    LOGIN: `/web`,
    HOME: `/web/home`,
    STORE: `/web/store`,
    SETTING: `/web/setting`,
    PROSETTING: `/web/prosetting`   
};

const AppRouteSetting = {
    WIFI_SETTINGS: `/wifi`,
    WAN_sETTINGS: `/wan`,
    SAFETY_SETTINGS: `/safe`,
    LAN_SETTINGS: `/lannetset`,
    UPDATE_SETTINGS: `/upgrade`,
};

const AppRouteProsetting = {
    QOS_SETTINGS: `/qos`,
    DHCP_SETTINGS: `/dhcpipmacband`,
    DDNS_SETTINGS: `/ddns`,
    NAT_SETTINGS: `/nat`,
    VPN_SETTINGS: `/vpn`,
    UPNP_SETTIGNS: `/upnp`
};

const name = {
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

const currentPath = window.location.pathname;

const changeText = (element, newText) => {
    element.textContent = newText;
}

const changeTextProblematic = (element, oldText) => {
    const layoutForDevices = `<b class="devcountonline">number</b> connected`;
    const layoutForBandwidth = `bandwidth <b class="bandwidthval">number</b>M`;
    let number;
    let newText;

    switch (true) {
        case oldText.includes(`台`):
            number = oldText.replace(`台`, ``);
            newText = layoutForDevices.replace(`number`, number)
            element.innerHTML = newText;
            break;
        case oldText.includes(`带宽`):
            number = oldText.replace(`带宽`, ``).replace(`M`, ``);
            newText = layoutForBandwidth.replace(`number`, number);
            element.innerHTML = newText;
            break;
    
    }
}

const translateTitle = () => {
    const title = document.querySelector(`title`);
    title.innerText = `Xiaomi Router`
}

const translateNavigation = () => {
    const navigationWrapper = document.querySelector(`#nav`);
    const navigationList = navigationWrapper.querySelector(`ul`);
    const navigationItems = navigationList.querySelectorAll(`li`);

    changeText(navigationItems[0].querySelector(`a`), name.STATUS.ENGLISH);
    changeText(navigationItems[1].querySelector(`a`), name.STORAGE.ENGLISH);
    changeText(navigationItems[2].querySelector(`a`), name.SETTINGS_COMMON.ENGLISH);
    changeText(navigationItems[3].querySelector(`a`), name.SETTINGS_ADVANCED.ENGLISH);
};

const translateSmallTextBandwidth = () => {
    const internetTextElement = document.querySelector(`.status-internet`);    

    const onElementChange = () => {
        let internetText = internetTextElement.textContent;
        changeTextProblematic(internetTextElement, internetText);
    };

    internetTextElement.addEventListener(`DOMNodeInserted`, onElementChange);
};

const translateSmallTextDevices = () => {
    const devicesTextElement = document.querySelector(`.status-devices`);
    const devicesText = devicesTextElement.textContent;

    changeTextProblematic(devicesTextElement, devicesText);
};

const translateNetMap = () => {
    const devicesText = document.querySelector(`.devices`).querySelector(`p`);
    const internetText = document.querySelector(`.internet`).querySelector(`p`);

    changeText(devicesText, name.DEVICES.ENGLISH);
    changeText(internetText, name.INTERNET.ENGLISH);
    translateSmallTextDevices();
    translateSmallTextBandwidth();
};


if (currentPath.includes(`/cgi-bin/luci/`)) {
    translateTitle();

    switch (true) {
        case currentPath.includes(AppRouteMain.HOME):
            translateNavigation();
            translateNetMap();
            break;
        case currentPath.includes(AppRouteMain.STORE):
            translateNavigation();
            break;
        case currentPath.includes(AppRouteMain.SETTING):
            translateNavigation();
            break;
        case currentPath.includes(AppRouteMain.PROSETTING):
            translateNavigation();
            break;
        case currentPath.includes(AppRouteMain.LOGIN):

            break;
    }
    
}

