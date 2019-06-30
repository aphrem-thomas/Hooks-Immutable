import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Router from './router/router';

class App extends React.Component{
    render(){
        return(
           <Router/>
        );
    }
}

ReactDOM.render(<App/>,document.getElementById('root'));