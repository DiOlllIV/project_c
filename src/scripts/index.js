import { getMonday, renderDays, markToday, setCurrMonth } from './date.js';
import { renderTimeColumn } from './events.js';


renderTimeColumn();

getMonday();
setCurrMonth();
renderDays();
markToday();