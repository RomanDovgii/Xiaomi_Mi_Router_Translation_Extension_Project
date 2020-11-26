const onElementChange = (element) => {
  let internetText = element.textContent;

  if (internetText.includes(`带宽`) && !internetText.includes(`bandwidth`)) {
    const number = internetText.replace(`带宽`, ``).replace(`M`, ``);
    const newText = `bandwidth <b class="bandwidthval">${number}</b>M`;
    element.innerHTML = newText;
  }
};

export const translateSmallTextBandwidth = () => {
  const internetTextElement = document.querySelector(`.status-internet`);

  internetTextElement.addEventListener(`DOMNodeInserted`, () => {
    onElementChange(internetTextElement);
  });
};
