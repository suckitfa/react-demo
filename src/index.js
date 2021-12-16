import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './Game';
import TestJSX from './TestJSX'
import TestComponent from './TestComponent'
import Clock from './Clock';
import Form from './Form';
import Toggle from './Toggle';
// import Greeting from './Condition';
import LoginControl from './GreeTest';
import NumberList from './NumberList';
import Blog from './Blog'
import NameForm from './NameForm'
import EssayForm from './EssayForm';
import FlavorForm from './FlavorForm'
import Calculator from './Calcularot';
import WelcomeDialog from './Welcome';
import App from "./Contacts";
import DOM from './dom/index.js';
const numbers = [1,2,3,4,5]
const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

// const root = document.getElementById('root');
// function tick() {
//   const element = (
//       <div>{new Date().toLocaleTimeString()}</div>
//     )
//     ReactDOM.render(element,root);
// }
// setInterval(tick, (1000));
ReactDOM.render(
    // <Game />,
    // <TestComponent name="Bob" />,
    // <TestJSX />,
    // <
    // Clock / > ,
    // <Form />,
    // <Toggle />,
    // <LoginControl />,
    // <NumberList numbers={numbers}/>,
    // <Blog posts={posts}/>,
    // <NameForm />,
    // <EssayForm />,
    // <FlavorForm />,
    // <Calculator />,
    // <WelcomeDialog />,
    // <App />,
    <DOM />,
    document.getElementById('root')
);