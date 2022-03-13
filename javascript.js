//Assigning sounds to key presses

document.addEventListener('keydown', function(e) {
    if (e.keyCode == 49 || e.keyCode == 50  ||e.keyCode == 51 ||e.keyCode == 52 ||
        e.keyCode == 53 || e.keyCode == 54  ||e.keyCode == 55 ||e.keyCode ==  56||
        e.keyCode == 57 || e.keyCode == 48  ||e.keyCode == 106 || e.keyCode == 107 || 
        e.keyCode == 49 ||e.keyCode  == 67  ||e.keyCode == 188 || e.keyCode == 109 || e.keyCode == 191 )  {
      document.getElementById('audio').play();
    }
  });

document.addEventListener('keydown', function(e) {
    if (e.keyCode == 187 ) {
        document.getElementById('audioSpace').play();
    }  
});

//Assigning sounds to clicks

const btn = document.querySelectorAll('button');
  for (i = 0 ; i< btn.length ; i++) {
      if (btn[i].classList.contains('result') == false) {
      btn[i].addEventListener('click', function(e){
        document.getElementById('audio').play(); 
      })
    }else {
        btn[i].addEventListener('click',function(e){
            document.getElementById('audioSpace').play();
        })
    }
 }
