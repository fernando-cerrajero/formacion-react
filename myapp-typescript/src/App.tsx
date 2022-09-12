import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';
import Cabecera from './components/Cabecera';

function App() {
  return (
    <div>
    <h1>
    <Cabecera></Cabecera>
    </h1>
      <Menu></Menu>
    </div>
  );
}

export default App;
