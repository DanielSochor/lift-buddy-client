import React from 'react';
import './App.css';
//import Auth from './authorizer';

// function App() {

//   const authSubmit = (event) => {
//     event.preventDefault();
//     Auth();
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//            <button onClick={authSubmit}>Submit</button>
//       </header>
//     </div>
//   );
// }

//import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
    </div>
  );
}

export default App;
