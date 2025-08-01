/**
 * ============================
 * IMPORTS
 * ============================
 * Keep track of external modules being used
 */
import {
    initMobileMenu,
    setupMobileSubmenuToggle,
} from "./modules/mobilemenu.js";

import { setupDesktopSubmenuToggle } from "./modules/desktopmenu.js";

/**
 * ============================
 * INITIALIZATION
 * ============================
 * Run setup when DOM is ready
 */
document.addEventListener("DOMContentLoaded", () => {
    // Initialize navigation systems
    initMobileMenu();
    setupMobileSubmenuToggle();
    setupDesktopSubmenuToggle(".has-submenu", ".submenu-toggle");

    // Initialize gauge level display (e.g., for healthy meter)
    setGaugeLevel(8);

    // Setup nutrition table toggle button
    const toggleBtn = document.getElementById("toggle-nutrition");
    const hiddenRows = document.querySelector(".hidden-rows");

    if (toggleBtn && hiddenRows) {
        toggleBtn.addEventListener("click", () => {
            const isVisible = hiddenRows.style.display === "table-row-group";
            hiddenRows.style.display = isVisible ? "none" : "table-row-group";
            toggleBtn.textContent = isVisible ? "Show More" : "Show Less";
        });
    }
});

/**
 * ============================
 * FUNCTIONS
 * ============================
 */

/**
 * Updates the gauge needle and label to reflect a level from 1–10.
 * @param {number} level - Integer from 1 to 10 representing the health level.
 */
function setGaugeLevel(level) {
    const needle = document.querySelector(".gauge-needle");
    const label = document.getElementById("gauge-level");

    if (!needle || !label) return;

    // Convert level (1–10) into a rotation angle (0–180 degrees)
    const angle = (level - 1) * 9;
    needle.style.transform = `rotate(${angle}deg)`;
    label.textContent = level;
}
