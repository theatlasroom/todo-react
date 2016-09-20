// expose the dispatcher functionality we need
import { Dispatcher } from 'flux';

const flux = new Dispatcher();

export function register(callback) {
  return flux.register(callback);
}

export function unregister(dispatchToken) {
  return flux.unregister(dispatchToken);
}

export function dispatch(actionType, action) {
  flux.dispatch(actionType, action);
}
