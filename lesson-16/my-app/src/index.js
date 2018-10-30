import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Clock from './App';
import Button from "./Button";
import * as serviceWorker from './serviceWorker';

// function Greet() {
//     let phrase = "World!";
    
//     return(
//         <h1> Hello {4+4} </h1>
//     )
// }

// function Greet(props) {
    
//     return (
//         <h1> Hello {props.phrase}! My name is {props.name}</h1>
//     )
// }

// function GreetAll() {
//     return (
//         <div>
//             <Greet phrase="World" name="Ivan"/>
//             <Greet phrase="World" name="Anna"/>
//             <Greet phrase="World" name="Alex"/>
//         </div>    
//     )
// }

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render( < Greet / > , document.getElementById('root'));
// ReactDOM.render(<Greet phrase="World" name="Ivan"/>, document.getElementById('root'));
// const element = <Greet phrase="World" name="Ivan" />;
// ReactDOM.render(element, document.getElementById('root'));

// ReactDOM.render(<GreetAll />, document.getElementById('root'));

class App  extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <Clock />
                <Button />
            </div>
        )
    }
}

ReactDOM.render(<App / > , document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
