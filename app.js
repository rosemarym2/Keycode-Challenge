const displayeventKey = document.getElementsByClassName("eventKey");
const displayeventCode = document.getElementsByClassName("eventCode");
const displayeventWhich = document.getElementsByClassName("eventWhich");

window.addEventListener("keydown", (e) =>{
    displayeventKey.textContent = `${e.Key}`;
    displayeventCode.textContent = `${e.Code}`;
    displayeventCode.textContent = `${e.Which}`;
})