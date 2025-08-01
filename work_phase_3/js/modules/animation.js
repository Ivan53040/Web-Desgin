// animation.js

/**
 * Checks if an element is currently in the viewport.
 * @param {Element} el - The element to check.
 * @returns {boolean} - True if the element is in the viewport, false otherwise.
 */
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
            (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * Sets up sequential animation for elements when they enter the viewport.
 * Uses IntersectionObserver and a queue to animate elements one by one.
 */
function setupSequentialAnimation() {
    const elementsToAnimate = document.querySelectorAll(".js-animate-sequence");
    const visibleElementsQueue = [];
    let animating = false;

    /**
     * Processes the animation queue.
     * Animates elements one by one with a delay.
     */
    const processQueue = () => {
        if (visibleElementsQueue.length > 0 && !animating) {
            animating = true;
            const element = visibleElementsQueue.shift(); // Get the first element in the queue

            // Apply the visible class to trigger the transition
            element.classList.add("is-visible");

            // Wait for the transition to finish plus an additional delay
            const transitionDuration =
                parseFloat(getComputedStyle(element).transitionDuration) * 1000;
            const delay = 200; // Additional delay between elements in the sequence

            setTimeout(() => {
                animating = false;
                processQueue(); // Process the next element
            }, transitionDuration + delay);
        }
    };

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Element is in the viewport
                    if (!entry.target.classList.contains("is-visible")) {
                        visibleElementsQueue.push(entry.target); // Add to the queue
                        processQueue(); // Attempt to process the queue
                    }
                    // Optionally, stop observing once the element is queued
                    // observer.unobserve(entry.target); // Uncomment if you only want to queue once
                }
            });
        },
        { threshold: 0.1 }
    ); // Adjust the threshold as needed (0.1 means 10% visible)

    // Observe each element
    elementsToAnimate.forEach((element) => {
        observer.observe(element);
    });

    // Initial check for elements already in viewport on page load
    // This adds them to the queue immediately if they are visible
    elementsToAnimate.forEach((element) => {
        if (isElementInViewport(element)) {
            if (!element.classList.contains("is-visible")) {
                visibleElementsQueue.push(element);
            }
        }
    });

    // Start processing the queue for elements already in viewport
    processQueue();
}

// Run the setup function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", setupSequentialAnimation);
