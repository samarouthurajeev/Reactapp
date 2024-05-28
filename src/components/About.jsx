import React, { useReducer } from 'react'

function counterReducer(state,action)
{
 if(action.type==="DEC")
  {
    return state-1;
  }
  else if(action.type==="INC")
  {
    return state+1;
  }
  else{
    return 0;
  }
}
export default function About() {
  const[counter,dispatch]=useReducer(counterReducer,0)
  return (
    <div>
      <button onClick={()=>{
        dispatch({type:"DEC"})
      }}>-</button>
      <span>{counter}</span>
      <button onClick={()=>{
        dispatch({type:"INC",payload:1})
      }}>+</button>
    </div>
  )
}
