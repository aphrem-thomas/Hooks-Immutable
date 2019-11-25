import React from 'react';
import {BrowserRouter, Route, Link,Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import Loadable from 'react-loadable';

const history = createBrowserHistory();

const Loading = ()=>(<div>{"Loading..."}</div>);

const Main = Loadable({
    loader:()=> import('../Pages/Main/Main'),
    loading:Loading,
})

const Dummy = Loadable({
    loader:()=> import('../Pages/DummyPage/dummy'),
    loading:Loading,
})

const Router = ()=>{
    return(
        <BrowserRouter history={history}>
            <Switch>
                <Route exact path='/' component={Main}/>
                <Route exact path='/dummy' component={Dummy}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;