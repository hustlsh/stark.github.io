import React from 'react';
import ReactDOM from 'react-dom';

import './css/index.css';
import ReduxApp from './reduxApp/App';
import ReactReduxApp from './reactReduxApp/App';

/**
 * 主入口
 */
ReactDOM.render(
    <div>
        <ReduxApp />
        <ReactReduxApp />
    </div>,
    document.getElementById('root')
);

console.log('hello worlddd');

if (module.hot) {
    module.hot.accept();
}
