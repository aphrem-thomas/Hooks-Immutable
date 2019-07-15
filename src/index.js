import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {counterApp} from './reducers/rootReducer';
import Router from './router/router';
import rootSaga from './sagas/saga';
import {createStore, applyMiddleware,combineReducers, compose} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleWare = createSagaMiddleware();
const reducer =combineReducers({count:counterApp})
// const store= createStore(reducer,compose(
//             applyMiddleware(sagaMiddleWare),
//             window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   ));

const store= createStore(reducer,
    applyMiddleware(sagaMiddleWare),
);
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