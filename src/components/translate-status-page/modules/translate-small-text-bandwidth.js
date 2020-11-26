const onElementChange = (element) => {
  console.log(element);
  let internetText = element.textContent;

  const number = internetText.replace(`带宽`, ``).replace(`M`, ``);
  const newText = `bandwidth <b class="bandwidthval">${number}</b>M`;
  console.log(newText);
  element.innerHTML = newText;
};

export const translateSmallTextBandwidth = () => {
  const internetTextElement = document.querySelector(`.status-internet`);

  internetTextElement.addEventListener(`DOMNodeInserted`, () => {
    console.log(`lol`);
    onElementChange(internetTextElement);
  });
};
