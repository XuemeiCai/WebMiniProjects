document.getElementById("ball").addEventListener("click",handleClick);

var count=0;
function handleClick(){

  
  count++;
  message="Yeah, you have touch the ball "+count+" times!"
  
  document.getElementById("catch_count").innerHTML=message;

}

