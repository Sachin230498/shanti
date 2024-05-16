import React from "react";
import TodoItem from "./Todoitem";

const TodoList = ({ todos, fetchTodos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo._id} todo={todo} fetchTodos={fetchTodos} />
      ))}
    </ul>
  );
};

export default TodoList;
