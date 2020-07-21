const app = "I don't do much."
//65 is A, 68 is D.

var dodger = document.getElementById('dodger');
var width = $("dodger").css("width");
  // for some reason "dodger.style.width" doesn't access it.

document.addEventListener('keydown', (e)=>{

  var leftEdge = parseInt(dodger.style.left.replace('px',''), 10)
  var rightEdge = leftEdge + width;

  if (e.which === 65 && leftEdge > 0){
    dodger.style.left= `${leftEdge - 5}px`;
  } else if (e.which === 68 && rightEdge > 0){
    dodger.style.right= `${rightEdge - 5}px`;
  }
})
