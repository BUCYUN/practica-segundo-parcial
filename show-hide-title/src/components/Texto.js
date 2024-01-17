import React from "react";
import '../styles/Texto.css'

function Texto  ({mostrar}){
    return(
        mostrar ? <h1 className="texto">Welcome to React Challenges</h1> : null
    )
}

export default Texto;