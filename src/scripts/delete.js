import { renderEventItem } from './renderEvents.js';
import { deleteEvent, getEventsList } from './eventsGateway.js';
import { setItem } from './storage.js';

export function deleteBtn() {
    const eventsElem = document.querySelectorAll('.event');
    let click = false;

    eventsElem.forEach(elem => {

        const deleteEventElem = () =>
            deleteEvent(elem.id)
            .then(() => getEventsList())
            .then(newEventsList => {
                setItem('eventsList', newEventsList);
                renderEventItem();
            });


        function activateBtn() {

            if (!click) {
                const visibleBtn = document.getElementById(`delete${elem.id}`);

                click = true;
                visibleBtn.style.visibility = 'visible';
                visibleBtn.addEventListener('click', deleteEventElem);

            } else if (click) {
                click = false;
                document.getElementById(`delete${elem.id}`).style.visibility = 'hidden';
            }
        };

        elem.addEventListener('click', activateBtn);
    });
};