import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions';
import {fetchRequest, fetchSuccess, fetchFailure} from './actions'

// Обратите внимание на тесты reducer.Test.js
// Они помогут вам написать редьюсер

const isLoading = handleActions({
  [fetchRequest]: () => true,
  [fetchFailure]: () => true,
  [fetchSuccess]: () => false
}, false);

const data = handleActions({
  [fetchRequest]: () => [],
  [fetchSuccess]: (_state, action) => action.payload
}, null);

const error = handleActions({
  [fetchRequest]: () => null,
  [fetchFailure]: (_state, action) => action.payload
}, null);

export default combineReducers({
  isLoading,
  data,
  error
});