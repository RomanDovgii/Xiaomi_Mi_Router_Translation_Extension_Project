export const translateLoginPage = () => {
  const titleText = `Welcome`;
  const detailText = `Download Xiaomi WiFi APP to manage your router`;
  const tipText = `You won't need to remember your password if you use our app`;
  const inputPlaceholder = `Please, enter your password`;

  const title = document.querySelector(`div.title`);
  const detail = document.querySelector(`div.detail`);
  const tip = document.querySelector(`div.tip`);
  const passwordInput = document.querySelector(`input.ipt-text`);

  title.textContent = titleText;
  detail.textContent = detailText;
  tip.textContent = tipText;

  passwordInput.placeholder = inputPlaceholder;
};
