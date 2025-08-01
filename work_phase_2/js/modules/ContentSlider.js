function setupContentSlider() {
    const track = document.querySelector(".slider-track");
    const items = document.querySelectorAll(".slider-item");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");

    if (!track || items.length === 0) return;

    let currentIndex = 0;
    const itemWidth = items[0].offsetWidth;

    function updateSlider() {
        const offset = -currentIndex * itemWidth;
        track.style.transform = `translateX(${offset}px)`;
    }

    leftArrow.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateSlider();
    });

    rightArrow.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % items.length;
        updateSlider();
    });

    // Optional: update on resize to recalc itemWidth
    window.addEventListener("resize", () => {
        updateSlider();
    });

    updateSlider();
}

export { setupContentSlider };
