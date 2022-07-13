import React, {Component} from 'react';

class Todo extends Component {
    constructor(props){
        super(props)
        this.state = {}
        this.handleRemove = this.handleRemove.bind(this);
    }
    handleRemove(){
        this.props.removeTodo(this.props.id);
    }

    render(){
        return (<div>
            <li>
            {this.props.todoTask}
            <button onClick={this.handleRemove}>X</button>
            <button>Edit</button>
            </li> 
        </div>)
    }
}

export default Todo;