import React, { Component } from 'react';
import store from '../../store';


export default class Content extends Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
        store.subscribe(this.handleCounter)
    }

    handleCounter = () => {
        this.setState({
            counter:store.getState().counter
        });
    }

    render() {
        return (
            <div>这是内容{this.state.counter}</div>
        );
    }
}