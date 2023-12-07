import {useState} from "react"
import './App.css';
import Counter from "./Counter"
function App() {
 let [show,setShow]=useState(false)
 const handleShow=()=>{
  setShow(!show)
 }
  return (
    <div className="App">
      <button onClick={handleShow}>{show ? "Hide Counter" : "show Profile"}</button>
      {show &&  <Counter /> }
     
    </div>
  );
}

export default App;
