import { renderEventItem } from './renderEvents.js';
import { deleteEvent, getEventsList } from './eventsGateway.js';
import { setItem } from './storage.js';

export function deleteBtn() {
    const eventsElem = document.querySelectorAll('.event');
    let click = false;

    for (let i = 0; i < eventsElem.length; i++) {
        eventsElem[i].addEventListener('click', function() {
            if (!click) {

                let eventElem = eventsElem[i].id;
                const visibleBtn = document.getElementById(`delete${eventElem}`);

                click = true;
                visibleBtn.style.visibility = 'visible';
                visibleBtn.addEventListener('click', function() {

                    for (let j = 0; j < eventsElem.length; j++) {

                        if (!deleteBtn)
                            return;

                        return deleteEvent(eventElem)
                            .then(() => getEventsList())
                            .then(newEventsList => {
                                setItem('eventsList', newEventsList);
                                renderEventItem();
                                deleteBtn();
                            });
                    }
                });

            } else if (click) {
                click = false;
                let eventElem = eventsElem[i].id;
                document.getElementById(`delete${eventElem}`).style.visibility = 'hidden';

            }
        });
    }
};