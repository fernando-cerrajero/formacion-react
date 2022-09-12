import React, {Component} from 'react'; // importaciones
class Menu extends Component{ // definimos el componente
 render(): React.ReactElement{ // plantilla renderizable
 return (
 <div id="Menu">
    <nav>
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Productos</a></li>
            <li><a href="">Contacto</a></li>
        </ul>
    </nav>
 </div>)
 }
}
export default Menu; // exportación del componente