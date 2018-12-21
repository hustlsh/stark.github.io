import React from 'react';
import { connect } from 'react-redux';

function TodoList(props) {
    const { todos } = props;
    return (
        <ul>
            {todos && todos.map((todo, index) => (
                <li key={index}>{todo}</li>
            ))}
        </ul>
    );
}

const mapStateToProps = state => {
    const { todos = [], filter = '' } = state
    return {
        todos: todos.filter(todo => todo.includes(filter))
    }
}

TodoList = connect(mapStateToProps)(TodoList)

export default TodoList