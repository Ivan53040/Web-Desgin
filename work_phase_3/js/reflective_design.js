/**
* IMPORTS
* Keep track of external modules being used
* */

import { initAccordion } from "./modules/accordion.js";


import { fetchGetData } from './modules/getData.js';
                    
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('community-list');

    fetchGetData('https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/community/', {
        'student_number': 's4899606',
        'uqcloud_zone_id': 'f09ed2d4'
    }).then(data => {
        if (!data) {
        container.innerHTML = '<p class="text-danger">Unable to load community members.</p>';
        return;
        }

        data.forEach(member => {
        const card = document.createElement('div');
        card.className = 'card mb-3';
        card.innerHTML = `
            <div class="card-body">
            <h5 class="card-title">${member.name}</h5>
            <p class="card-text">${member.message || 'No message provided.'}</p>
            </div>
        `;
        container.appendChild(card);
        });
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

// Run it after the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initAccordion();
});


// when the page fully loads