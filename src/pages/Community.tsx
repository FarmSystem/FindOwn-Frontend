import React from "react";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { BoardList } from "../components/Community/BoardList";


const Container = styled(Grid)`
  width: 100vw;
  height: 100vh;
  display: flex;
  z-index: -1;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @font-face {
    font-family: "AppleBold";
    src: url("https://cdn.jsdelivr.net/gh/cho1n/Apollo-Frontend@latest/src/assets/fonts/AppleSDGothicNeoB.ttf")
      format("truetype");
  }

  font-family: "AppleBold";
`;

export const Community = () => {
  return (
    <Container xs={12}>
      <BoardList />
    </Container>
  );
};
