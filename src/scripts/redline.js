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

    const hour = new Date().getHours();
    const minutes = Number(new Date().getMinutes());

    const actualDaycolumn = document.querySelector(`div[data-date-number = "${new Date().getDate()}"][data-month-number = "${new Date().getMonth()}"]`);
    const daysElem = actualDaycolumn.querySelectorAll('[data-line-number]');

    for (let elem of daysElem) {
        if (Number(elem.getAttribute('data-line-number')) === hour)
            elem.append(redline);
    }

    const redlineStyle = document.getElementById('redlineId').style.paddingTop = `${minutes}px`;
    return redlineStyle;
};

export function moveRedline() {
    let loop;
    loop = setInterval(setRedline, 30000);
    return loop;
};