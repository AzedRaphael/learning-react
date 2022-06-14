import React,{useState,useEffect} from 'react'

//blank dependency array will only run the useEffect on the initial render. if an item is passed into the array...
//the useEffect will run when there is a change in the item value
function EffectDependency() {
  const [value,setValue] = useState(0)
  useEffect(()=>{
    if(value>5){
      document.title = `New message (${value})`
    }
  },[value])
  return (
    <>
      <h2>{value}</h2>
      <button onClick={()=>setValue(value+1)}>Increase</button>
    </>
  )
}

export default EffectDependency