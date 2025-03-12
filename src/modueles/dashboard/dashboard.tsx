// src/modueles/dashboard/dashboard.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  CssBaseline,
  Box,
  List,
  ListItemButton,
  ListItemText,
  IconButton,
  Divider,
  ListSubheader,
} from '@mui/material';
import {
  ExpandLess,
  ExpandMore,
  Menu as MenuIcon,
  ChevronLeft,
} from '@mui/icons-material';
import logo from './images/Universidad Del Magdalena.png';

// Importa tus componentes de normas
import NormaTradicional from '../normaTradicional/normaTradicional';
import NormaPrototipo from '../normaPrototipo/normaPrototipo';

// Importa los componentes de presentación
import Presentacion from './presentacion/Presentacion';            // Página principal de "Presentación"
import TecnologiaDerecho from './presentacion/TecnologiaDerecho/TecnologiaDerecho'; // I
import Implementacion from './presentacion/Implementacion/Implementacion';        // II
import Conclusiones from './presentacion/Conclusiones';            // III

const drawerWidth = 240;

const Dashboard: React.FC = () => {
  const [openDrawer, setOpenDrawer] = useState(true);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        {/* AppBar con botón para contraer/expandir */}
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <IconButton color="inherit" onClick={toggleDrawer} edge="start" sx={{ mr: 2 }}>
              {openDrawer ? <ChevronLeft /> : <MenuIcon />}
            </IconButton>
            {/* Al hacer clic en el logo se redirige al Home */}
            <Link to="/presentacion">
              <img
                src={logo}
                alt="Universidad del Magdalena"
                style={{ height: '40px', marginRight: '10px', objectFit: 'contain', cursor: 'pointer' }}
              />
            </Link>
            <Typography variant="h6" noWrap component="div">
              LegalTech - Universidad del Magdalena
            </Typography>
          </Toolbar>
        </AppBar>

        {/* Menú lateral */}
        <Drawer
          variant="permanent"
          sx={{
            width: openDrawer ? drawerWidth : 60,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: openDrawer ? drawerWidth : 60,
              boxSizing: 'border-box',
              transition: 'width 0.3s',
            },
          }}
        >
          <Toolbar />
          <Divider />

          {/* Subheader: Presentación */}
          <List
            subheader={
              <ListSubheader
                component="div"
                sx={{
                  display: openDrawer ? 'block' : 'none',
                  fontSize: '0.9rem',
                  lineHeight: '1.75',
                  fontWeight: 600,
                  color: 'inherit',
                }}
              >
                Presentación
              </ListSubheader>
            }
          >
            <ListItemButton component={Link} to="/presentacion">
              <ListItemText primary="Hola" sx={{ display: openDrawer ? 'block' : 'none' }} />
            </ListItemButton>
            <ListItemButton component={Link} to="/presentacion/tecnologia">
              <ListItemText primary="I. Tecnología y Derecho" sx={{ display: openDrawer ? 'block' : 'none' }} />
            </ListItemButton>
            <ListItemButton component={Link} to="/presentacion/implementacion">
              <ListItemText primary="II. Implementación" sx={{ display: openDrawer ? 'block' : 'none' }} />
            </ListItemButton>
            <ListItemButton component={Link} to="/presentacion/conclusiones">
              <ListItemText primary="III. Conclusiones y Preguntas" sx={{ display: openDrawer ? 'block' : 'none' }} />
            </ListItemButton>
          </List>

          <Divider sx={{ my: 1 }} />

          {/* Subheader: Caso Práctico */}
          <List
            subheader={
              <ListSubheader
                component="div"
                sx={{
                  display: openDrawer ? 'block' : 'none',
                  fontSize: '0.9rem',
                  lineHeight: '1.75',
                  fontWeight: 600,
                  color: 'inherit',
                }}
              >
                Caso Práctico
              </ListSubheader>
            }
          >
            <ListItemButton component={Link} to="/norma-tradicional">
              <ListItemText primary="Norma Tradicional" sx={{ display: openDrawer ? 'block' : 'none' }} />
            </ListItemButton>
            <ListItemButton component={Link} to="/norma-prototipo">
              <ListItemText primary="Norma Prototipo" sx={{ display: openDrawer ? 'block' : 'none' }} />
            </ListItemButton>
          </List>
        </Drawer>

        {/* Área principal */}
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Routes>
            <Route path="/presentacion" element={<Presentacion />} />
            <Route path="/presentacion/tecnologia" element={<TecnologiaDerecho />} />
            <Route path="/presentacion/implementacion" element={<Implementacion />} />
            <Route path="/presentacion/conclusiones" element={<Conclusiones />} />
            <Route path="/norma-tradicional" element={<NormaTradicional />} />
            <Route path="/norma-prototipo" element={<NormaPrototipo />} />
            <Route path="/" element={<Presentacion />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
};

export default Dashboard;
