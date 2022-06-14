import React,{useEffect,useRef} from 'react'

//useRef preserves value,does not trigger re-render and targets DOM nodes. 
function RefBasics() {
    const refContainer = useRef(null)
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(refContainer.current.value)
    }
   
    useEffect(()=>{
        refContainer.current.focus()
    })
  return (
    <>
        <form onSubmit={handleSubmit}>
            <input type="text" ref={refContainer}/>
            <button type="submit">Submit</button>
        </form>
    </>
  )
}

export default RefBasics