import React from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from './authorizer';

function App() {

  const authSubmit = (event) => {
    event.preventDefault();
    Auth();
  }

  return (
    <div className="App">
      <header className="App-header">
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
           <button onClick={authSubmit}>Submit</button>
        </a>
      </header>
    </div>
  );
}

export default App;
