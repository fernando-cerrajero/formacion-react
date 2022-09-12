import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';
import Cabecera from './components/Cabecera';
import PiePagina from './components/PiePagina';
import ContenidoPaginaPrincipal from './components/Cabecera copy';

function App() {
  return (
    <div>
    <h1>
    <Cabecera></Cabecera>
    </h1>
      <Menu></Menu>
      <ContenidoPaginaPrincipal></ContenidoPaginaPrincipal>
      <PiePagina></PiePagina>
    </div>
  );
}

export default App;
