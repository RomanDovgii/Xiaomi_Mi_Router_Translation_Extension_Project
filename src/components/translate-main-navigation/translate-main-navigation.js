import {navigationMainText} from "../../utils/const";

export const translateMainNavigation = () => {
  const navigationWrapper = document.querySelector(`#nav`);
  const navigationList = navigationWrapper.querySelector(`ul`);
  const navigationItems = navigationList.querySelectorAll(`li`);

  navigationItems[0].querySelector(`a`).textContent = navigationMainText.STATUS.ENGLISH;
  navigationItems[1].querySelector(`a`).textContent = navigationMainText.STORAGE.ENGLISH;
  navigationItems[2].querySelector(`a`).textContent = navigationMainText.SETTINGS_COMMON.ENGLISH;
  navigationItems[3].querySelector(`a`).textContent = navigationMainText.SETTINGS_ADVANCED.ENGLISH;
};
