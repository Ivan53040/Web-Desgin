/**
 * Initializes accordion functionality on the page.
 * Adds click event listeners to all elements with the class `.accordion-header`
 * so they can toggle open/closed their associated `.accordion-content`.
 */
function initAccordion() {
    // Select all accordion headers, including those inside nested structures
    const headers = document.querySelectorAll(".accordion-header");

    // Attach click event listeners to each accordion header
    headers.forEach((header) => {
        header.addEventListener("click", () => {
            // The direct .accordion-item ancestor of the header
            const item = header.parentElement;

            // The corresponding content element to show/hide
            const content = item.querySelector(".accordion-content");

            // Toggle 'open' class on the item to expand/collapse
            const isOpen = item.classList.toggle("open");

            // Add or remove 'active' styling on the header based on state
            header.classList.toggle("active", isOpen);

            // Optional: Uncomment the following block to close other accordion items
            // at the same hierarchical level when one is opened

            /*
            const parentAccordion = item.closest('.accordion');
            if (parentAccordion) {
                const siblingItems = parentAccordion.querySelectorAll('.accordion-item');
                siblingItems.forEach(siblingItem => {
                    if (siblingItem !== item && siblingItem.classList.contains('open')) {
                        siblingItem.classList.remove('open');
                        siblingItem.querySelector('.accordion-header').classList.remove('active');
                    }
                });
            }
            */
        });
    });
}

export { initAccordion };
