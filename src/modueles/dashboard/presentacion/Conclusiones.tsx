// src/modueles/presentacion/Conclusiones.tsx
import React from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import Filter1Icon from '@mui/icons-material/Filter1';
import Filter2Icon from '@mui/icons-material/Filter2';
import Filter3Icon from '@mui/icons-material/Filter3';
import Filter4Icon from '@mui/icons-material/Filter4';
import Filter5Icon from '@mui/icons-material/Filter5';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

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
        <ListItem>
          <ListItemIcon>
            <Filter1Icon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary="El Búho de Minerva simboliza la reflexión tardía sobre el Derecho, demostrando que el entendimiento se consolida al cierre del ciclo."
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Filter2Icon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary="Los Modelos de Producción (Fordismo, Toyotismo y Lean) ejemplifican cómo se pueden aplicar métodos industriales a la modernización de procesos jurídicos."
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Filter3Icon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary="La Revolución Industrial 4.0 y la inteligencia artificial transforman radicalmente la producción, integrando tecnologías digitales en el ámbito legal."
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Filter4Icon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary="La Implementación de tecnología en el Derecho se ejemplifica mediante gestores documentales, consultorías innovadoras y conexiones API."
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Filter5Icon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary="En conjunto, la charla destaca la imperiosa necesidad de integrar y adaptar las nuevas tecnologías para transformar y optimizar la práctica legal."
          />
        </ListItem>
      </List>

      <Divider sx={{ my: 2 }} />

      {/* Conclusiones finales */}
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mt: 2 }}>
        Conclusiones:
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <ThumbUpIcon color="secondary" />
          </ListItemIcon>
          <ListItemText
            primary="La incorporación de innovaciones tecnológicas optimiza procesos y reduce costos en el ámbito jurídico."
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <LightbulbIcon color="secondary" />
          </ListItemIcon>
          <ListItemText
            primary="No podemos esperar más a que otros creen conocimiento. Colombia tiene el mejor escenario posible para el emprendimiento"
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleIcon color="secondary" />
          </ListItemIcon>
          <ListItemText
            primary="Estudiar no sirve para nada, si no proponemos innovación desde la academia. Las universiidades como incubadoras de startups."
          />
        </ListItem>
      </List>
    </Box>
  );
};

export default Conclusiones;
