import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from '@mui/material';

interface EditProps {
  open: boolean;
  definition: { id: number; concept: string; definition: string };
  onClose: () => void;
  onSave: (newDefinition: string) => void;
}

const Edit: React.FC<EditProps> = ({ open, definition, onClose, onSave }) => {
  const [value, setValue] = useState(definition.definition);

  useEffect(() => {
    setValue(definition.definition);
  }, [definition]);

  const handleSave = () => {
    onSave(value);
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Editar Definición</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Definición"
          type="text"
          fullWidth
          multiline
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancelar
        </Button>
        <Button onClick={handleSave} color="primary">
          Guardar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Edit;
