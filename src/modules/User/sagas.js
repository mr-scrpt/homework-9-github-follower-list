import { takeLatest, select, put, call, fork } from 'redux-saga/effects';



function* fetchUserWatcher() {
  yield takeLatest(null, fetchUserFlow);
}


export function* fetchUserFlow(action) {

}

export default function*() {

}
