setInterval(function randomColor() {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  console.log(randomColor);
}, 1);

setInterval(function randomImage() {
  var randomImg = Math.floor(Math.random() * 5) + 1;
  var image = document.getElementById("image_" + randomImg);
  image.style.visibility = "visible";
  if (randomImg == 1) {
    document.getElementById("image_2").style.visibility = "hidden";
    document.getElementById("image_3").style.visibility = "hidden";
    document.getElementById("image_4").style.visibility = "hidden";
    document.getElementById("image_5").style.visibility = "hidden";
  } else if (randomImg == 2) {
    document.getElementById("image_1").style.visibility = "hidden";
    document.getElementById("image_3").style.visibility = "hidden";
    document.getElementById("image_4").style.visibility = "hidden";
    document.getElementById("image_5").style.visibility = "hidden";
  } else if (randomImg == 3) {
    document.getElementById("image_1").style.visibility = "hidden";
    document.getElementById("image_2").style.visibility = "hidden";
    document.getElementById("image_4").style.visibility = "hidden";
    document.getElementById("image_5").style.visibility = "hidden";
  } else if (randomImg == 4) {
    document.getElementById("image_1").style.visibility = "hidden";
    document.getElementById("image_2").style.visibility = "hidden";
    document.getElementById("image_3").style.visibility = "hidden";
    document.getElementById("image_5").style.visibility = "hidden";
  } else {
    document.getElementById("image_1").style.visibility = "hidden";
    document.getElementById("image_2").style.visibility = "hidden";
    document.getElementById("image_3").style.visibility = "hidden";
    document.getElementById("image_4").style.visibility = "hidden";
  }

  console.log(randomImg);
}, 50);
