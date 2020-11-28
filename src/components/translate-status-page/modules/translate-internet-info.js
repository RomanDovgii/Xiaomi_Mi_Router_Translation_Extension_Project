export const translateInternetInfo = () => {
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

  const internetPanels = document.querySelectorAll(`.internet-panel`);

  const network = internetPanels[0];
  const bandwidth = internetPanels[1];

  // network translation

  const networkHeading = network.querySelector(`h3`);
  // const networkTerms = network.querySelector(`dt`);

  // const networkTypeTerm = networkTerms[0];
  // const networkIpTerm = networkTerms[1];
  // const networkGateawayTerm = networkTerms[3];

  networkHeading.textContent = `Network`;
  // networkTypeTerm.textContent = `Connection Type`;
  // networkIpTerm.textContent = `External IP`;
  // networkGateawayTerm.textContent = `Gateway Address`;
  // bandwidth translation

  const bandwidthHeading = bandwidth.querySelector(`h3`);
  // const bandwidthTerms = bandwidth.querySelector(`dt`);

  // const bandwidthMaxDownload = bandwidthTerms[0];
  // const bandwidthMaxUpload = bandwidthTerms[1];

  bandwidthHeading.textContent = `Bandwidth`;
  // bandwidthMaxUpload.textContent = `Max Upload`;
  // bandwidthMaxDownload.textContent = `Max Download`;
};
