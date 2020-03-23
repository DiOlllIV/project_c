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
    { title: 'Event', date: '03-23-2020', startTime: '13:00', endTime: '17:40', comment: 'Create static event by javascript' },
    { title: 'Event', date: '04-24-2020', startTime: '11:00', endTime: '14:45', comment: 'Create second static event by javascript' },
    { title: 'Event', date: '04-25-2020', startTime: '12:00', endTime: '13:45', comment: 'Create second static event by javascript' }
];


const renderEventItem = eventItems => {

    eventItems.filter(elem => {

        const eventDate = new Date(`${elem.date}`).getDate();
        const dayColumn = document.querySelector(`div[data-date-number = "${eventDate}"]`);
        const zeroTime = new Date(`${elem.date}`);
        const startEvent = new Date(`${elem.date}, ${elem.startTime}`);
        const endEvent = new Date(`${elem.date}, ${elem.endTime}`) - new Date(`${elem.date}, ${elem.startTime}`);
        const eventHeight = endEvent / 1000 / 60;
        const startPos = (startEvent - zeroTime) / 1000 / 60;
        const id = startEvent;

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
                elem.setAttribute('id', `${id}`);


                return elem;

            });
        console.log(eventItem);
        dayColumn.append(...eventItem);

        const eventElem = document.getElementById(`${id}`);
        eventElem.style.backgroundColor = "rgb(100, 150, 235)";
        eventElem.style.top = `${startPos}px`;
        eventElem.style.left = "4px";
        eventElem.style.height = `${eventHeight}px`;

    });
};

renderEventItem(events);