import { createEvent } from './createEvent.js';

const saveBtn = document.querySelector('.save-btn');

export const initEventsListHandles = () => {
    saveBtn.addEventListener('click', createEvent);
};