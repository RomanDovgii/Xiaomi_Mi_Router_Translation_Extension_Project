const translateFirstInformationBlock = (mutationObserver) => {
  const routerInfo = document.querySelector(`.routerinfo`);

  const headingWrapper = routerInfo.querySelector(`.hd`);
  const headingThirdLevel = headingWrapper.querySelector(`h3`);

  headingThirdLevel.textContent = `Router Information`;

  const tableWrapper = routerInfo.querySelector(`.bd`);
  const tableBody = tableWrapper.querySelector(`tbody`);

  mutationObserver.observe(tableBody, {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true,
    attributeOldValue: true,
    characterDataOldValue: true
  });

  const rows = tableBody.querySelectorAll(`tr`);
  const tableHeadings = rows[1].querySelectorAll(`th`);
  const routerModel = tableHeadings[0];
  const romVersion = tableHeadings[1];
  const mac = tableHeadings[2];

  routerModel.textContent = `Router Model`;
  romVersion.textContent = `System ROM Version`;
  mac.textContent = `MAC Address`;
};

const translateStatusPanel = (panel, mutationObserver) => {
  const heading = panel.querySelector(`h3`);
  const textElement = panel.querySelector(`p`);
  const textElementHTML = textElement.innerHTML;
  const footer = panel.querySelector(`.ft`);
  const footerHTML = footer.innerHTML;
  const headingText = heading.textContent;

  let updatedInnerHtmlForText;
  let updatedInnerHtmlForFooter;

  switch (true) {
    case headingText === `实时网络状态`:
      heading.textContent = `Network Status`;

      updatedInnerHtmlForText = textElementHTML.replace(`实时下行流量`, `Download`).replace(`实时上行流量`, `Upload`);
      updatedInnerHtmlForFooter = footerHTML.replace(`带宽`, `Max Allowed Speed`).replace(`最快下载`, `Max Recorded Speed`);

      textElement.innerHTML = updatedInnerHtmlForText;
      footer.innerHTML = updatedInnerHtmlForFooter;
      break;
    case headingText === `终端流量统计`:
      heading.textContent = `Traffic Statistics`;

      updatedInnerHtmlForText = textElementHTML.replace(`当前终端`, `Devices`);
      updatedInnerHtmlForFooter = footerHTML.replace(`总下载量`, `Download`).replace(`总上传量`, `Upload`).replace(`累计终端`, `Devices`);

      textElement.innerHTML = updatedInnerHtmlForText;
      footer.innerHTML = updatedInnerHtmlForFooter;
      break;
    case headingText === `当前CPU状态`:
      heading.textContent = `CPU Usage`;

      updatedInnerHtmlForText = textElementHTML.replace(`当前CPU负载`, `CPU Usage`);
      updatedInnerHtmlForFooter = footerHTML.replace(`CPU核心数`, `CPU Cores`).replace(`核心频率`, `Frequency`);

      textElement.innerHTML = updatedInnerHtmlForText;
      footer.innerHTML = updatedInnerHtmlForFooter;
      break;
    case headingText === `当前内存状态`:
      heading.textContent = `RAM Usage`;

      updatedInnerHtmlForText = textElementHTML.replace(`当前内存占用`, `RAM Usage`);
      updatedInnerHtmlForFooter = footerHTML.replace(`内存容量`, `Size`).replace(`内存类型`, `Type`).replace(`内存频率`, `Frequency`);

      textElement.innerHTML = updatedInnerHtmlForText;
      footer.innerHTML = updatedInnerHtmlForFooter;
      break;
  }
};

export const translateRouterInfo = () => {
  const mutationObserver = new MutationObserver((mutations) => {
    mutations.forEach(mutation => {
      let oldText;

      switch (true) {
        case mutation.target.textContent.includes(`小米路由器3 Pro`):
          oldText = mutation.target.textContent;
          mutation.target.textContent = oldText.replace(`小米路由器3 Pro`, `Mi Router Pro `);
          break;
        case mutation.target.textContent.includes(`稳定版`):
          oldText = mutation.target.textContent;
          mutation.target.textContent = oldText.replace(`稳定版`, `Stable`);
          break;
        case mutation.target.textContent.includes(`实时下行流量: `):
          console.log(`it's ok`)
          oldText = mutation.target.textContent;
          mutation.target.textContent = oldText.replace(`实时下行流量`, `Download Speed`);
          mutation.target.textContent = oldText.replace(`实时上行流量`, `Upload Speed`);
          break;
      }
    });
  });

  translateFirstInformationBlock(mutationObserver);

  const statusPanels = document.querySelectorAll(`.status-panel`);
  const networkUsage = statusPanels[0];
  const networkUsageByDevice = statusPanels[1];
  const cpuUsage = statusPanels[2];
  const ramUsage = statusPanels[3];

  translateStatusPanel(networkUsage, mutationObserver);
  translateStatusPanel(networkUsageByDevice, mutationObserver);
  translateStatusPanel(cpuUsage, mutationObserver);
  translateStatusPanel(ramUsage, mutationObserver);
};
