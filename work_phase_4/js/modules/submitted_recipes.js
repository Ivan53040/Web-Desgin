import { fetchGetData } from "./getData.js"; // Reuse your existing fetch helper

document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("submitted-recipes-container");

    const data = await fetchGetData(
        "https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/genericproduct/",
        {
            student_number: "s4899606",
            uqcloud_zone_id: "f09ed2d4",
        }
    );

    if (!data || !Array.isArray(data)) {
        container.innerHTML = "<p>Failed to load recipes.</p>";
        return;
    }

    if (data.length === 0) {
        container.innerHTML = "<p>No recipes submitted yet.</p>";
        return;
    }

    data.forEach(item => {
        const card = document.createElement("div");
        card.className = "recipe-card";

        card.innerHTML = `
            <img src="${item.product_info1 || 'assets/recipes/placeholder.jpg'}" alt="${item.product_name}" />
            <h3>${item.product_name}</h3>
            <p>${item.product_description || "No description provided."}</p>
        `;

        container.appendChild(card);
    });
});
