// src/modueles/norma/articulo6/articulo6.tsx
import React from 'react';
import { Typography } from '@mui/material';

const Articulo6: React.FC = () => {
  return (
    <div>
      <Typography variant="body1">
        Las autoridades municipales y departamentales deberán:
      </Typography>
      <ul>
        <li>
          <Typography variant="body1">
            Realizar campañas de información y concientización sobre la prohibición y los riesgos que conlleva el paseo de animales en parques.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Instalar señalización visible en los accesos a los parques, informando de la restricción y las posibles sanciones.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Mantener canales de denuncia y atención ciudadana para reportar el incumplimiento de la presente ley.
          </Typography>
        </li>
      </ul>
    </div>
  );
};

export default Articulo6;