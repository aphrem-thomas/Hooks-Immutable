import {all, takeEvery, put} from 'redux-saga/effects';
import {increment} from '../actions/actions';

function * incSaga(){
    console.log("in incsaga");
    yield put (increment());
}

function * counterSaga(){
    console.log("in incsaga");
    yield takeEvery ('ASYNC_INC', incSaga);
}

export default function * rootSaga(){
    console.log("in root saga");
    yield all(
        [counterSaga()]
    )
}