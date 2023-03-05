import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState} from 'react';

  function App (){
    const [count,setCount ]=useState({
      val : 0,
      char : ""
    });
    
  return(
  <>
   <h1>{count.char}</h1>
    <input type={Text} onChange={ (event)=> setCount({
      char : event.target.value
    })}/>
    <h1>{count.val}</h1>
    <button onClick={() => setCount ((c)=>{
      return{val : c.val +1 }
    })}>Click</button>
    
   
    
    
  </>
  );
  }
  export default App
  





