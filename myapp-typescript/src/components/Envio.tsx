import React, {Component} from 'react'; // importaciones

interface DatosEnvio {
    nombre_cliente?: string; // los ? Son optionals
    direccion_envio?: string;
    fecha_envio?: Date;
    fecha_llegada_prevista?: Date;
}

class Envio extends Component<DatosEnvio>{ // definimos el componente
    static defaultProps = { // Definimos los valores por defecto
        nombre_cliente: "",
        direccion_envio: "N/A",
        fecha_envio : new Date('2022-01-01'),
        fecha_llegada_prevista : new Date('2022-01-01')
    };

 render(): React.ReactElement{ 
 return (
 <ul id="Envio">
    <li>Cliente: {this.props.nombre_cliente}</li>
    <li>Dirección envio: {this.props.direccion_envio}</li>
 </ul>)
 }
}
export default Envio; // exportación del componente