function changeColor(){

  // document.body.style.backgroundColor=randomColor(); 
  // document.getElementById("btn").style.backgroundColor=randomColor();
  // document.getElementById("btn").style.color=randomColor();
  for(let i=1;i<11;i++){
    var id=i.toString();
    
    // document.getElementById(i).style.backgroundColor=randomColor();
    document.getElementById(id).style.backgroundColor=randomColor()

  }
}

function randomColor(){
  var red=Math.floor(Math.random()*256);
  var green=Math.floor(Math.random()*256);
  var blue=Math.floor(Math.random()*256);

  var bg_color="rgb("+red+","+green+","+blue+")";

  return bg_color;

}

