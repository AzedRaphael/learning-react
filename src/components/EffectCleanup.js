import React,{useState,useEffect} from 'react'

//cleanUp function works in useEffect to remove components/functions that sets states. it cleans up the previous state 
//and retains the updated value from the useState.in order of rendering after initial render->effect, render->cleanup->effect
 
function EffectCleanup() {
    const [size,setSize] = useState(window.innerWidth)
    const changeSize = ()=>{
        setSize(window.innerWidth)
    }
    useEffect(()=>{
        console.log("useEffect")
        window.addEventListener("resize", changeSize)
        //cleanup function
        return  ()=>{
            console.log("cleanup")
            window.removeEventListener("resize", changeSize)
        }
    })
    console.log("render")
  return (
    <>
        <h2>Windows</h2>
        <h3>{size}</h3>
    </>
  )
}

export default EffectCleanup