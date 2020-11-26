import {AppRouteMain} from "../../utils/const";

import {translateGeneralParts} from "../translate-general-parts/translate-general-parts";
import {translateMainNavigation} from "../translate-main-navigation/translate-main-navigation";

import {translateLoginPage} from "../translate-login-page/translate-login-page";
import {translateStatusPage} from "../translate-status-page/translate-status-page";

translateGeneralParts();

export const translateCurrentPage = (currentLocation) => {
  const currentPath = currentLocation.pathname;
  switch (true) {
    case currentPath.includes(AppRouteMain.HOME):
      translateMainNavigation();
      translateStatusPage(currentLocation);
      break;
    case currentPath.includes(AppRouteMain.STORE):
      translateMainNavigation();

      break;
    case currentPath.includes(AppRouteMain.SETTING):
      translateMainNavigation();

      break;
    case currentPath.includes(AppRouteMain.PROSETTING):
      translateMainNavigation();

      break;
    case currentPath.includes(AppRouteMain.LOGIN):
      translateLoginPage();
      break;
  }
}
