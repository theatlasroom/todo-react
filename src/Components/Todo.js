import React from 'react';

class Todo extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    const { todo } = this.props;

    return(
      <li>
        <input
          type="checkbox"
          checked={todo.completed}
        />
        &nbsp;
        { todo.title }
      </li>
    );
  }
}

export default Todo;
