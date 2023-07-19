import * as React from "react";
let logo = '../src/logo.svg'
import User from './components/User';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <User name="Ben" id={2} />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
