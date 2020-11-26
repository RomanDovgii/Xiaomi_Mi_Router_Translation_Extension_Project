export const translateSmallTextDevices = () => {
  const devicesTextElement = document.querySelector(`.status-devices`);

  const devicesText = devicesTextElement.textContent;

  const number = devicesText.replace(`带宽`, ``).replace(`M`, ``);
  const newText = `<b class="devcountonline">${number}</b> connected`

  devicesTextElement.innerHTML = newText;
};
