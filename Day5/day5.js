function Timer(){
  const second=1000;
  const minute=1000*60;
  const hour=minute*60;
  const day=hour*24;

  let today=new Date();
      dd=String(today.getDate()).padStart(2,"0")
      mm=String(today.getMonth()+1).padStart(2,"0")
      yyyy=today.getFullYear();
      nextYear=yyyy+1;
      dayMonth="12/20/";
      birthday=dayMonth+yyyy;
      currentDay=mm+"/"+dd+"/"+yyyy;

      test=new Date(birthday);
      

  if(currentDay>birthday){
    birthday=dayMonth+nextYear;
  }

  const targetDay=new Date(birthday).getTime();


          
  var x=setInterval(function(){
    const now=new Date().getTime();
    const distance=targetDay-now;

    document.getElementById("title").innerHTML="Countdown to Stephanie's Birthday"

    document.getElementById("day").innerHTML=Math.floor(distance/day)+" Days";
    document.getElementById("hour").innerHTML=Math.floor((distance%day)/hour)+ " Hours";
    document.getElementById("minute").innerHTML=Math.floor((distance%hour)/minute)+" Minutes";
    document.getElementById("second").innerHTML=Math.floor((distance%minute)/second)+" Seconds";
    
    
    if(distance<0){
      clearInterval(x);
      document.getElementById("title").innerHTML="Happy Birthday!"
    }
    
  },0)
}


