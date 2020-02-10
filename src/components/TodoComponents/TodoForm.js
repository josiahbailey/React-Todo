import React, {useState} from 'react';

const TodoForm = ({newTodo}) => {
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
        </form>
    );
}
 
export default TodoForm;