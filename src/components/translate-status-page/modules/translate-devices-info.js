const trasnlateTable = (table) => {
  console.log(table);
  const networkType = table.querySelector(`.s0`);
  const internetAccess = table.querySelector(`.s1`);

  internetAccess.textContent = `Internet Access`;

  switch (networkType.textContent) {
    case `网线连网设备`:
      networkType.textContent = `Wired Network`;
      break;
    case `2.4G连网设备`:
      networkType.textContent = `2.4G Network`;
      break;
    case `5G连网设备`:
      networkType.textContent = `5G Network`;
      break;
    default:
      break;
  }
};

export const translateDevicesInfo = () => {
  const mutationObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      const tables = mutation.target.querySelectorAll(`.mod-table-devices`);
      tables.forEach((table) => {
        trasnlateTable(table);
      });
    });
  });

  const content = document.querySelector(`#devicesTables`);
  mutationObserver.observe(content, {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true,
    attributeOldValue: true,
    characterDataOldValue: true
  });
};
