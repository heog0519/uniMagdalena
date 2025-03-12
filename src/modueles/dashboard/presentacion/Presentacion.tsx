// src/modueles/presentacion/Presentacion.tsx
import React from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, Divider, Stepper, Step, StepLabel } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const steps = [
  "🤯 Estudiar no sirve para nada.",
  "🤮 Estudiar si sirve para algo.",
  "🍆 La inteligencia artificial nos obliga a pensar de manera creativa."
];

const Presentacion: React.FC = () => {
  return (
    <Box>
      {/* Primera sección: Perfil */}
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          p: 2,
        }}
      >
        <Typography variant="h1" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
          ¡Hola, Parceros!
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Soy Hugo Ortega" />
          </ListItem>

          {/* Nuevo ítem con estudios en viñetas */}
          <ListItem alignItems="flex-start">
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <Box>
              <Typography variant="body1" gutterBottom>
                Estudios:
              </Typography>
              <List disablePadding>
                <ListItem disableGutters>
                  <Typography variant="body2">🤖 Actualmente curso una Maestría en Derecho Informático y Nuevas Tecnologías.</Typography>
                </ListItem>
                <ListItem disableGutters>
                  <Typography variant="body2">🔥 MBA.</Typography>
                </ListItem>
                <ListItem disableGutters>
                  <Typography variant="body2">🤢 Especialización en Derecho Administrativo.</Typography>
                </ListItem>
                <ListItem disableGutters>
                  <Typography variant="body2">🥴 Estudié Derecho.</Typography>
                </ListItem>
              </List>
            </Box>
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText 
              primary="Con más de 9 años de experiencia, he trabajado en el Consejo de Estado y en diversas alcaldías municipales, impulsando la implementación de soluciones LegalTech que mejoran la productividad y la calidad en los procesos jurídicos."
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText 
              primary="Además, me apasiona la programación, la espiritualidad y la pedagogía, lo que me permite integrar de manera innovadora tecnología y derecho para transformar el ejercicio profesional y promover el crecimiento personal."
            />
          </ListItem>
        </List>
      </Box>

      {/* Segunda sección: Propuesta de Valor */}
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          p: 2,
        }}
      >
        <Divider sx={{ my: 3 }} />
        <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
          ¿QUÉ VOY A APRENDER EN ESTA CHARLA?
        </Typography>
        <Stepper alternativeLabel activeStep={-1}>
          {steps.map((label, index) => (
            <Step key={index}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </Box>
  );
};

export default Presentacion;
