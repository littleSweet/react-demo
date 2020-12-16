import React, { Component } from "react";
import './App.css';
import Logo from './logo.svg';

// 指令: rcc 直接创建react模板
// 2. 类声明组件 -- ES6的方式 继承 真实项目应用
// 注意:
// 1. React.Component 是一个基类, 在使用类声明的组件,必须继承此基类
// 2. 在类中, 必须有 render() 函数
// 3. 在render函数中, 需要return 一个jsx 元素
// 4. 组件的名称,要以大写字母开头 
// 5. 有组件的生命周期,钩子函数,this
// 6. 声明类名: className

class MyBtn extends Component {
    render(){
        return (
            <button>{this.props.title}</button>
        )
    }
}
class Avatar extends Component {
    render(){
        return (
            <div>
                <img src={this.props.avatarUrl1} alt=""/>
                <img src={Logo} alt=""/>
            </div>

        )
    }
}
class UserInfo extends Component {
    render(){
        return(
            <div className="userinfo">
               图片: <Avatar avatarUrl1={this.props.avatarUrl}></Avatar>
               {/* <img src={this.props.user.avatarUrl} alt=""/> */}
                <div className="username">
                    姓名:{this.props.name}
                </div>
            </div>
        )
    }
}

class Comment extends Component {
    // this指向问题  使用箭头函数
    handleClikc = () => {
        this.props.add('子组件中的值')
    }
    render() {
        return (
            <div className="main">
                <UserInfo {...this.props.user}></UserInfo>
                {/* <UserInfo avatarUrl={this.props.user.avatarUrl} name={this.props.user.name}></UserInfo> */}
                <div className="main-content">
                    评论内容: {this.props.user.content}
                </div>
                <div className="main-time">
                    评论时间: {this.props.user.date}
                </div>
                <button onClick={this.handleClikc}>子传父</button>
            </div>
        )
    }
}

// 组件划分:
// App => compontent => UserInfo => Avatar

export default class App extends Component{
    // 可有,可没有 没有,在render的时候,自动补上
    constructor(props) {
        super(props);
        // 遵循单向数据流
        // App => A => B
        // 子组件中,不可修改 props ,除非提升状态
        this.user = {
            avatarUrl: Logo,
            name: '小阿七',
            content: '这是一条评论内容',
            date: new Date().toLocaleTimeString()
        }
    }

    add(val){
        console.log(val)
    }

    // 必须使用 render 函数 能将虚拟DOM渲染成真实的DOM
    render(){
        return (
            <div>
                <h2>hello App,{this.props.name}</h2>
                <MyBtn title="提交" />
                <MyBtn title="登录" />
                <MyBtn title="修改" />
                <Comment user={this.user} add={this.add}></Comment>
            </div>
        )
    }
}
