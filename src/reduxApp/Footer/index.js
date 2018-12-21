import React, {Component} from 'react';
import {actions} from '../../store';

export default class Footer extends Component{
    constructor(props){
        super(props);
    }

    handleClick = ()=>{
        actions.increment();
    }

    render(){
        return <div onClick={this.handleClick}>尾部</div>
    }
}