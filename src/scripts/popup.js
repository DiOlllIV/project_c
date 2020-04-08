document.querySelector('.pop-up').setAttribute('id', 'popup');
let popup = document.getElementById('popup');
let createBtn = document.querySelector('.create-btn');

document.querySelector('.exit-btn').setAttribute('id', 'exitBtn');
let exitBtn = document.getElementById('exitBtn');

export function openPopup() {
    popup.style.visibility = "visible";
};
createBtn.addEventListener('click', openPopup);

export function closePopup() {
    popup.style.visibility = "hidden";
};
exitBtn.addEventListener('click', closePopup);


export function clickOnItems() {
    const eventItems = document.querySelectorAll('.calendar-section__item');

    for (let elem of eventItems) {
        elem.addEventListener('click', openPopup);
    }
};

export const popupActions = () => {
    openPopup();
    closePopup();
};