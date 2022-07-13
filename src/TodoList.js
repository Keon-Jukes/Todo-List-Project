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
    }

    addNewTask(newTask){
        this.setState(state => ({
            todos: [...state.todos, newTask]
        }));
    }

    render(){
        const todos = this.state.todos.map(listTask => <li key={listTask.id}><Todo todoTask={listTask.newTask} /></li>);
       
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