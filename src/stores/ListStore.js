
import { EventEmitter } from 'events';
import { dispatch } from '../dispatcher/Dispatcher'; // Grab the dispatch action

import Store from './store';

class ListStore extends Store {
  constructor(){
    super();
    this._items = [
      {title: 'Item 1', description: 'This is an item', completed: false},
      {title: 'Item 2', description: 'This is an item', completed: false},
      {title: 'Item 3', description: 'This is an item', completed: false},
      {title: 'Item 4', description: 'This is an item', completed: false},
    ];
  }

  get items(){
    return this._items;
  }
}

// return a singleton
const listStoreInstance = new ListStore();
export default listStoreInstance;
