import React, { useState } from "react";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";

const Text = styled.h1`
  font-size: 40px;
  color: #0ac153;
  opacity: 0.6;
`;

const Input = styled.input`
  width: 600px;
  height: 50px;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  cursor: pointer;
  display: none; /* Hide the input element */
`;

const DropArea = styled.div`
  width: 600px;
  height: 150px;
  color: gray;
  border: 2px dashed #e0e0e0;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Container = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputBox: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleImageSelection(file);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    handleImageSelection(file);
  };

  const handleImageSelection = (file: File | null) => {
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      setSelectedImage(file);
    } else {
      alert("JPG 혹은 PNG 형식의 파일만 가능합니다.");
    }
  };

  return (
    <Container xs>
      <Text>AI 디자인 침해 판단</Text>
      <DropArea
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={() => document.getElementById("fileInput")?.click()}
      >
        {selectedImage ? (
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Selected"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        ) : (
          "이미지 파일을 드래그하거나, 여기를 클릭해서 디자인 파일을 업로드하세요."
        )}
      </DropArea>
      <Input
        type="file"
        id="fileInput"
        accept="image/jpeg, image/png"
        onChange={handleFileInputChange}
      />
    </Container>
  );
};
