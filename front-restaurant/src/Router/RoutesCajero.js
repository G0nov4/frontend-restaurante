import React from "react";
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import NavbarCajero from "../components/NavbarCajero";
import Clientes from "../pages/Cajero/Clientes";
import Config from "../pages/Cajero/Config";
import Facturacion from "../pages/Cajero/Facturacion";
import Informes from "../pages/Cajero/Informes";


export default function Ruta(){
    console.log("rutas")
    return(
        <Router>
            <NavbarCajero/>
            <Routes>
                <Route exact  path="/cajero/clientes" element={<Clientes/>} />
                <Route exact  path="/cajero/facturacion" element={<Facturacion/>} />
                <Route exact  path="/cajero/informes" element={<Informes/>} />
                <Route exact  path="/cajero/configuracion" element={<Config/>} />

            </Routes>
        </Router>
    )
}