import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Header() {
    const nombre = "Mundo"
  return (
    <>
      <ul>
        <li>
          <Link to={`/MyFormulario`}>Formulario</Link>
        </li>
      </ul>
      <Outlet context={[nombre]}/>
    </>
  );
}
