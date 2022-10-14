document.getElementById("circle-1").addEventListener("mouseover",handleMouse);
document.getElementById("circle-2").addEventListener("mouseover",handleMouse);
document.getElementById("circle-3").addEventListener("mouseover",handleMouse);
document.getElementById("circle-4").addEventListener("mouseover",handleMouse);
document.getElementById("circle-5").addEventListener("mouseover",handleMouse);
document.getElementById("circle-6").addEventListener("mouseover",handleMouse);
document.getElementById("circle-7").addEventListener("mouseover",handleMouse);
document.getElementById("circle-8").addEventListener("mouseover",handleMouse);



function handleMouse(){
  var audio = new Audio('sound6.wav');
  audio.play();
  this.style.backgroundColor=randomColor();
}

function randomColor(){
  var red=Math.floor(Math.random()*256);
  var green=Math.floor(Math.random()*256);
  var blue=Math.floor(Math.random()*256);

  var bg_color="rgb("+red+","+green+","+blue+")";

  return bg_color;

}