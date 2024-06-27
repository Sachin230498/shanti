// src/components/TodoList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState('');

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const res = await axios.get('http://localhost:3344/api/todos');
                // console.log("df",res.data);
                setTodos(res.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchTodos();
    }, []);

    const addTodo = async () => {
       
            try {
                const res = await axios.post('http://localhost:3344/api/todos', { text });
                setTodos([...todos, res.data]);
                setText('');
            } catch (err) {
                console.error(err);
            }
        
    };

    const updateTodo = async (id, updatedTodo) => {
        try {
            const res = await axios.put(`http://localhost:3344/api/todos/${id}`, updatedTodo);
            setTodos(todos.map(todo => (todo._id === id ? res.data : todo)));
        } catch (err) {
            console.error(err);
        }
    };

    const deleteTodo = async (id) => {
        try {
            await axios.delete(`http://localhost:3344/api/todos/${id}`);
            setTodos(todos.filter(todo => todo._id !== id));
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h1>Todo List</h1>
            <input 
                type="text" 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
                placeholder="Add a new todo"
            />
            <button onClick={addTodo}>Add</button>
            <ul>
                {todos.map(todo => (
                    <TodoItem 
                        key={todo._id} 
                        todo={todo} 
                        updateTodo={updateTodo} 
                        deleteTodo={deleteTodo}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
