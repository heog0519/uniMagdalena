// src/modueles/dashboard/presentacion/Implementacion/components/ejemplos/ejemplos.tsx
import React from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LinkIcon from '@mui/icons-material/Link';

const Ejemplos: React.FC = () => {
  return (
    <Box sx={{ my: 4, p: 2, border: '1px solid #ccc', borderRadius: 2 }}>
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
        Ideas para implementación de tecnología en el Derecho:
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <DescriptionIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Gestores documentales con control de versiones." />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <AccountBalanceIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Consultorías al gobierno para proponer nuevas formas de hacer normas." />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <LinkIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Conexiones API con modelos de lenguajes e IA generativas." />
        </ListItem>
      </List>
    </Box>
  );
};

export default Ejemplos;
