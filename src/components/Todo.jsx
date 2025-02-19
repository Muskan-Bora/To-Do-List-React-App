import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function Todo({todo, index, deltodo}) {
  return (
    <div className="todo">
      <p>
        <b>{todo}</b>
      </p>

      <div className="actions">
        <input className="check-box" type="checkbox" />
        <button onClick={() => deltodo(index)}><FontAwesomeIcon icon={faTrash} /> Delete</button>
      </div>
    </div>
  );
}

export default Todo;
