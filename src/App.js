import React from 'react';
// import './components/TodoComponents/Todo.css'
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'

const todoData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todoList: todoData
    }
  }

  clearComplete = () => {
    const newList = this.state.todoList.filter(todo => todo.completed === false && todo.task !== undefined && todo.task !== '')
    this.addNewTodo()
    this.setState({
      todoList: newList
    })
  }

  toggleComplete = id => {
    const newList = this.state.todoList.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      } else {
        return todo
      }
    })
    this.setState({
      todoList: newList
    })
  }

  addNewTodo = todo => {
    const newTodo = {
      task: todo,
      id: Date.now(),
      completed: false
    } 
    this.setState({
      todoList: [...this.state.todoList, newTodo]
    })
  }
  
  render() {
    return (
      <div className='App'>
        <h2>Welcome to your Todo List!</h2>
        <TodoForm newTodo={this.addNewTodo} clearComplete={this.clearComplete} />
        <TodoList toggleComplete={this.toggleComplete} list={this.state.todoList} />
      </div>
    );
  }
}

export default App;
