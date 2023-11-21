import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import React, { useState } from "react";

const Container = styled(Grid)`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ItemContainer = styled.div`
  width: 1000px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  margin: 20px;
  border: 1px solid #bfbfbf;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @font-face {
    font-family: "AppleBold";
    src: url("https://cdn.jsdelivr.net/gh/cho1n/Apollo-Frontend@latest/src/assets/fonts/AppleSDGothicNeoB.ttf")
      format("truetype");
  }

  font-family: "AppleBold";
`;

const Item = styled.div`
  width: 250px;
  height: 325px;
  background-color: #ffffff;
  margin: 20px 0 20px 20px;
  border: 1px solid #bfbfbf;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ArrowButton = styled.button`
  margin: 20px;
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #A3FBA8;
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 30px;
  font-weight: bold;
  color: #ffffff;
`;

export const Tag2 = () => {
  const [slidePx, setSlidePx] = useState(0);

  return (
    <Container>
      <ItemContainer>
        <ArrowButton> {"<"} </ArrowButton>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <ArrowButton> {">"} </ArrowButton>
      </ItemContainer>
    </Container>
  );
};
