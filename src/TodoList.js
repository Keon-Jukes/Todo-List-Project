import React, {Component} from 'react';
import NewTodoForm from './NewTodoForm';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos: []
        };
        this.addTask = this.addTask.bind(this);
    }

    addTask(newTask){
        this.setState(state => ({
            todos: [...state.todos, newTask]
        }));
    }

    render(){
        return(<div>
            <NewTodoForm  addTask={this.addTask}/>
            {this.state.todos.length > 0 ? (<div>{this.state.todos.map(listTask => <div key={listTask.id}><Todo todoTask={listTask.newTask} /></div>)} </div>)
             : (<div>No items available..</div>)}
        </div>)
    }
}

export default TodoList;