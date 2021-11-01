const displayeventKey = document.getElementsByClassName("eventKey");
const displayeventCode = document.getElementsByClassName("eventCode");
const displayeventWhich = document.getElementsByClassName("eventWhich");

window.addEventListener("keydown", (e) =>{
    displayeventKey.innerText = e.key;
    displayeventCode.innerText = e.keyCode;

})