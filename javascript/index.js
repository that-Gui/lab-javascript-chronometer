const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
 // printMilliseconds();
}

function printMinutes() {
  
  minDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[0];

  minUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[1];

}

function printSeconds() {
  
  secDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[0];
  
  secDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[1];

}
// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}


function setStopBtn() {
  chronometer.stop();
}

function setSplitBtn() {
  
}

function setStartBtn() {

  chronometer.start(printTime());

}

function setResetBtn() {
  chronometer.reset();
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  
  if ( btnLeftElement.innerHTML === 'START' ){
    btnLeftElement.classList.toggle('start');
    btnLeftElement.classList.toggle('stop');
    btnLeftElement.innerHTML = 'STOP';
    btnRightElement.classList.toggle('reset');
    btnRightElement.classList.toggle('split');
    btnRightElement.innerHTML = 'SPLIT';
    setStartBtn();
  } else {
    btnLeftElement.classList.toggle('stop');
    btnLeftElement.classList.toggle('start');
    btnLeftElement.innerHTML = 'START';
    btnRightElement.classList.toggle('split');
    btnRightElement.classList.toggle('reset');
    btnRightElement.innerHTML = 'RESET';
    setStopBtn();
  }


});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  
   if ( btnLeftElement.innerHTML === 'START' ){
    setResetBtn();
  } else {
    setSplitBtn();
  } 

}
);
