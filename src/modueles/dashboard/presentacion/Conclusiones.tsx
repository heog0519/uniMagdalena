// src/modueles/presentacion/Conclusiones.tsx
import React from 'react';
import { Box, Typography, List, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material';
import Filter1Icon from '@mui/icons-material/Filter1';
import Filter2Icon from '@mui/icons-material/Filter2';
import Filter3Icon from '@mui/icons-material/Filter3';
import Filter4Icon from '@mui/icons-material/Filter4';
import Filter5Icon from '@mui/icons-material/Filter5';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import GitHubIcon from '@mui/icons-material/GitHub';

const Conclusiones: React.FC = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>
        III. Conclusiones y Preguntas (5 minutos)
      </Typography>

      {/* Resumen que integra todo lo desarrollado */}
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mt: 2 }}>
        Resumen de la Presentación:
      </Typography>
      <List>
        <ListItemButton>
          <ListItemIcon>
            <Filter1Icon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary="El Búho de Minerva simboliza la reflexión tardía sobre el Derecho, demostrando que el entendimiento se consolida al cierre del ciclo."
          />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Filter2Icon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary="Los Modelos de Producción (Fordismo, Toyotismo y Lean) ejemplifican cómo se pueden aplicar métodos industriales a la modernización de procesos jurídicos."
          />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Filter3Icon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary="La Revolución Industrial 4.0 y la inteligencia artificial transforman radicalmente la producción, integrando tecnologías digitales en el ámbito legal."
          />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Filter4Icon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary="La Implementación de tecnología en el Derecho se ejemplifica mediante gestores documentales, consultorías innovadoras y conexiones API."
          />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Filter5Icon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary="En conjunto, la charla destaca la imperiosa necesidad de integrar y adaptar las nuevas tecnologías para transformar y optimizar la práctica legal."
          />
        </ListItemButton>
      </List>

      <Divider sx={{ my: 2 }} />

      {/* Conclusiones finales */}
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mt: 2 }}>
        Conclusiones:
      </Typography>
      <List>
        <ListItemButton>
          <ListItemIcon>
            <ThumbUpIcon color="secondary" />
          </ListItemIcon>
          <ListItemText
            primary="La incorporación de innovaciones tecnológicas optimiza procesos y reduce costos en el ámbito jurídico."
          />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <LightbulbIcon color="secondary" />
          </ListItemIcon>
          <ListItemText
            primary="No podemos esperar más a que otros creen conocimiento. Colombia tiene el mejor escenario posible para el emprendimiento."
          />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <CheckCircleIcon color="secondary" />
          </ListItemIcon>
          <ListItemText
            primary="Estudiar no sirve para nada si no proponemos innovación desde la academia, usando las universidades como incubadoras de startups."
          />
        </ListItemButton>
      </List>

      <Divider sx={{ my: 2 }} />

      {/* Repositorio para descargar el código */}
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mt: 2 }}>
        Descarga y modifica el código del proyecto:
      </Typography>
      <List>
        <ListItemButton component="a" href="https://github.com/heog0519/uniMagdalena.git" target="_blank">
          <ListItemIcon>
            <GitHubIcon color="action" />
          </ListItemIcon>
          <ListItemText primary="https://github.com/heog0519/uniMagdalena.git" />
        </ListItemButton>
      </List>
    </Box>
  );
};

export default Conclusiones;
