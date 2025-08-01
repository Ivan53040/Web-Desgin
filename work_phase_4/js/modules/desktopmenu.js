/**
 * Initializes a toggleable submenu for desktop navigation.
 * Allows the submenu to open on toggle click and closes it if a click occurs outside.
 *
 * @param {string} parentSelector - CSS selector for the submenu wrapper (the container with the 'open' class toggle)
 * @param {string} toggleSelector - CSS selector for the button inside the parent that triggers the toggle
 */
function setupDesktopSubmenuToggle(parentSelector, toggleSelector) {
    // Find the parent element that wraps the submenu
    const submenuParent = document.querySelector(parentSelector);

    // Within the parent, find the specific element (e.g., button or link) that toggles the submenu
    const toggleButton = submenuParent?.querySelector(toggleSelector);

    // If either element isn't found, exit early
    if (!submenuParent || !toggleButton) return;

    // Add click listener to toggle submenu visibility
    toggleButton.addEventListener("click", () => {
        submenuParent.classList.toggle("open"); // Adds or removes 'open' class
    });

    // Close submenu if user clicks anywhere outside the submenu container
    document.addEventListener("click", (e) => {
        if (!submenuParent.contains(e.target)) {
            submenuParent.classList.remove("open");
        }
    });
}

export { setupDesktopSubmenuToggle };
