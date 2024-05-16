import React, { useState } from "react";
import axios from "axios";

const TodoForm = ({ fetchTodos }) => {
  const [formData, setFormData] = useState({
    first: "",
    last: "",
    Address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5055/post_todo", formData);
      fetchTodos();
      setFormData({ first: "", last: "", Address: "" });
    } catch (error) {
      console.error("Error creating todo:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="first"
        value={formData.first}
        onChange={handleChange}
        placeholder="First Name"
      />
      <input
        type="text"
        name="last"
        value={formData.last}
        onChange={handleChange}
        placeholder="Last Name"
      />
      <input
        type="text"
        name="Address"
        value={formData.Address}
        onChange={handleChange}
        placeholder="Address"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
