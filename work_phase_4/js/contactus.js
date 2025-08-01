/**
 * IMPORTS
 * Keep track of external modules being used
 * */

// Example: in js/site_map.js or similar


import {
    initMobileMenu,
    setupMobileSubmenuToggle,
} from "./modules/mobilemenu.js";
import { setupDesktopSubmenuToggle } from "./modules/desktopmenu.js";


/**
 * CONSTANTS
 * Define values that don't change e.g. page titles, URLs, etc.
 * */

/**
 * VARIABLES
 * Define values that will change e.g. user inputs, counters, etc.
 * */

/**
 * FUNCTIONS
 * Group code into functions to make it reusable
 * */

document.addEventListener('DOMContentLoaded', () => {
    
    initMobileMenu();
    setupMobileSubmenuToggle();
    setupDesktopSubmenuToggle(".has-submenu", ".submenu-toggle");
});

/**
 * EVENT LISTENERS
 * The code that runs when a user interacts with the page
 * */

// when the page fully loads
