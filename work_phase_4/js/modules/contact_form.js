/**
 * Initializes a simple contact form handler.
 * Displays a feedback message and resets the form upon submission.
 */
function initContactForm() {
    // Get the contact form and feedback element from the DOM
    const form = document.getElementById("contact-form");
    const feedback = document.getElementById("form-feedback");

    // Safely attach event listener only if form exists
    form?.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        // Provide simple user feedback message
        feedback.textContent = "Thank you! Your message has been submitted.";

        // Reset the form fields
        form.reset();
    });
}

export { initContactForm };
