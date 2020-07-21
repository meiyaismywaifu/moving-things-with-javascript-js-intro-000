const app = "I don't do much."
//65 is A, 68 is D.

var dodger = document.getElementById('dodger');
var width = parseInt($("#dodger").css("width").replace('px',''), 10);
  // for some reason "dodger.style.width" doesn't access it.
  // "dodger.style.right" gives null value, doesn't autocalc.
var leftEdge = parseInt(dodger.style.left.replace('px',''), 10)
var rightEdge = leftEdge + width;
var rightFrame = parseInt($("game").css("width").replace('px',''), 10);

document.addEventListener('keydown', (e)=>{



  if (e.which === 65 && leftEdge > 0){
    console.log("moving left");
    dodger.style.left= `${leftEdge - 5}px`;
  } else if (e.which === 68 && rightEdge > 0){
    console.log("moving right");
    dodger.style.right= `${rightEdge - 5}px`;
  }
})
