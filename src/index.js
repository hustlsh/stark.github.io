import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, hashHistory, Route, Link } from 'react-router-dom';

import './css/index.css';
import ReduxApp from './reduxApp/App';
import ReactReduxApp from './reactReduxApp/App';

function Main(props) {
    const { match } = props;
    return (
        <div>
            {JSON.stringify(props) || 'hello world!'}
            <p>
                <Link to='/redux'>redux</Link>
                <Link to='/react-redux'>react-redux</Link>
            </p>
            <Route path='/react-redux' component={ReactReduxApp} />
            <Route path='/redux' component={ReduxApp} />
        </div>
    )
}

function Bottom() {
    return (
        <div>
            <Link to='/1?pp=3'>home</Link>
            <Link to='/redux'>redux</Link>
            <Link to='/react-redux'>react-redux</Link>
        </div>
    );
}


/**
 * 主入口
 */
ReactDOM.render(
    <Router>
        <Switch>
            <Route path='/' component={Main} />
            <Route component={Bottom} />
        </Switch>
    </Router>,
    document.getElementById('root')
);

console.log('hello world');

if (module.hot) {
    module.hot.accept();
}
