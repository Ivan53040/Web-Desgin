/**
* IMPORTS
* Keep track of external modules being used
* */

import { postFormData } from "./modules/postFormData.js";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("community-form");
    const feedback = document.getElementById("form-feedback");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        feedback.textContent = "Submitting...";
        const { success, data } = await postFormData(
            form,
            "https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/community/",
            {
                student_number: "s4899606",
                uqcloud_zone_id: "f09ed2d4",
            }
        );

        if (success) {
            feedback.textContent = data.message;
            form.reset();
        } else {
            feedback.textContent = data.message || "Something went wrong.";
        }
    });
});
/**
* CONSTANTS
* Define values that don't change e.g. page titles, URLs, etc.
* */


/**
* VARIABLES
* Define values that will change e.g. user inputs, counters, etc.
* */


/**
* FUNCTIONS
* Group code into functions to make it reusable
* */

/**
* EVENT LISTENERS
* The code that runs when a user interacts with the page
* */
// when the page fully loads