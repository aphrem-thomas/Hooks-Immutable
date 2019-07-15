import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Router from './router/router';
import {Provider} from 'react-redux';
import configureStore from './configureStore';

const store = configureStore();

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