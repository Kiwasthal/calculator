//  Create functions for basic math operators
let display  = "";
let screen = document.querySelector('.screen');

let add = (numOne,numTwo) => numOne + numTwo;
let subtract = (numOne,numTwo) => numOne - numTwo;
let multiply = (numOne,numTwo) => numOne * numTwo;
let divide = (numOne,numTwo) => numOne / numTwo;

//Create a function that takes two numbers and an operator and calls one of the above functions depending on the operator

let operate = (operator,numOne,numTwo) => 
  operator == "+" ? add(numOne,numTwo) : operator == "-" ? subtract(numOne,numTwo) : 
  operator ==  "*" ? multiply(numOne,numTwo) : divide(numOne,numTwo);

//Adds sounds and animation to each "keydown"

let playSound = (e) => { 
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  if (display.length < 9 && audio ) display +=e.key
  screen.textContent = display
  if (!audio) return ;
  audio.currentTime = 0 ;
  audio.play();
  key.classList.add('pressed');
}
//Removes transition after transition-end

window.addEventListener('keyup', (e) => {
  let key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
  if(key == null) return;
  key.classList.remove('pressed');
})  

window.addEventListener('keydown',playSound);

//Creating sound and animation for clicks 

let buttons = document.querySelectorAll('button')
buttons.forEach(button => button.addEventListener('click', (e) => {
}))

let logText = (e) => {
  if (display.length < 9){
  console.log(display.length)
  display += e.target.textContent
  screen.textContent = display
  }
}

buttons.forEach(button => button.addEventListener('click',logText));