/**
* IMPORTS
* Keep track of external modules being used
* */

import { initAccordion } from "./modules/accordion.js";

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

document.addEventListener('DOMContentLoaded', () => {
    initAccordion(); // No need for a selector here as initAccordion selects all headers
});

// when the page fully loads