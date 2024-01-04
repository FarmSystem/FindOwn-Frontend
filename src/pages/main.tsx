import React from "react";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import Section1 from "../components/Main/section1";

const Container = styled(Grid)`
  width: 100vw;
  height: 100%;
  display: flex;
  background-color: #eeffed;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1440px;
  padding: 50px 0;
  overflow: hidden;
`;

function Main() {
  return (
    <Container container xs>
      <Section1 />
    </Container>
  );
}

export default Main;
