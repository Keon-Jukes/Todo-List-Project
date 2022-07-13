import React, {Component} from 'react';
import './Todo.css';

class Todo extends Component {
    constructor(props){
        super(props)
        this.state = {
            isEditing: false,
            newTask: this.props.todoTask,
        }
        this.handleRemove = this.handleRemove.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }
    handleRemove(){
        this.props.removeTodo(this.props.id);
    }

    toggleForm(){
        this.setState({isEditing: !this.state.isEditing});
    }

    handleUpdate(evt){
        evt.preventDefault();
        this.props.updateTodo(this.props.id, this.state.newTask);
        this.setState({isEditing: false});
    }
    //controlled input with onCHange and value
    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    handleToggle(evt) {
        this.props.toggleTodo(this.props.id);
      }

    render(){
        let result;
        if(this.state.isEditing){
            result = (
                <div>
                    <form onSubmit={this.handleUpdate}>
                        <input type='text' 
                        value={this.state.newTask} 
                        name='newTask'
                         id='newTask' 
                        onChange={this.handleChange}/>
                        <button>Save</button>
                    </form>
                </div>
            )
        } else {
            result = (<div>
                <li className={this.props.completed ? 'Completed' : ''} onClick={this.handleToggle}>
                {this.props.todoTask}
                </li> 
                <button onClick={this.handleRemove}>X</button>
                <button onClick={this.toggleForm}>Edit</button>
            </div>)
        }
        return result;
    }
}

export default Todo;