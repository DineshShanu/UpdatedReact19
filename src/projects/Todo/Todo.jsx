import React, { useEffect, useState } from "react";
import "../Todo/Todo.css";
import TodoForm from "./TodoForm";
import ToDoList from "./ToDoList";
import TodoDate from "./TodoDate";
import { getLocalStorageTodoData, setLocalStorageTodoData } from "./ToDoLocalStorage";

const Todo = () => {
  const [task, setTask] = useState(() => getLocalStorageTodoData());

  const handleOnSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;

    if (!content) return;

    //if (task.includes(content)) return;
    const ifTodoContentMatched = task.find((data) => data.content === content);
    if (ifTodoContentMatched) return;

    setTask((prevData) => [...prevData, { id, content, checked }]);
  };

  //set LocalStorage
  setLocalStorageTodoData(task);

  const handleDeleteToDo = (curValue) => {
    const updatedTask = task.filter((data) => data.content !== curValue);
    setTask(updatedTask);
  };

  const handleCheckedTodo = (content) => {
    const updatedTask = task.map((data) => {
      if (data.content === content) {
        return { ...data, checked: !data.checked };
      } else {
        return data;
      }
    });
    setTask(updatedTask);
  };
  const clearListData = () => {
    setTask([]);
  };

  return (
    <>
      <section className="todo-container">
        <header>
          <h1>Todo List</h1>
          <TodoDate />
        </header>
        <TodoForm onAddToDo={handleOnSubmit} />
        <section className="myUnOrdList">
          <ul>
            {task.map((data) => (
              <ToDoList
                key={data.id}
                data={data.content}
                checked={data.checked}
                onhandleDeleteToDo={handleDeleteToDo}
                onHandleCheckedTodo={handleCheckedTodo}
              />
            ))}
          </ul>
        </section>
        <section>
          <button className="clear-btn" onClick={clearListData}>
            Clear
          </button>
        </section>
      </section>
    </>
  );
};

export default Todo;
