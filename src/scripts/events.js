import { today } from './date.js';
import { clearTable } from './index.js';

export const generateNumbers = (from, to) => {
    const result = [];

    for (let i = from; i <= to; i++) {
        result.push(i);
    }

    return result;
};


/* Render Table Events */

const getTimeColumn = () =>
    generateNumbers(1, 23)
    .map(timeItem => `
        <div
            class="time-column__line"
            data-line-number="${timeItem}"
        >${ timeItem  <= 9 ?
             `0${timeItem}:00` :
             `${timeItem}:00`}</div>
        `).join('');

const getDaysEvents = () =>
            generateNumbers(0,23)
            .map(daysEvents => `
                <div
                    class="calendar-section__item"
                    data-line-number="${daysEvents}"
                ></div>
            `).join('');
       
            
const daysEvents = getDaysEvents();    
const getDaysColumn = () => {
    const result = [];
    generateNumbers(0, 6).map(day => {

        const newDay = new Date(today);
        newDay.setDate(newDay.getDate() + day);
        result.push(`
            <div
                class="calendar-section"
                data-date-number="${new Date(newDay).getDate()}"
                data-month-number="${new Date(newDay).getMonth()}"
            >${daysEvents}</div>
        `);
    });

    return result.join('');
}; 


const timeColumn = document.querySelector('.calendar-column');
export const renderTimeColumn = () => {
    
    const timeLine = getTimeColumn();
    const daysColumn = getDaysColumn();
    const timeSectors = generateNumbers(1, 1)
        .map(lineTime => `
            <div
                class='time-column'
                data-column-number ="${lineTime}"
            >${timeLine}</div>
            <div
                class='calendar-table'
                data-column-number ="${lineTime}"
            >${daysColumn}</div>
        `).join('');
        
    timeColumn.innerHTML = timeSectors;

};