import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Router from './router/router';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {rootReducer} from './rootReducer/reducer';
import rootSaga from './rootSagas/saga';

// const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer);
// sagaMiddleware.run(rootSaga);

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