// Globals for tracking state
let currentIndex = 0;
let cardWidth = 0;
let totalCards = 0;
let autoPlayTimer = null;

const cardsPerView = 3; // Number of cards shown at a time
const AUTO_PLAY_INTERVAL = 5000; // 5 seconds between automatic slides

/**
 * Clones the first and last few cards for seamless infinite looping.
 * @param {HTMLElement} track - The container holding all cards.
 * @param {HTMLElement[]} cards - Array of original card elements.
 */
function cloneEdges(track, cards) {
    const firstClones = cards
        .slice(0, cardsPerView)
        .map((card) => card.cloneNode(true));
    const lastClones = cards
        .slice(-cardsPerView)
        .map((card) => card.cloneNode(true));

    // Append clones of the first cards to the end
    firstClones.forEach((clone) => {
        clone.classList.add("clone");
        track.appendChild(clone);
    });

    // Prepend clones of the last cards to the beginning
    lastClones.reverse().forEach((clone) => {
        clone.classList.add("clone");
        track.insertBefore(clone, track.firstChild);
    });
}

/**
 * Instantly moves the track to the current position (no animation).
 */
function setTrackPosition(track) {
    track.style.transition = "none";
    track.style.transform = `translateX(-${
        (currentIndex + cardsPerView) * cardWidth
    }px)`;
}

/**
 * Moves the track with animation to reflect currentIndex.
 */
function updatePosition(track) {
    track.style.transition = "transform 0.4s ease-in-out";
    track.style.transform = `translateX(-${
        (currentIndex + cardsPerView) * cardWidth
    }px)`;
}

/**
 * Advances the slider one step to the right.
 * Handles reset logic when looping past the last card.
 */
function moveRight(track) {
    currentIndex++;
    updatePosition(track);

    if (currentIndex >= totalCards) {
        setTimeout(() => {
            currentIndex = 0;
            setTrackPosition(track);
        }, 400); // Wait for transition to finish
    }
}

/**
 * Moves the slider one step to the left.
 * Handles reset logic when looping before the first card.
 */
function moveLeft(track) {
    currentIndex--;
    updatePosition(track);

    if (currentIndex < 0) {
        setTimeout(() => {
            currentIndex = totalCards - 1;
            setTrackPosition(track);
        }, 400);
    }
}

/**
 * Enables swipe gesture handling on touch devices.
 */
function initSwipe(track) {
    let startX = 0;
    let endX = 0;

    track.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
    });

    track.addEventListener("touchmove", (e) => {
        endX = e.touches[0].clientX;
    });

    track.addEventListener("touchend", () => {
        const diff = startX - endX;
        if (Math.abs(diff) > 50) {
            diff > 0 ? moveRight(track) : moveLeft(track);
        }
    });
}

/**
 * Starts auto-play, advancing the slider every few seconds.
 */
function initAutoPlay(track) {
    autoPlayTimer = setInterval(() => {
        moveRight(track);
    }, AUTO_PLAY_INTERVAL);
}

/**
 * Initializes the entire showcase slider, including:
 * - cloning edges for infinite loop
 * - setting initial position
 * - enabling click and swipe navigation
 * - auto-play and responsiveness
 *
 * @param {string} sectionSelector - CSS selector for the slider section container
 */
function initShowcaseSlider(sectionSelector = ".showcase-section") {
    const section = document.querySelector(sectionSelector);
    if (!section) return;

    const track = section.querySelector(".showcase-track");
    const leftBtn = section.querySelector(".arrow.left");
    const rightBtn = section.querySelector(".arrow.right");
    const originalCards = Array.from(track.children);

    // Setup infinite looping structure
    cloneEdges(track, originalCards);

    // Store original card count
    totalCards = originalCards.length;

    // Measure card width and set initial position
    const allCards = section.querySelectorAll(".showcase-card");
    cardWidth = allCards[0].offsetWidth;
    setTrackPosition(track);

    // Setup click navigation
    rightBtn?.addEventListener("click", () => moveRight(track));
    leftBtn?.addEventListener("click", () => moveLeft(track));

    // Update layout on window resize
    window.addEventListener("resize", () => {
        cardWidth = section.querySelector(".showcase-card").offsetWidth;
        setTrackPosition(track);
    });

    // Enable swipe gestures
    initSwipe(track);

    // Start automatic sliding
    initAutoPlay(track);
}

// Export the main initialization function for use in your page
export { initShowcaseSlider };
