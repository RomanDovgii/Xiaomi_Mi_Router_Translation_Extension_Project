import {XIAOMI_MI_ROUTER_PATH} from "./utils/const"

const currentPath = window.location.pathname;

if (currentPath.includes(XIAOMI_MI_ROUTER_PATH)) {
  translateCurentPage(currentPath);
}
