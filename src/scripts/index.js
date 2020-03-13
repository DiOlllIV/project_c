import { renderTimeColumn, generateNumbers } from './events.js';


renderTimeColumn();

let today = new Date();
let weekDay = new Date().getDay() - 1;
const daysLine = document.querySelector('.week-line');
const week = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
const firstDay = 0;


const getMonday = () => {
    while (today.getDay() !== 1) {
        today.setDate(today.getDate() - 1);
    }
};

getMonday();

const getDays = () => {
    const result = [];
    generateNumbers(0, 6).map(day => {
        const newDay = new Date(today);
        newDay.setDate(newDay.getDate() + day);

        result.push(`
                <div class="box-day">
                    <span class="box-day__week"
                    data-day-number="${day+firstDay}">
                        ${week[new Date(newDay).getDay()]}
                    </span>
                    <span class="box-day__month"
                    data-date-number="${day+firstDay}">
                    ${new Date(newDay).getDate()}</span>
                </div>`);
    });

    return result.join('');
};

const renderDays = () => {
    daysLine.innerHTML = getDays();
    document.querySelector(`[data-day-number="${weekDay}"]`).classList.add('box-day__week__today')
    document.querySelector(`[data-date-number="${weekDay}"]`).classList.add('box-day__month__today')
};

const getWeekAfter = () => {
    const days = document.querySelectorAll('.box-day__month');
    for (let num of days) { num.innerHTML = Number(num.textContent) + 7 };
};
const getWeekBefore = () => {
    const days = document.querySelectorAll('.box-day__month');
    for (let num of days) { num.innerHTML = Number(num.textContent) - 7 };
};


const btnRight = document.querySelector('.btn-right');
btnRight.addEventListener('click', getWeekAfter, false);
const btnLeft = document.querySelector('.btn-left');
btnLeft.addEventListener('click', getWeekBefore, false);

renderDays();