import React from "react";
import { useParams, useOutletContext } from "react-router-dom";

export default function Formulary({titulo}) {
  const { FormularioId } = useParams();
  const [nombre] = useOutletContext();
  return (
    <>
      <div>{titulo} {nombre}</div>
      <strong>{FormularioId}</strong>
    </>
  );
}

Formulary.defaultProps = {
  titulo: "Formulary 2",
};
