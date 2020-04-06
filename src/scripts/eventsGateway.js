const baseUrl = 'https://5e870549781e48001676b644.mockapi.io/api/v1/calendar';

export const getEventsList = () =>
    fetch(baseUrl)
    .then(response => response.json())
    .then(events => events)
    .catch(() => {
        alert("Failed to load");
    });

export const createEvents = eventsData =>
    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(eventsData)
    })

export const updateEvent = (eventId, updateEventData) =>
    fetch(`${baseUrl}/${eventId}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'appliaction/json;charset=utf-8'
        },
        body: JSON.stringify(updateEventData)
    });

export const deleteEvent = (eventId) =>
    fetch(`${baseUrl}/${eventId}`, {
        method: 'DELETE'
    });