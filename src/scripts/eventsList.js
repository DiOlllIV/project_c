import { createEvent } from './createEvent.js';

export const initEventsListHandles = () => {
    const saveBtn = document.querySelector('.save-btn');
    saveBtn.addEventListener('click', createEvent);
};