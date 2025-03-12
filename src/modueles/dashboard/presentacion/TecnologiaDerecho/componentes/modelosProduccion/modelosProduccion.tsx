// src/modueles/dashboard/presentacion/TecnologiaDerecho/componentes/modelosProduccion/ModelosProduccion.tsx

import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import Carousel from 'react-bootstrap/Carousel';

// Asegúrate de haber instalado e importado los estilos de Bootstrap en tu proyecto:
// 1) yarn add react-bootstrap bootstrap
// 2) En tu archivo de entrada (ej. index.tsx): import 'bootstrap/dist/css/bootstrap.min.css';

// Importa tus imágenes (ajusta las rutas a las reales)
import fordismoImg from './images/fordismo.png';
import toyotismoImg from './images/toyotismo.jpg';
import leanImg from './images/lean.png';

interface ProductionModel {
  title: string;
  description: string;
  image: string;
  lawExamples: string[];
}

const modelosData: ProductionModel[] = [
  {
    title: 'Línea de Ensamblaje del Modelo T (Fordismo)',
    description: `Introducido por Henry Ford en 1913, revolucionó la producción automotriz 
                  con una línea de montaje continua, división del trabajo, producción en masa 
                  y reducción significativa de costos.`,
    image: fordismoImg,
    lawExamples: [
      'Aplicación de procedimientos estandarizados en la elaboración de documentos legales.',
      'División de tareas repetitivas entre varios asistentes jurídicos para agilizar la producción de escritos.',
    ],
  },
  {
    title: 'Sistema de Producción Toyota (Toyotismo)',
    description: `Desarrollado por Taiichi Ohno en Toyota durante los años 40 y 50. 
                  Se basa en conceptos como la producción Justo a Tiempo (JIT), 
                  mejora continua (Kaizen), reducción de desperdicios (Muda) y calidad total.`,
    image: toyotismoImg,
    lawExamples: [
      'Adoptar la metodología Justo a Tiempo en la gestión de casos para reducir tiempos muertos.',
      'Implementar Kaizen en despachos judiciales para mejorar continuamente los procesos de notificación y trámite.',
    ],
  },
  {
    title: 'Modelo de Producción Lean (Producción Esbelta)',
    description: `Surge a partir del Sistema Toyota, popularizado en los años 80 y 90. 
                  Busca eliminar desperdicios, maximizar valor para el cliente, 
                  reducir inventarios y optimizar la eficiencia general.`,
    image: leanImg,
    lawExamples: [
      'Uso de herramientas Lean para mapear el flujo de valor en la elaboración de demandas y contratos.',
      'Reducción de pasos innecesarios en la tramitación de expedientes, agilizando la resolución de conflictos.',
    ],
  },
];

const ModelosProduccion: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        py: 4,
        px: { xs: 2, md: 4 },
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: 'bold', textAlign: 'center', mb: 4 }}
      >
        Modelos de Producción aplicados al Derecho
      </Typography>

      <Carousel>
        {modelosData.map((model, index) => (
          // Puedes ajustar el intervalo en cada diapositiva:
          <Carousel.Item key={index} interval={2000}>
            {/* Imagen con clases de Bootstrap para que se muestre como en la doc oficial */}
            <img
              className="d-block w-100"
              src={model.image}
              alt={model.title}
              style={{
                maxHeight: 500,
                objectFit: 'cover',
              }}
            />
            <Carousel.Caption>
              <Box
                sx={{
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                  p: 2,
                  borderRadius: 2,
                  textAlign: 'left',
                  maxWidth: '80%',
                  margin: '0 auto',
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#fff', mb: 1 }}>
                  {model.title}
                </Typography>
                <Typography variant="body1" sx={{ color: '#fff', mb: 2 }}>
                  {model.description}
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#fff', mb: 1 }}>
                  Ejemplos en Derecho:
                </Typography>
                <List sx={{ textAlign: 'left' }}>
                  {model.lawExamples.map((example, i) => (
                    <ListItem key={i} disableGutters>
                      <ListItemText primary={`• ${example}`} sx={{ color: '#fff' }} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Box>
  );
};

export default ModelosProduccion;
