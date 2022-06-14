import React,{useState,useEffect} from 'react'
import Axios from "axios"

function EffectFetch() {
    const [item,setItem] = useState([])
    const getItems = async()=>{
        try{
            const response = await Axios.get("/api/v1/product")
            const data = await response.data
            console.log(data)
            //setItem(data)
        }catch(error){
            console.log(error) 
        }
    }
    useEffect(()=>{
        getItems()
    },[])
  return (
    <>
        <button>Get items</button>
    </>
  )
}

export default EffectFetch