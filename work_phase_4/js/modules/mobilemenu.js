/**
 * Initializes the mobile menu toggle functionality.
 * Toggles the visibility of the expandable mobile menu when the hamburger is clicked.
 *
 * @param {string} toggleId - The ID of the hamburger button.
 * @param {string} menuClass - The class name of the expandable menu container.
 */
function initMobileMenu(
    toggleId = "menu-toggle",
    menuClass = "mobile-expandable-menu"
) {
    const toggleBtn = document.getElementById(toggleId);
    const menu = document.querySelector(`.${menuClass}`);

    // If either element is missing, do nothing
    if (!toggleBtn || !menu) return;

    // Toggle the 'active' class to show/hide the menu
    toggleBtn.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
}

/**
 * Enables toggling of submenus inside the mobile menu.
 * Each submenu toggle must have a `data-target` attribute matching an ID suffix.
 */
function setupMobileSubmenuToggle() {
    // Select all submenu toggle buttons (e.g., dropdown icons)
    const toggles = document.querySelectorAll(".submenu-toggle");

    toggles.forEach((toggle) => {
        // Read the data-target attribute (e.g., "community")
        const targetId = toggle.getAttribute("data-target");

        // Match a submenu by ID pattern: submenu-community
        const submenu = document.getElementById(`submenu-${targetId}`);
        if (!submenu) return;

        // Toggle submenu visibility on click
        toggle.addEventListener("click", () => {
            submenu.classList.toggle("active");
        });

        // Optional: close submenu if clicking outside of it or the toggle
        document.addEventListener("click", (e) => {
            if (!toggle.contains(e.target) && !submenu.contains(e.target)) {
                submenu.classList.remove("active");
            }
        });
    });
}

// Export both functions for use in your mobile navigation setup
export { initMobileMenu, setupMobileSubmenuToggle };
