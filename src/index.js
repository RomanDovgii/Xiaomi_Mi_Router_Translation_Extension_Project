import {XIAOMI_MI_ROUTER_PATH} from "./utils/const"

import {translateCurrentPage} from "./components/translate-current-page/translate-current-page";

const currentLocation = window.location;
console.log(`jopa`);
console.log(currentLocation.pathname.includes(XIAOMI_MI_ROUTER_PATH));

if (currentLocation.pathname.includes(XIAOMI_MI_ROUTER_PATH)) {
  translateCurrentPage(currentLocation);
}
