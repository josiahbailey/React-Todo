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
    return (  
        <div onClick={() => toggleComplete(todo.id)} className={checkComplete()}>
        {todo.task}
        </div>
    );
}
 
export default Todo;