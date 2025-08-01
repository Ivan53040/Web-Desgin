/**
 * ============================
 * IMPORTS
 * ============================
 * External module imports used throughout the page.
 */
import { postFormData } from "./modules/postFormData.js";
import { fetchGetData } from "./modules/getData.js";
import {
    initMobileMenu,
    setupMobileSubmenuToggle,
} from "./modules/mobilemenu.js";
import { setupDesktopSubmenuToggle } from "./modules/desktopmenu.js";
import { initAccordion } from "./modules/accordion.js";
import { initRecipeFormModal } from "./modules/submitRecipeModal.js";

/**
 * ============================
 * FUNCTIONS
 * ============================
 */

/**
 * Toggles the visibility of the newsletter subscription form.
 */
function initSubscribeToggle() {
    const toggleBtn = document.getElementById("subscribe-toggle");
    const form = document.getElementById("community-form");

    if (!toggleBtn || !form) return;

    toggleBtn.addEventListener("click", () => {
        form.classList.toggle("hidden");
        form.setAttribute("aria-hidden", form.classList.contains("hidden"));
    });
}

/**
 * Displays a list of subscribed community members.
 * @param {Array} members - Array of member objects with `name` and `email`.
 */
function displayCommunityList(members) {
    const container = document.getElementById("community-list");
    container.innerHTML = "<h3>Community Members</h3>";

    if (!members || members.length === 0) {
        container.innerHTML += "<p>No members yet.</p>";
        return;
    }

    const list = document.createElement("ul");
    members.forEach(({ name, email }) => {
        const li = document.createElement("li");
        li.textContent = `${name} (${email})`;
        list.appendChild(li);
    });

    container.appendChild(list);
}

/**
 * Fetches and displays community member data.
 */
async function loadCommunityData() {
    const data = await fetchGetData(
        "https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/community/",
        {
            student_number: "s4899606", // 🔁 Replace with your ID
            uqcloud_zone_id: "f09ed2d4", // 🔁 Replace with your zone ID
        }
    );

    displayCommunityList(data);
}

/**
 * ============================
 * EVENT LISTENERS + INIT
 * ============================
 */

// DOMContentLoaded: Ensure DOM is ready before attaching form events and data loading
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("community-form");
    const feedback = document.getElementById("form-feedback");

    if (form) {
        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            feedback.textContent = "Submitting...";

            const { success, data } = await postFormData(
                form,
                "https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/community/",
                {
                    student_number: "s4899606",
                    uqcloud_zone_id: "f09ed2d4",
                }
            );

            if (success) {
                feedback.textContent = data.message;
                form.reset();
                loadCommunityData(); // Refresh list after submit
            } else {
                feedback.textContent = data.message || "Something went wrong.";
            }
        });
    }

    // Initialize subscription form toggle and load community data
    initSubscribeToggle();
    loadCommunityData();
});

// Immediately-invoked setup functions (don't need to wait for DOM)
initAccordion(); // Setup FAQ or section toggles
initMobileMenu(); // Setup mobile nav toggle
setupMobileSubmenuToggle(); // Enable mobile submenu support
setupDesktopSubmenuToggle(".has-submenu", ".submenu-toggle"); // Desktop submenu
initRecipeFormModal(); // Modal form logic
