
import { initAccordion } from "./modules/accordion.js";

import {
    initMobileMenu,
    setupMobileSubmenuToggle,
} from "./modules/mobilemenu.js";
import { setupDesktopSubmenuToggle } from "./modules/desktopmenu.js";


document.addEventListener('DOMContentLoaded', () => {
    initAccordion();
    initMobileMenu();
    setupMobileSubmenuToggle();
    setupDesktopSubmenuToggle(".has-submenu", ".submenu-toggle");
});