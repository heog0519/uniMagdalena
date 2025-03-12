import React from 'react';
import { Box, Typography } from '@mui/material';

const IaContratacion: React.FC = () => {
  return (
    <Box sx={{ my: 4, p: 2, border: '1px solid #ccc', borderRadius: 2 }}>
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, textAlign: 'center' }}>
        IA para Contratación Estatal
      </Typography>
      <Typography sx={{ mb: 2, textAlign: 'left' }}>
        Ejemplo de implementación de IA con ajute fino. Utiliza modelos de GPT y se conecta a una base de datos vecotorizada con los concepos de Colombia Compra Eficiente.
      </Typography>
      <br />
      <Typography sx={{ mb: 2, textAlign: 'left' }}>
        Se hace una pregunta en lenguaje natural y retorna respuesta dando las fuentes desde donde sacó la información.
      </Typography>
      <Box
        component="iframe"
        src="https://ortega-contratacion-c4r5aa6vxq-uc.a.run.app"
        title="IA Contratación"
        sx={{
          width: '100%',
          height: 500,
          border: 'none',
        }}
      />
    </Box>
  );
};

export default IaContratacion;
