import { getMonday, renderDays, markToday, setCurrMonth } from './date.js';
import { renderTimeColumn } from './events.js';
import { moveRedline, setRedline } from './redline.js';
import { openPopup, closePopup, clickOnItems } from './popup.js';
import { renderEventItem } from './renderEvents.js';
import { setItem } from './storage.js';
import { getEventsList } from './eventsGateway.js';
import { initEventsListHandles } from './eventsList.js';


document.addEventListener('DOMContentLoaded', () => {
    getEventsList()
        .then(eventsList => {
            setItem('eventsList', eventsList);
            getMonday();
            renderDays();
            setCurrMonth();
            renderTimeColumn();
            markToday();
            setRedline();
            moveRedline();
            openPopup();
            clickOnItems();
            closePopup();
            renderEventItem();
        });
    initEventsListHandles();
});

const onStorageChange = e => {
    if (e.key === 'eventsList') {
        getMonday();
        renderDays();
        setCurrMonth();
        renderTimeColumn();
        markToday();
        setRedline();
        moveRedline();
        openPopup();
        clickOnItems();
        closePopup();
        renderEventItem();
    }
    initEventsListHandles();
};

window.addEventListener('storage', onStorageChange);