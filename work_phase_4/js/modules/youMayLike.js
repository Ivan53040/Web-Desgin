// Image sets for each rotator column (only one column in this case)
const imageSets = [
    [
        { src: "assets/recipes/f1.jpg", alt: "Mediterranean Grilled Veggies" },
        { src: "assets/recipes/f1_2.jpg", alt: "Stuffed Peppers" },
        { src: "assets/recipes/f1_3.jpg", alt: "Grilled Eggplant" },
        { src: "assets/recipes/f2.jpg", alt: "Thai Coconut Soup" },
        { src: "assets/recipes/f2_2.jpg", alt: "Lemongrass Chicken" },
        { src: "assets/recipes/f2_3.jpg", alt: "Tom Yum" },
        { src: "assets/recipes/f3.jpg", alt: "Japanese Ramen" },
        { src: "assets/recipes/f3_2.jpg", alt: "Shoyu Ramen" },
        { src: "assets/recipes/f3_3.jpg", alt: "Tonkotsu Ramen" },
    ],
];

// Links for when images are clicked — one link used for all currently
const imageLinks = ["recipe_example.html"];

// Tracks the current image index for each rotator
const currentIndexes = [0, 0, 0]; // adjust length to match number of rotators

/**
 * Animates the image by sliding a new one up and removing the old one.
 * @param {number} index - The index of the rotator to update.
 */
function slideUpImage(index) {
    const container = document.querySelectorAll(".image-rotator")[index];
    const oldImgWrapper = container.querySelector(`#rotating-link-${index}`);
    const { src, alt } = imageSets[index][currentIndexes[index]];

    // Create a new image element and style it for animation
    const newImg = document.createElement("img");
    Object.assign(newImg.style, {
        position: "absolute",
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: "1rem",
        left: "0",
        top: "100%",
        transition: "top 0.5s ease",
    });
    newImg.src = src;
    newImg.alt = alt;
    newImg.classList.add("new-image");

    // Wrap the image in a link element
    const link = document.createElement("a");
    link.href = imageLinks[0]; // All images link to same page for now
    link.id = `rotating-link-${index}`;
    Object.assign(link.style, {
        display: "block",
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        borderRadius: "1rem",
    });
    link.appendChild(newImg);

    // Add the new image (off-screen)
    container.appendChild(link);

    // Trigger the slide animation
    setTimeout(() => {
        newImg.style.top = "0";
        oldImgWrapper.querySelector("img").style.top = "-100%";
    }, 20);

    // Remove the old image after transition
    setTimeout(() => {
        container.removeChild(oldImgWrapper);
        newImg.id = `rotating-image-${index}`;
    }, 550);
}

/**
 * Advances the image rotator at the given index.
 * @param {number} index - Index of the rotator to update.
 */
function rotateImage(index) {
    currentIndexes[index] =
        (currentIndexes[index] + 1) % imageSets[index].length;
    slideUpImage(index);
}

/**
 * Initializes all image rotators on the page:
 * - Loads the first image
 * - Sets up up/down arrow button behavior
 * - Enables automatic rotation
 */
function initYouMayLikeRotators() {
    document.querySelectorAll(".image-rotator").forEach((rotator, i) => {
        const up = rotator.querySelector(".arrow.up");
        const down = rotator.querySelector(".arrow.down");
        const link = rotator.querySelector(`#rotating-link-${i}`);
        const img = rotator.querySelector(`#rotating-image-${i}`);

        /**
         * Updates image and link content for manual arrow navigation.
         */
        function updateImage() {
            const index = currentIndexes[i];
            const { src, alt } = imageSets[i][index];
            img.src = src;
            img.alt = alt;
            if (link) link.href = imageLinks[index];
        }

        // Initial image render
        updateImage();

        // Click handler for up arrow
        up.addEventListener("click", () => {
            currentIndexes[i] =
                (currentIndexes[i] - 1 + imageSets[i].length) %
                imageSets[i].length;
            updateImage();
        });

        // Click handler for down arrow
        down.addEventListener("click", () => {
            currentIndexes[i] = (currentIndexes[i] + 1) % imageSets[i].length;
            updateImage();
        });

        // Automatic image rotation every 5 seconds
        setInterval(() => rotateImage(i), 5000);
    });
}

// Export the initializer to be used in recipe hub or landing page
export { initYouMayLikeRotators };
