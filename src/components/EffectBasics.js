import React,{useState,useEffect} from 'react'

//useEffect renders web side effects such as console.log,changing DOM values, fetching data. anything outside use of components and 
//hooks will require useEffect to render. Any page re-render will run useEffect.7
//Whatever refreshes a page will run the useEffect except there are conditionals and dependency lists.
function EffectBasics() {
    const [value,setValue] = useState(0)
    useEffect(()=>{
        console.log("useEffect re-renders side effects")
        document.title=`enitin-stores.com`
    },[])
    console.log("renders components")
  return (
    <>
        <h1>{value}</h1>
        <button onClick={()=>setValue(value+1)}>Increase</button>
    </>
  )
}

export default EffectBasics