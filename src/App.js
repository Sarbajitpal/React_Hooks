import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { text: "Learn about React", isCompleted: false},
    { text: "Meet friend for lunch", isCompleted: false},
    { text: "Build really cool todo app", isCompleted: false }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    //newTodos[index].isCompleted = true;
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={todo.key}
            todo={todo}
            index={index}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

function Todo({ todo, index, completeTodo, removeTodo }) {
    //console.log(this);
    return (
        <div
          className="todo"
          style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
        >
          {todo.text}
          <div>
            <button onClick={() => completeTodo(index)}> {todo.isCompleted?"Reset":"Complete "} </button>
            <button onClick={() => removeTodo(index)}> x </button>
          </div>
        </div>
    );
}

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (value == "") return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
};

export default App;
