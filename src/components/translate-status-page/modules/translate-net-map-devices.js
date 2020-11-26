import {NetMapText} from "../../../utils/const";
import {translateSmallTextDevices} from "./translate-small-text-devices";

export const ranslateNetMapDevices = () => {
  const devicesText = document.querySelector(`.devices`).querySelector(`p`);

  devicesText.textContent = NetMapText.DEVICES.ENGLISH;
  translateSmallTextDevices();
};
