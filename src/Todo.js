import React, {Component} from 'react';

class Todo extends Component {
    render(){
        return (<div>
            {this.props.todoTask}
        </div>)
    }
}

export default Todo;