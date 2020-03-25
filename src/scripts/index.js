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
    { title: 'Event', startDate: '2020-03-23 13:00', endDate: '03-23-2020 17:40', comment: 'Create static event by javascript' },
    { title: 'Event', startDate: '04-24-2020 11:00', endDate: '04-24-2020 14:45', comment: 'Create second static event by javascript' },
    { title: 'Seventy-two week', startDate: '03-28-2020 00:10', endDate: '03-28-2020 02:00', comment: 'U.D.R.P.A' },
    { title: 'BD D', startDate: '09-20-2020 12:10', endDate: '09-20-2020 18:00', comment: 'Birth Day' },
    { title: 'Event', startDate: '04-25-2020 12:00', endDate: '04-25-2020 13:45', comment: 'Create second static event by javascript' }
];

export const clearTable = () => {
    const elements = document.querySelectorAll('.event');
    for (let eve of elements) {
        eve.remove();
    }
};

export const renderEventItem = eventItems => {
    let dayColumn;
    let eventHeight;
    let startPos;
    let id;

    clearTable();
    eventItems
        .map(({ title, startDate, endDate, comment }) => {
            const eventDate = new Date(`${startDate}`).getDate();
            const eventMonth = new Date(`${startDate}`).getMonth();
            dayColumn = document.querySelector(`div[data-date-number = "${eventDate}"][data-month-number = "${eventMonth}"]`);
            const startEvent = new Date(`${startDate}`);
            const endEvent = new Date(`${endDate}`) - new Date(`${startDate}`);
            eventHeight = endEvent / 1000 / 60;
            startPos = (new Date(startEvent).getHours() * 60);
            id = startDate;

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

            const deleteBtn = document.createElement('div');
            deleteBtn.style.backgroundColor = "darkgrey";
            deleteBtn.style.width = "100px";
            deleteBtn.style.height = "40px";
            deleteBtn.style.opacity = "0.9";
            deleteBtn.style.position = "absolute";
            deleteBtn.style.top = `${eventHeight+2}px`;
            deleteBtn.style.borderRadius = "10px";
            deleteBtn.style.display = "flex";
            deleteBtn.style.justifyContent = "center";
            deleteBtn.style.alignItems = "center";
            deleteBtn.innerText = "delete";
            deleteBtn.style.cursor = "pointer";
            deleteBtn.setAttribute("id", `delete${id}`);

            deleteBtn.style.visibility = "hidden";
            elem.append(deleteBtn)

            for (let sect of document.querySelectorAll('.calendar-section')) {
                if (Number(new Date(startDate).getMonth()) === Number(sect.getAttribute('data-month-number')) &&
                    Number(new Date(startDate).getDate()) === Number(sect.getAttribute('data-date-number'))) {
                    return dayColumn.append(elem);
                }
            }
        });

};

renderEventItem(events);

const saveBtn = document.querySelector('.save-btn');
export const createEvent = () => {
    const eventTitle = document.querySelector('.pop-up__title');
    const date = document.querySelector('.time-set__date');
    const startTime = document.querySelector('.time-set__start');
    const endTime = document.querySelector('.time-set__end');
    const eventComment = document.querySelector('.pop-up__comment');

    if (!date.value && !startTime.value && !endTime.value)
        return false;

    events.push({
        title: eventTitle.value,
        startDate: `${date.value} ${startTime.value}`,
        endDate: `${date.value} ${endTime.value}`,
        comment: eventComment.value
    });

    eventTitle.innerHTML = '';
    date.innerHTML = '';
    startTime.innerHTML = '';
    endTime.innerHTML = '';
    eventComment.innerHTML = '';

    document.getElementById('popup').style.visibility = "hidden";
    renderEventItem(events);
    deleteBtn();
};

saveBtn.addEventListener('click', createEvent);



/****************************** *********************************/


export function deleteBtn() {
    const eventsElem = document.querySelectorAll('.event');
    let click = false;
    for (let i = 0; i < eventsElem.length; i++) {
        eventsElem[i].addEventListener('click', function() {
            if (click === false) {
                let eventElem = eventsElem[i].id;
                const visibleBtn = document.getElementById(`delete${eventElem}`);
                visibleBtn.style.visibility = 'visible';
                click = true;
                visibleBtn.addEventListener('click', function() {

                    for (let j = 0; j < events.length; j++) {

                        if (new Date(eventsElem[i].id).getTime() === new Date(events[j].startDate).getTime()) {
                            const index = events.indexOf(events[j]);
                            events.splice(index, 1);
                        }
                    }
                    renderEventItem(events);
                });

            } else if (click === true) {
                let eventElem = eventsElem[i].id;
                document.getElementById(`delete${eventElem}`).style.visibility = 'hidden';
                click = false;
            }
        });
    }
};

deleteBtn();