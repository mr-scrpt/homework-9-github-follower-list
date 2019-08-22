import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {fetchRequest, fetchSuccess, fetchFailure} from './actions'
import {createSelector} from "reselect";

// Обратите внимание на тесты, они помогут вам написать код редьюсера


const isFetching = handleActions({
  [fetchRequest]: () => true,
  [fetchFailure]: () => true,
  [fetchSuccess]: () => false
}, false);

const data = handleActions({
  [fetchRequest]: () => [],
  [fetchSuccess]: (_state, action) => action.payload
}, []);

const error = handleActions({
  [fetchRequest]: () => null,
  [fetchFailure]: (_state, action) => action.payload
}, null);

export default combineReducers({
  isFetching,
  data,
  error
});

//Селекторы
export const getIsFetching = createSelector(
  state => state.user.isFetching,
  isLoading => isLoading
);


export const getUserInfo = createSelector(
  state => state.user.data,
  data => data
);