import {createStore, combineReducers, bindActionCreators, applyMiddleware} from 'redux';
import actionCreator from './actions';
import reducers from './reducers';
import middlewares from './middleware';

const store = createStore(combineReducers(reducers), applyMiddleware(...middlewares));

[1,2,3].map(id=>()=>console.log(id)).reduce((a, b) => (...args) => a(b(...args)))()

export const actions = bindActionCreators(actionCreator, store.dispatch);

export default store;