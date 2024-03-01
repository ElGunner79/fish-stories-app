import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Box, Typography } from "@mui/material";

const DragAndDropUpload = ({ uploadedFile, setUploadedFile }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      // Do something with the file
      setUploadedFile(acceptedFiles[0]);
    },
    [setUploadedFile]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Box
      {...getRootProps()}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        borderWidth: "2px",
        borderRadius: "2px",
        borderColor: "#eeeeee",
        borderStyle: "dashed",
        backgroundColor: "#fafafa",
        color: "#bdbdbd",
        outline: "none",
        transition: "border .24s ease-in-out",
        cursor: "pointer",
      }}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <Typography>Drop the video here ...</Typography>
      ) : (
        <Typography>
          Drag 'n' drop a video here, or click to select a file
        </Typography>
      )}
      {uploadedFile && <Typography>File: {uploadedFile.name}</Typography>}
    </Box>
  );
};

export default DragAndDropUpload;
