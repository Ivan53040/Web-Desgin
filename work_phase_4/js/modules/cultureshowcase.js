// Data: An array of cultural showcase entries, each with a title, image set, description, and optional link
const showcases = [
    {
        title: "Farmer Stories",
        images: [
            "assets/images/cultureshowcase/s1_1.png",
            "assets/images/cultureshowcase/s1_2.png",
            "assets/images/cultureshowcase/s1_3.png",
        ],
        description:
            "Know more about Kevin,<br />a local farmer in Queensland who has spent over five decades nurturing crops, battling unpredictable climates, and mentoring the next generation of growers.<br />His journey reflects the soul of rural Australia — rooted in hard work, quiet resilience, and deep respect for the land.<br />This showcase honors the invisible labor that sustains our tables and reminds us of the enduring legacy farmers leave behind in the furrows of their fields.",
        link: "#",
    },
    {
        images: [
            "assets/images/cultureshowcase/s2_1.png",
            "assets/images/cultureshowcase/s2_2.png",
            "assets/images/cultureshowcase/s2_3.png",
        ],
        title: "Country Food",
        description:
            "Experience the heart of countryside cooking — where recipes simmer slowly, and meals are shared generously.<br />From cast-iron stews bubbling with root vegetables to freshly churned butter and crusty farmhouse bread, every dish is infused with time, care, and tradition.<br />This showcase is a celebration of simplicity and togetherness — where food isn't just eaten, but cherished, passed across generations like a family story told in flavors.",
        link: "#",
    },
    {
        images: [
            "assets/images/cultureshowcase/s3_1.png",
            "assets/images/cultureshowcase/s3_2.png",
            "assets/images/cultureshowcase/s3_3.png",
        ],
        title: "Heritage Recipes",
        description:
            "Preserve the cultural soul of cooking with recipes carried through generations.<br />These aren't just dishes; they’re emotional blueprints — whispered from grandparents, recorded in fading notebooks, and cooked with instinct rather than measurements.<br />Heritage recipes bring to life the tastes of childhood, migration, survival, and celebration — serving as edible archives that hold family identity, history, and love.",
        link: "#",
    },
    {
        images: [
            "assets/images/cultureshowcase/s4_1.jpeg",
            "assets/images/cultureshowcase/s4_2.jpeg",
            "assets/images/cultureshowcase/s4_3.jpeg",
        ],
        title: "Local Growers",
        description:
            "Meet the stewards of the land — the local growers, backyard innovators, and regenerative farmers who shape our food landscapes.<br />Through hands stained with soil and hearts driven by purpose, they bring vibrant produce to life and to market.<br />This showcase invites you into their world: one of seed swapping, seasonal harvests, and sustainable practices that reconnect communities with where their food truly comes from.",
        link: "#",
    },
    {
        images: [
            "assets/images/cultureshowcase/s5_1.jpg",
            "assets/images/cultureshowcase/s5_2.jpg",
            "assets/images/cultureshowcase/s5_3.jpg",
        ],
        title: "Festive Dishes",
        description:
            "Step into the joyful kitchens of celebration — where food becomes a bridge across culture, religion, and time.<br />From intricate Diwali sweets and Chinese dumplings to Aussie Christmas roasts and Ramadan feasts, festive dishes express love, honor tradition, and mark life’s most meaningful moments.<br />This showcase is a sensory festival — filled with color, aroma, memory, and the shared happiness of cooking together.",
        link: "#",
    },
    {
        images: [
            "assets/images/cultureshowcase/s6_1.jpg",
            "assets/images/cultureshowcase/s6_2.jpg",
            "assets/images/cultureshowcase/s6_3.jpg",
        ],
        title: "Global Flavours",
        description:
            "Embark on a flavor-rich journey across continents without leaving your plate.<br />This showcase explores dishes shaped by migration, colonization, trade, and transformation — from Moroccan tagines to Vietnamese pho, each recipe offers a glimpse into distant homelands and bustling street markets.<br />These global flavors reflect the diversity of our world and invite us to celebrate difference while savoring common ground.",
        link: "#",
    },
    {
        images: [
            "assets/images/cultureshowcase/s7_1.jpg",
            "assets/images/cultureshowcase/s7_2.jpg",
            "assets/images/cultureshowcase/s7_3.jpg",
        ],
        title: "Modern Twists",
        description:
            "Watch classic dishes evolve with creative flair, dietary awareness, and cultural remixing.<br />In this showcase, tradition gets a makeover — shepherd’s pie becomes vegan and gluten-free, banana bread turns blue from butterfly pea flower, and childhood snacks find new life on Instagram.<br />Modern twists celebrate experimentation, reflect generational shifts, and remind us that food, like culture, is ever-evolving.",
        link: "#",
    },
    {
        images: [
            "assets/images/cultureshowcase/s8_1.jpg",
            "assets/images/cultureshowcase/s8_2.jpg",
            "assets/images/cultureshowcase/s8_3.jpg",
        ],
        title: "Cooking Techniques",
        description:
            "Learn the building blocks of great cooking — techniques that transform ingredients and elevate everyday meals into art.<br />From the crackle of a seared crust to the slow unraveling of braised tenderness, each method is a dance of time, heat, and intention.<br />This showcase is for the curious cook who finds joy in mastering process, honoring craft, and understanding the ‘why’ behind the ‘how.’",
        link: "#",
    },
    {
        images: [
            "assets/images/cultureshowcase/s9_1.jpg",
            "assets/images/cultureshowcase/s9_2.jpg",
            "assets/images/cultureshowcase/s9_3.jpg",
        ],
        title: "Street Food Treasures",
        description:
            "Step into the soul of cities, towns, and villages through their street food — fast, flavorful, and full of character.<br />From skewers sizzling over coals to crispy parcels of comfort passed through food carts, this showcase spotlights everyday culinary innovation.<br />Street food represents freedom, hustle, and heritage — a democratic dining experience that’s affordable, accessible, and unforgettably delicious.",
        link: "#",
    },
    {
        images: [
            "assets/images/cultureshowcase/s10_1.jpg",
            "assets/images/cultureshowcase/s10_2.jpg",
            "assets/images/cultureshowcase/s10_3.jpg",
        ],
        title: "Family Heirlooms",
        description:
            "Unlock the stories written in sauce-stained recipe cards and passed-down cast iron pans.<br />Family heirloom recipes carry more than ingredients — they hold laughter from old kitchens, tears shed over goodbyes, and the magic of meals made with love.<br />This showcase honors culinary legacy: dishes kept alive through repetition, celebration, and the unspoken understanding that food is memory.",
        link: "#",
    },
    {
        images: [
            "assets/images/cultureshowcase/s11_1.jpg",
            "assets/images/cultureshowcase/s11_2.jpg",
            "assets/images/cultureshowcase/s11_3.jpg",
        ],
        title: "Plant-Based Living",
        description:
            "Celebrate nourishment through nature with vibrant, plant-powered meals that delight both palate and planet.<br />From hearty lentil stews and rainbow bowls to dairy-free desserts, plant-based cooking is creative, compassionate, and deeply satisfying.<br />This showcase reflects a movement rooted in ethics, health, and sustainability — where abundance is redefined through vegetables, legumes, and intention.",
        link: "#",
    },
    {
        images: [
            "assets/images/cultureshowcase/s12_1.jpg",
            "assets/images/cultureshowcase/s12_2.jpg",
            "assets/images/cultureshowcase/s12_3.jpg",
        ],
        title: "Seasons of Food",
        description:
            "Let nature’s rhythm guide your kitchen as you explore the bounty of the seasons.<br />This showcase highlights ingredients at their peak — spring’s fresh greens, summer’s juicy fruits, autumn’s cozy roots, and winter’s comforting grains.<br />Seasonal eating is both practical and poetic — a way to align your plate with the environment, reduce waste, and celebrate freshness as a philosophy.",
        link: "#",
    },
    {
        images: [
            "assets/images/cultureshowcase/s13_1.jpg",
            "assets/images/cultureshowcase/s13_2.jpg",
            "assets/images/cultureshowcase/s13_3.jpeg",
        ],
        title: "Fusion Experiments",
        description:
            "Where culinary borders blur, new stories begin.<br />Fusion cooking is playful, provocative, and deeply personal — a mashup of heritage, migration, taste, and invention.<br />This showcase embraces flavor collisions that work: sushi burritos, kimchi grilled cheese, masala lasagna — because in the kitchen, creativity is the spice that keeps traditions alive and surprising.",
        link: "#",
    },
    {
        images: [
            "assets/images/cultureshowcase/s14_1.jpg",
            "assets/images/cultureshowcase/s14_2.jpg",
            "assets/images/cultureshowcase/s14_3.jpg",
        ],
        title: "Recipes from the Diaspora",
        description:
            "Cook through the complexity of home, identity, and belonging with dishes shaped by diaspora.<br />These recipes carry layered narratives: of migration, adaptation, joy, and longing.<br />This showcase honors food as both anchor and evolution — rooted in ancestral memory yet reimagined in new lands, new kitchens, and new communities where flavor becomes resilience.",
        link: "#",
    },
];

// Tracks the current showcase index
let currentIndex = 0;

/**
 * Helper function to read 'index' from the URL query string.
 * Defaults to 0 if not provided or invalid.
 */
function getIndexFromURL() {
    const params = new URLSearchParams(window.location.search);
    const index = parseInt(params.get("index"));
    return !isNaN(index) ? index : 0;
}

currentIndex = getIndexFromURL(); // Initialize index from URL

// DOM element references
const imgMain = document.querySelector(".img-main");
const imgLeft = document.querySelector(".img-left");
const imgRight = document.querySelector(".img-right");
const titleElem = document.querySelector(".cultureshowcase-desc h2");
const descElem = document.getElementById("cultureshowcase-desc");
const learnMoreBtn = document.getElementById("learn-more-button");
const pageButtons = document.getElementById("cultureshowcase-pages");
const nextArrow = document.getElementById("cultureshowcase-next");
const prevArrow = document.getElementById("cultureshowcase-prev");
const grid = document.querySelector(".cultureshowcase-grid");

/**
 * Updates all visual elements of the showcase section with new content
 * @param {number} index - the index of the showcase to display
 */
function updateShowcase(index) {
    // Add fade-out effect
    grid.classList.add("cultureshowcase-fade-out");

    setTimeout(() => {
        const data = showcases[index];

        // Update image elements
        imgMain.src = data.images[0];
        imgLeft.src = data.images[1];
        imgRight.src = data.images[2];

        // Update title and description
        titleElem.textContent = data.title;
        descElem.innerHTML = data.description;

        // Show or hide the 'Learn More' button
        if (data.link) {
            learnMoreBtn.href = data.link;
            learnMoreBtn.style.display = "inline-block";
        } else {
            learnMoreBtn.style.display = "none";
        }

        // Update active page button
        [...pageButtons.children].forEach((btn, i) =>
            btn.classList.toggle("active", i === index)
        );

        // Remove fade-out effect
        grid.classList.remove("cultureshowcase-fade-out");
    }, 300);

    // Scroll to top smoothly after update
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });

    // Arrow visibility logic
    prevArrow.classList.toggle("hidden", index === 0);
    nextArrow.classList.toggle("hidden", index === showcases.length - 1);

    // Refresh pagination buttons
    updatePaginationButtons();
}

/**
 * Sets up the initial pagination buttons
 */
function setupPagination() {
    updatePaginationButtons();
}

/**
 * Dynamically updates pagination buttons to show up to 10 at a time,
 * shifting as the user navigates.
 */
function updatePaginationButtons() {
    pageButtons.innerHTML = "";

    const maxVisible = 10;
    const start = Math.max(
        0,
        Math.min(currentIndex - 4, showcases.length - maxVisible)
    );
    const end = Math.min(start + maxVisible, showcases.length);

    for (let i = start; i < end; i++) {
        const btn = document.createElement("button");
        btn.textContent = i + 1;
        btn.classList.toggle("active", i === currentIndex);
        btn.addEventListener("click", () => {
            currentIndex = i;
            updateShowcase(currentIndex);
        });
        pageButtons.appendChild(btn);
    }

    // Add accessibility labels for navigation arrows
    prevArrow.setAttribute("aria-label", "Previous showcase");
    nextArrow.setAttribute("aria-label", "Next showcase");
}

// Arrow click navigation
nextArrow.addEventListener("click", () => {
    if (currentIndex < showcases.length - 1) {
        currentIndex++;
        updateShowcase(currentIndex);
    }
});

prevArrow.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateShowcase(currentIndex);
    }
});

// Keyboard arrow navigation
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight" && currentIndex < showcases.length - 1) {
        currentIndex++;
        updateShowcase(currentIndex);
    } else if (e.key === "ArrowLeft" && currentIndex > 0) {
        currentIndex--;
        updateShowcase(currentIndex);
    }
});

// Touch swipe navigation (mobile support)
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleGesture();
});

/**
 * Determines direction of swipe and updates the showcase accordingly
 */
function handleGesture() {
    if (touchEndX < touchStartX - 50 && currentIndex < showcases.length - 1) {
        currentIndex++;
        updateShowcase(currentIndex);
    } else if (touchEndX > touchStartX + 50 && currentIndex > 0) {
        currentIndex--;
        updateShowcase(currentIndex);
    }
}

// === Initialize the showcase viewer ===
setupPagination();
updateShowcase(currentIndex);
