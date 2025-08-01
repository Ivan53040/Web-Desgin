// Import the function to post form data to an API
import { postFormData } from "./modules/postFormData.js";

// Import the toggle function for showing/hiding the form UI
// If needed, this can be separated into its own module
import { initSubscribeToggle } from "./modules/getData.js";

// Wait for the full page DOM to load before attaching events
document.addEventListener("DOMContentLoaded", () => {
    // Get the form and feedback display element from the DOM
    const form = document.getElementById("community-form");
    const feedback = document.getElementById("form-feedback");

    // Attach a submit event listener to the form
    form.addEventListener("submit", async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        feedback.textContent = "Submitting..."; // Show temporary feedback

        // Submit form data using the imported API helper
        const { success, data } = await postFormData(
            form,
            "https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/community/",
            {
                // Required authentication/identification headers
                student_number: "s4899606", // 🔁 Replace with your student number
                uqcloud_zone_id: "f09ed2d4", // 🔁 Replace with your zone ID
            }
        );

        // Handle the response and display appropriate feedback
        if (success) {
            feedback.textContent = data.message; // Show success message
            form.reset(); // Clear the form
        } else {
            feedback.textContent = data.message || "Something went wrong."; // Show error
        }
    });

    // Initialize toggle functionality to show/hide the subscription form
    initSubscribeToggle();
});
