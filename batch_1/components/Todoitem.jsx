import React, { useState } from "react";
import axios from "axios";

const TodoItem = ({ todo, fetchTodos }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState({ ...todo });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTodo({ ...updatedTodo, [name]: value });
  };

  const handleUpdate = async () => {
    try {
      await axios.put(
        `http://localhost:5055/update_todo/${todo._id}`,
        updatedTodo
      );
      fetchTodos();
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5055/delete_todo/${todo._id}`);
      fetchTodos();
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <li>
      {isEditing ? (
        <div>
          <input
            type="text"
            name="first"
            value={updatedTodo.first}
            onChange={handleInputChange}
            placeholder="First Name"
          />
          <input
            type="text"
            name="last"
            value={updatedTodo.last}
            onChange={handleInputChange}
            placeholder="Last Name"
          />
          <input
            type="text"
            name="Address"
            value={updatedTodo.Address}
            onChange={handleInputChange}
            placeholder="Address"
          />
          <button onClick={handleUpdate}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <div>
            {todo.first} {todo.last} - {todo.Address}
          </div>
          <div>
            <button onClick={() => setIsEditing(true)}>Update</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      )}
    </li>
  );
};

export default TodoItem;
