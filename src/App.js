import React from 'react';
import logo from './logo.svg';
import Button from '../packages/components/presentational/Button';
import './App.css';

function App() {
  const btnProps = {
    className: 'new-class',
    clickHandler: () => console.log('Hllo Bttn')
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
          Learn React
        </a>

        <Button {...btnProps}>Hello Button</Button>
      </header>
    </div>
  );
}

export default App;
