import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions';
import {fetchRequest, fetchSuccess, fetchFailure} from './actions'
import {createSelector} from 'reselect';


// Обратите внимание на тесты reducer.Test.js
// Они помогут вам написать редьюсер

const isFetching = handleActions({
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
  isFetching,
  data,
  error
});

// Селекторы
// export const getIsFetching = state => state.followers.isFetching;
// export const getFollowersInfo = state => state.followers.data;

export const getIsFetching = createSelector(
  state => state.followers.isFetching,
  isFetching => isFetching
);

export const getFollowersInfo = createSelector(
  state => state.followers.data,
  data => data
);
