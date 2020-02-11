import React, {useState} from 'react';

const TodoForm = ({newTodo, clearComplete}) => {
    const [todo, setTodo] = useState()
    const handleChange = e => {
        setTodo(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault()
        newTodo(todo)
        setTodo('')
    }
    return (  
        <form onSubmit={handleSubmit}>
            <input value={todo} onChange={handleChange} type='text' placeholder='New Todo Item' />
            <button onCLick={clearComplete}>Clear Completed</button>
        </form>
    );
}
 
export default TodoForm;