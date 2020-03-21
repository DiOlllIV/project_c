const redline = document.createElement('div');
redline.classList.add('redline');
redline.setAttribute('id', 'redlineId');

const redlineBall = document.createElement('span');
redlineBall.classList.add('redline__ball');

const redlineLine = document.createElement('span');
redlineLine.classList.add('redline__line');

redline.append(redlineBall);
redline.append(redlineLine);

const hour = new Date().getHours();
const minutes = Number(new Date().getMinutes());

export function setRedline() {

    const actualDaycolumn = document.querySelector(`[data-event-number = "${new Date().getDay()}"]`);
    const daysElem = actualDaycolumn.querySelectorAll('[data-line-number]');

    for (let elem of daysElem) {
        if (Number(elem.getAttribute('data-line-number')) === hour) {
            elem.append(redline);
        }
    }
    document.getElementById('redlineId').style.paddingTop = `${minutes}px`
};

export function moveRedline() {
    let loop = setInterval(setRedline, 60000);
};