import React, {Component} from 'react';

class Todo extends Component {
    render(){
        return (<div>
            <li>
            {this.props.todoTask}
            <button>X</button>
            <button>Edit</button>
            </li> 
        </div>)
    }
}

export default Todo;