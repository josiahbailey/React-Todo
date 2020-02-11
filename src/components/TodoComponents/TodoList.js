import React from 'react';
import Todo from './Todo'

const TodoList = ({list, toggleComplete}) => {
    return (  
        <div className='list'>TodoList
            {list.map(todo => (
                <Todo toggleComplete={toggleComplete} key={todo.id} todo={todo} />
            ))}
        </div>
    );
}
 
export default TodoList;
