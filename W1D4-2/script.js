
let knop = document.getElementById("mybutton");
knop.addEventListener("click", function () { alert('Button clicked!') });

const achterGrond = document.getElementById("background");
const body = document.querySelector('body');
achterGrond.addEventListener("click", function () { body.classList.toggle('red-background')});




