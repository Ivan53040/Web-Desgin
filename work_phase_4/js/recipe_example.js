/**
 * ============================
 * IMPORTS
 * ============================
 */
import {
    initMobileMenu,
    setupMobileSubmenuToggle,
} from "./modules/mobilemenu.js";

import { setupDesktopSubmenuToggle } from "./modules/desktopmenu.js";
import { postFormData } from "./modules/postFormData.js";
import { fetchGetData } from "./modules/getData.js";

/**
 * ============================
 * DOM READY
 * ============================
 * Initialize logic once the DOM is fully loaded
 */
document.addEventListener("DOMContentLoaded", () => {
    // === Init navigation components ===
    initMobileMenu();
    setupMobileSubmenuToggle();
    setupDesktopSubmenuToggle(".has-submenu", ".submenu-toggle");

    // === Setup comment functionality ===
    const toggleButton = document.getElementById("toggle-comment-form");
    const form = document.getElementById("chat-form");
    const feedback = document.getElementById("form-feedback");
    const commentsSection = document.querySelector(".comments-section");
    const starRating = document.getElementById("star-rating");
    const ratingInput = document.getElementById("chat_post_content");

    if (!form || !toggleButton || !starRating || !feedback || !commentsSection)
        return;

    // Toggle form visibility
    toggleButton.addEventListener("click", () => {
        form.style.display = form.style.display === "none" ? "block" : "none";
    });

    // Handle star rating selection
    starRating.querySelectorAll("span").forEach((star) => {
        star.addEventListener("click", () => {
            const value = parseInt(star.dataset.value);
            ratingInput.value = value;
            starRating.querySelectorAll("span").forEach((s) => {
                s.textContent = parseInt(s.dataset.value) <= value ? "★" : "☆";
            });
        });
    });

    // Inserts a comment into the DOM
    const insertComment = (name, comment, rating, insertAtTop = true) => {
        const stars = "★".repeat(rating) + "☆".repeat(5 - rating);
        const commentDiv = document.createElement("div");
        commentDiv.classList.add("comment");
        commentDiv.innerHTML = `<strong>${name}:</strong> "${comment}" <span style="color: goldenrod;">(${stars})</span>`;

        if (insertAtTop) {
            commentsSection.insertBefore(commentDiv, form);
        } else {
            commentsSection.appendChild(commentDiv);
        }
    };

    // Fetch and display the latest 5 comments
    const loadComments = async () => {
        const data = await fetchGetData(
            "https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/genericchat/",
            {
                student_number: "s4899606",
                uqcloud_zone_id: "f09ed2d4",
            }
        );

        if (Array.isArray(data)) {
            const recent = data.reverse().slice(-5); // newest first
            recent.forEach(
                ({ person_name, chat_post_title, chat_post_content }) => {
                    insertComment(
                        person_name,
                        chat_post_title,
                        parseInt(chat_post_content),
                        true
                    );
                }
            );
        }
    };

    // Handle form submission
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        feedback.textContent = "Submitting...";

        const headers = {
            student_number: "s4899606",
            uqcloud_zone_id: "f09ed2d4",
        };

        const { success, data } = await postFormData(
            form,
            "https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/genericchat/",
            headers
        );

        if (success) {
            feedback.textContent = data.message || "Comment submitted!";

            const name = form.person_name.value;
            const comment = form.chat_post_title.value;
            const rating = parseInt(form.chat_post_content.value);

            insertComment(name, comment, rating, true);

            form.reset();
            starRating
                .querySelectorAll("span")
                .forEach((s) => (s.textContent = "★"));
        } else {
            feedback.textContent = data.message || "Something went wrong.";
        }
    });

    // Load initial comments
    loadComments();
});
