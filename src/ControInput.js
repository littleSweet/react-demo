// 受控组件: 受状态控制的组件,需要与状态进行绑定,必须有onChange事件
// 需要在constructor中设置state默认值
// 需要在组件中设置onchange事件

import React, { Component } from 'react'

export default class ControInput extends Component {
    constructor(props){
        super(props);
        this.state = {
            val : '',
            data: []
        }
    }
    handleChange = (e) => {
        // e.target.value 是获取当前的输入框的值
        let val = e.target.value;
        console.log(val)
        // 将val的值 赋值给state中的val
        this.setState({
            val
        })
    }
    handleClick = () => {
        if(this.state.val){
            let newArr = [...this.state.data]
            newArr.push(this.state.val)
            this.setState({
                data:newArr
            })
            this.setState({
                val:''
            })
        }
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.val} onChange={this.handleChange} />
                <button onClick={this.handleClick}>追加</button>
                <ul>
                    {
                        this.state.data && this.state.data.map((item,i) => {
                            return (
                                <li key={i}>{item}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
