import React, {Component} from 'react';
import {actions} from '../../store';

export default class Header extends Component{
    constructor(props){
        super(props);
    }

    handleClick = ()=>{
        actions.decrement()
    }

    render(){
        return <div onClick={this.handleClick}>我来组成头部</div>
    }
}
