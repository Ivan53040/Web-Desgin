const postFormData = async (formEl, endpointUrl, customHeaders = {}) => {
    const formData = new FormData(formEl);

    try {
        const response = await fetch(endpointUrl, {
            method: 'POST',
            headers: customHeaders,
            body: formData
        });

        const data = await response.json();

        return {
            success: response.ok && data.status === 'success',
            data,
        };
    } catch (error) {
        return {
            success: false,
            data: { message: 'Network or server error.', error },
        };
    }
};

export { postFormData };