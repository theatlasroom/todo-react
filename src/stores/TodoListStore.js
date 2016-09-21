
import Store from './store';
import dispatcher from '../dispatcher/Dispatcher';
import * as _ from 'lodash';

// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

class TodoListStore extends Store {
  constructor(){
    super();
    this._items = [];
  }

  createTodo(title, description="", completed=false){
    const id = getRandomInt(0,1000);
    this._items.push({
      id,
      title,
      description,
      completed
    });

    this.emitChange(); // inherited from the store base class
  }

  reloadTodos(todos){
    console.log("Reloading todos");
    console.log(todos);
    this._items = todos;
    this.emitChange(); // let the component know it needs to update
  }

  deleteTodo(id){
    console.log("Deleting " + id);
    _.remove(this._items, { id });
    this.emitChange();
  }

  all(){
    return this._items;
  }

  handler(action){
    console.log(`TodoListStore received ${action.type}`);
    console.log(action);
    switch(action.type){
      case "CREATE_TODO": {
        const { title, description, completed } = action;
        this.createTodo(title, description, completed);
      }
      case "DELETE_TODO": {
        const { id } = action;
        this.deleteTodo(id);
        console.log(this._items);
      }
      case "RECEIVED_TODOS": {
        this.reloadTodos(action.todos);
      }
    }
  }
}


// return a singleton
const todoListStoreInstance = new TodoListStore();

// register a new listener (TodoListStore)
// bind the correct context for this
dispatcher.register(todoListStoreInstance.handler.bind(todoListStoreInstance));
window.dispatcher = dispatcher;

export default todoListStoreInstance;
