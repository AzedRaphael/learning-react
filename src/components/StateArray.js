import React,{useState}from 'react'
import styled from "styled-components"


function StateArray(props) {
    const [items,setItems] = useState(props.data)
    let tempItems = items
    tempItems = Object.values(tempItems)
    const removeItems = (_id)=>{
        let newItem = tempItems.filter((item)=>item._id !== _id)    
        setItems(newItem)
    }
   
    const {_id,name}= items
    return(
               
                <ItemWrapper> 
                                         
                        <div className="item">
                            <h1>{name}</h1>
                            <button onClick={()=>removeItems(_id)}>Remove</button>
                        </div>
                    
                </ItemWrapper>                          
        
    )
}
 
const ItemWrapper = styled.div`

.item {
    width:200px;
    height:150px;
    margin-bottom:1rem;
    border:2px solid black;
  }
`

export default StateArray