import React, { useState, useMemo } from 'react';
import Todo from './todo';

import './index.css'


export default function TodoList() {

    const [todoList, setTodoList] = useState(
        JSON.parse(localStorage.getItem('todoList')) || []
    );
    
    const [searchName, setSearchName] = useState('');




    const deleteTodo = (id) => {
        setTodoList((prevTodoList) => {
            const updatedTodoList = prevTodoList.filter((todo) => todo.id !== id);
            localStorage.setItem('todoList', JSON.stringify(updatedTodoList));
            return updatedTodoList;
        });
    };

    const handleChange = (event) => {
        setSearchName(event.target.value);
    };

    const fullTodoList = useMemo(() => {
        if (searchName.length === 0) {
            return todoList;
        } 
        else { 
            return todoList.filter((todo) => {
                return todo.name.toLowerCase().includes(searchName.toLowerCase());
            });
        }
    }, [todoList, searchName]);

    return (
        <div className='searchNList'>
            <input className='search' type="text" placeholder="Search"
                onChange={handleChange}
                value={searchName}/>
            <div>
                {fullTodoList.map((todo) => (
                    <Todo key={todo.id} deleteTodo={deleteTodo} todo={todo} />
                ))}
            </div>
        </div>
    );
}