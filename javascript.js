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
};

//Initialize praxis object to store variables and operator

let praxis = createOperation('praxis');
praxis.operator = "";
praxis.comma = true;


//Create a function that takes two numbers and an operator and calls one of the above functions depending on the operator

let operate = (operator,numOne,numTwo) => 
  operator == "+" ? add(numOne,numTwo) : operator == "-" ? subtract(numOne,numTwo) : 
  operator ==  "×" ? multiply(numOne,numTwo) : divide(numOne,numTwo);

//Adds sounds and animation to each "keydown"

let playSound = (e) => { 
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  //   if (display.length < 9 && audio ) {
  //     display +=e.key;
  //     praxis.numOne = display ;
  //   }
  // screen.textContent = display;
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

let buttons = document.querySelectorAll('button') ;

//Main function of calculator
//Creating variables for different inputs

let logText = (e) => {
 
// Clear all variables of object praxis if C is clicked 

  if(e.target.textContent == 'C' ){
    praxis.status = false;
    praxis.numOne = "";
    praxis.numTwo = "";
    praxis.operator = "";
    screen.textContent = "";
    display = "";   
  }

//Check for status(enables stringing together operations), create variables for praxis number, depending on status-state

 else if (display.length < 9 && parseInt(e.target.textContent) >= 0 && praxis.operator === "" ) {
    if (praxis.status === true){ 
        display += e.target.textContent;
        screen.textContent = display;
        praxis.numTwo = display;
    } else if (!praxis.status == true) {
        display += e.target.textContent;
        screen.textContent = display;
        praxis.numOne = display;
    }        
  }
// Inserts a dot and to create floaters!!Should disable after one click

  else if (e.target.textContent === "," ) {

    if (praxis.comma === true){
        display += ".";
        screen.textContent = display;
        if (!praxis.numTwo) {
          praxis.numOne = display;
          praxis.comma = false;
      } else {
          praxis.numTwo = display;
          praxis.comma = false;
    }}
  }
  
//

// Depending on status state we create the variable in praxis needed to perform operations

  else if( e.target.textContent == "+" || e.target.textContent =="-"
  || e.target.textContent =="×"|| e.target.textContent =="÷") { 
    if (praxis.status === true) {
      let result = operate(praxis.operator,parseFloat(praxis.numOne),parseFloat(praxis.numTwo));
        if(result === Infinity){
          screen.textContent = 'Try again!'
          return
        } else if (toString(result).length > 9) {
          result = result.toString().slice(0,10);
          praxis.operator = e.target.textContent;
          praxis.numOne = result;
          screen.textContent = result;
          display = "";
          praxis.comma = true;
        }
    } else if (!praxis.status === true) {
          praxis.operator = e.target.textContent;
          display = "";
          screen.textContent = display;
          praxis.status = true; //Praxis.status enables to chain multiple operations without clicking equal , if operator button is clicked once, then status activates
          praxis.comma = true;  //Makes sure comma can be assigned only once each time a number is stored
    }
  }    
// Create variables for num.2 . !! Works if status - not set-

  else if ( display.length < 9 && parseInt(e.target.textContent) >= 0 ){
    display += e.target.textContent;
    screen.textContent = display;
    praxis.numTwo = display;
  }

//Calculates result if "=" is clicked, also prevents larger numbers from floating the screen    

  else if (e.target.textContent == "=") {
    let result = operate(praxis.operator,parseFloat(praxis.numOne),parseFloat(praxis.numTwo));
      if (result === Infinity) {
        screen.textContent = "Nice Try!";
        return;
    }  else if (!praxis.numTwo){
        return;
    }  else if (toString(result).length > 9) {
        result = result.toString().slice(0,10);
        screen.textContent = result;
        praxis.numOne = result;
        display = '';
        praxis.status = false;
        numTwo = "";
        praxis.comma = true;
    }    
  }
  return praxis;
};

//Find sound depending on key pressed and added animation class 'pressed'

let findSound = (e) => {
  if (e.target.textContent == "="){
    let audio = document.getElementById('equalsound');
    e.target.classList.add('pressed');
    audio.currentTime = 0;
    audio.play();
  } else {
    let audio = document.getElementById('keysound');
    e.target.classList.add('pressed');
    audio.currentTime = 0;
    audio.play();
}};
 //removes transition after mouse lift 

window.addEventListener('mouseup', (e) => {
  e.target.classList.remove('pressed');
});



buttons.forEach(button => button.addEventListener('click',logText));
buttons.forEach(button => button.addEventListener('mousedown',findSound));


//Remove class to reset animations

window.addEventListener('mouseup', (e) => {
  e.target.classList.remove('pressed');
});


// Configuring LogText function to work for keyup events

let logKeyBoardText = (e) => {

  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  console.log(key.textContent)

// Clear all variables of object praxis if C is clicked 


  if(key.textContent == 'C' ){
    praxis.status = false;
    praxis.numOne = "";
    praxis.numTwo = "";
    praxis.operator = "";
    screen.textContent = "";
    display = "";   
  }
  //Check for status(enables stringing together operations), create variables for praxis number, depending on status-state

  else if (display.length < 9 && parseInt(key.textContent) >= 0 && praxis.operator === "" ) {
     if (praxis.status === true){ 
         display += key.textContent;
         screen.textContent = display;
         praxis.numTwo = display;
     } else if (!praxis.status == true) {
         display += key.textContent;
         screen.textContent = display;
         praxis.numOne = display;
     }        
   }
 // Inserts a dot and to create floaters!!Should disable after one click
 
   else if (key.textContent === "," ) {
 
     if (praxis.comma === true){
         display += ".";
         screen.textContent = display;
         if (!praxis.numTwo) {
           praxis.numOne = display;
           praxis.comma = false;
       } else {
           praxis.numTwo = display;
           praxis.comma = false;
     }}
   }
   
 //
 
 // Depending on status state we create the variable in praxis needed to perform operations
 
   else if( key.textContent == "+" || key.textContent =="-"
   || key.textContent =="×"|| key.textContent =="÷") { 
     if (praxis.status === true) {
       let result = operate(praxis.operator,parseFloat(praxis.numOne),parseFloat(praxis.numTwo));
         if(result === Infinity){
           screen.textContent = 'Try again!'
           return
         } else if (toString(result).length > 9) {
           result = result.toString().slice(0,10);
           praxis.operator = key.textContent;
           praxis.numOne = result;
           screen.textContent = result;
           display = "";
           praxis.comma = true;
         }
     } else if (!praxis.status === true) {
           praxis.operator = key.textContent;
           display = "";
           screen.textContent = display;
           praxis.status = true; //Praxis.status enables to chain multiple operations without clicking equal , if operator button is clicked once, then status activates
           praxis.comma = true;  //Makes sure comma can be assigned only once each time a number is stored
     }
   }    
 // Create variables for num.2 . !! Works if status - not set-
 
   else if ( display.length < 9 && parseInt(key.textContent) >= 0 ){
     display += key.textContent;
     screen.textContent = display;
     praxis.numTwo = display;
   }
 
 //Calculates result if "=" is clicked, also prevents larger numbers from floating the screen    
 
   else if (key.textContent == "=") {
     let result = operate(praxis.operator,parseFloat(praxis.numOne),parseFloat(praxis.numTwo));
       if (result === Infinity) {
         screen.textContent = "Nice Try!";
         return;
     }  else if (!praxis.numTwo){
         return;
     }  else if (toString(result).length > 9) {
         result = result.toString().slice(0,10);
         screen.textContent = result;
         praxis.numOne = result;
         display = '';
         praxis.status = false;
         numTwo = "";
         praxis.comma = true;
     }    
   }
   return praxis;
 };

 window.addEventListener('keyup',logKeyBoardText);

 