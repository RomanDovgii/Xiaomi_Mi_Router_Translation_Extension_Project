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
  const headingText = heading.textContent;

  switch (true) {
    case headingText === `实时网络状态`:
      heading.textContent = `Network Status`;
      break;
    case headingText === `终端流量统计`:
      heading.textContent = `Traffic Statistics`;
      break;
    case headingText === `当前CPU状态`:
      heading.textContent = `CPU Usage`;
      break;
    case headingText === `当前内存状态`:
      heading.textContent = `RAM Usage`;
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
