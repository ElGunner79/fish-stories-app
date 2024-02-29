import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import loginVideo from "../../media/login-page-short-trim.mp4";

const LoginVideo = () => {
    return (
      <Card>
        <CardMedia
          // sx={{ mt: 1 }}
          component="video"
          src={loginVideo}
          autoPlay
          loop
          //controls // Add the controls attribute
        />
      </Card>
    );
};

export default LoginVideo;
