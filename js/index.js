const linkCalc = document.querySelector(.calc);
sect.appendChild(lincalc.cloneNode(true));

lincalc.remove();

calc.style.color = 'white';
calc.style.backgroundColor = 'black';
calc.style.padding = '10px';
calc.style.width = '250px';
calc.style.textAlign = 'center';

calc.classList.add('formatted');

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

