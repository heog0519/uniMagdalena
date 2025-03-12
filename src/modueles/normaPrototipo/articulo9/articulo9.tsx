// src/modueles/norma/articulo9/articulo9.tsx
import React from 'react';
import { Typography } from '@mui/material';

const Articulo9: React.FC = () => {
  return (
    <div>
      <Typography variant="body1">
        Los recursos provenientes del recaudo de multas se destinarán prioritariamente a:
      </Typography>
      <ul>
        <li>
          <Typography variant="body1">
            Campañas de sensibilización sobre la protección de animales y la importancia de mantener parques libres de riesgos.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Mejoramiento de infraestructura en los parques, incluyendo la instalación de señalización y mecanismos de control de acceso.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Fortalecimiento de los programas de protección animal a nivel nacional y local.
          </Typography>
        </li>
      </ul>
    </div>
  );
};

export default Articulo9;
