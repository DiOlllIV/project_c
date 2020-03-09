const generateColumn = (from, to) => {
    const result = [];

    for (let i = from; i <= to; i++) {
        result.push(i);
    }

    return result;
};


const getTimeColumn = () =>
    generateColumn(1, 23)
    .map(timeItem => `
        <div
            class="time-column__line"
            data-line-number="${timeItem}"
        >${ timeItem  <= 9 
            ? `0${timeItem}:00` :
             `${timeItem}:00`}</div>
        `).join('');

const getDaysEvents = () =>
            generateColumn(1,24)
            .map(daysEvents => `
            <div
                class="calendar-section__item"
                data-line-number="${daysEvents}"
            ></div>
            `).join('');
       
            
const daysEvents = getDaysEvents();    
const getDaysColumn = () =>  
        generateColumn(1,7)
        .map(daysColumn => `
        <div
            class="calendar-section"
            data-event-number="${daysColumn}"
        >${daysEvents}</div>
        `).join('');


const timeColumn = document.querySelector('.calendar-column');
const renderTimeColumn = () => {
    const timeLine = getTimeColumn();
    const daysColumn = getDaysColumn();
    const timeSectors = generateColumn(1, 1)
        .map(lineTime => `
        <div
            class='time-column'
            data-column-number ="${lineTime}"
        >${timeLine}</div>
        <div
        class='calendar-table'
        data-column-number ="${lineTime}"
    >${daysColumn}</div>`).join('');
    timeColumn.innerHTML = timeSectors;
};


renderTimeColumn();