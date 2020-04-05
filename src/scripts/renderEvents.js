import { getItem } from './storage.js';

const clearTable = () => {
    const elements = document.querySelectorAll('.event');
    for (let eve of elements) {
        eve.remove();
    }
};

const getTime = time => {
    const stringH = time.getHours() <= 9 ?
        `0${time.getHours()}` :
        `${time.getHours()}`;

    const stringM = time.getMinutes() <= 9 ?
        `0${time.getMinutes()}` :
        `${time.getMinutes()}`;

    return `${stringH}:${stringM}`;
};

export const renderEventItem = () => {
    const eventsList = getItem('eventsList') || [];
    let dayColumn;
    let eventHeight;
    let startPos;

    clearTable();
    const eventItems = eventsList
        .map(({ id, title, startDate, endDate, comment }) => {
            const eventDate = new Date(`${startDate}`).getDate();
            const eventMonth = new Date(`${startDate}`).getMonth();
            dayColumn = document.querySelector(`div[data-date-number = "${eventDate}"][data-month-number = "${eventMonth}"]`);
            const startEvent = new Date(`${startDate}`);
            const endEvent = new Date(`${endDate}`) - new Date(`${startDate}`);
            eventHeight = endEvent / 1000 / 60;
            startPos = (new Date(startEvent).getHours() * 60);

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
            deleteBtn.style.width = "100%";
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
            deleteBtn.style.fontWeight = "600";
            deleteBtn.classList.add("deleteBtn");
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
    return eventItems;
};