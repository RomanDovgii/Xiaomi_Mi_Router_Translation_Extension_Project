const translateBlock = (element, mutationObserver) => {
  const heading = element.querySelector(`h3`);

  let content;

  switch (heading.textContent) {
    case `外网状态`:
      heading.textContent = `Network`;
      content = element.querySelector(`.bd`);

      mutationObserver.observe(content, {
        attributes: true,
        characterData: true,
        childList: true,
        subtree: true,
        attributeOldValue: true,
        characterDataOldValue: true
      });
      return;
    case `外网带宽`:
      heading.textContent = `Bandwidth`;
      content = element.querySelector(`tbody`);

      const bandwidthTerms = content.querySelectorAll(`dt`);
      const bandwidthMaxDownload = bandwidthTerms[0];
      const bandwidthMaxUpload = bandwidthTerms[1];
      bandwidthMaxUpload.textContent = `Max Upload:`;
      bandwidthMaxDownload.textContent = `Max Download:`;

      const buttonSpeedTest = content.querySelector(`#retestSpeed`);
      const buttonBandSet = content.querySelector(`#manualSetting`);

      buttonSpeedTest.textContent = `Set Automatically`;
      buttonBandSet.textContent = `Set Manually`;
      return;
    default:
      content = null;
      return;
  }
};

export const translateInternetInfo = () => {
  const mutationObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      const terms = mutation.target.querySelectorAll(`dt`);
      const type = terms[0];
      const ip = terms[1];
      const dns = terms[2];
      const gateway = terms[3];

      type.textContent = `Type:`;
      ip.textContent = `External IP:`;
      dns.textContent = `DNS:`;
      gateway.textContent = `Gateway:`;
    });
  });

  const internetPanels = document.querySelectorAll(`.internet-panel`);

  const network = internetPanels[0];
  const bandwidth = internetPanels[1];

  translateBlock(network, mutationObserver);
  translateBlock(bandwidth, mutationObserver);
};
