import React, { Component } from 'react'

export default class FormSimple extends Component {
    constructor(props){
        super(props);
        this.state = {
            username : "",
            password : "",
            selectedArr : []
        }
    }
    hanleUserName = (e) => {
        this.setState({
            username : e.target.value
        })
    }
    hanlePassword = (e) => {
        this.setState({
            password : e.target.value
        })
    }
    handleSelect = (e) => {
        let newArr = [...this.state.selectedArr]
        newArr.push(e.target.value)
        this.setState({
            selectedArr : newArr
        })
    }
    handleSubmit = (e) => {
        // 阻止默认事件
        e.preventDefault();
        if(this.state.username && this.state.password && this.state.selectedArr && this.state.selectedArr.length > 0){
            let arr = this.state.selectedArr.map(item => `${item}`)
            // 提交ajax
            console.log(`用户名:${this.state.username},密码:${ this.state.password},我的爱好:${arr}`)
        }
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">用户名:</label>
                <input type="text" value={this.state.username} id="name" onChange={this.hanleUserName} />
                <label htmlFor="password">密码:</label>
                <input type="password" value={this.state.password} id="pwd" onChange={this.hanlePassword} />
                <br/>
                <label htmlFor="selectedArr">爱好:</label>
                <select multiple value={this.state.selectedArr} onChange={this.handleSelect}>
                    <option value="somking">抽烟</option>
                    <option value="drinking">喝酒</option>
                    <option value="tangtou">烫头</option>
                </select>
                <br/>
                <input type="submit" value="登录"/>
            </form>
        )
    }
}
