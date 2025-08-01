/**
 * Initializes the toggle functionality for the newsletter subscription form.
 * When the button is clicked, it shows or hides the form and updates accessibility attributes.
 */
function initSubscribeToggle() {
    // Get the toggle button and the subscription form from the DOM
    const toggleBtn = document.getElementById("subscribe-toggle");
    const form = document.getElementById("community-form");

    // Exit early if either element is missing
    if (!toggleBtn || !form) return;

    // Add a click event listener to the toggle button
    toggleBtn.addEventListener("click", () => {
        // Toggle the 'hidden' class to show/hide the form
        form.classList.toggle("hidden");

        // Update the 'aria-hidden' attribute for accessibility (screen readers)
        const isHidden = form.classList.contains("hidden");
        form.setAttribute("aria-hidden", isHidden);
    });
}

export { initSubscribeToggle };
