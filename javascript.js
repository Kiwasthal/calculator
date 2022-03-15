//  Create functions for basic math operators

let add = (numOne,numTwo) => numOne + numTwo;

let subtract = (numOne,numTwo) => numOne - numTwo;

let multiply = (numOne,numTwo) => numOne * numTwo;

let divide = (numOne,numTwo) => numOne / numTwo;

//Create a function that takes two numbers and an operator and calls one of the above functions depending on the operator

let operate = (operator,numOne,numTwo) => 
  operator == "+" ? add(numOne,numTwo) : operator == "-" ? subtract(numOne,numTwo) : 
  operator ==  "*" ? multiply(numOne,numTwo) : divide(numOne,numTwo);

// window.addEventListener('click',function(e){
//   const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`)
//   console.log(audio)
// })

window.addEventListener('keydown',function(e) {
  const audios = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  console.log(audios)
})


