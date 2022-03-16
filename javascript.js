let display  = "";
let screen = document.querySelector('.screen');

//  Create functions for basic math operators

let add = (numOne,numTwo) => numOne + numTwo;
let subtract = (numOne,numTwo) => numOne - numTwo;
let multiply = (numOne,numTwo) => numOne * numTwo;
let divide = (numOne,numTwo) => numOne / numTwo;

//Create an Constuctor to store Inputs

function createOperation(name){
  const obj = {}
 return obj
}

//Initialize praxis object to store variables and operator

const praxis = createOperation('praxis');
praxis.operator = ""

//Create a function that takes two numbers and an operator and calls one of the above functions depending on the operator

let operate = (operator,numOne,numTwo) => 
  operator == "+" ? add(numOne,numTwo) : operator == "-" ? subtract(numOne,numTwo) : 
  operator ==  "×" ? multiply(numOne,numTwo) : divide(numOne,numTwo);

//Adds sounds and animation to each "keydown"

let playSound = (e) => { 
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  if (display.length < 9 && audio ) {
    display +=e.key
    const praxis = createOperation('praxis')
    praxis.numOne = display 
  }
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

//Creating variables for different inputs

let logText = (e) => {
  
  if (display.length < 9 && parseInt(e.target.textContent) >= 0 && praxis.operator === "" ) {
    display += e.target.textContent;
    screen.textContent = display;
    praxis.numOne = display;
} else if( e.target.textContent == "+" || e.target.textContent =="-"
  || e.target.textContent =="×"|| e.target.textContent =="÷") { 
    praxis.operator = e.target.textContent;
    display = "";
    praxis.status = 'active';
    screen.textContent = display
} else if ( display.length < 9 && parseInt(e.target.textContent) >= 0 ){
    display += e.target.textContent;
    screen.textContent = display;
    praxis.numTwo = display;
} else if (e.target.textContent == "=") {
    let result = operate(praxis.operator,parseInt(praxis.numOne),parseInt(praxis.numTwo));
    if (toString(result).length > 9) {
    console.log(result)
    result = result.toString().slice(0,10)
    screen.textContent = result
    praxis.numOne = result
    }
    else {
    screen.textContent = result
    praxis.numOne = result;
    }
}
return praxis;
  }

let findSound = (e) => {
    let audio = document.getElementById('keysound')
    audio.currentTime = 0;
    audio.play();
}

buttons.forEach(button => button.addEventListener('click',logText));
buttons.forEach(button => button.addEventListener('click',findSound));
