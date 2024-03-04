import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import DragAndDropUpload from "../../components/DragAndDropUpload";
import { useNavigate } from "react-router-dom";


const Upload = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    console.log("ok im calling the service wish me luck..");
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("userId", 1);
      formData.append("videoTitle", title);
      formData.append("videoDesc", description);
      formData.append("location", location);
      formData.append("video", uploadedFile);

      const response = await fetch("http://localhost:3001/api/videos", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Video created:", data);
        navigate("/videos");
      } else {
        console.error("Failed to create video:", data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
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
        <Typography component="h1" variant="h5" style={{ color: "white" }}>
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
            label="Video Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
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
