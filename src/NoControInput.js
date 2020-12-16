
// 非受控组件

import React, { Component } from 'react'

export default class NoControInput extends Component {
    constructor(props){
        super(props);
        this.state = {
            val: ''
        }
    }
    handleChange = (e) =>{
        let val = this.refs.inputIn.value
        this.setState({val})
    }
    render() {
        return (
            <div>
                <input type="text" onChange={this.handleChange} ref='inputIn' />
                <h3>{this.state.val}</h3>
            </div>
        )
    }
}
