import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions';
import {fetchRequest, fetchSuccess, fetchFailure} from './actions'
import {createSelector} from 'reselect';


// Обратите внимание на тесты reducer.Test.js
// Они помогут вам написать редьюсер

const isLoading = handleActions({
  [fetchRequest]: () => true,
  [fetchFailure]: () => false,
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

// Селекторы
// export const getIsLoading = state => state.followers.isLoading;
// export const getFollowersInfo = state => state.followers.data;

export const getIsLoading = createSelector(
  state => state.followers.isLoading,
  isLoading => isLoading
);

export const getFollowersInfo = createSelector(
  state => state.followers.data,
  data => data
);
