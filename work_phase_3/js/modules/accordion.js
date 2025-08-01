function initAccordion() {
    // Select all accordion headers, including those in nested accordions
    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach((header) => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const content = item.querySelector('.accordion-content');
            const isOpen = item.classList.toggle('open');
            header.classList.toggle('active', isOpen);

            // Optional: Close other accordions at the same level
            // This part is commented out by default to allow multiple open items
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

