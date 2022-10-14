window.onload=function(){
  const paw_btn=document.getElementById("paw-btn");
  const cat_btn=document.getElementById("cat-btn");
  const dog_btn=document.getElementById("dog-btn");
  const droplet_container=document.getElementById("droplet-container");

  paw_btn.addEventListener("click",makeDroplet.bind(this,"paw"));
  cat_btn.addEventListener("click",makeDroplet.bind(this,"cat"));
  dog_btn.addEventListener("click",makeDroplet.bind(this,"dog"));
  
  
  function makeRain(ele){
    const speed=randomNum(5000,3000)
    ele.animate(
      [
        {top:"300px"},
        {top:"100vh"}
      ],
        {
          duration:speed,
          iterations: Infinity,
          // iterations: 1
        }
    )
  }

  function makeDroplet(shape){
    removeChild(droplet_container);  
    
    
    for(let i=0;i<15;i++){
      var droplet=document.createElement("i");
      droplet.classList.add("fa");
      droplet.classList.add("fa-"+`${shape}`);
      droplet.setAttribute("id",`${shape}`+`${i}`)
      droplet_container.appendChild(droplet);

      droplet.style.left=randomNum(400,300)+"px";
      droplet.style.top=randomNum(210,110)+"px";
     
      makeRain(droplet);  
    }
  }


  function randomNum(n,m){
    const num=Math.floor(Math.random()*n)+m;
    return num;
  }

  function removeChild(ele){
    while(ele.firstChild){
      ele.removeChild(ele.firstChild);
    }

  }










}

