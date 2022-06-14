import React,{useState,useEffect} from 'react'

//hooks cannot be called inside conditionals but conditionals can be called in them.
function EffectConditionals() {
    const [value,setValue] = useState(0)
    useEffect(()=>{
        if(value >1){
            document.title = "e-commerce site"
        }
    })
  return (
    <>
        <h2>{value}</h2>
        <button onClick={()=>setValue(value+1)}>Increase</button>
    </>
  )
}

export default EffectConditionals