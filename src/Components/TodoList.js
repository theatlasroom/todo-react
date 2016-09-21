import React from 'react';
import TodoListStore from '../stores/TodoListStore';
import * as TodoListActions from '../actions/TodoListActions';
import Todo from './Todo'

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    // create the state for the component
    console.log("TodoList Constructor");
    this.reloadTodos();
    this.state = {
      todos: TodoListStore.all() // initialize the state with all the data
    };

  }

  componentWillMount(){
    console.log(TodoListStore.all());

    // bind the event listener for the todostore
    // re-render when the store is updated
    TodoListStore.on('change', () => {
      this.setState({
        todos: TodoListStore.all(),
      })
    });
  }

  componentWillUnmount(){
    TodoListStore.unbind('change');
  }

  createTodo(){
    TodoListActions.createTodo(`blah ${Date.now()}`);
  }

  reloadTodos(){
    TodoListActions.reloadTodos();
  }

  render(){
    const { todos } = this.state;
    console.log("Rendering todolist", todos);

    return (
      <div className="todolist">
        <p>
          <button onClick={this.createTodo.bind(this)}>Create todo</button>
        </p>
        <ul>
          {
            todos
              .map(i => <Todo key={i.id} todo={i} /> )
          }
        </ul>
      </div>
    );
  }
}

export default TodoList;
