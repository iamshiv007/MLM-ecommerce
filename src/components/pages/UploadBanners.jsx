import React, { Fragment, useState } from "react";
import { useDropzone } from "react-dropzone";
import "../../styles/UploadBanners.css";
import { Button } from "@mui/material";

function UploadBanners() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleDrop = (acceptedFiles) => {
    setSelectedFile(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
  });

  const handleUpload = () => {
    console.log(selectedFile);
  };

  return (
    <Fragment>
      <div className="uploadBannersPage page">
        <h1 className="pageName">Upload Banners</h1>

        <div
          {...getRootProps()}
          className={`upload-box ${isDragActive ? "drag-active" : ""}`}
        >
          <input {...getInputProps()} />
          {selectedFile ? (
            <div className="file-preview">
              <p>{selectedFile.name}</p>
              <img src={URL.createObjectURL(selectedFile)} alt="File Preview" />
            </div>
          ) : (
            <>
              {isDragActive ? (
                <p>Drop the file here...</p>
              ) : (
                <p className="uploadBox">
                  Drag and drop a file here, or click to select a file
                </p>
              )}
            </>
          )}
        </div>

        <div className="uploadBtn">
          <Button variant="contained" color="primary" onClick={handleUpload}>
            Upload
          </Button>
        </div>
      </div>
    </Fragment>
  );
}

export default UploadBanners;
