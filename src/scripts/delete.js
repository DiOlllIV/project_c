import { events, renderEventItem } from './createEvent.js';

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

                    for (let j = 0; j < events.length; j++) {

                        if (new Date(eventsElem[i].id).getTime() === new Date(events[j].startDate).getTime()) {
                            document.getElementById(`delete${eventsElem[i].id}`).remove();
                            const index = events.indexOf(events[j]);
                            events.splice(index, 1);
                        }
                    }
                    renderEventItem(events);
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