import React,{useState} from 'react'

function StateCounter() {
    const [value,setValue] = useState(0)
    const decreaseTimer = ()=>{
        setTimeout(()=>{
            //setValue(value -1)
            //this takes thecurrent value and returns the value to the returned value(value -1)
            setValue((value)=>value - 1)
        },3000)
    }
    const increaseTimer = ()=>{
        setTimeout(()=>{
            setValue((prevValue)=>prevValue + 1) 
        },3000)
    }
  return (
    <>
        <div>
            <h2>Counter</h2>
            <div>{value}</div>
            <button onClick={()=>setValue(value - 1 )}>decrease</button>
            <button onClick={()=>decreaseTimer()}>decrease after 3seconds</button>
            <button onClick={()=>setValue(0)}>reset</button>
            <button onClick={()=>increaseTimer()}>increase after 3seconds</button>
            <button onClick={()=>setValue(value + 1 )}>increase</button>
          
        </div>
    </>
  )
}

export default StateCounter