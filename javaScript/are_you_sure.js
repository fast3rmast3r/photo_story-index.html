var white_dove = document.getElementById("white_dove");
window.addEventListener("click", function() {
  white_dove.play();
});

var click_on_me = document.getElementById("click_on_me");
click_on_me.onmouseover = function() {
  var x = Math.floor(Math.random() * 400);
  var y = Math.floor(Math.random() * 400);
  click_on_me.style.top = x + "px";
  click_on_me.style.left = y + "px";
};
