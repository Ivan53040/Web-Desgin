// Data source: 7 showcase topics, each with 3 images and a description
const showcaseData = [
    {
        title: "Farmer Stories",
        text: "Know more about Kevin, <br>A local farmer in Queensland who worked for more than 50 years.",
        images: [
            "assets/images/showcase/s1_1.png",
            "assets/images/showcase/s1_2.png",
            "assets/images/showcase/s1_3.png",
        ],
    },
    {
        title: "Country Food",
        text: "Explore traditional country-style meals that connect families and cultures.",
        images: [
            "assets/images/showcase/s2_1.png",
            "assets/images/showcase/s2_2.png",
            "assets/images/showcase/s2_3.png",
        ],
    },
    {
        title: "Heritage Recipes",
        text: "Passed down for generations, these recipes are rooted in local culture.",
        images: [
            "assets/images/showcase/s3_1.png",
            "assets/images/showcase/s3_2.png",
            "assets/images/showcase/s3_3.png",
        ],
    },
    {
        title: "Local Growers",
        text: "Celebrate the growers who bring fresh ingredients to your table.",
        images: [
            "assets/images/showcase/s4_1.png",
            "assets/images/showcase/s4_2.png",
            "assets/images/showcase/s4_3.png",
        ],
    },
    {
        title: "Festive Dishes",
        text: "Colorful, flavorful meals made for celebrations across communities.",
        images: [
            "assets/images/showcase/s5_1.png",
            "assets/images/showcase/s5_2.png",
            "assets/images/showcase/s5_3.png",
        ],
    },
    {
        title: "Global Flavours",
        text: "A fusion of cultures and spices brought to your kitchen.",
        images: [
            "assets/images/showcase/s6_1.png",
            "assets/images/showcase/s6_2.png",
            "assets/images/showcase/s6_3.png",
        ],
    },
    {
        title: "Modern Twists",
        text: "Tradition meets creativity in these contemporary food stories.",
        images: [
            "assets/images/showcase/s7_1.png",
            "assets/images/showcase/s7_2.png",
            "assets/images/showcase/s7_3.png",
        ],
    },
];

// Index to track current showcase
let currentIndex = 0;

/**
 * Updates the DOM to reflect the current showcase based on index.
 * Sets image sources, title, description, and active button highlight.
 */
function renderShowcase(index) {
    const data = showcaseData[index];

    // Update image sources
    document.querySelector(".main-img").src = data.images[0];
    document.querySelector(".wide-img").src = data.images[1];
    document.querySelector(".tall-img").src = data.images[2];

    // Update text content
    document.querySelector(".showcase-description h2").textContent = data.title;
    document.querySelector(".showcase-description p").innerHTML = data.text;

    // Highlight active pagination button
    document.querySelectorAll(".page-btn").forEach((btn, i) => {
        btn.classList.toggle("active", i === index);
    });
}

/**
 * Initializes the showcase switcher.
 * Binds click events to page buttons and the "next" arrow.
 */
function initShowcaseSwitcher() {
    // Initial render
    renderShowcase(currentIndex);

    // Click handler for numbered page buttons
    document.querySelectorAll(".page-btn").forEach((btn, i) => {
        if (!btn.classList.contains("arrow-btn")) {
            btn.addEventListener("click", () => {
                currentIndex = i;
                renderShowcase(currentIndex);
            });
        }
    });

    // Click handler for the "next" arrow button
    document.querySelector(".arrow-btn").addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % showcaseData.length; // Loop back to 0
        renderShowcase(currentIndex);
    });
}

// Export function to use in main JS
export { initShowcaseSwitcher };
