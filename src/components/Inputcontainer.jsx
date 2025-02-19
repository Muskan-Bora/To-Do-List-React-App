import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Inputcontainer({inputVal, writetodo, addtodo}) {
  return (
    <div className="input-container">
      <input type="text" value={inputVal} onChange={writetodo} placeholder=" Enter Your Task" />

      <button onClick={addtodo}>
        <b><FontAwesomeIcon icon={faPlus} /> Add Your Task</b>
      </button>
    </div>
  );
}

export default Inputcontainer;


