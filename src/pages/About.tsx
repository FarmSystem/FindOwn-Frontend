import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import Section1 from "../components/About/section1";
import { Section2 } from "../components/About/section2";
import { apiClient } from "../apis/apiClient";

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
  useEffect(() => {
    let storedToken = localStorage.getItem("token");
    if (storedToken) {
      apiClient.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${storedToken}`;
    }
  });

  return (
    <div>
      <Container container xs>
        <Section1 />
      </Container>
      <Section2 />
    </div>
  );
};
