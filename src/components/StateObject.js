import React,{useState} from 'react'

function StateObject() {
    const [obj,setObj] = useState({
        name:"Raphael",
        age:24,
        message:"we are making progress"
    })
    
    const submit =()=>{
        // console.log(obj.message === "we are making progress")
        // setObj({...obj,message:"hello raph"})
        if(obj.message === "we are making progress"){
            setObj({...obj, message:"hello raph "})
        }else{
            setObj({...obj, message:"we are making progress"})
        }
  
    }
  return (
    <div>
        <h2>{obj.name}</h2>
        <h4>{obj.age}</h4>
        <h4>{obj.message}</h4>
        <button onClick={submit}>Change Values</button>
    </div>
  )
}

export default StateObject