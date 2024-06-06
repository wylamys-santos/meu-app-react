import React from "react";
import fotoDePerfil from "../..//assets/wylamys imeg.jpeg";

import "./Cabecalho.css";

function Cabecalho() {
    return (
        <header>
            <img className="fotoDePerfil" src= {fotoDePerfil} alt=""/>
            <h1>Wylamys Santos</h1>
            <h3>Desenvolvedor de Sofware</h3>
        </header>
    )
}

export default Cabecalho;