import React from 'react';
import { Link } from 'react-router-dom';

import "./BarraNavegacao.css";


function BarraNavegacao() {
    return (
        <nav>
            <ul>
                <li className="button"><Link to="/">Curriculo</Link></li>
                <li className="button"><Link to="/Portfolio">Portfolio</Link></li>
                <li className="button"><Link to="/Contato">Contato</Link></li>
            </ul>
        </nav>
    );
}

export default BarraNavegacao;

