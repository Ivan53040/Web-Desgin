/**
 * ============================
 * IMPORTS
 * ============================
 * Load all required modules for functionality across the page.
 */
import {
    initMobileMenu,
    setupMobileSubmenuToggle,
} from "./modules/mobilemenu.js";

import { setupDesktopSubmenuToggle } from "./modules/desktopmenu.js";
import { initContactForm } from "./modules/contact_form.js";
import { initShowcaseSlider } from "./modules/showcase.js";
import { initSubscribeToggle } from "./modules/newsletterToggle.js";
import { initCalendar } from "./modules/calendar.js";

/**
 * ============================
 * INITIALIZATION
 * ============================
 * Run setup procedures when the script is loaded.
 */
initMobileMenu(); // Mobile hamburger menu
setupMobileSubmenuToggle(); // Mobile submenu toggling
setupDesktopSubmenuToggle(".has-submenu", ".submenu-toggle"); // Desktop submenu dropdown
initSubscribeToggle(); // Newsletter form toggle
initShowcaseSlider(); // Sliding showcase section
initCalendar(); // Event calendar setup

/**
 * ============================
 * EVENT LISTENERS
 * ============================
 * Delay contact form setup until DOM is ready.
 */
document.addEventListener("DOMContentLoaded", () => {
    initContactForm(); // Setup contact form handler
});
