import {translateSmallTextDevices} from "./modules/translate-small-text-devices";
import {translateSmallTextBandwidth} from "./modules/translate-small-text-bandwidth";

export const translateStatusPage = () => {
  translateSmallTextDevices();
  translateSmallTextBandwidth();
};
