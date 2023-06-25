import React, { useState } from 'react';
import Todos from './Todos';
import style from '../CSS/home.module.css';
import NewTodo from './NewTodo';
import { v4 as uuidv4 } from 'uuid';

const Home = () => {

    const handleAddTodo = (todo) => {
        setTodos((preTodos) => {
            return [...preTodos, { id: uuidv4(), todo }];
        })
    }

    const [todos, setTodos] = useState([]);

    const handleRemoveTodo = (id) => {
        setTodos((preTodos) => {
            const filteredTodos = preTodos.filter((todo) => todo.id !== id)
            return filteredTodos
        });
    }

    return (
        <div className={style.container}>
            <h1 style={{ color: 'white' }}>Todo App</h1>
            <NewTodo onAddTodo={handleAddTodo}></NewTodo>
            <Todos todos={todos} onRemoveTodo={handleRemoveTodo} />
        </div>
    )
}

export default Home
