import React from 'react';
import {connect} from 'react-redux';
import {actions} from '../store';

function FilterInput(props){
    const {onGoClick} = props;
    const curRef = React.createRef();
    return (
        <div>
            <input ref={curRef}/>
            <button onClick={()=>onGoClick(curRef.current.value)}>go</button>
        </div>
    )
}

const mapDispatchToProps = ()=>({
    onGoClick:actions.filterChange
})

FilterInput = connect(null, mapDispatchToProps)(FilterInput);

export default FilterInput;

