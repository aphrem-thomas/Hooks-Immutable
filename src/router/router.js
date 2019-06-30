import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import Loadable from 'react-loadable';

const history = createBrowserHistory();

const Loading = ()=>(<div>{"Loading..."}</div>);

const Main = Loadable({
    loader:()=> import('../Pages/Main/Main'),
    loading:Loading,
})

const Router = ()=>{
    return(
        <BrowserRouter history={history}>
            <Route path='/' component={Main}/>
        </BrowserRouter>
    );
}

export default Router;