import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoForm from "./components/Todoform";
import TodoList from "./components/Todolist";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get("http://localhost:5055/get_todos");
      setTodos(response.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm fetchTodos={fetchTodos} />
      <TodoList todos={todos} fetchTodos={fetchTodos} />
    </div>
  );
};

export default App;
