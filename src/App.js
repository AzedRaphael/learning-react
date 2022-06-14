import './App.css';
//import StateArray from "./components/StateArray"
//import styled from "styled-components"
import {data} from "./data"
import RefBasics from './components/RefBasics';

function App() {
  
  return (
    <div className="App">
      <RefBasics/>
   </div>  
  );
}     

export default App;

{/* <ItemWrapper>
  {
    data.map((item)=>{
      return <StateArray  key={item._id} data={item}></StateArray>
    })
  }
</ItemWrapper>
const ItemWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 75px;
    gap: 3rem 1rem;
    justify-items: center;
    margin: 3rem auto;
    padding:3rem 0;
    align-items: center;
    border:2px solid blue;
` */}
