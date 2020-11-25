const translateTitle = () => {
  const title = document.querySelector(`title`);
  title.innerText = `Xiaomi Router`
};

const translateFooter = () => {
  const router = `Xiaomi Router`
  const website = `Website`;
  const weibo = `Weibo`;
  const wechat = `WeChat`;
  const community = `User Community`;
  const problems = `Common Problems`;
  const service = `Service Hotline`;

  const footer = document.querySelector(`#ft`);
  const romVersion = footer.querySelector(`p.rom-ver`);

  const romVerText = romVersion
                     ? romVersion.innerHTML.replace(`系统版本`, `System Version`)
                                   .replace(`稳定版`, `stable`)
                                   .replace(`地址`, ` address`)
                     : ``;

  const footerInnerHTML = `
  ${romVerText}
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

  footer.innerHTML = footerInnerHTML;
};

export const translateGeneralParts = () => {
  translateTitle();
  translateFooter();
}
