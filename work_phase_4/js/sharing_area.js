/**
 * IMPORTS
 */
import {
  initMobileMenu,
  setupMobileSubmenuToggle,
} from "./modules/mobilemenu.js";
import { setupDesktopSubmenuToggle } from "./modules/desktopmenu.js";
import { postFormData } from "./modules/postFormData.js";

/**
 * CONSTANTS
 */
const STUDENT_ID = "s4899606";
const ZONE_ID = "f09ed2d4";
const API_URL =
  "https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/genericphotomemory/";

/**
 * INIT MENUS
 */
initMobileMenu();
setupMobileSubmenuToggle();
setupDesktopSubmenuToggle(".has-submenu", ".submenu-toggle");

/**
 * MAIN LOGIC
 */
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("photo-form");
  const feedback = document.getElementById("form-feedback");
  const gallery = document.getElementById("photo-gallery");
  const toggleBtn = document.getElementById("toggle-memory-form");
  const formWrapper = document.getElementById("memory-form-wrapper");

  // Toggle form visibility
  if (toggleBtn && formWrapper) {
    toggleBtn.addEventListener("click", () => {
      formWrapper.classList.toggle("hidden");
    });
  }

  // Form submit
  if (form && feedback) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      feedback.textContent = "Submitting...";

      const { success, data } = await postFormData(form, API_URL, {
        student_number: STUDENT_ID,
        uqcloud_zone_id: ZONE_ID,
      });

      if (success) {
        feedback.textContent = data.message || "Photo memory submitted!";
        form.reset();
        loadGallery();
      } else {
        feedback.textContent = data.message || "Something went wrong.";
      }
    });
  }

  // Load gallery (custom fetch to include headers)
  async function loadGallery() {
    if (!gallery) return;

    try {
      const response = await fetch(API_URL, {
        method: "GET",
        headers: {
          student_number: STUDENT_ID,
          uqcloud_zone_id: ZONE_ID,
        },
      });

      if (!response.ok) throw new Error("Server returned an error.");
      const result = await response.json();

      if (!Array.isArray(result) || result.length === 0) {
        gallery.innerHTML =
          '<p style="text-align:center;">No photos to display yet.</p>';
        return;
      }

      gallery.innerHTML = result
        .map(
          (item) => `
        <div class="photo-card">
          <img src="${item.photo_file}" alt="${item.photo_title}" />
          <h3>${item.photo_title}</h3>
          <p>${item.photo_caption}</p>
          <small><strong>Cook Time:</strong> ${item.photo_location}</small><br/>
          <small><em>By ${item.username}</em></small>
        </div>
      `
        )
        .join("");
    } catch (err) {
      console.error("Error loading gallery:", err);
      gallery.innerHTML = `<p style="text-align:center;">Failed to load shared photos.</p>`;
    }
  }

  // Initial load
  loadGallery();
});
