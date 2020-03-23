import { getMonday, renderDays, markToday, setCurrMonth } from './date.js';
import { renderTimeColumn } from './events.js';
import { moveRedline, setRedline } from './redline.js';
import { openPopup, closePopup, clickOnItems } from './popup.js';



getMonday();
renderDays();
setCurrMonth();
renderTimeColumn();
markToday();
setRedline();
moveRedline();
openPopup();
closePopup();
clickOnItems();

export const events = [
    { title: 'Event', date: '03-23-2020', startTime: '13:00', endTime: '17:40', comment: 'Create static event by javascript' },
    { title: 'Event', date: '04-24-2020', startTime: '11:00', endTime: '14:45', comment: 'Create second static event by javascript' },
    { title: 'Seventy-two week', date: '03-28-2020', startTime: '00:10', endTime: '02:00', comment: 'U.D.R.P.A' },
    { title: 'Event', date: '04-25-2020', startTime: '12:00', endTime: '13:45', comment: 'Create second static event by javascript' }

];


export const renderEventItem = eventItems => {
    let dayColumn;
    let eventHeight;
    let startPos;
    let id;

    eventItems.map(({ title, date, startTime, endTime, comment }) => {
        const eventDate = new Date(`${date}`).getDate();
        dayColumn = document.querySelector(`div[data-date-number = "${eventDate}"]`);

        const zeroTime = new Date(`${date}`);
        const startEvent = new Date(`${date}, ${startTime}`);
        const endEvent = new Date(`${date}, ${endTime}`) - new Date(`${date}, ${startTime}`);
        eventHeight = endEvent / 1000 / 60;
        startPos = (startEvent - zeroTime) / 1000 / 60;
        id = startEvent;

        const elem = document.createElement('div')
        elem.classList.add('event');

        const eventTitle = document.createElement('span');
        eventTitle.append(title);

        const eventTime = document.createElement('span');
        eventTime.append(`${startTime} - ${endTime}`);

        const eventComment = document.createElement('span');
        eventComment.append(comment);

        elem.append(eventTitle, eventTime, eventComment);
        elem.setAttribute('id', `${id}`);


        elem.style.backgroundColor = "rgb(100, 150, 235)";
        elem.style.top = (startTime === '00:00') ?
            "0px" : `${startPos}px`;
        elem.style.left = "4px";
        elem.style.height = `${eventHeight}px`;

        return dayColumn.append(elem);
    });
};

renderEventItem(events);