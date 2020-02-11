import React from 'react';
import './Todo.css'

const Todo = ({todo, toggleComplete}) => {
    //const id = todo.id
    const checkComplete = () => {
        if (todo.completed === true) {
            return 'completed todoDiv'
        } else {
            return 'todoDiv'
        }
    }
    const renderCard = () => {
        if (todo.task !== undefined && todo.task !== '') {
            return (
            <div onClick={() => toggleComplete(todo.id)} className={checkComplete()} id={todo.id}>
            <p className='todoP'>{todo.task}</p>
            </div>
            )
        }
    }
    return (  
        <div>
            {renderCard()}
        </div>
    );
}
 
export default Todo;