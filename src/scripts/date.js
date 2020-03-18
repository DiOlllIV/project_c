import { generateNumbers } from './events.js';

let today = new Date();
let monthDay = new Date().getDate();
let weekDay = new Date().getDay() - 1;
const daysLine = document.querySelector('.week-line');
const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
let zeroDay = 0;


export const getMonday = () => {
    while (today.getDay() !== 1) {
        today.setDate(today.getDate() - 1);
    }
};

getMonday();

/* Get Days */

const getDays = () => {
    const result = [];
    generateNumbers(0, 6).map(day => {
        const newDay = new Date(today);
        newDay.setDate(newDay.getDate() + day);

        result.push(`
                <div class="box-day">
                    <span class="box-day__week"
                    data-day-number="${day+zeroDay}">
                        ${week[new Date(newDay).getDay()]}
                    </span>
                    <span class="box-day__month"
                    data-date-number="${new Date(newDay).getDate()}">
                    ${new Date(newDay).getDate()}</span>
                </div>`);
    });

    return result.join('');
};

export const renderDays = () => {
    daysLine.innerHTML = getDays();
};

/**** Mark today element ****/
export const markToday = () => {
    document.querySelector(`[data-day-number="${weekDay}"]`).classList.add('box-day__week__today');
    document.querySelector(`[data-date-number="${monthDay}"]`).classList.add('box-day__month__today');
    document.querySelector(`[data-date-number="${monthDay}"]`).parentElement.classList.add('box-day__today');
};

/* Get month */

const monthElem = document.querySelector('.title');
const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
let popupMonth;

export const setCurrMonth = () => {
    const daysElem = document.querySelectorAll('.box-day');
    const withoutFirst = [...daysElem].splice(1);
    let checkMonthInWeek = false;

    for (let arg of withoutFirst) {
        if (arg.textContent == 1)
            checkMonthInWeek = true;
    }

    let currMonth = month[new Date(today).getMonth()];
    monthElem.textContent = `${currMonth} ${today.getFullYear()}`;
    popupMonth = new Date(today).getMonth() + 1;
};


const rightBtn = document.querySelector('.btn-right');
const getNextWeek = () => {
    today.setDate(today.getDate() + 7);
    zeroDay += 7;
    renderDays();
    setCurrMonth();
    markToday();
};
rightBtn.addEventListener('click', getNextWeek);

const leftBtn = document.querySelector('.btn-left');
const getPriviousWeek = () => {
    today.setDate(today.getDate() - 7);
    zeroDay -= 7;
    renderDays();
    setCurrMonth();
    markToday();
};
leftBtn.addEventListener('click', getPriviousWeek);

/*  Today BTN */
const todayBtn = document.querySelector('.today-btn');
const getActualWeek = () => {
    today = new Date();
    zeroDay = 0;
    getMonday();
    renderDays();
    setCurrMonth();
    markToday();
    checkTime();
};
todayBtn.addEventListener('click', getActualWeek);