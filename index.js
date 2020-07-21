const app = "I don't do much."
//65 is A, 68 is D.

var dodger = document.getElementById('dodger');

document.addEventListener('keydown', (e)=>{
  var left = parseInt(leftNumbers, 10)

  if (e.which === 65 && left > 0){
    var leftNum = dodger.style.replace('px','')
    dodger.style.left= `${left - 1}px`;
  } else if (e.which === 68){

  }
})
