import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {rootReducer} from './reducers/rootReducer.js'
import Router from './router/router';
import {rootSaga} from './sagas/saga';
import {createStore, applyMiddleware,combineReducers} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleWare = createSagaMiddleware();
const reducer =combineReducers({root:rootReducer})
const store= createStore(reducer,applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(rootSaga);

class App extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <Router/>
            </Provider>
        );
    }
}

ReactDOM.render(<App/>,document.getElementById('root'));