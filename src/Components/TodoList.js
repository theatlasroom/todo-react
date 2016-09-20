import React from 'react';


import Todo from './Todo'

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    console.log(this.props);
    return (
      <div className="todolist">
        <ul>
          {
            this.props.items
              .map(i => <Todo todo={i} /> )
          }
        </ul>
      </div>
    );
  }
}

export default TodoList;
