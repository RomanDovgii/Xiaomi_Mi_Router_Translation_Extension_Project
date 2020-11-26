import {XIAOMI_MI_ROUTER_PATH} from "./utils/const"

import {translateCurrentPage} from "./components/translate-current-page/translate-current-page";

const currentPath = window.location.pathname;

if (currentPath.includes(XIAOMI_MI_ROUTER_PATH)) {
  translateCurrentPage(currentPath);
}
