import { getMonday, renderDays, markToday, setCurrMonth } from './date.js';
import { renderTimeColumn } from './events.js';
import { moveRedline, setRedline } from './redline.js';
import { openPopup, closePopup, clickOnItems } from './popup.js';


renderTimeColumn();

getMonday();
setCurrMonth();
renderDays();
markToday();
setRedline();
moveRedline();
openPopup();
closePopup();
clickOnItems();

const events = [
    { title: 'Event', startTime: '13:00', endTime: '17:40', comment: 'Create static event by javascript' }
];

const renderEventItem = eventItems => {
    const dayColumn = document.querySelector('[data-event-number = "1"]');

    const eventItem = eventItems
        .map(({ title, startTime, endTime, comment }) => {
            const elem = document.createElement('div')
            elem.classList.add('event');

            const eventTitle = document.createElement('span');
            eventTitle.append(title);

            const eventTime = document.createElement('span');
            eventTime.append(`${startTime} - ${endTime}`);

            const eventComment = document.createElement('span');
            eventComment.append(comment);

            elem.append(eventTitle, eventTime, eventComment);
            elem.setAttribute('id', '1');

            return elem;
        });
    dayColumn.append(...eventItem);
    const eventElem = document.getElementById('1');
    eventElem.style.top = "780px";
    eventElem.style.left = "4px";
    eventElem.style.height = "280px";
    eventElem.style.backgroundColor = "rgb(100, 150, 235)";

};

renderEventItem(events);