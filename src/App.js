import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';
import AddForm from './AddForm';

class App extends Component {

 state = {
      todos: [
        {id: 1, content: "buy some milk"},
        {id: 2, content: "go to barbershop"},
      ],  
  } 

  deleteTodo = (id) => {
   const todos = this.state.todos.filter(todo =>{
    return todo.id !== id;
   });

   this.setState({
      todos
   });
  }

  addTodo = (todo) =>{
    todo.id = Math.random();
    const todos = [...this.state.todos, todo];
    this.setState({
        todos
    });
  }

  render() {
    return (
      <div class="container">
      <h1 className="center blue-text"> Todo </h1>
      <Todo todo = {this.state.todos} deleteTodo = {this.deleteTodo}/>
      <AddForm addTodo = {this.addTodo} />
      </div>
    );
  }
}

export default App;
