const app = "I don't do much."
//65 is A, 68 is D.

var dodger = document.getElementById('dodger');

document.addEventListener('keydown', (e)=>{
  if (e.which === 65){
    var leftNum = dodger.style.replace('px','')
    var left = parseInt(leftNumbers, 10)
    dodger.style.left= `${left - 1}px`;
  } else if (e.which === 68){

  }
})
