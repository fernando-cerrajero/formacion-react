import React, {Component} from 'react'; // importaciones

interface Cliente {
    nombre?: string; // los ? Son optionals
    dni?: string;
    direccion?: string;
    telefono?: number;
}

class FichaCliente extends Component<Cliente>{ // definimos el componente
    static defaultProps = { // Definimos los valores por defecto
        nombre: "",
        dni: "",
        direccion: "N/A",
        telefono : 666000000
    };

 render(): React.ReactElement{ // plantilla renderizable
 return (
 <ul id="FichaCliente">
    <li>Nombre: {this.props.nombre}</li>
    <li>DNI: {this.props.dni}</li>
    <li>Dirección: {this.props.direccion}</li>
    <li>Teléfono: {this.props.telefono}</li>
 </ul>)
 }
}
export default FichaCliente; // exportación del componente