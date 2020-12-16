import React, { Component } from 'react'

export default class APP extends Component {
    // constructor 是es6 的 初始方法
    // props 是外界传过来的
    // state 是自己的 需要使用this.setState()改变

    constructor(proos){
        super(proos);
        // 状态  state
        this.state = {
            count : 0
        }
        // 改变this的方式
        // 方法一: 将this 绑定在constructor上,来改变this指向
        // this.add = this.add.bind(this)
        this.state.count = 1
    }

    // 第三种: 箭头函数
    // add = () => {}
    add(e){
        console.log(e)
        // 除了constructor之外的其他地方,修改状态的唯一方法: 调用this.setState()方法 
        /* 如果 this.setState({})对象的形式,setState 方法就是异步操作,不会取到更新后的值,永远是初始值
        但是在 定时器 ,或者某些原生方法中不一定是异步的
        this.setState({
            count: this.state.count+1
        })

        console.log(this.state.count) // ---  1
        */
        // 如果是函数的形式 需要有返回值,返回一个对象  this.setState(()=>({})) 推荐使用
       
        this.setState((prevState,prevProps) => ({
            count: prevState.count + 1
        }),()=>{
            // 在回调函数里更新值操作
            console.log(this.state.count)
        })

    }

    render() {
        return (
            <div>
               <h2>{this.state.count}</h2> 
               {/* 第四种: 在当前事件调用时,使用箭头函数 */}
               <button onClick={(e) => {this.add(e)}}>+1</button>
               {/* 方式二:  <button onClick={this.add.bind(this)}>+1</button> */}
               {/* <button onClick={this.add}>+1</button> */}
            </div>
        )
    }
}
