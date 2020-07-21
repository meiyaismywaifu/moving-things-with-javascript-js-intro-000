const app = "I don't do much."
//65 is A, 68 is D.

var dodger = document.getElementById('dodger');

document.addEventListener('keydown', (e)=>{
  var leftEdge = parseInt(dodger.style.left.replace('px',''), 10)

  if (e.which === 65 && leftEdge > 0){
    dodger.style.leftEdge= `${leftEdge - 5}px`;
  } else if (e.which === 68){

  }
})
