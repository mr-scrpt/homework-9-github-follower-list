import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions';
import {addApiKey} from './actions';
import {createSelector} from 'reselect';

// В этом редьюсере вам нужно будет обрабатывать addApiKey экшен.

// Имеет смысл определить селекторы
// getIsAuthorized, getApiKey

const apiKey = handleActions({
  [addApiKey]: (_state, action) => action.payload
}, null);

const autorized = handleActions({
  [addApiKey]: () => true
}, false);

export default combineReducers({
  apiKey,
  autorized
});


//Селекторы

/*
export const getIsAuthorized = state => state.auth.autorized;
export const getApiKey = state => state.auth.apiKey;
*/

export const getIsAuthorized = createSelector(
  state => state.auth.autorized,
  autorized => autorized
);

export const getApiKey = createSelector(
  state => state.auth.apiKey,
  apiKey => apiKey
);


