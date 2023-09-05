import React, { useState } from "react";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { InputBox } from "./InputBox";

const Container = styled(Grid)`
  width: 100vw;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
  @media (max-width: 1400px) {
    padding-top: 0px;
  }
`;
const Button = styled.button`
  width: 100px;
  height: 50px;
  background-color: #52c07e;
  border-radius: 10px;
  color: white;
  font-size: 20px;
  font-weight: bold;
  border: none;
  cursor: pointer;
`;

export const Section1: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  // Define a function to handle image selection and set selectedImage
  const handleImageSelect = (file: File | null) => {
    setSelectedImage(file);
  };

  return (
    <Container>
      <InputBox onImageSelect={handleImageSelect} />
      <Button>분석 시작</Button>
    </Container>
  );
};
