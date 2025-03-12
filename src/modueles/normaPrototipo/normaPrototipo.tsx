// src/modueles/norma/normaPrototipo.tsx
import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Switch, FormControlLabel } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Importa cada artículo desde su carpeta respectiva
import Articulo1 from './articulo1/articulo1';
import Articulo2 from './articulo2/articulo2';
import Articulo3 from './articulo3/articulo3';
import Articulo4 from './articulo4/articulo4';
import Articulo5 from './articulo5/articulo5';
import Articulo6 from './articulo6/articulo6';
import Articulo7 from './articulo7/articulo7';
import Articulo8 from './articulo8/articulo8';
import Articulo9 from './articulo9/articulo9';
import Articulo10 from './articulo10/articulo10';
import Articulo11 from './articulo11/articulo11';
import Articulo12 from './articulo12/articulo12';

const NormaPrototipo: React.FC = () => {
  const totalPanels = 12;
  // Estado que controla la expansión de cada acordeón
  const [expandedPanels, setExpandedPanels] = React.useState<boolean[]>(Array(totalPanels).fill(false));

  // Alterna la expansión de un panel individual
  const handleChange = (index: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpandedPanels(prev => {
      const newExpanded = [...prev];
      newExpanded[index] = isExpanded;
      return newExpanded;
    });
  };

  // Función para expandir o contraer todos los acordeones mediante el switch
  const handleToggleAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setExpandedPanels(Array(totalPanels).fill(checked));
  };

  return (
    <div>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: 'bold', textAlign: 'center' }}
      >
        Norma Prototipo: Ley Ficticia No. 456 de 2025 - Prohibición del paseo de animales en parques
      </Typography>

      <FormControlLabel
        control={
          <Switch
            checked={expandedPanels.every(panel => panel)}
            onChange={handleToggleAll}
            color="primary"
          />
        }
        label={expandedPanels.every(panel => panel) ? 'Contraer todos' : 'Expandir todos'}
        sx={{ display: 'flex', justifyContent: 'right', mb: 2 }}
      />

      <Accordion expanded={expandedPanels[0]} onChange={handleChange(0)}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ fontWeight: 'bold' }}>Artículo 1. Objeto</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Articulo1 />
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expandedPanels[1]} onChange={handleChange(1)}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ fontWeight: 'bold' }}>Artículo 2. Ámbito de Aplicación</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Articulo2 />
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expandedPanels[2]} onChange={handleChange(2)}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ fontWeight: 'bold' }}>Artículo 3. Definiciones</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Articulo3 />
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expandedPanels[3]} onChange={handleChange(3)}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ fontWeight: 'bold' }}>Artículo 4. Prohibición General</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Articulo4 />
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expandedPanels[4]} onChange={handleChange(4)}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ fontWeight: 'bold' }}>Artículo 5. Excepciones</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Articulo5 />
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expandedPanels[5]} onChange={handleChange(5)}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ fontWeight: 'bold' }}>Artículo 6. Obligaciones de las Autoridades Locales</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Articulo6 />
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expandedPanels[6]} onChange={handleChange(6)}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ fontWeight: 'bold' }}>Artículo 7. Sanciones</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Articulo7 />
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expandedPanels[7]} onChange={handleChange(7)}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ fontWeight: 'bold' }}>Artículo 8. Procedimiento Sancionatorio</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Articulo8 />
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expandedPanels[8]} onChange={handleChange(8)}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ fontWeight: 'bold' }}>Artículo 9. Destinación de Recursos</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Articulo9 />
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expandedPanels[9]} onChange={handleChange(9)}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ fontWeight: 'bold' }}>Artículo 10. Educación y Sensibilización</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Articulo10 />
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expandedPanels[10]} onChange={handleChange(10)}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ fontWeight: 'bold' }}>Artículo 11. Reglamentación</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Articulo11 />
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expandedPanels[11]} onChange={handleChange(11)}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ fontWeight: 'bold' }}>Artículo 12. Vigencia y Derogatorias</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Articulo12 />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default NormaPrototipo;
