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

    let hour = new Date().getHours();
    let minutes = Number(new Date().getMinutes());

    let actualDaycolumn
    let daysElem;
    let redlineStyle;

    actualDaycolumn = document.querySelector(`div[data-date-number = "${new Date().getDate()}"][data-month-number = "${new Date().getMonth()}"]`);
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