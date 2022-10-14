

function catSurprise(clickedID){
  var randomNum=Math.floor(Math.random()*3)+1;
  var randomPic="sp"+randomNum+".jpeg";
  var pic_id=clickedID;
  var pic_path="http://127.0.0.1:5500/Day4/images/"+randomPic;
 
  document.getElementById(pic_id).src=pic_path;
  location.reload();
  
}

