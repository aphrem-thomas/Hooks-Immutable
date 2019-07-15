import {combineReducers,createStore,applyMiddleware,compose} from 'redux';
import createSagaMiddleware from 'redux-saga'
import {counterApp as rootReducer} from './reducers/rootReducer';
import rootSaga from './sagas/saga';

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const reduxExtension =  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
    const middleWares = sagaMiddleware;
    const reducer = combineReducers({root:rootReducer});
    const store = createStore(reducer,compose(applyMiddleware(middleWares)));
    sagaMiddleware.run(rootSaga);
    return store;
}


export default configureStore;