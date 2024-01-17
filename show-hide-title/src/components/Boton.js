import React from "react";
import '../styles/Boton.css'

function Boton ({texto, funcionClick}){
    return(
        <button className="boton" onClick={funcionClick}>
            {texto}
        </button>
    );
}

export default Boton;