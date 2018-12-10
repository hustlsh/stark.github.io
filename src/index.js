import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './css/index.css'

/**
 * 主入口
 */
ReactDOM.render(<App />, document.getElementById('root'));

console.log('hello worlddd');

if (module.hot) {
    module.hot.accept();
}
