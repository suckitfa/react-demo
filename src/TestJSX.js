import React from 'react';
import ReactDOM from 'react-dom'
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

let user = {
    firstName:'Harper',
    lastName:'Perez'
}
user = null;
function getGreeting(user) {
    if(user) {
        return (<h1>Hello, {formatName(user)}</h1>);
    } else {
        return (<h1>Hello , Stranger!</h1>);
    }
}

function tick() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}</h2>
        </div>
    )
    ReactDOM.render(element,document.getElementById('testJSX'));
}
// JSX中的{} ，可以放任意的JavaScript表达式
// JSX 也是一个表达式
// 在编译之后，JSX 表达式会被转为普通 JavaScript 函数调用，并且对其取值后得到 JavaScript 对象。
function TestJSX() {
    const name = 'Josh Perez';
    const imgUrl = "../public/logo192.png";
    setInterval(tick,1000);
    const element = <img src={imgUrl} alt="" />
    return(element);
}


export default TestJSX;