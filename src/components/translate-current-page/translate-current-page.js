import {AppRouteMain} from "../../utils/const";

import {translateGeneralParts} from "../translate-general-parts/translate-general-parts";
import {translateMainNavigation} from "../translate-main-navigation/translate-main-navigation";

import {translateLoginPage} from "../translate-login-page/translate-login-page";
import {translateStatusPage} from "../translate-status-page/translate-status-page";

translateGeneralParts();

export const translateCurrentPage = (path) => {
  switch (true) {
    case path.includes(AppRouteMain.HOME):
      translateMainNavigation();
      translateStatusPage();
      break;
    case path.includes(AppRouteMain.STORE):
      translateMainNavigation();

      break;
    case path.includes(AppRouteMain.SETTING):
      translateMainNavigation();

      break;
    case path.includes(AppRouteMain.PROSETTING):
      translateMainNavigation();

      break;
    case path.includes(AppRouteMain.LOGIN):
      translateLoginPage();
      break;
  }
}
