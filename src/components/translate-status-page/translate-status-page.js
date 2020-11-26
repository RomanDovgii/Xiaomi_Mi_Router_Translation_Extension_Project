import {AppRouteStatusHash} from "../../utils/const";
import {ranslateNetMapDevices} from "./modules/translate-net-map-devices";
import {ranslateNetMapInternet} from "./modules/translate-net-map-internet";

const onHashChange = () => {
  const currentHash = window.location.hash;

  switch (true) {
    case (currentHash === AppRouteStatusHash.DEVICES):
      console.log(`devices`);
      break;
    case (currentHash === AppRouteStatusHash.ROUTER):
      console.log(`router`);
      break;
    case (currentHash === AppRouteStatusHash.INTERNET):
      console.log(`internet`);
      break;
  }
}

export const translateStatusPage = (path) => {
  ranslateNetMapDevices();
  ranslateNetMapInternet()

  window.addEventListener(`hashchange`, onHashChange);
};
