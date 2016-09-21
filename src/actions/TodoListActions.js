// all the actions need to do is dispatch an action

import dispatcher from "../dispatcher/Dispatcher";

// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export function createTodo(title, description="", completed=false){
  const type = 'CREATE_TODO';
  dispatcher.dispatch({
    type, title, description, completed
  });
}

export function deleteTodo(id){
  const type = 'DELETE_TODO';
  dispatcher.dispatch({
    type, id
  });
}

export function reloadTodos(){
  // this should be an async call to the backend
  dispatcher.dispatch({type: 'FETCH_TODOS'}); // notify the app i am loading more todos
  setTimeout(() => {
    dispatcher.dispatch({
      type: 'RECEIVED_TODOS',
      todos: [
        {id: getRandomInt(0,1000), title: 'Item 1 ' + Date.now(), description: 'This is an item ' + Date.now(), completed: false},
        {id: getRandomInt(0,1000), title: 'Item 2 ' + Date.now(), description: 'This is an item ' + Date.now(), completed: false},
        {id: getRandomInt(0,1000), title: 'Item 3 ' + Date.now(), description: 'This is an item ' + Date.now(), completed: false},
        {id: getRandomInt(0,1000), title: 'Item 4 ' + Date.now(), description: 'This is an item ' + Date.now(), completed: false},
      ]
    });
  }, 1000);
}
