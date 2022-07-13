import React, {Component} from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos: [],
        };
        this.addNewTask = this.addNewTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
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

    render(){
        const todos = this.state.todos.map(listTask => <Todo key={listTask.id} todoTask={listTask.newTask} removeTodo={this.removeTask} id={listTask.id} />);
       
        return(<div>
            <h1>Todo List!</h1>
            <NewTodoForm  addNewTask={this.addNewTask}/>
            <ul>
            {todos}
            </ul>
        </div>)
    }
}

export default TodoList;