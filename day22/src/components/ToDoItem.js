import React,{useState} from "react";


function ToDoItem(props){
    // const [isDone,setIsDone]=useState(false); //when the text is clicked, set it to be true

    // function handleClick(){
    //     setIsDone(prevValue=>{
    //         return !prevValue;
    //     })
    // }

    return (
        <div onClick={()=>{props.onChecked(props.id)}}>
            {/* add the line-through decorator to the text when click */}
            {/* <li style={{textDecoration:isDone?"line-through":"none"}}>{props.text}</li> */}

            <li>{props.text}</li>
        </div>
        )
    
}

export default ToDoItem;