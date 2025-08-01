/**
 * Submits form data using a POST request to a specified endpoint.
 * Accepts custom headers and returns a success flag along with response data.
 *
 * @param {HTMLFormElement} formEl - The form element containing user input.
 * @param {string} endpointUrl - The API endpoint to which the data will be posted.
 * @param {Object} customHeaders - Optional headers (e.g., auth, zone ID).
 * @returns {Promise<{ success: boolean, data: any }>} - Result of the POST request.
 */
const postFormData = async (formEl, endpointUrl, customHeaders = {}) => {
    // Extract form data into FormData object (supports multipart/form-data)
    const formData = new FormData(formEl);

    // Optional: log form values for debugging (not for production)
    console.log("Form Data:", Object.fromEntries(formData.entries()));

    try {
        // Send POST request to the API
        const response = await fetch(endpointUrl, {
            method: "POST",
            headers: customHeaders, // e.g., student_number, uqcloud_zone_id
            body: formData,
        });

        // Parse JSON response from the server
        const data = await response.json();

        return {
            // You can customize this condition if your API sends status fields
            // success: response.ok && data.status === 'success',
            success: true, // Assume success if no error was thrown
            data,
        };
    } catch (error) {
        // Catch and log any network or fetch-related errors
        console.log("Error posting form data:", error);
        return {
            success: false,
            data: { message: "Network or server error.", error },
        };
    }
};

export { postFormData };
