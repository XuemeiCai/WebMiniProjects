const blocks=document.querySelectorAll(".block");
const canvas=document.getElementById("canvas");
var x="";
var y="";
var x_offset=0;
var y_offset=0;


blocks.forEach(block=>{
  block.addEventListener("dragstart",dragStart)

  block.addEventListener("dragend",()=>{
    block.classList.remove("dragging")
  })
})


canvas.addEventListener('dragover',dragOver);
canvas.addEventListener('drop',drop);




function dragStart(event){
  event.dataTransfer.setData("text",event.target.id)
  x_offset=event.offsetX;
  y_offset=event.offsetY;
 
}

function dragOver(event){
  
  event.dataTransfer.dropEffect = "copy";
  event.preventDefault();
}

function drop(event){
  event.preventDefault();

  x=(event.clientX-x_offset)+"px";
  y=(event.clientY-y_offset)+"px"
  console.log(x);
  console.log(y);
  
  const data=event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));

  document.getElementById(data).style.position="absolute";
  document.getElementById(data).style.left=x;
  document.getElementById(data).style.top=y;
  

}

