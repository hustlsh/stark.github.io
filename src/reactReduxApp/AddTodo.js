import React from 'react';
import { connect } from 'react-redux';
import { actions } from '../store';

function AddTodo(props) {
    const { onAddClick, forwardRef } = props;
    return (
        <div>
            <input ref={forwardRef} />
            <button onClick={()=>onAddClick(forwardRef.current.value)}>add</button>
        </div>
    )
}

const mapDispatchToProps = () => ({
    onAddClick: actions.addTodo
});

AddTodo = connect(null, mapDispatchToProps)(AddTodo);


export default AddTodo;