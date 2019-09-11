import React from 'react';
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
           <button onClick={authSubmit}>Submit</button>
      </header>
    </div>
  );
}

export default App;
