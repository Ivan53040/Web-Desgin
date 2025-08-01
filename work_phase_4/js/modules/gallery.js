// Import the showcase data array
import { showcases } from "./cultureshowcase_data.js";

// Select the grid container where gallery cards will be rendered
const grid = document.getElementById("gallery-grid");

/**
 * Utility to shuffle an array using Fisher-Yates method approximation.
 * This creates a randomized order each time it's called.
 * @param {Array} array - The array to shuffle
 * @returns {Array} - Shuffled copy of the original array
 */
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

/**
 * Renders 8 randomly selected showcase cards into the gallery grid.
 * Each card links to the corresponding full showcase page via index parameter.
 */
function renderGallery() {
    grid.innerHTML = ""; // Clear any existing content in the grid

    // Clone and shuffle the showcases array, then take the first 8 entries
    const shuffled = shuffle([...showcases]).slice(0, 8);

    // Create and append gallery cards for each selected showcase
    shuffled.forEach((item, index) => {
        const card = document.createElement("div");
        card.className = "gallery-card";

        // Card content: image and title
        card.innerHTML = `
      <img src="${item.images[0]}" alt="${item.title} preview" />
      <h3>${item.title}</h3>
    `;

        // On click, redirect to the detailed culture_showcase page with proper index
        const realIndex = showcases.findIndex((s) => s.title === item.title);
        card.addEventListener("click", () => {
            window.location.href = `culture_showcase.html?index=${realIndex}`;
        });

        // Add the card to the gallery grid
        grid.appendChild(card);
    });
}

// Initial gallery rendering
renderGallery();
