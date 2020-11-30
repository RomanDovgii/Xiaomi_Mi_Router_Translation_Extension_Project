!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const r={LOGIN:"/web",HOME:"/web/home",STORE:"/web/store",SETTING:"/web/setting",PROSETTING:"/web/prosetting"},o="#devices",a="#router",c="#internet",l={STATUS:{CHINESE:"路由状态",ENGLISH:"Status",RUSSIAN:"Статус"},STORAGE:{CHINESE:"存储状态",ENGLISH:"Storage",RUSSIAN:"Хранилище"},SETTINGS_COMMON:{CHINESE:"常用设置",ENGLISH:"Settings",RUSSIAN:"Настройки"},SETTINGS_ADVANCED:{CHINESE:"高级设置",ENGLISH:"Advanced",RUSSIAN:"Дополнительно"}},i={DEVICES:{CHINESE:"终端设备",ENGLISH:"Devices",RUSSIAN:"Устройства"},INTERNET:{CHINESE:"互联网",ENGLISH:"Internet",RUSSIAN:"Интернет"}},s=()=>{document.querySelector("title").innerText="Xiaomi Router",(()=>{const e=document.querySelector("#ft"),t=e.querySelector("p.rom-ver"),n=`\n  ${t?t.innerHTML.replace("系统版本","System Version").replace("稳定版","stable").replace("地址"," address"):""}\n  <p>\n      © 2015 Xiaomi Router\n      <span>|</span>\n      <a href="http://www1.miwifi.com" target="_blank">Website</a>\n      <span>|</span>\n      <a href="http://weibo.com/xiaomiluyouqi" target="_blank">Weibo</a>\n      <span>|</span>\n      <a href="https://land.xiaomi.net/res/e1fdbc3/land/miwifi/wf_2dcode.jpg" target="_blank" id="wechatcode">WeChat</a>\n      <span>|</span>\n      <a href="http://bbs.xiaomi.cn/f-354" target="_blank">User Community</a>\n      <span>|</span>\n      <a target="_blank" href="http://www1.miwifi.com/miwifi_faq.html">Common Problems</a>\n      <span>|</span>\n      Service Hotline  400-100-5678\n  </p>\n  `;e.innerHTML=n})()},u=()=>{const e=document.querySelector("#nav").querySelector("ul").querySelectorAll("li");e[0].querySelector("a").textContent=l.STATUS.ENGLISH,e[1].querySelector("a").textContent=l.STORAGE.ENGLISH,e[2].querySelector("a").textContent=l.SETTINGS_COMMON.ENGLISH,e[3].querySelector("a").textContent=l.SETTINGS_ADVANCED.ENGLISH},d=()=>{document.querySelector(".devices").querySelector("p").textContent=i.DEVICES.ENGLISH,(()=>{const e=document.querySelector(".status-devices"),t=`<b class="devcountonline">${e.textContent.replace("带宽","").replace("M","")}</b> connected`;e.innerHTML=t})()},S=()=>{document.querySelector(".internet").querySelector("p").textContent=i.INTERNET.ENGLISH,(()=>{const e=document.querySelector(".status-internet");e.addEventListener("DOMNodeInserted",()=>{(e=>{let t=e.textContent;if(t.includes("带宽")&&!t.includes("bandwidth")){const n=`bandwidth <b class="bandwidthval">${t.replace("带宽","").replace("M","")}</b>M`;e.innerHTML=n}})(e)})})()},p=e=>{const t=e.querySelector("h3"),n=e.querySelector("p"),r=n.innerHTML,o=e.querySelector(".ft"),a=o.innerHTML,c=t.textContent;let l,i;switch(!0){case"实时网络状态"===c:t.textContent="Network Status",l=r.replace("实时下行流量","Download").replace("实时上行流量","Upload"),i=a.replace("带宽","Max Allowed Speed").replace("最快下载","Max Recorded Speed"),n.innerHTML=l,o.innerHTML=i;break;case"终端流量统计"===c:t.textContent="Traffic Statistics",l=r.replace("当前终端","Devices"),i=a.replace("总下载量","Download").replace("总上传量","Upload").replace("累计终端","Devices"),n.innerHTML=l,o.innerHTML=i;break;case"当前CPU状态"===c:t.textContent="CPU Usage",l=r.replace("当前CPU负载","CPU Usage"),i=a.replace("CPU核心数","CPU Cores").replace("核心频率","Frequency"),n.innerHTML=l,o.innerHTML=i;break;case"当前内存状态"===c:t.textContent="RAM Usage",l=r.replace("当前内存占用","RAM Usage"),i=a.replace("内存容量","Size").replace("内存类型","Type").replace("内存频率","Frequency"),n.innerHTML=l,o.innerHTML=i}},b=()=>{(e=>{const t=document.querySelector(".routerinfo");t.querySelector(".hd").querySelector("h3").textContent="Router Information";const n=t.querySelector(".bd").querySelector("tbody");e.observe(n,{attributes:!0,characterData:!0,childList:!0,subtree:!0,attributeOldValue:!0,characterDataOldValue:!0});const r=n.querySelectorAll("tr")[1].querySelectorAll("th"),o=r[0],a=r[1],c=r[2];o.textContent="Router Model",a.textContent="System ROM Version",c.textContent="MAC Address"})(new MutationObserver(e=>{e.forEach(e=>{let t;switch(!0){case e.target.textContent.includes("小米路由器3 Pro"):t=e.target.textContent,e.target.textContent=t.replace("小米路由器3 Pro","Mi Router Pro ");break;case e.target.textContent.includes("稳定版"):t=e.target.textContent,e.target.textContent=t.replace("稳定版","Stable")}})}));const e=document.querySelectorAll(".status-panel"),t=e[0],n=e[1],r=e[2],o=e[3];p(t),p(n),p(r),p(o)},y=(e,t)=>{const n=e.querySelector("h3");let r;switch(n.textContent){case"外网状态":return n.textContent="Network",r=e.querySelector(".bd"),void t.observe(r,{attributes:!0,characterData:!0,childList:!0,subtree:!0,attributeOldValue:!0,characterDataOldValue:!0});case"外网带宽":n.textContent="Bandwidth",r=e.querySelector("tbody");const o=r.querySelectorAll("dt"),a=o[0];o[1].textContent="Max Upload:",a.textContent="Max Download:";const c=r.querySelector("#retestSpeed"),l=r.querySelector("#manualSetting");return c.textContent="Set Automatically",void(l.textContent="Set Manually");default:return void(r=null)}},C=()=>{const e=new MutationObserver(e=>{e.forEach(e=>{e.target.querySelectorAll(".mod-table-devices").forEach(e=>{(e=>{console.log(e);const t=e.querySelector(".s0");switch(e.querySelector(".s1").textContent="Internet Access",t.textContent){case"网线连网设备":t.textContent="Wired Network";break;case"2.4G连网设备":t.textContent="2.4G Network";break;case"5G连网设备":t.textContent="5G Network"}})(e)})})}),t=document.querySelector("#devicesTables");e.observe(t,{attributes:!0,characterData:!0,childList:!0,subtree:!0,attributeOldValue:!0,characterDataOldValue:!0})},x=()=>{const e=window.location.hash;switch(!0){case e===o:C();break;case e===a:b();break;case e===c:(()=>{const e=new MutationObserver(e=>{e.forEach(e=>{switch(!0){case"wanStatusContent"===e.target.id:const t=e.target.querySelectorAll("dt"),n=t[0],r=t[1],o=t[2],a=t[3];return n.textContent="Type:",r.textContent="External IP:",o.textContent="DNS:",void(a.textContent="Gateway:");default:return}})}),t=document.querySelectorAll(".internet-panel"),n=t[0],r=t[1];y(n,e),y(r,e)})();break;default:window.removeEventListener("hashchange",x)}},w=e=>{s();const t=e.pathname;switch(!0){case t.includes(r.HOME):u(),d(),S(),x(),window.addEventListener("hashchange",x);break;case t.includes(r.STORE):case t.includes(r.SETTING):case t.includes(r.PROSETTING):u();break;case t.includes(r.LOGIN):(()=>{const e=document.querySelector("div.title"),t=document.querySelector("div.detail"),n=document.querySelector("div.tip"),r=document.querySelector("input.ipt-text");e.textContent="Welcome",t.textContent="Download Xiaomi WiFi APP to manage your router",n.textContent="You won't need to remember your password if you use our app",r.placeholder="Please, enter your password"})()}},E=window.location;E.pathname.includes("/cgi-bin/luci/")&&w(E)}]);
//# sourceMappingURL=bundle.js.map