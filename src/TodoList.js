import React, {Component} from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import './TodoList.css';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos: [],
        };
        this.addNewTask = this.addNewTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
        this.updateTask = this.updateTask.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
    }

    addNewTask(newTask){
        this.setState(state => ({
            todos: [...state.todos, newTask]
        }));
    }

    removeTask(id){
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        });
    }

    updateTask(id, updatedTask){
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id){
                return { ...todo, newTask: updatedTask}
            }
            return todo;
        })
        this.setState({todos: updatedTodos});
    }

    toggleCompletion(id){
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id){
                return { ...todo, completed: !todo.completed}
            }
            return todo;
        })
        this.setState({todos: updatedTodos}); 
    }

    render(){
        const todos = this.state.todos.map(listTask =>
             <Todo 
             key={listTask.id} 
             todoTask={listTask.newTask}
             id={listTask.id} 
             completed={listTask.completed}
             removeTodo={this.removeTask} 
             updateTodo={this.updateTask}
             toggleTodo={this.toggleCompletion}
             />);
       
        return(<div className='TodoList'>
            <h1>Todo List!</h1>
            <NewTodoForm  addNewTask={this.addNewTask}/>
            <ul>
            {todos}
            </ul>
        </div>)
    }
}

export default TodoList;