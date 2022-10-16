import React,{useState} from "react";

function App(){
  const [count,setCount]=useState(0);
  
  function Counter(){
    setCount(count+1);
  }

  return (
    <div>
      <button onClick={Counter}>{count}</button>
    </div>
  )
}

export default App;