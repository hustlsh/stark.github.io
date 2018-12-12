import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from './components/App';
import 'react-redux';
import './css/index.css';
import store from './store';

/**
 * 主入口
 */
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

console.log('hello worlddd');

if (module.hot) {
    module.hot.accept();
}
