!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const o={LOGIN:"/web",HOME:"/web/home",STORE:"/web/store",SETTING:"/web/setting",PROSETTING:"/web/prosetting"},r={DEVICES:{CHINESE:"终端设备",ENGLISH:"Devices",RUSSIAN:"Устройства"},INTERNET:{CHINESE:"互联网",ENGLISH:"Internet",RUSSIAN:"Интернет"},STATUS:{CHINESE:"路由状态",ENGLISH:"Status",RUSSIAN:"Статус"},STORAGE:{CHINESE:"存储状态",ENGLISH:"Storage",RUSSIAN:"Хранилище"},SETTINGS_COMMON:{CHINESE:"常用设置",ENGLISH:"Settings",RUSSIAN:"Настройки"},SETTINGS_ADVANCED:{CHINESE:"高级设置",ENGLISH:"Advanced",RUSSIAN:"Дополнительно"}},a=()=>{const e=document.querySelector("#nav").querySelector("ul").querySelectorAll("li");e[0].querySelector("a").textContent=r.STATUS.ENGLISH,e[1].querySelector("a").textContent=r.STORAGE.ENGLISH,e[2].querySelector("a").textContent=r.SETTINGS_COMMON.ENGLISH,e[3].querySelector("a").textContent=r.SETTINGS_ADVANCED.ENGLISH},c=()=>{const e=document.querySelector(".status-internet");e.addEventListener("DOMNodeInserted",()=>{console.log("lol"),(e=>{console.log(e);const t=`bandwidth <b class="bandwidthval">${e.textContent.replace("带宽","").replace("M","")}</b>M`;console.log(t),e.innerHTML=t})(e)})},i=()=>{(()=>{const e=document.querySelector(".status-devices"),t=`<b class="devcountonline">${e.textContent.replace("带宽","").replace("M","")}</b> connected`;e.innerHTML=t})(),c()};document.querySelector("title").innerText="Xiaomi Router",(()=>{const e=document.querySelector("#ft"),t=e.querySelector("p.rom-ver"),n=`\n  ${t?t.innerHTML.replace("系统版本","System Version").replace("稳定版","stable").replace("地址"," address"):""}\n  <p>\n      © 2015 Xiaomi Router\n      <span>|</span>\n      <a href="http://www1.miwifi.com" target="_blank">Website</a>\n      <span>|</span>\n      <a href="http://weibo.com/xiaomiluyouqi" target="_blank">Weibo</a>\n      <span>|</span>\n      <a href="https://land.xiaomi.net/res/e1fdbc3/land/miwifi/wf_2dcode.jpg" target="_blank" id="wechatcode">WeChat</a>\n      <span>|</span>\n      <a href="http://bbs.xiaomi.cn/f-354" target="_blank">User Community</a>\n      <span>|</span>\n      <a target="_blank" href="http://www1.miwifi.com/miwifi_faq.html">Common Problems</a>\n      <span>|</span>\n      Service Hotline  400-100-5678\n  </p>\n  `;e.innerHTML=n})();const l=e=>{switch(!0){case e.includes(o.HOME):a(),i();break;case e.includes(o.STORE):case e.includes(o.SETTING):case e.includes(o.PROSETTING):a();break;case e.includes(o.LOGIN):(()=>{const e=document.querySelector("div.title"),t=document.querySelector("div.detail"),n=document.querySelector("div.tip"),o=document.querySelector("input.ipt-text");e.textContent="Welcome",t.textContent="Download Xiaomi WiFi APP to manage your router",n.textContent="You won't need to remember your password if you use our app",o.placeholder="Please, enter your password"})()}},u=window.location.pathname;u.includes("/cgi-bin/luci/")&&l(u)}]);
//# sourceMappingURL=bundle.js.map