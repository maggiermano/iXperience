document.getElementById("java").onmouseover = function() {mouseOver()};
document.getElementById("java").onmouseout = function() {mouseOut()};

function mouseOver() {
  document.getElementById("java").style.color = "red";
}

function mouseOut() {
  document.getElementById("java").style.color = "white";
}
