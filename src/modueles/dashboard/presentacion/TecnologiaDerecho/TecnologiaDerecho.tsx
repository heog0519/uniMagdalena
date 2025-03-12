// src/modueles/dashboard/presentacion/TecnologiaDerecho.tsx
import React, { useRef } from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import BuhoMinerva from './componentes/buhoMinerva/buhoMinerva';
import ModelosProduccion from './componentes/modelosProduccion/modelosProduccion';
import RevolucionIndustrial4 from './componentes/revolucionIndustrial4/revolucionIndustrial4';

const TecnologiaDerecho: React.FC = () => {
  // Referencias a cada sección
  const buhoRef = useRef<HTMLDivElement | null>(null);
  const modelosRef = useRef<HTMLDivElement | null>(null);
  const revolucionRef = useRef<HTMLDivElement | null>(null);

  // Arreglo de referencias en orden: 0 -> Búho, 1 -> Modelos, 2 -> Revolución
  const sections = [buhoRef, modelosRef, revolucionRef];

  const scrollToSection = (index: number) => {
    const ref = sections[index];
    if (ref.current) {
      window.scrollTo({ top: ref.current.offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <Box sx={{ position: 'relative', minHeight: '100vh' }}>
      <Typography variant="h4" gutterBottom>
        I. Tecnología y Derecho: Un Enfoque Multidisciplinar
      </Typography>
      <Typography variant="body1" gutterBottom>
        En esta sección se explorará la interrelación entre la tecnología y el Derecho, mostrando cómo la innovación
        tecnológica transforma la práctica legal y la enseñanza de las normas.
      </Typography>

      {/* Botonera flotante vertical */}
      <Box
        sx={{
          position: 'fixed',
          top: '50%',
          right: 20,
          transform: 'translateY(-50%)',
          zIndex: 999,
        }}
      >
        <Stack direction="column" spacing={1}>
          <Button variant="contained" onClick={() => scrollToSection(0)}>
            1
          </Button>
          <Button variant="contained" onClick={() => scrollToSection(1)}>
            2
          </Button>
          <Button variant="contained" onClick={() => scrollToSection(2)}>
            3
          </Button>
        </Stack>
      </Box>

      {/* Sección: Búho de Minerva */}
      <Box ref={buhoRef} sx={{ minHeight: '100vh' }}>
        <BuhoMinerva />
      </Box>

      {/* Sección: Modelos de Producción */}
      <Box ref={modelosRef} sx={{ minHeight: '100vh' }}>
        <ModelosProduccion />
      </Box>

      {/* Sección: Revolución Industrial 4.0 y la entrada de la IA */}
      <Box ref={revolucionRef} sx={{ minHeight: '100vh' }}>
        <RevolucionIndustrial4 />
      </Box>
    </Box>
  );
};

export default TecnologiaDerecho;
