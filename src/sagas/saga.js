import {all, takeEvery, put} from 'redux-saga/effects';

function * incSaga(){
    
}

function * counterSaga(){
    yield takeEvery ('ASYNC_INC', incSaga);
}



export function * rootSaga(){
    yield all(
        counterSaga()
    )
}