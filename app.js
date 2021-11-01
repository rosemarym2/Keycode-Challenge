const diseventKey = document.getElementsByClassName("eventKey");
const diseventCode = document.getElementsByClassName("eventCode");
const diseventWhich = document.getElementsByClassName("eventWhich");

window.addEventListener("keydown", (e) =>{
    diseventKey.innerText = e.key;
    diseventCode.innerText = e.keyCode;

})