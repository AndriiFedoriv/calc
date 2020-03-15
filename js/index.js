const display = document.querySelector('.display');

document
  .querySelectorAll('.digits button')
  .forEach(button => button.addEventListener('click', digitsPressed));

function digitsPressed(ev) {
  display.value += ev.target.innerText;
}

document
  .querySelectorAll('.opers button')
  .forEach(button => button.addEventListener('click', opersPressed));

function opersPressed(ev) {
  display.value += ev.target.innerText;
}

document.querySelector('.equal').addEventListener('click', equalClicked);

function equalClicked() {
  let sum = eval(display.value);
  sum = Math.round(sum * 100000);
  display.value = sum / 100000;
}

document.querySelector('.cleanUp').addEventListener('click', cleanUpClicked);

function cleanUpClicked() {
  display.value = ' ';
}

document.querySelector('.stepBack').addEventListener('click', stepBackClicked);

function stepBackClicked() {
  const str = display.value;
  display.value = str.substring(0, str.length - 1);
}