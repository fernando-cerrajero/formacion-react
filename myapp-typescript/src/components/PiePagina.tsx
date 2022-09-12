import React, {Component} from 'react'; // importaciones
class PiePagina extends Component{ // definimos el componente
 render(): React.ReactElement{ // plantilla renderizable
 return (
 <div id="PiePagina">
    <b>&copy; Fernando Cerrajero <a href="mailto:fcerrajero@minsait.com">fcerrajero@minsait.com</a></b>
 </div>)
 }
}
export default PiePagina; // exportación del componente