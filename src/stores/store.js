import { EventEmitter } from 'events';
//import constants from '/src/constants/constants';

const vent = {
  CHANGE_EVENT: 'change'
};

export default class Store extends EventEmitter {
  emitChange() {
    this.emit(vent.CHANGE_EVENT);
  }
  addChangeListener(callback) {
    this.on(vent.CHANGE_EVENT, callback);
  }
  removeChangeListener(callback) {
    this.removeListener(vent.CHANGE_EVENT, callback);
  }
}
