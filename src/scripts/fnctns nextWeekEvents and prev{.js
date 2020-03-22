export function nextWeekEvents() {
    let weekEvent = document.querySelectorAll('.calendar-section');
    for (let elem of weekEvent) {
        elem.dataset.eventNumber = Number(elem.getAttribute('data-event-number')) + 7;
    }
    return weekEvent;
};


export function prevWeekEvents() {
    let weekEvent = document.querySelectorAll('.calendar-section');
    for (let elem of weekEvent) {
        elem.dataset.eventNumber = Number(elem.getAttribute('data-event-number')) - 7;
    }
    return weekEvent;
};