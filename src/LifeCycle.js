import React, { Component } from 'react'

class SubCount extends Component{
    componentWillReceiveProps(newProps){
        console.log('子组件将要接收新属性',newProps)
    }
    render(){
        return (
            <div></div>
        )
    }
}


export default class LifeCycle extends Component {
    static defaultProps = {
        // 1.加载默认属性
        name : '小花儿',
        age : 18
    }
    constructor(props){
        super(props);
        console.log('1.初始化 加载默认的状态')
        this.state = {
            count : 18
        }
    }
    componentWillMount(){
        console.log('2.父组件将被挂载')
    }
    componentDidMount(){
        // 在当前的方法中, 发起ajax请求,获取数据,数据驱动视图
        console.log('4.父组件挂载完成了')

    }
    // 生命周期 组件应该更新时 重要点
    shouldComponentUpdate(nextProps,nextState){
        // 性能的优化点
        console.log('5.组件是否要更新')
        // 如果是偶数,就更新 奇数,不走render
        if(nextState.count % 2 === 0){

            // 一定要return true
            return true
        }else {
            return false
        }
    }
    // 组件是否要更新
    componentWillUpdate(){
        console.log('6.组件将要更新')
    }
    // 组件更新完成
    componentDidUpdate(){
        console.log('7.组件更新完成')
    }
    // 改变this 指向 ,使用箭头函数
    handleClick = () => {
        // 更新state 使用 this.setState()
        // 根据当前状态更新,需要使用回调
        this.setState((prevState, prevProps)=>({
            count : prevState.count + 1
        }),()=>{

        })
    }
    render() {
        console.log('3.父组件render了')
        return (
            <div>
                <h2>当前的值:{this.state.count}</h2>
                <button onClick={this.handleClick}>+1</button>
                <SubCount count={this.state.count}></SubCount>
            </div>
        )
    }
}
