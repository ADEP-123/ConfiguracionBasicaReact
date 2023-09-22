import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./routers/Header";
import Formulary from "./components/Formulary";
import Error404 from "./routers/Error404";


const root = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    errorElement: <Error404/>,
    children: [
      {
        path: "MyFormulario/:FormularioId?",
        element: <Formulary titulo="Hola"/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <RouterProvider router={root} />
  </React.StrictMode>
);
