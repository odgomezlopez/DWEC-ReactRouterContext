import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//Importo el sistema de rutas
import {
  BrowserRouter,
} from "react-router-dom";

//Importo el contexto
import { MyProvider } from './Context/context'; // Importa tu contexto

//Aplicación
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyProvider>
      <BrowserRouter> {/* Si no se utiliza el sistema de rutas visto en el anterior punto, se puede borrar la etiqueta <BrowserRouter></BrowserRouter>*/}
          <App />
      </BrowserRouter>
    </MyProvider>
  </React.StrictMode>
);

    