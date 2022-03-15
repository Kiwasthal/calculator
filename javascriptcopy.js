//  document.getElementById('audio').play();
//  document.getElementById('audioSpace').play();

//Assigning sounds to key presses

// document.addEventListener('keydown', function(e) {
//     if (e.keyCode == 49 || e.keyCode == 50  ||e.keyCode == 51 ||e.keyCode == 52 ||
//         e.keyCode == 53 || e.keyCode == 54  ||e.keyCode == 55 ||e.keyCode ==  56||
//         e.keyCode == 57 || e.keyCode == 48  ||e.keyCode == 106 || e.keyCode == 107 || 
//         e.keyCode == 49 ||e.keyCode  == 67  ||e.keyCode == 188 || e.keyCode == 109 || e.keyCode == 191 )  {
//       document.getElementById('audio').play();
//     }
//   });

// document.addEventListener('keydown', function(e) {
//     if (e.keyCode == 187 ) {
//         document.getElementById('audioSpace').play();
//     }  
// });

//Assigning sounds to clicks

//  let ScreenDisplay = () => {
//    switch(this.classList.contains()) {
//     case 'key':
//       document.getElementById('audio').play();
//       this.keyCode = 48 ? screen.textContent = 0 :
//       this.keyCode = 49 ? screen.textContent = 1 : 
//       this.keyCode = 50 ? screen.textContent = 2 :
//       this.keyCode = 51 ? screen.textContent = 3 :
//       this.keyCode = 52 ? screen.textContent = 4 :
//       this.keyCode = 53 ? screen.textContent = 5 :
//       this.keyCode = 54 ? screen.textContent = 6 :
//       this.keyCode = 55 ? screen.textContent = 7 :
//       this.keyCode = 56 ? screen.textContent = 8 :
//       screen.textContent = 9
//     }
//  }

//Create a function to populate the display

//   const btn = document.querySelectorAll('button');
//   for (i = 0 ; i< btn.length ; i++) {
//       if (!btn[i].classList.contains('result')) {
//       btn[i].addEventListener('click', function(e)  {
//         switch(e.target.classList.contains()) {
//          case 'key':
//            document.getElementById('audio').play();
//            this.keyCode = 48 ? screen.textContent = 0 :
//            this.keyCode = 49 ? screen.textContent = 1 : 
//            this.keyCode = 50 ? screen.textContent = 2 :
//            this.keyCode = 51 ? screen.textContent = 3 :
//            this.keyCode = 52 ? screen.textContent = 4 :
//            this.keyCode = 53 ? screen.textContent = 5 :
//            this.keyCode = 54 ? screen.textContent = 6 :
//            this.keyCode = 55 ? screen.textContent = 7 :
//            this.keyCode = 56 ? screen.textContent = 8 :
//            screen.textContent = 9
//            break ;
//          }
//       })
//     }else {
//       btn[i].addEventListener('click',function(){
//         document.getElementById('audioSpace').play();

//       })
//     }
//  }
