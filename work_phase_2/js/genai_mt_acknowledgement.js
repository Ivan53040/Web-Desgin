/**
 * IMPORTS
 * Keep track of external modules being used
 * */
import { setupMenu } from "./modules/menu.js";

import { setupContentSlider } from "./modules/ContentSlider.js";


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

/**
 * EVENT LISTENERS
 * The code that runs when a user interacts with the page
 * */

// when the page fully loads

document.addEventListener("DOMContentLoaded", () => {
    setupMenu();
});
document.addEventListener("DOMContentLoaded", () => {
    setupContentSlider();
});

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".switch-btn");
    const contents = document.querySelectorAll(".switchable-content .content");

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            // Remove active class from all buttons
            buttons.forEach((btn) => btn.classList.remove("active"));
            // Remove active class from all content
            contents.forEach((content) => content.classList.remove("active"));

            // Add active class to the clicked button
            this.classList.add("active");
            // Get the corresponding content by ID and show it
            document
                .getElementById(this.dataset.target)
                .classList.add("active");
        });
    });
});
// expandable-text.js
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".expandable-container").forEach((container) => {
        const button = container.querySelector(".expand-btn");
        const content = container.querySelector(".expandable-content");

        button.addEventListener("click", function () {
            if (content.style.maxHeight) {
                content.style.maxHeight = null; // Collapse
                button.classList.remove("rotated");
            } else {
                content.style.maxHeight = content.scrollHeight + "px"; // Expand
                button.classList.add("rotated");
            }
        });
    });
});
