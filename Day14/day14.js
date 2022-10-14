window.onload=function(){
  const first_circle=document.getElementById("circle");
  // first_circle.addEventListener("mousemove",mouseMove);

  generateCircles(10);

  var circles=document.querySelectorAll(".circle");

  document.addEventListener("mousemove",function(e){
    e.preventDefault();
    const mouseX=e.pageX;
    const mouseY=e.pageY;
  
    circles.forEach(circle=>{

      const posX=randomNum(300);
      const posY=randomNum(200)
    

      circle.animate(
        [{left:mouseX + posX + "px",top:mouseY + posY + "px"},
        {left:mouseX +"px",top:mouseY + "px"}
      ],
        {duration:3000}
      )

      circle.style.left= mouseX +"px";
      circle.style.top= mouseY + "px";
      
     
       })
    
  })

  
  
 

  // circles.forEach(circle=>{
  //   circle.addEventListener("mousemove",mouseMove); 
  // })
  
  // function mouseMove(e){
  //   e.preventDefault();
  
  //   // mouseX=e.pageX;
  //   // mouseY=e.pageY;
  //   console.log(mouseX)
  //   circles.forEach(circle=>{

  //     const pos=randomNum();
  //     circle.style.left= mouseY + pos + "px";
  //     circle.style.top= mouseY + pos + "px";
     
  //      })
  // }
  
  function generateCircles(n){ 
    for(let i=0;i<n;i++){
      var size=randomNum(100);
      
      var newId="circle"+i;     
      first_circle.insertAdjacentHTML("afterend",`<div class='circle' id="${newId}"></div>`)
      document.getElementById(`${newId}`).style.height=size+"px";
      document.getElementById(`${newId}`).style.width=size+"px";
      document.getElementById(`${newId}`).style.backgroundColor=randomColor();
      // document.getElementById(`${newId}`).addEventListener("mousemove",mouseMove)
    } 
  }

  
  function randomNum(n){
    const number=Math.floor(Math.random()*n); 
    return number
  }
  
  function randomColor(){ 
    return "#"+Math.random().toString(16).slice(2,8)
  }

}


