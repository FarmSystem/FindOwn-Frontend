import React from "react";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import Section1 from "../components/About/section1";
import Section2 from "../components/About/section2";

const Container = styled(Grid)`
  width: 100vw;
  height: 55vh;
  display: flex;
  background-color: #eeffed;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1440px;
  padding: 50px 0;
`;
export const About = () => {
  return (
    <Container container xs>
      <Section1 />
      <Section2 />
    </Container>
  );
};
