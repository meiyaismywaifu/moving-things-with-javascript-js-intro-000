const app = "I don't do much."
//65 is A, 68 is D.

var dodger = document.getElementById('dodger');

document.addEventListener('keydown', (e)=>{
  var leftNum = dodger.style.left.replace('px','')
  var left = parseInt(leftNum, 10)

  if (e.which === 65 && left > 0){

    dodger.style.left= `${left - 5}px`;
  } else if (e.which === 68){

  }
})
