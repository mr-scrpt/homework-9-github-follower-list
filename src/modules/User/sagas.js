import { takeLatest, select, put, call, fork } from 'redux-saga/effects';
import {fetchRequest, fetchSuccess, fetchFailure} from './actions';
import {getApiKey} from "../Auth";
import {getUserInfo} from './api'

function* fetchUserWatcher() {

  yield takeLatest(fetchRequest, fetchUserFlow);
}


export function* fetchUserFlow(action) {
  const user = action.payload;
  try {
    const apiKey = yield select(getApiKey);
    const res = yield call(getUserInfo, apiKey, user);
    console.log(res);
    yield put(fetchSuccess(res));

  }catch (e) {
    yield put(fetchFailure(e));
  }
}

export default function*() {
  yield fork(fetchUserWatcher);
}
