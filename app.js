const displayEventKeyCode = document.getElementsById("keyCode");
const displayEventKey = document.getElementsById("eventKey");
const displayEventCode = document.getElementsById("eventCode");
const displayEventWhich = document.getElementsById("eventWhich");

window.addEventListener(`keydown`, (event) =>{
    displayEventKeyCode.innerHTML = `${event.keyCode}`;
    displayEventKey.innerHTML = `${event.Key}`;
    displayEventCode.innerHTML = `${event.Code}`;
    displayEventCode.innerHTML = `${event.Which}`;
});