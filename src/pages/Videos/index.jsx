import * as React from "react";
import { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const defaultTheme = createTheme();

const Videos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/videos")
      .then((response) => response.json())
      .then((data) => setVideos(data.data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Typography component="h1" variant="h5" style={{ color: "white", textAlign: "center" }}>
        VIDEOS
      </Typography>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 8,
          }}
        >
          <Grid
            container
            spacing={2}
            justifyContent="center" // Center horizontally
            alignItems="center"
          >
            {videos.map((video) => (
              <Grid
                item
                key={video.id}
                xs={12}
                sm={12}
                md={12}
                style={{ marginBottom: 16 }}
              >
                <Card sx={{ width: "100%" }}>
                  <CardMedia
                    component="video"
                    src={`http://localhost:3001/uploads/${video.filename}`}
                    title={video.videoTitle}
                    controls
                  />
                  <CardContent>
                    <Typography variant="h6" component="h2">
                      {video.videoTitle}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {video.videoDesc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Videos;
