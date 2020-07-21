const app = "I don't do much."
//65 is A, 68 is D.

document.addEventListener('keydown', (e)=>{

  // stuff doesn't move if i put this outside.
  dodger = document.getElementById('dodger');
  width = parseInt($("#dodger").css("width").replace('px',''), 10);
    // for some reason "dodger.style.width" doesn't access it.
    // "dodger.style.right" gives null value, doesn't autocalc.
  leftEdge = parseInt(dodger.style.left.replace('px',''), 10)
  rightEdge = leftEdge + width;
  rightFrame = parseInt($("#game").css("width").replace('px',''), 10);

  if (e.which === 65 && leftEdge > 0){
    console.log("moving left");
    dodger.style.left= `${leftEdge - 5}px`;
  } else if (e.which === 68 && rightEdge < rightFrame){
    console.log("moving right");
    dodger.style.right= `${rightEdge - 5}px`;
  }
})
