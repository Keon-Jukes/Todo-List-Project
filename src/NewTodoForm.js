import React, {Component} from 'react';
import { v4 as uuid } from 'uuid';

class NewTodoForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            newTask: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(evt){
        evt.preventDefault();
        this.props.addNewTask({...this.state, id: uuid()});
        this.setState({newTask: '', id: uuid(),})
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }
    render(){
        return(<div>
            <form onSubmit={this.handleSubmit}>
            <label>Create a task: </label>
            <input name='newTask' id='newTask' placeholder='add task' value={this.state.newTask} onChange={this.handleChange} />
            <button>Add Task!</button>
            </form>
        </div>)
    }
}

export default NewTodoForm;