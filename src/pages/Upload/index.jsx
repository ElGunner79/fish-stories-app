import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import DragAndDropUpload from '../../components/DragAndDropUpload';

const Upload = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server
    console.log('Form Submitted:', { title, description, uploadedFile });
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 8,
        }}
      >
        <Typography
          component="h1"
          variant="h5"
          style={{ color: "white" }}
        >
          UPLOAD VIDEO
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <TextField
            fullWidth
            label="Video Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            multiline
            label="Short Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            margin="normal"
            required
          />
          <DragAndDropUpload
            uploadedFile={uploadedFile}
            setUploadedFile={setUploadedFile}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              backgroundColor: "grey",
              borderColor: "#57D5CE",
            }}
          >
            SUBMIT
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Upload;
