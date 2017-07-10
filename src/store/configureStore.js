import { createStore, applyMiddleware } from 'redux';
import rootReduser from '../redusers/index';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  return createStore(
    rootReduser,
    initialState,
    applyMiddleware(thunk, reduxImmutableStateInvariant())
  );
}
