const displayEventKeyCode = document.getElementById("keyCode");
const displayEventKey = document.getElementById("eventKey");
const displayEventCode = document.getElementById("eventCode");
const displayEventWhich = document.getElementById("eventWhich");

document.addEventListener(`keydown`, (event) =>{
  let eventKey = event.key;
  let eventCode = event.code;
  let eventWhich = event.which;
  if (event.which == 32) {
    displayEventKeyCode.textContent = ("Spacebar");
  }
  
    displayEventKeyCode.textContent = `${eventWhich}`;
    displayEventKey.innerHTML = `<p> ${eventKey} </p>`;
    displayEventCode.innerHTML = `<p> ${eventCode} </p>`;
    displayEventWhich.innerHTML= `<p> ${eventWhich} </p>`;
});