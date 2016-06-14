// function printToScreen(num) {
//   var screen = document.getElementById('screen');
//   console.log(screen);
//   screen.innerHTML = num;
// }

// function setNum1(num) {
//   var screen = document.getElementById('screen');
//   var number1 = document.getElementById(num);
//   console.log(number1);
//   screen.innerHTML = number1;
// }

function btn(x) {
  var screen = document.getElementById('screen');
  screen.innerHTML += x;
}

function calculate() {
  var screen = document.getElementById('screen');
  screen.innerHTML = eval(screen.innerHTML);
  if(screen.innerHTML === 'Infinity') {
    alert('Cannot divide by zero');
    screen.innerHTML = '';
  }
}

function setToZero() {
  var screen = document.getElementById('screen');
  screen.innerHTML = '';
}

function showMoreOrLess() {
  if(document.getElementById('less-btn').style.display !== 'block') {
    document.getElementById('more-btns').style.display = 'block';
    document.getElementById('more-btn').style.display = 'none';
    document.getElementById('less-btn').style.display = 'block';
  } else {
    document.getElementById('more-btns').style.display = 'none';
    document.getElementById('more-btn').style.display = 'block';
    document.getElementById('less-btn').style.display = 'none';
  }
}