/**
 * Initializes a FullCalendar calendar with category-based filtering.
 * Renders the calendar and listens for changes in the filter dropdown to dynamically update events shown.
 */
export const initCalendar = () => {
    // Get the DOM elements: calendar container and category filter dropdown
    const calendarEl = document.getElementById("calendar");
    const filterSelect = document.getElementById("calendar-category");

    // Define all available events with associated categories
    const allEvents = [
        {
            title: "Local Food Festival",
            start: "2025-06-05",
            extendedProps: { category: "festival" }, // Custom property for filtering
        },
        {
            title: "Healthy Cooking Workshop",
            start: "2025-06-10",
            extendedProps: { category: "workshop" },
        },
        {
            title: "Nutrition Webinar",
            start: "2025-06-15",
            extendedProps: { category: "webinar" },
        },
        {
            title: "Community Meetup",
            start: "2025-06-20",
            extendedProps: { category: "workshop" },
        },
    ];

    // Create a new FullCalendar instance
    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: "dayGridMonth", // Default calendar layout
        events: allEvents, // Set all events initially
        height: "auto", // Automatically adjust height
    });

    // Render the calendar into the DOM
    calendar.render();

    // Listen for filter dropdown changes
    filterSelect.addEventListener("change", () => {
        const selected = filterSelect.value;

        // Clear current events from the calendar
        calendar.removeAllEvents();

        // Add either all events or filtered events by selected category
        calendar.addEventSource(
            selected === "all"
                ? allEvents
                : allEvents.filter((e) => e.extendedProps.category === selected)
        );
    });
};
