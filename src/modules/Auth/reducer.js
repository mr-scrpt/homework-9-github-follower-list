import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions';
import {addApiKey} from './actions';

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
export const getIsAuthorized = state=> state.autorized;
export const getApiKey = state=> state.apiKey;