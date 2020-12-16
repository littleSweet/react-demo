// 项目的入口文件
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import LifeCycle from "./LifeCycle";
import ControInput from "./ControInput";
import NoControInput from "./NoControInput";

// JSX
const aa = 'React...'
const ele = < h2 > Hello, {aa} </h2>
// console.log(ele)

const user = {
    firstName : '李',
    lastName : '憨憨'
}

function fromtName(user){
    return user.firstName + user.lastName
}

function getGeeting(user){
    if(user){
        return <h1>hello,{fromtName(user)}</h1>
    }
    return <h3>hello,{aa}</h3>
}

function tick(){
    const element = (
        <div>
            <h1>Hi... CODE</h1>
            <h2>{new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(element,document.querySelector('#root'))
}

// setInterval(tick,1000)
// ReactDOM.render( getGeeting() ,document.querySelector('#root'))

// 循环绑定元素,使用 map
// 不能用 foreach 是因为: foreach没有返回值
const arr = ['apple','banana','orange'];
const ulEle = (<ul>
    {arr.map((item,index) => {
        // 循环绑定的jsx元素,必须有key 属性
        return <li key={index}>{item}</li>
    })}
</ul>)

// 过滤元素
const goods = [
    { id : 1, price : 1000, title : "OPPLE手机"},
    { id : 2, price : 3000, title : "小米手机"},
    { id : 3, price : 5000, title : "华为手机"},
    { id : 4, price : 10000, title : "Apple手机"},
]
const filterEle = (
    <ul>
        {goods.map((good,index) => {
            return (good.price > 4000 ? <li key={index}>{good.title}</li> : null)
        })}
    </ul>
)



// ReactDOM.render(filterEle,document.querySelector('#root'))

// React props & 组件化开发  其实是js开发  就是一个函数
// 1. 函数式声明 -- 组件名称首字母 要大写 一定要返回
// 2. 只是显示数据 可用此形式
function Welcome(props){
    return <h1>hello,{props.name}</h1>
}

// ReactDOM.render(<Welcome name='hi' />,document.querySelector('#root'))
ReactDOM.render(<NoControInput />,document.querySelector('#root'))



