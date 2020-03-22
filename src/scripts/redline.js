const redline = document.createElement('div');
redline.classList.add('redline');
redline.setAttribute('id', 'redlineId');

const redlineBall = document.createElement('span');
redlineBall.classList.add('redline__ball');

const redlineLine = document.createElement('span');
redlineLine.classList.add('redline__line');

redline.append(redlineBall);
redline.append(redlineLine);

export function setRedline() {
    let weekDay = new Date().getDay() - 1;
    let hour = new Date().getHours();
    let minutes = Number(new Date().getMinutes());

    let actualDaycolumn;
    let daysElem;
    let redlineStyle;

    if (weekDay === -1) {
        actualDaycolumn = document.querySelector(`[data-event-number = "7"]`);
    } else {
        actualDaycolumn = document.querySelector(`[data-event-number = "${new Date().getDay()}"]`);
    }

    daysElem = actualDaycolumn.querySelectorAll('[data-line-number]');

    for (let elem of daysElem) {
        if (Number(elem.getAttribute('data-line-number')) === hour)
            elem.append(redline);
    }

    redlineStyle = document.getElementById('redlineId').style.paddingTop = `${minutes}px`;
    return redlineStyle;
};

export function moveRedline() {
    let loop;
    loop = setInterval(setRedline, 30000);
    return loop;
};