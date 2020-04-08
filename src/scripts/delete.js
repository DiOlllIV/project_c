import { renderEventItem } from './renderEvents.js';
import { deleteEvent, getEventsList } from './eventsGateway.js';
import { setItem } from './storage.js';

export function deleteBtn() {
    const eventsElem = document.querySelectorAll('.event');
    let click = false;

    /* for (let i = 0; i < eventsElem.length; i++) {
        eventsElem[i].addEventListener('click', function() {

            if (!click) {

                let eventElem = eventsElem[i].id;
                const visibleBtn = document.getElementById(`delete${eventElem}`);


                click = true;
                visibleBtn.style.visibility = 'visible';
                visibleBtn.addEventListener('click', deleteEventElem);

            } else if (click) {
                click = false;
                let eventElem = eventsElem[i].id;
                document.getElementById(`delete${eventElem}`).style.visibility = 'hidden';
            }
        });

        function deleteEventElem() {
            if (!deleteBtn)
                return;

            let eventElem = eventsElem[i].id;
            return deleteEvent(eventElem)
                .then(() => getEventsList())
                .then(newEventsList => {
                    setItem('eventsList', newEventsList);
                    renderEventItem();
                });
        };
    } */
    /************************************************************************************************/

    eventsElem.forEach(elem => {

        function deleteEventElem() {

            return deleteEvent(elem.id)
                .then(() => getEventsList())
                .then(newEventsList => {
                    setItem('eventsList', newEventsList);
                    renderEventItem();
                });
        };

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