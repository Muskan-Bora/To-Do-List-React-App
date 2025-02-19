import { useState } from "react";
import "./App.css";
import image from "./assets/image.jpg"
import Inputcontainer from "./components/Inputcontainer";
import TodoContainer from "./components/TodoContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble, faFlagCheckered } from "@fortawesome/free-solid-svg-icons";

function App() {

  const[inputVal, setInputVal] = useState('')
  const[todos, settodos] = useState([])

  function writetodo(e) {
    setInputVal(e.target.value)
  }

  function addtodo() {
    if(inputVal != ''){
      settodos((prevtodos) =>  [...prevtodos, inputVal])
      setInputVal('')
    }
  }

  function deltodo(todoIndex) {
    settodos((prevtodos) => 
      prevtodos.filter((prevtodos, prevtodosIndex)=> {
        return prevtodosIndex != todoIndex
      })
    )
  }

  console.log(todos)
  return (
    <>
      <main>

        <div className="image-container">
          <img src={image} alt="My Image" className="side-image" />
        </div>

        <div className="main-heading">
          <p>Schedule Your Plan Now !! <FontAwesomeIcon icon={faFlagCheckered} /> <FontAwesomeIcon icon={faFlagCheckered} /></p>
        </div>

        <h1>To Do List App <FontAwesomeIcon icon={faCheckDouble} /></h1>

        <Inputcontainer inputVal={inputVal} writetodo={writetodo} addtodo={addtodo}/>

        <TodoContainer todos={todos} deltodo={deltodo}/>

      </main>
    </>
  );
}

export default App