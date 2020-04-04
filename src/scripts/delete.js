import { renderEventItem } from './renderEvents.js';
import { deleteEvent, getEventsList } from './eventsGateway.js';
import { setItem, getItem } from './storage.js';

export function deleteBtn() {
    const events = getItem('eventsList');
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
                            })
                    }
                    renderEventItem();
                    deleteBtn();
                });

            } else if (click) {
                click = false;
                let eventElem = eventsElem[i].id;
                document.getElementById(`delete${eventElem}`).style.visibility = 'hidden';

            }
        });
    }
};

export const deleteBtnElem = e => {
    const deleteBtn = e.target.classList.contains('deleteBtn');

    if (!deleteBtn)
        return;

    const eventId = e.target.parentNode.firstElementChild.dataset.id

    return deleteEvent(eventId)
        .then(() => getEventsList())
        .then(newEventsList => {
            setItem('eventsList', newEventsList);
            renderEventItem();
        })
};