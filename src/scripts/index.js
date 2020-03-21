import { getMonday, renderDays, markToday, setCurrMonth } from './date.js';
import { renderTimeColumn } from './events.js';
import { moveRedline, setRedline } from './redline.js';


renderTimeColumn();

getMonday();
setCurrMonth();
renderDays();
markToday();
setRedline();
moveRedline();