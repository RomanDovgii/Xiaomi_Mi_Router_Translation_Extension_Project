const XIAOMI_MI_ROUTER_PATH = `/cgi-bin/luci/`;

const currentPath = window.location.pathname;


if (currentPath.includes(`/cgi-bin/luci/`)) {
    // ===== Constants ===== //
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
    
    // ===== Functions ===== //
    
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

    const translateLoginPage = () => {
        const titleText = `Welcome`;
        const detailText = `Download Xiaomi WiFi APP to manage your router`;
        const tipText = `You won't need to remember your password if you use our app`;
        const inputPlaceholder = `Please, enter your password`;

        const title = document.querySelector(`div.title`);
        const detail = document.querySelector(`div.detail`);
        const tip = document.querySelector(`div.tip`);
        const passwordInput = document.querySelector(`input.ipt-text`);

        changeText(title, titleText);
        changeText(detail, detailText);
        changeText(tip, tipText);
        
        passwordInput.placeholder = inputPlaceholder;
    };
    
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

    const translateFooter = () => {
        const router = `Xiaomi Router`
        const website = `Website`;
        const weibo = `Weibo`;
        const wechat = `WeChat`;
        const community = `User Community`;
        const problems = `Common Problems`;
        const service = `Service Hotline`;

        const footerInnerHTML = `
        <p>
            © 2015 ${router}
            <span>|</span>
            <a href="http://www1.miwifi.com" target="_blank">${website}</a>
            <span>|</span>
            <a href="http://weibo.com/xiaomiluyouqi" target="_blank">${weibo}</a>
            <span>|</span>
            <a href="https://land.xiaomi.net/res/e1fdbc3/land/miwifi/wf_2dcode.jpg" target="_blank" id="wechatcode">${wechat}</a>
            <span>|</span>
            <a href="http://bbs.xiaomi.cn/f-354" target="_blank">${community}</a>
            <span>|</span>
            <a target="_blank" href="http://www1.miwifi.com/miwifi_faq.html">${problems}</a>
            <span>|</span>
            ${service}  400-100-5678
        </p>
        `;

        const footer = document.querySelector(`#ft`);

        footer.innerHTML = footerInnerHTML;
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

    // ===== Main work ===== //

    translateTitle();
    translateFooter();

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
            translateLoginPage();
            break;
    }
    
}

