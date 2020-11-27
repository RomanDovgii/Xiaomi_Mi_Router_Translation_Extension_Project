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

  const routerInfo = document.querySelector(`.routerinfo`);

  const headingWrapper = routerInfo.querySelector(`.hd`);
  const headingThirdLevel = headingWrapper.querySelector(`h3`);

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

  tableHeadings[0].textContent = `Router Model`;
  tableHeadings[1].textContent = `System ROM Version`;
  tableHeadings[2].textContent = `MAC Address`;

  headingThirdLevel.textContent = `Router Information`;
};
