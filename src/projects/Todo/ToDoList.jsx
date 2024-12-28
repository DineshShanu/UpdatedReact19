import React from "react";
import { MdCheckCircle, MdDelete } from "react-icons/md";

const ToDoList = ({ data, checked, onhandleDeleteToDo, onHandleCheckedTodo }) => {
  return (
    <>
      <li className="todo-item">
        <span
          style={{ marginTop: "-10px" }}
          className={checked ? "checkList" : "notCheckList"}
        >
          {data}
        </span>
        <button className="check-btn" onClick={() => onHandleCheckedTodo(data)}>
          <MdCheckCircle
            style={{
              height: "35px",
              marginBottom: "42px",
              marginLeft: "-6px",
            }}
          />
        </button>
        <button className="delete-btn" onClick={() => onhandleDeleteToDo(data)}>
          <MdDelete
            style={{
              height: "35px",
              marginBottom: "39px",
              marginLeft: "-5px",
            }}
          />
        </button>
      </li>
    </>
  );
};

export default ToDoList;
