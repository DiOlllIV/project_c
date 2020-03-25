import { getMonday, renderDays, markToday, setCurrMonth } from './date.js';
import { renderTimeColumn } from './events.js';
import { moveRedline, setRedline } from './redline.js';
import { openPopup, closePopup, clickOnItems } from './popup.js';
import { events, renderEventItem, deleteBtn } from './createEvent.js';



getMonday();
renderDays();
setCurrMonth();
renderTimeColumn();
markToday();
setRedline();
moveRedline();
openPopup();
clickOnItems();
closePopup();
renderEventItem(events);
deleteBtn();