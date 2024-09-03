import logo from './logo.svg';
import './App.css';
import React from 'react';
import LoginForm from './LoginForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code></code>
        </p>

        <p>React.js berhasil On Boarding</p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <LoginForm />
    </div>
  );
}


export default App;
