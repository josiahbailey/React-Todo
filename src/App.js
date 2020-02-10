import React from 'react';
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
  addNewTodo = task => {
    const newTodo = {
      task: task,
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
        <h2>Welcome to your Todo App!</h2>
        <TodoForm newTodo={this.addNewTodo} />
        <TodoList list={this.state.todoList} />
      </div>
    );
  }
}

export default App;
