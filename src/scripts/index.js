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
clickOnItems();
closePopup();


export const events = [
    { title: 'Event', startDate: '03-23-2020 13:00', endDate: '03-23-2020 17:40', comment: 'Create static event by javascript' },
    { title: 'Event', startDate: '04-24-2020 11:00', endDate: '04-24-2020 14:45', comment: 'Create second static event by javascript' },
    { title: 'Seventy-two week', startDate: '03-28-2020 00:10', endDate: '03-28-2020 02:00', comment: 'U.D.R.P.A' },
    { title: 'BD D', startDate: '09-20-2020 12:10', endDate: '09-20-2020 18:00', comment: 'Birth Day' },
    { title: 'Event', startDate: '04-25-2020 12:00', endDate: '04-25-2020 13:45', comment: 'Create second static event by javascript' }
];


export const renderEventItem = eventItems => {
    let dayColumn;
    let eventHeight;
    let startPos;
    let id;

    eventItems
        .map(({ title, startDate, endDate, comment }) => {
            const eventDate = new Date(`${startDate}`).getDate();
            const eventMonth = new Date(`${startDate}`).getMonth();
            dayColumn = document.querySelector(`div[data-date-number = "${eventDate}"][data-month-number = "${eventMonth}"]`);
            const startEvent = new Date(`${startDate}`);
            const endEvent = new Date(`${endDate}`) - new Date(`${startDate}`);
            eventHeight = endEvent / 1000 / 60;
            startPos = (new Date(startEvent).getHours() * 60);
            id = startEvent;

            const getTime = time => {
                const stringH = time.getHours() <= 9 ?
                    `0${time.getHours()}` :
                    `${time.getHours()}`;

                const stringM = time.getMinutes() <= 9 ?
                    `0${time.getMinutes()}` :
                    `${time.getMinutes()}`;

                return `${stringH}:${stringM}`;
            };

            const elem = document.createElement('div')
            elem.classList.add('event');

            const eventTitle = document.createElement('span');
            eventTitle.append(title);

            const eventTime = document.createElement('span');
            eventTime.append(`${getTime(new Date(startDate))} - ${getTime(new Date(endDate))}`);

            const eventComment = document.createElement('span');
            eventComment.append(comment);

            elem.append(eventTitle, eventTime, eventComment);
            elem.setAttribute('id', `${id}`);


            elem.style.backgroundColor = "rgb(100, 150, 235)";
            elem.style.top = (startDate === '00:00') ?
                "0px" : `${startPos}px`;
            elem.style.left = "4px";
            elem.style.height = `${eventHeight}px`;

            for (let sect of document.querySelectorAll('.calendar-section')) {
                if (Number(new Date(startDate).getMonth()) === Number(sect.getAttribute('data-month-number'))) {
                    console.log(startDate)
                    return dayColumn.append(elem);
                }
            }
        });
};

renderEventItem(events);