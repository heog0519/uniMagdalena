// src/modueles/dashboard/presentacion/TecnologiaDerecho/componentes/revolucionIndustrial4/revolucionIndustrial4.tsx
import React from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

// Importa las imágenes de apoyo (actualiza las rutas según corresponda)
import imagenTransformacion from './images/transformacion.jpeg';
import imagenIA from './images/ia.jpg';
import imagenPerspectivas from './images/perspectivas.jpg';
import openAi from './images/openai.png';
import deepSeek from './images/deepseek.png';
import claude from './images/claude.png';

const RevolucionIndustrial4: React.FC = () => {
  return (
    <Box sx={{ p: 4, border: '1px solid #ccc', borderRadius: 2, m: 2 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: 'bold', textAlign: 'center', mb: 3 }}
      >
        Revolución Industrial 4.0 y la Entrada de la Inteligencia Artificial
      </Typography>

      {/* Primer párrafo: Transformación Industrial */}
      <Box
        sx={{
          mb: 4,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          gap: 2,
        }}
      >
        <Box
          component="img"
          src={imagenTransformacion}
          alt="Transformación Industrial"
          sx={{ width: { xs: '100%', md: 300 }, borderRadius: 2 }}
        />
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
            Transformación Industrial 4.0
          </Typography>
          <Typography variant="body1">
            La Revolución Industrial 4.0 marca una transformación radical en la forma de producir, gestionar y operar en el ámbito industrial y tecnológico. 
            Esta nueva era se caracteriza por la integración de tecnologías digitales, Internet de las Cosas, automatización e inteligencia artificial, 
            que actúan como motores de cambio en todos los sectores.
          </Typography>
        </Box>
      </Box>

      {/* Segundo párrafo: Impacto de la Inteligencia Artificial */}
      <Box
        sx={{
          mb: 4,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          gap: 2,
        }}
      >
        <Box
          component="img"
          src={imagenIA}
          alt="Inteligencia Artificial"
          sx={{ width: { xs: '100%', md: 300 }, borderRadius: 2 }}
        />
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
            Impacto de la Inteligencia Artificial
          </Typography>
          <Typography variant="body1">
            La inteligencia artificial ha emergido como una herramienta disruptiva que impulsa la innovación y mejora la eficiencia en procesos productivos, 
            en la toma de decisiones y en el desarrollo de nuevos modelos de negocio. En el contexto del Derecho, la IA está transformando la manera en que se analiza información, 
            se automatizan tareas repetitivas y se brindan asesorías jurídicas más precisas.
          </Typography>
        </Box>
      </Box>

      {/* Tercer párrafo: Nuevas Perspectivas en Derecho */}
      <Box
        sx={{
          mb: 4,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          gap: 2,
        }}
      >
        <Box
          component="img"
          src={imagenPerspectivas}
          alt="Nuevas Perspectivas"
          sx={{ width: { xs: '100%', md: 300 }, borderRadius: 2 }}
        />
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
            Nuevas Perspectivas en Derecho
          </Typography>
          <Typography variant="body1">
            Esta revolución no solo redefine la industria manufacturera y los servicios, sino que también abre nuevas perspectivas en áreas tradicionales como el Derecho, 
            integrando soluciones tecnológicas que optimizan la práctica profesional y promueven mayor transparencia y eficiencia.
          </Typography>
        </Box>
      </Box>

      {/* Sección: Principales Inteligencias Artificiales Líderes */}
      <Box sx={{ mt: 4, p: 2, border: '1px solid #ddd', borderRadius: 2 }}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontWeight: 'bold', textAlign: 'center' }}
        >
          Principales Inteligencias Artificiales Líderes
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <Box
                component="img"
                src={openAi}
                alt="OpenAI"
                sx={{ width: 40, height: 'auto' }}
              />
            </ListItemIcon>
            <ListItemText primary="OpenAI" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Box
                component="img"
                src={deepSeek}
                alt="DeepSeek"
                sx={{ width: 40, height: 'auto' }}
              />
            </ListItemIcon>
            <ListItemText primary="DeepSeek" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Box
                component="img"
                src={claude}
                alt="Cloude"
                sx={{ width: 40, height: 'auto' }}
              />
            </ListItemIcon>
            <ListItemText primary="Claude" />
          </ListItem>
          {/* Agrega más items según lo requieras */}
        </List>
      </Box>

      {/* Sección: Ejemplos de IA en Español aplicadas al Derecho */}
      <Box sx={{ mt: 4, p: 2, border: '1px solid #ddd', borderRadius: 2 }}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontWeight: 'bold', textAlign: 'center' }}
        >
          Ejemplos de IA en Español aplicadas al Derecho
        </Typography>
        <Typography variant="body1" gutterBottom>
          Algunas soluciones destacadas:
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="Juztina"
              secondary="https://www.juztina.ai/co/es?gad_source=1&gclid=CjwKCAjwvr--BhB5EiwAd5YbXs_zqQAGFRSvbS_voWKvo2Jz1thhR5fq4hsftSEmj9jHPs7cg_Zm-hoCka0QAvD_BwE"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Legis (Xperta)"
              secondary="https://xperta.legis.co/planes"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Vincent de Vlex"
              secondary="https://vlex.es/vincent-ai"
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default RevolucionIndustrial4;
