// src/modueles/norma/articulo5/articulo5.tsx
import React from 'react';
import { Typography } from '@mui/material';

const Articulo5: React.FC = () => {
  return (
    <div>
      <Typography variant="body1">
        Se exceptúan de la prohibición prevista en el artículo anterior los siguientes casos:
      </Typography>
      <ul>
        <li>
          <Typography variant="body1">
            Animales de asistencia o servicio, siempre que estén debidamente acreditados y cumplan con las condiciones de salubridad y seguridad correspondientes.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Actividades de control de fauna, rescate o investigación científica, realizadas por entidades autorizadas.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Eventos especiales organizados por autoridades competentes que cuenten con permisos específicos y planes de manejo para los animales participantes.
          </Typography>
        </li>
      </ul>
    </div>
  );
};

export default Articulo5;
