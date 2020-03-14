const display = document.querySelector('.display');

document.querySelectorAll('.digits button')
.forEach( button => button.addEventListener('click', digitsPressed));

function digitsPressed(ev) {
    display.value += ev.target.innerText;
}

document.querySelectorAll('.opers button')
.forEach( button => button.addEventListener('click', opersPressed));

function opersPressed(ev) {
    display.value += ev.target.innerText;
}

document.querySelector('.equal').addEventListener('click', equalClicked);

function equalClicked() {
   display.value = eval(display.value);
}

