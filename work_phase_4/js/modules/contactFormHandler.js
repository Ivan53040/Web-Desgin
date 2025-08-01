// Import helper functions for posting and fetching data
import { postFormData } from "./postFormData.js";
import { fetchGetData } from "./getData.js";

// API endpoint to which contact form data is submitted
const CONTACT_API_URL = "https://example.com/api/contact"; // 🔁 Replace with actual API endpoint

/**
 * Initializes submission handler for the contact form.
 * Sends form data to the server via POST and displays alert feedback.
 */
function setupContactFormSubmission() {
    const form = document.getElementById("contact-form");

    // Exit if form element is not found
    if (!form) return;

    // Handle form submission
    form.addEventListener("submit", async (e) => {
        e.preventDefault(); // Prevent default browser submission

        // Send form data to the API
        const result = await postFormData(form, CONTACT_API_URL);

        // Show user feedback based on result
        if (result.success) {
            alert("Your message was sent successfully!");
            form.reset(); // Clear form fields
        } else {
            alert("Error submitting the form. Please try again later.");
            console.error(result.data.error); // Log error for debugging
        }
    });
}

/**
 * Loads and displays all submitted contact entries (e.g., for admin use).
 * Appends formatted contact entries into a given container element.
 * @param {string} containerId - The ID of the container where results will be shown.
 */
async function displaySubmittedContacts(containerId) {
    const container = document.getElementById(containerId);

    // Exit if the container does not exist
    if (!container) return;

    // Fetch all contact records
    const data = await fetchGetData(CONTACT_API_URL);

    // Check if data is valid and iterable
    if (!data || !Array.isArray(data)) {
        container.textContent = "Failed to load contact data.";
        return;
    }

    // Build and insert contact entries into the container
    container.innerHTML = data
        .map(
            (item) => `
        <div class="contact-entry">
            <h3>${item["full-name"]}</h3>
            <p><strong>Email:</strong> ${item.email}</p>
            <p><strong>Issue Type:</strong> ${item["issue-type"]}</p>
            <p><strong>Message:</strong> ${item.message || "(No message)"}</p>
        </div>
    `
        )
        .join("");
}

// Export functions for use in other modules
export { setupContactFormSubmission, displaySubmittedContacts };
