import React from 'react';
import * as TodoListActions from '../actions/TodoListActions';

class Todo extends React.Component {
  constructor(props) {
    super(props)
  }

  deleteTodo(){
    const { todo } = this.props;
    TodoListActions.deleteTodo(todo.id);
  }

  render(){
    const { todo } = this.props;

    return(
      <li>
        <input type="checkbox" checked={todo.completed} />
        <h4>{ todo.title }</h4>
        <p>{ todo.description }</p>
        <button onClick={this.deleteTodo.bind(this)}>DELETE X</button>
      </li>
    );
  }
}

export default Todo;
