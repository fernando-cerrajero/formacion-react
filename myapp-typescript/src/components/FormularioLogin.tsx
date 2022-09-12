import React, {Component} from 'react'; // importaciones
import { validateLocaleAndSetLanguage } from 'typescript';

interface LoginData {
    usuario?: string;
    password?: string;
}

class FormularioLogin extends Component<{}, LoginData>{ // definimos el componente
    constructor(){
        super({});
        this.state = {
            usuario: "fernandocg",
            password: "lalala"
        }
    }
    render(){
        return (
            <form method='post' action='javascript:void(null)' id="FormularioLogin">
               Usuario: <input type="text" name="user">{this.state.usuario}</input>
               Pass: <input type="password" name="password">{this.state.password}</input>
               <input type="button" id='Enviar' onClick={this.dalefuerte}>Enviar</input>
            </form>);
           
    }

    dalefuerte(): void {
        validateLocaleAndSetLanguage;
    }
}
export default FormularioLogin; // exportación del componente