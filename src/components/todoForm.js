import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './index.css'


export default function TodoForm() {
    const { id } = useParams();
    const navigate = useNavigate();


    const [todo, setTodo] = useState({
        id: id || uuidv4(),
        name: '',
        description: '',
    });



    const UpdateTodo = (event) => {
        const updatedTodoList = JSON.parse(localStorage.getItem('todoList')) || [];
        const TodoIndex = updatedTodoList.findIndex((x) => x.id === todo.id);

        if (TodoIndex !== -1) {
            updatedTodoList[TodoIndex] = todo;
        } 
        else {
            updatedTodoList.push(todo);
        }

        localStorage.setItem('todoList', JSON.stringify(updatedTodoList));
        navigate('/');
    };

    const handleCancel = () => {
        navigate('/');
    };

    const handleTodoChange = (event) => {
        setTodo({ ...todo, [event.target.name]: event.target.value });
    };


    return (
        <form className='form' onSubmit={UpdateTodo}>
            <input
                className='createText' type="text" placeholder='Name' name="name"
                value={todo.name}
                onChange={handleTodoChange}/>

            <input
                className='createText' type="text" placeholder='Description' name="description"
                value={todo.description}
                onChange={handleTodoChange}/>

            <div className='buttons'>
                <button className='editButton' type="submit">
                    Save
                </button>
                <button className='deleteButton' type="button" onClick={handleCancel}>
                    Cancel
                </button>
            </div>
        </form>
    );
}