import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';
import Cabecera from './components/Cabecera';
import PiePagina from './components/PiePagina';
import ContenidoPaginaPrincipal from './components/ContenidoPaginaPrincipal';
import FichaCliente from './components/FichaCliente';

function App() {
  return (
    <div>
    <h1>
    <Cabecera></Cabecera>
    </h1>
      <Menu></Menu>
      <ContenidoPaginaPrincipal>
      </ContenidoPaginaPrincipal>
      <FichaCliente nombre='Fernando' dni='1R' ></FichaCliente>
      <FichaCliente nombre='Otro distinto' dni='6K' direccion='C/ noexiste s/n' telefono={666112233}></FichaCliente>
      <PiePagina></PiePagina>
    </div>
  );
}

export default App;
