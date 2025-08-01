/**
 * ======================
 * IMPORTS
 * ======================
 * Load all modular behavior needed on the page.
 */
import {
    initMobileMenu,
    setupMobileSubmenuToggle,
} from "./modules/mobilemenu.js";

import { setupDesktopSubmenuToggle } from "./modules/desktopmenu.js";
import { initShowcaseSwitcher } from "./modules/showcaseSwitcher.js";
import { showcases } from "./modules/cultureshowcase_data.js";

/**
 * ======================
 * INITIALIZATION
 * ======================
 * Set up menus, and wait for DOM to initialize showcase switching logic.
 */
initMobileMenu(); // Enable mobile menu toggle
setupMobileSubmenuToggle(); // Enable mobile submenu toggling
setupDesktopSubmenuToggle(".has-submenu", ".submenu-toggle"); // Desktop submenu

document.addEventListener("DOMContentLoaded", () => {
    initShowcaseSwitcher(); // Optional: if you have another showcase module
    setupPagination(); // Setup numbered page buttons
    renderCultureShowcase(currentIndex); // Show initial showcase entry
});

/**
 * ======================
 * VARIABLES
 * ======================
 */
let currentIndex = 0;

const images = document.querySelectorAll(".cultureshowcase-img");
const desc = document.getElementById("cultureshowcase-desc");
const pages = document.getElementById("cultureshowcase-pages");
const nextBtn = document.getElementById("cultureshowcase-next");
const prevBtn = document.getElementById("cultureshowcase-prev");
const grid = document.querySelector(".cultureshowcase-grid");

/**
 * ======================
 * FUNCTIONS
 * ======================
 */

/**
 * Renders the current showcase entry based on the index.
 * Updates images, text, pagination styles, and scroll behavior.
 */
function renderCultureShowcase(index) {
    const data = showcases[index];

    // Add fade-out effect before content change
    grid.classList.add("cultureshowcase-fade-out");

    setTimeout(() => {
        // Update each image in the grid
        images.forEach((img, i) => {
            img.src = data.images[i];
        });

        // Update description content
        desc.innerHTML = data.description;

        // Highlight the current page button
        [...pages.children].forEach((btn, i) => {
            btn.classList.toggle("active", i === index);
        });

        // Toggle visibility of arrows if on edge
        if (prevBtn && nextBtn) {
            prevBtn.classList.toggle("hidden", index === 0);
            nextBtn.classList.toggle("hidden", index === showcases.length - 1);
        }

        // Scroll smoothly to top of the page
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

        // Remove fade-out effect
        grid.classList.remove("cultureshowcase-fade-out");
    }, 300);
}

/**
 * Generates and attaches numbered page buttons for navigation.
 */
function setupPagination() {
    showcases.forEach((_, i) => {
        const btn = document.createElement("button");
        btn.textContent = i + 1;
        btn.classList.toggle("active", i === 0);
        btn.addEventListener("click", () => {
            currentIndex = i;
            renderCultureShowcase(i);
        });
        pages.appendChild(btn);
    });

    // Add ARIA labels for accessibility on arrows
    if (prevBtn) prevBtn.setAttribute("aria-label", "Previous showcase");
    if (nextBtn) nextBtn.setAttribute("aria-label", "Next showcase");
}

/**
 * ======================
 * EVENT LISTENERS
 * ======================
 */

// Click: Move to next showcase
if (nextBtn) {
    nextBtn.addEventListener("click", () => {
        if (currentIndex < showcases.length - 1) {
            currentIndex++;
            renderCultureShowcase(currentIndex);
        }
    });
}

// Click: Move to previous showcase
if (prevBtn) {
    prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            renderCultureShowcase(currentIndex);
        }
    });
}

// Keyboard: Use arrow keys to navigate
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight" && currentIndex < showcases.length - 1) {
        currentIndex++;
        renderCultureShowcase(currentIndex);
    } else if (e.key === "ArrowLeft" && currentIndex > 0) {
        currentIndex--;
        renderCultureShowcase(currentIndex);
    }
});
