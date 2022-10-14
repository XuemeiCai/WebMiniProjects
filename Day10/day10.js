
  function handleRating(e){
    var checkMaker=e.classList;
    
    if (checkMaker.contains("checked")){
      
      e.classList.remove("checked")
    }else{
      e.classList.add("checked")
    } 
  }


