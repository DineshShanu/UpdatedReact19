import React, { useState } from "react";

const TodoForm = ({ onAddToDo }) => {
  const [inputValue, setInputValue] = useState({id: "", content: "", checked: false});

  const handleOnChange = (value) => {
    setInputValue({ id: value, content: value, checked: false });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    onAddToDo(inputValue);
    setInputValue({ id: "", content: "", checked: false });
  };

  return (
    <>
      <section className="form">
        <form onSubmit={handleOnSubmit}>
          <div>
            <input
              type="text"
              className="todo-input"
              autoComplete="off"
              value={inputValue.content}
              onChange={(e) => handleOnChange(e.target.value)}
            />
          </div>
          <div>
            <button type="submit" className="todo-btn">
              Add Task
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default TodoForm;
