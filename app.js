const displayEventKeyCode = document.getElementsById("keyCode");
const displayEventKey = document.getElementsById("eventKey");
const displayEventCode = document.getElementsById("eventCode");
const displayEventWhich = document.getElementsById("eventWhich");

window.addEventListener(`keydown`, (e) =>{
    displayEventKeyCode.textContent= `${e.keyCode}`;
    displayEventKey.textContent = `${e.Key}`;
    displayEventCode.textContent = `${e.Code}`;
    displayEventCode.textContent = `${e.Which}`;
});