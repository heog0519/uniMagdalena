// src/modueles/norma/articulo3/articulo3.tsx
import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Tooltip,
  Badge,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CommentIcon from '@mui/icons-material/Comment';
import AddIcon from '@mui/icons-material/Add';

import Edit from './edit/edit';
import Coments from './coments/coments';

interface Definition {
  id: number;
  concept: string;
  definition: string;
}

const Articulo3: React.FC = () => {
  const [definitions, setDefinitions] = useState<Definition[]>([
    {
      id: 1,
      concept: 'Parque',
      definition:
        'Área pública o privada de acceso general, diseñada o adaptada para la recreación y el esparcimiento, que cuente con zonas verdes, senderos y equipamientos lúdicos.',
    },
    {
      id: 2,
      concept: 'Paseo de animales',
      definition:
        'Acción de llevar a un animal, bajo supervisión o libre, a un parque para su tránsito o permanencia, independientemente del uso de correa, bozal u otros dispositivos.',
    },
    {
      id: 3,
      concept: 'Autoridad competente',
      definition:
        'Entidades nacionales o locales encargadas de vigilar y hacer cumplir la presente ley, tales como la Policía, las Alcaldías y los organismos de control ambiental.',
    },
  ]);

  const [selectedDefinition, setSelectedDefinition] = useState<Definition | null>(null);
  const [openEdit, setOpenEdit] = useState<boolean>(false);
  const [openComment, setOpenComment] = useState<boolean>(false);

  const handleDelete = (id: number) => {
    setDefinitions(definitions.filter((def) => def.id !== id));
  };

  const handleOpenEdit = (def: Definition) => {
    setSelectedDefinition(def);
    setOpenEdit(true);
  };

  const handleOpenComment = (def: Definition) => {
    setSelectedDefinition(def);
    setOpenComment(true);
  };

  const handleSaveEdit = (id: number, newDefinition: string) => {
    setDefinitions(
      definitions.map((def) =>
        def.id === id ? { ...def, definition: newDefinition } : def
      )
    );
    setOpenEdit(false);
    setSelectedDefinition(null);
  };

  const handleSaveComment = (id: number, comment: string) => {
    // Aquí podrías manejar el comentario, por ejemplo, almacenarlo o enviarlo a un servidor.
    alert(`Comentario guardado para definición ${id}: ${comment}`);
    setOpenComment(false);
    setSelectedDefinition(null);
  };

  const handleAddDefinition = () => {
    const newId =
      definitions.length > 0 ? Math.max(...definitions.map((def) => def.id)) + 1 : 1;
    const newDefinition: Definition = {
      id: newId,
      concept: 'Nuevo concepto',
      definition: 'Contenido de la nueva definición',
    };
    setDefinitions([...definitions, newDefinition]);
  };

  // Ordena alfabéticamente por concepto
  const sortedDefinitions = [...definitions].sort((a, b) =>
    a.concept.localeCompare(b.concept)
  );

  return (
    <div>
      <Typography variant="body1" gutterBottom>
        Para efectos de la presente ley, se definen los siguientes términos:
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Concepto</TableCell>
              <TableCell>Definición</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedDefinitions.map((def, index) => (
              <TableRow key={def.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{def.concept}</TableCell>
                <TableCell>{def.definition}</TableCell>
                <TableCell>
                  <Tooltip title="Eliminar">
                    <IconButton onClick={() => handleDelete(def.id)} color="error">
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Editar">
                    <IconButton onClick={() => handleOpenEdit(def)} color="primary">
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Agregar comentario">
                    <IconButton onClick={() => handleOpenComment(def)} color="secondary">
                      <Badge badgeContent={4} color="primary">
                        <CommentIcon />
                      </Badge>
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell colSpan={4} align="right">
                <Tooltip title="Agregar definición">
                  <IconButton onClick={handleAddDefinition} color="primary">
                    <AddIcon />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      {/* Diálogo para editar */}
      {selectedDefinition && (
        <Edit
          open={openEdit}
          definition={selectedDefinition}
          onClose={() => {
            setOpenEdit(false);
            setSelectedDefinition(null);
          }}
          onSave={(newDef) => handleSaveEdit(selectedDefinition.id, newDef)}
        />
      )}

      {/* Diálogo para comentarios */}
      {selectedDefinition && (
        <Coments
          open={openComment}
          definition={selectedDefinition}
          onClose={() => {
            setOpenComment(false);
            setSelectedDefinition(null);
          }}
          onSave={(comment) => handleSaveComment(selectedDefinition.id, comment)}
        />
      )}
    </div>
  );
};

export default Articulo3;
