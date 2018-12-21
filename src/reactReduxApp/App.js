import React, { Component } from 'react';
import FilterInput from './FilterInput';
import TodoList from './TodoList';
import { Provider } from 'react-redux';
import store from '../store';
import AddTodo from './AddTodo';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AddTodo forwardRef={React.createRef()} />
                <FilterInput />
                <TodoList />
            </Provider>
        );
    }
}