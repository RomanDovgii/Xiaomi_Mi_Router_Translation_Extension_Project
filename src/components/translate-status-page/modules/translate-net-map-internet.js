import {NetMapText} from "../../../utils/const";
import {translateSmallTextBandwidth} from "./translate-small-text-bandwidth";

export const ranslateNetMapInternet = () => {
  const devicesText = document.querySelector(`.internet`).querySelector(`p`);

  devicesText.textContent = NetMapText.INTERNET.ENGLISH;
  translateSmallTextBandwidth();
};
