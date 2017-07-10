import { createStore, applyMiddleware } from 'redux';
import rootReduser from '../redusers/index';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState) {
  return createStore(
    rootReduser,
    initialState,
    applyMiddleware(reduxImmutableStateInvariant())
  );
}
