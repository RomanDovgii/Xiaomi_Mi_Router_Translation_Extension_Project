import {AppRouteStatusHash} from "../../utils/const";
import {ranslateNetMapDevices} from "./modules/translate-net-map-devices";
import {ranslateNetMapInternet} from "./modules/translate-net-map-internet";
import {translateRouterInfo} from "./modules/translate-router-info";
import {translateInternetInfo} from "./modules/translate-internet-info";
import {translateDevicesInfo} from "./modules/translate-devices-info";

const onHashChange = () => {
  const currentHash = window.location.hash;

  switch (true) {
    case (currentHash === AppRouteStatusHash.DEVICES):
      translateDevicesInfo();
      break;
    case (currentHash === AppRouteStatusHash.ROUTER):
      translateRouterInfo();
      break;
    case (currentHash === AppRouteStatusHash.INTERNET):
      translateInternetInfo();
      break;
    default:
      window.removeEventListener(`hashchange`, onHashChange);
      break;
  }
}

export const translateStatusPage = () => {
  ranslateNetMapDevices();
  ranslateNetMapInternet();
  onHashChange();

  window.addEventListener(`hashchange`, onHashChange);
};
