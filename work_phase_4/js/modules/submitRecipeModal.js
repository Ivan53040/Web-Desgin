// Import helper to post form data
import { postFormData } from "./postFormData.js";

/**
 * Initializes the modal behavior for submitting a recipe.
 * Includes modal open/close logic and API form submission with feedback.
 */
function initRecipeFormModal() {
    // DOM elements used in modal and form
    const modal = document.getElementById("submit-modal");
    const openBtn = document.querySelector(".submit-button"); // Button to open the modal
    const closeBtn = document.getElementById("close-submit-modal"); // Close (X) button
    const form = document.getElementById("product-form"); // Recipe submission form
    const feedback = document.getElementById("form-feedback"); // Feedback message area

    // Ensure all required elements are present
    if (!modal || !form || !openBtn || !closeBtn) return;

    // Show modal when "Submit My Recipe" button is clicked
    openBtn.addEventListener("click", (e) => {
        e.preventDefault();
        modal.style.display = "flex"; // Use flex so it's centered properly
    });

    // Hide modal when close (X) button is clicked
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Hide modal when clicking outside the modal content
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    // Handle form submission
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        feedback.textContent = "Submitting..."; // Temporary message while submitting

        // Post form data to the API with required headers
        const { success, data } = await postFormData(
            form,
            "https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/genericproduct/",
            {
                student_number: "s4899606", // 🔁 Replace with actual student number
                uqcloud_zone_id: "f09ed2d4", // 🔁 Replace with your zone ID (short format allowed)
            }
        );

        // Show success or error message
        if (success) {
            feedback.textContent =
                data.message || "Recipe submitted successfully!";
            form.reset(); // Clear form inputs
        } else {
            feedback.textContent = data.message || "Something went wrong.";
            // Optional: log for debugging
            // console.error(data.error || "No error message provided.");
        }
    });
}

// Export the function so it can be used in other scripts
export { initRecipeFormModal };
