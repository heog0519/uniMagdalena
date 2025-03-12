import React from 'react';
import { Box, Typography } from '@mui/material';
import Ejemplos from './components/ejemplos/ejemplos';
import IaContratacion from './components/iaContratacion/iaContratacion';

const Implementacion: React.FC = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>
        II. Implementación de Tecnología en el Ejercicio del Derecho
      </Typography>
      <Typography variant="body1" gutterBottom>
        Ideas para hacer plata.
      </Typography>
      
      {/* Componente con ejemplos */}
      <Ejemplos />
      
      {/* Componente con IA Contratación */}
      <IaContratacion />
    </Box>
  );
};

export default Implementacion;
