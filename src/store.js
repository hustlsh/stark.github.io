import {createStore, combineReducers, bindActionCreators} from 'redux';
import actionCreator from './actions';
import reducers from './reducers';

const store = createStore(combineReducers(reducers));

export const actions = bindActionCreators(actionCreator, store.dispatch);

export default store;