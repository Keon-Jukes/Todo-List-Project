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
                <div className='Todo'>
                    <form  className='Todo-edit-form' onSubmit={this.handleUpdate}>
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
            result = (<div className='Todo'>
                <li className={this.props.completed ? 'Todo-task completed' : 'Todo-task'} onClick={this.handleToggle}>
                {this.props.todoTask}
                </li>
                <div className='Todo-buttons'>
                <button onClick={this.handleRemove}>
                    <i class='fas fa-trash' />
                </button>
                <button onClick={this.toggleForm}>
                    <i class='fas fa-pen' />
                </button>
                </div> 
            </div>)
        }
        return result;
    }
}

export default Todo;