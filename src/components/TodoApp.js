import React, { useState } from "react";
import Todo from "./Todo";

const TodoApp = () => {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);

  function handleChange(event) {
    console.log(event.target.value);
    setTitle(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      complete: false,
    };
    const temp = [...todos];
    temp.unshift(newTodo);
    setTodos(temp);
  }

  function handleUpdate(id, value) {
    const temp = [...todos];
    const item = temp.find((item) => item.id === id);
    item.title = value;
    setTodos(temp);
  }

  return (
    <div className="todoContainer">
      <form className="todoCreateForm" onSubmit={handleSubmit}>
        <input type="text" placeholder="" onChange={handleChange} />
        <input
          onClick={handleSubmit}
          type="submit"
          value="create todo"
          className="buttonCreate"
        />
      </form>
      <div className="todosContainer">
        {todos.map((item) => (
          <Todo key={item.id} item={item} onUpdate={handleUpdate} />
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
