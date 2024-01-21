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

  @font-face {
    font-family: "AppleBold";
    src: url("https://cdn.jsdelivr.net/gh/cho1n/Apollo-Frontend@latest/src/assets/fonts/AppleSDGothicNeoB.ttf")
      format("truetype");
  }

  font-family: "AppleBold";
`;

function Main() {
  return (
    <Container container xs={12}>
      <Section1 />
    </Container>
  );
}

export default Main;
