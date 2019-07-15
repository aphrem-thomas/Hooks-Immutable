import { all, takeEvery, put } from 'redux-saga/effects';
import { increment } from '../actions/actions';

function* incSaga() {
    yield put(increment());
}

function* counterSaga() {
    yield takeEvery('ASYNC_INC', incSaga);
}

export default function* rootSaga() {
    console.log("in root saga");
    yield all(
        [counterSaga()]
    )
}