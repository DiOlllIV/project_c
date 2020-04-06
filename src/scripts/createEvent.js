import { renderEventItem } from './renderEvents.js';
import { setItem } from './storage.js';
import { createEvents, getEventsList } from './eventsGateway.js';

export const createEvent = () => {

    let eventId = 0;
    const eventTitle = document.querySelector('.pop-up__title');
    const date = document.querySelector('.time-set__date');
    const startTime = document.querySelector('.time-set__start');
    const endTime = document.querySelector('.time-set__end');
    const eventComment = document.querySelector('.pop-up__comment');

    if (!date.value && !startTime.value && !endTime.value)
        return;

    const newEvent = {
        id: eventId,
        title: eventTitle.value,
        startDate: `${date.value} ${startTime.value}`,
        endDate: `${date.value} ${endTime.value}`,
        comment: eventComment.value
    };

    eventTitle.value = '';
    date.value = '';
    startTime.value = '';
    endTime.value = '';
    eventComment.value = '';

    createEvents(newEvent)
        .then(() => getEventsList())
        .then(newEventsList => {
            setItem('eventsList', newEventsList);
            renderEventItem();
        });


    document.getElementById('popup').style.visibility = "hidden";
};