import React from 'react';
import './App.css';
import {Block} from './components/Block'

const App = () => {
  const date = new Date()
  return (
    <div className="App">
      <h1>{date.toDateString()}</h1>
      <Block />
      <button>submit</button>
    </div>
  );
}

export default App;
