import React from 'react';
import Todo from './Todo'

const TodoList = ({list}) => {
    return (  
        <div>TodoList
            {list.map(task => (
                <Todo key={task.id} todo={task} />
            ))}
        </div>
    );
}
 
export default TodoList;
