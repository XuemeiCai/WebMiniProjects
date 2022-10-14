window.onload=function(){

const submitBtn=document.getElementById("submitBtn");
const inputTask=document.getElementById("input");
const taskListDOM=document.getElementById("taskList");
const checkAllBtn=document.getElementById("checkAll");
const uncheckAllBtn=document.getElementById("uncheckAll");
const clearBtn=document.getElementById("clearBtn");


class UI{
  // add a new task
  addTask(){
    submitBtn.addEventListener("click",()=>{
      let newTask={};
      newTask.id=Date.now();
      newTask.task=inputTask.value;
      const currTasks=Storage.getTasks();

        //if the local storage is not empty, check if the task exists 
        let flag=true;
        if(currTasks.length>0){
          currTasks.forEach(currTask=>{
            if(currTask.task.toLowerCase()===newTask.task.toLowerCase()){
              flag=false;
            }
          })
        }
      
        if(flag){
          //the task will be added to the local storage only when it does not exits before
          checkAllBtn.removeEventListener("click",this.checkAll);
          uncheckAllBtn.removeEventListener("click",this.uncheckAll);

          currTasks.push(newTask);
          Storage.saveTasks(currTasks);

          
          checkAllBtn.addEventListener("click",this.checkAll);
          uncheckAllBtn.addEventListener("click",this.uncheckAll);

          //display the latest added tasks
          let newTaskList=[];
          newTaskList.push(newTask);
          this.displayTasks(newTaskList);
          
          inputTask.value='';
        }else{
          window.alert("already exist!")
          inputTask.value='';
        }

    })
   
  }

  // display all tasks
  displayTasks(tasks){
   
    tasks.forEach(task=>{
      const task_div=document.createElement("div");
      task_div.className="collection";

      var task_input=document.createElement("input");
      task_input.type="checkbox";
      task_input.id=`${task.id}`;
      task_input.name=`${task.id}`;

      var task_label=document.createElement("label");
      task_label.for=`${task.id}`;
      task_label.innerHTML=`${task.task}`;

      var task_trash=document.createElement("i");
      task_trash.id=`trash${task.id}`;
      task_trash.className="fas fa-trash";

      task_div.appendChild(task_input);
      task_div.appendChild(task_label);
      task_div.appendChild(task_trash);

      taskListDOM.appendChild(task_div);  

      //add click and remove listener when creating the element
      
      task_trash.addEventListener("click",(e)=>{
        checkAllBtn.removeEventListener("click",this.checkAll);
        uncheckAllBtn.removeEventListener("click",this.uncheckAll);
        
        var removedTaskId=parseInt(e.target.id.slice(5,));
        var current_items=Storage.getTasks();
        console.log("****************")
        console.log("local",current_items)
        
        task_trash.parentElement.remove();
        current_items=current_items.filter(task=>task.id!==removedTaskId);
        
        Storage.saveTasks(current_items);
        console.log('delete',current_items)
        tasks=current_items;
        console.log("tasks",tasks)
        

        checkAllBtn.addEventListener("click",this.checkAll);
        uncheckAllBtn.addEventListener("click",this.uncheckAll);

        
        console.log("@@@@@@@@@@")
  
       
      })
    })
 
  } 
 
  // check all tasks
  checkAll(){
    var current_items=[];
    current_items=Storage.getTasks();
    console.log("check",current_items)
    
    current_items.forEach(task=>{
      var taskDom=document.getElementById(task.id);
      taskDom.checked=true;
    })
    

  }

  // uncheck all tasks
  uncheckAll(){
    var current_items=Storage.getTasks();
    current_items.forEach(task=>{
      var taskDom=document.getElementById(task.id);
      taskDom.checked=false;
    })

  }

  clearTasks(){
      var tasks=[];
      // localStorage.clear();
      Storage.saveTasks(tasks);
      // taskListDOM.innerHTML='';
      while(taskListDOM.firstChild){
        taskListDOM.removeChild(taskListDOM.lastChild);
      }
     
  }

  setUppApp(){
    let allTasks=Storage.getTasks();  
    
    
    this.displayTasks(allTasks); 
    this.addTask();
    checkAllBtn.addEventListener("click",this.checkAll);
    uncheckAllBtn.addEventListener("click",this.uncheckAll);
    clearBtn.addEventListener("click",this.clearTasks);
   
  }
}

//local storage
class Storage{
  static saveTasks(tasks){
    localStorage.setItem("tasks",JSON.stringify(tasks));

  }


  static getTasks(){
    return localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];
  }

}



if( document.readyState !== 'loading' ) {
  console.log('document is already ready, just execute code here' );

  const ui=new UI;
  ui.setUppApp();
  

  
} else {
  document.addEventListener('DOMContentLoaded', function () {
      console.log('document was not ready, place code here' );
      
      const ui=new UI;
      ui.setUppApp();
        
  });
}

//window onload end
}