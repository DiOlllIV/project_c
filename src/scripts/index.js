import { getMonday, renderDays, markToday, setCurrMonth, checkTime } from './date.js';
import { renderTimeColumn } from './events.js';


renderTimeColumn();

getMonday();
setCurrMonth();
renderDays();
markToday();