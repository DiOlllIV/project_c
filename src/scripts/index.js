import { getMonday, forRenderWeeks } from './date.js';
import { popupActions } from './popup.js';
import { setItem } from './storage.js';
import { getEventsList } from './eventsGateway.js';
import { initEventsListHandles } from './eventsList.js';


document.addEventListener('DOMContentLoaded', () => {
    getEventsList()
        .then(eventsList => {
            setItem('eventsList', eventsList);
            getMonday();
            forRenderWeeks();
            popupActions();
        });
    initEventsListHandles();
});

const onStorageChange = e => {
    if (e.key === 'eventsList') {
        setItem('eventsList', eventsList);
        getMonday();
        forRenderWeeks();
        popupActions();
    }
    initEventsListHandles();
};

window.addEventListener('storage', onStorageChange);