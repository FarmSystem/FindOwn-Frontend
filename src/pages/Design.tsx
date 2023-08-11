import React from "react";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { Sidebar } from "../components/Design/Sidebar";
import { InputBox } from "../components/Design/InputBox";

const Container = styled(Grid)`
  width: 100%;
  height: 100vh;
  display: flex;
  z-index: -1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
`;


export const Design = () => {
  return (
  <Container>
    <Sidebar />
    <InputBox />
  </Container>
  );
};
