/**
 * ============================
 * IMPORTS
 * ============================
 * Load required modules for interactivity and layout behavior.
 */
import {
    initMobileMenu,
    setupMobileSubmenuToggle,
} from "./modules/mobilemenu.js";

import { setupDesktopSubmenuToggle } from "./modules/desktopmenu.js";
import { initRecipeFormModal } from "./modules/submitRecipeModal.js";
import { initYouMayLikeRotators } from "./modules/youMayLike.js";

/**
 * ============================
 * DOM READY
 * ============================
 * Initialize everything once the DOM is fully loaded.
 */
document.addEventListener("DOMContentLoaded", () => {
    // === Navigation setup ===
    initMobileMenu();
    setupMobileSubmenuToggle();
    setupDesktopSubmenuToggle(".has-submenu", ".submenu-toggle");

    // === Modal form setup ===
    initRecipeFormModal();

    // === Rotating image cards (e.g., "You May Like This") ===
    initYouMayLikeRotators();

    // === Advanced search toggle logic ===
    const advBtn = document.querySelector(".recipe-search-bar .button-primary");
    const advPanel = document.getElementById("advanced-search-panel");

    if (advBtn && advPanel) {
        advBtn.addEventListener("click", (e) => {
            e.preventDefault();
            const isVisible = advPanel.style.display === "block";
            advPanel.style.display = isVisible ? "none" : "block";
            advBtn.textContent = isVisible
                ? "Advanced Search"
                : "Hide Advanced Search";
        });
    }
});
