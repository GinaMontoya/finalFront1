import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import PaginaInicio from "./paginas/Inicio.pagina";
import PaginaFavoritos from "./paginas/Favoritos.pagina";
import PaginaDetalle from "./paginas/Detalle.pagina";
import { Provider } from "react-redux";
import Encabezado from "./componentes/layout/encabezado.componente";
//import store from "./redux/store";

function App() {
  return (
    <>
      <Encabezado />

      <div className="App">
        <Routes>
          <Route path="/" element={<PaginaInicio />} />
          <Route path="favoritos" element={<PaginaFavoritos />} />
          <Route path="detalle" element={<PaginaDetalle />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
