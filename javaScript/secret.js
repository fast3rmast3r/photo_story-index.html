setInterval(
 function randomColor() {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  console.log(randomColor);
 }, 1);

setInterval(
 function randomImage() {
  var randomImg = Math.floor(Math.random() * 5) + 1;
  var image = document.getElementById("image_" + randomImg);
  image.style.visibility = "visible";
  console.log(randomImg);
 }, 40);
