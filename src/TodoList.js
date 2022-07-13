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
        return(<div>
            <h1>Todo List!</h1>
            <NewTodoForm  addNewTask={this.addNewTask}/>
            {this.state.todos.length > 0 ? (<ul>{this.state.todos.map(listTask => <li key={listTask.id}><Todo todoTask={listTask.newTask} /></li>)} </ul>)
             : (<div>No task yet..</div>)}
        </div>)
    }
}

export default TodoList;