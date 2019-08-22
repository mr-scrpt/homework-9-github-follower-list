import { createAction } from 'redux-actions';

// Здесь не хватает экшенов для модуля FOLLOWERS.
// FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE

export const fetchRequest = createAction('FOLLOWER/FETCH_REQUEST');
export const fetchSuccess = createAction('FOLLOWER/FETCH_SUCCESS');
export const fetchFailure = createAction('FOLLOWER/FETCH_FAILURE');