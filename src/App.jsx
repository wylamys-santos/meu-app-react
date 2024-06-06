import React from "react";

import "./App.css";

import BarraNavegacao from "./components/BarraNavegacao/BarraNavegacao";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Rodape from "./components/Rodape/Rodape";

import Curriculo from "./components/Curriculo/Curriculo";
import Portfolio from "./components/Portfolio/Portfolio";
import Contato from "./components/Contato/Contato";


import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Cabecalho></Cabecalho>

      <BrowserRouter>
        <BarraNavegacao></BarraNavegacao>
        <Routes>
          <Route index element={<Curriculo />} />
          <Route path="Portfolio" element={<Portfolio />} />
          <Route path="Contato" element={<Contato />} />
        </Routes>
      </BrowserRouter>

      <Rodape></Rodape>


    </>
  )
}

export default App;
