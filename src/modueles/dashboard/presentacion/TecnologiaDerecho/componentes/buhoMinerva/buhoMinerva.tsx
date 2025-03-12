// src/modueles/dashboard/presentacion/TecnologiaDerecho/componentes/BuhoMinerva.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import buhoGif from './images/buho_minerva.gif';

const BuhoMinerva: React.FC = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        border: '1px solid #ccc',
        borderRadius: 2,
        p: 4,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Box
        component="img"
        src={buhoGif}
        alt="Búho de Minerva"
        sx={{
          width: 400,        // Ajusta el ancho deseado
          height: 'auto',
          mr: 4,
          borderRadius: 2,
        }}
      />
      <Box sx={{ maxWidth: '60%' }}>
        {/* Cita principal */}
        <Typography
          variant="h3"
          gutterBottom
          sx={{ fontStyle: 'italic', fontWeight: 'bold' }}
        >
          «El búho de Minerva solo levanta el vuelo al caer la noche».
        </Typography>
        {/* Texto explicativo */}
        <Typography variant="h6">
          Esta cita de Hegel nos recuerda que el conocimiento y la comprensión de los
          hechos históricos (y en este caso del Derecho) llegan solo cuando ya han ocurrido.
          Es decir, el Derecho siempre llega tarde, pero es precisamente la forma en que lo
          pensamos y lo enseñamos hoy la que permite aprender de ellas.
        </Typography>
      </Box>
    </Box>
  );
};

export default BuhoMinerva;
