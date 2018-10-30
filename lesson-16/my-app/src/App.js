import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


// Дефолтная настройка страницы приветствия
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

function ShowBanner(props) {
    if (props.time > 45) {
      return (
        <div className="rest_block"> Отдых </div>
      )
    } else {
      return (
          <div className="work_block"> Время работать над собой! </div>
      )
    }
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()}
  }

  componentDidMount() {
    this.timerId = setInterval(
      () => this.tick(),
      1000
      )       
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  tick() {
    this.setState({
      date: new Date()
    }) 
  }

  render() {
    return (
      <div>
        <ShowBanner time={this.state.date.getSeconds()} />
        <h1> Текущее время {this.state.date.toLocaleTimeString()}</h1>
      </div>  
    )
  }
}


// export default App;
export default Clock;
