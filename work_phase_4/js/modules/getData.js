/**
 * Performs a GET request to the specified URL and returns the parsed JSON data.
 * Handles server errors and logs any exceptions that occur during the fetch.
 *
 * @param {string} url - The API endpoint to fetch data from.
 * @param {Object} headers - Optional headers for authentication or content-type.
 * @returns {Promise<Object|null>} - Parsed JSON response or null if an error occurs.
 */
const fetchGetData = (url, headers = {}) => {
    return fetch(url, {
        method: "GET",
        headers: headers, // Custom headers (e.g., authentication tokens)
    })
        .then((response) => {
            // If response status is not OK (200–299), throw an error
            if (!response.ok) {
                throw new Error("Server returned an error.");
            }

            // Parse and return the JSON body of the response
            return response.json();
        })
        .catch((error) => {
            // Log fetch or parsing error, and return null as fallback
            console.error("Error fetching data:", error);
            return null;
        });
};

export { fetchGetData };
