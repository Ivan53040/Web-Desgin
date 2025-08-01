/**
 * Enables a desktop submenu toggle feature.
 * Clicking the toggle element opens/closes the submenu.
 * Clicking outside the menu closes it automatically.
 *
 * @param {string} parentSelector - Selector for the submenu wrapper (e.g., ".nav-item")
 * @param {string} toggleSelector - Selector for the element inside that triggers the open/close (e.g., ".submenu-toggle")
 */
function setupDesktopSubmenuToggle(parentSelector, toggleSelector) {
    // Find the submenu container
    const submenuParent = document.querySelector(parentSelector);

    // Find the toggle element inside that container
    const toggleButton = submenuParent?.querySelector(toggleSelector);

    // If either element is missing, exit early
    if (!submenuParent || !toggleButton) return;

    // Toggle 'open' class on the submenu wrapper when the toggle button is clicked
    toggleButton.addEventListener("click", () => {
        submenuParent.classList.toggle("open");
    });

    // Close the submenu when clicking anywhere outside the submenu container
    document.addEventListener("click", (e) => {
        if (!submenuParent.contains(e.target)) {
            submenuParent.classList.remove("open");
        }
    });
}

export { setupDesktopSubmenuToggle };
