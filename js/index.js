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
  if ('-+*/.'.includes(display.value[display.value.length - 1])) {
    display.value = display.value.slice(0, -1);
    display.value += ev.target.innerText;
  } else {
    display.value += ev.target.innerText;
  }
}

document.querySelector('.equal').addEventListener('click', equalClicked);

function equalClicked() {
  let sum = eval(display.value);
  sum = Math.round(sum * 100000);
  display.value = sum / 100000;
  if (display.value == Infinity) {
    display.value = 'дія неможлива';
  }
    if (display.value == -Infinity) {
    display.value = 'дія неможлива';
  }
}

document.querySelector('.cleanUp').addEventListener('click', cleanUpClicked);

function cleanUpClicked() {
  display.value = ' ';
}

document.querySelector('.stepBack').addEventListener('click', stepBackClicked);

function stepBackClicked() {
  const str = display.value;
  display.value = str.slice(0, str.length - 1);
}
