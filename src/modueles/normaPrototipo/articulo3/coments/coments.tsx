import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from '@mui/material';

interface ComentsProps {
  open: boolean;
  definition: { id: number; concept: string; definition: string };
  onClose: () => void;
  onSave: (comment: string) => void;
}

const Coments: React.FC<ComentsProps> = ({ open, definition, onClose, onSave }) => {
  const [comment, setComment] = useState('');

  const handleSave = () => {
    onSave(comment);
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Agregar Comentario para: {definition.concept}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Comentario"
          type="text"
          fullWidth
          multiline
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancelar
        </Button>
        <Button onClick={handleSave} color="primary">
          Guardar Comentario
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Coments;
