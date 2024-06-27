// src/components/TodoItem.js
import React, { useState } from 'react';

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState(todo.text);

    const handleUpdate = () => {
        updateTodo(todo._id, { ...todo, text });
        setIsEditing(false);
    };

    return (
        <li>
            {isEditing ? (
                <>
                    <input 
                        type="text" 
                        value={text} 
                        onChange={(e) => setText(e.target.value)} 
                    />
                    <button onClick={handleUpdate}>Save</button>
                    <button onClick={() => setIsEditing(false)}>Cancel</button>
                </>
            ) : (
                <>
                    <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        {todo.text}
                    </span>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                    <button onClick={() => updateTodo(todo._id, { ...todo, completed: !todo.completed })}>
                        {todo.completed ? 'Undo' : 'Complete'}
                    </button>
                    <button onClick={() => deleteTodo(todo._id)}>Delete</button>
                </>
            )}
        </li>
    );
};

export default TodoItem;
