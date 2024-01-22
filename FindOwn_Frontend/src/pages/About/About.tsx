import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import Section1 from "../../components/About/section1";
import { Section2 } from "../../components/About/section2";
import { apiClient } from "../../apis/apiClient";

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
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      apiClient.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${storedToken}`;
    } else {
      alert("로그인이 필요한 서비스입니다.");
      window.location.href = "/login";
    }
  });

  return (
    <div>
      <Container container xs={12}>
        <Section1 />
      </Container>
      <Section2 />
    </div>
  );
};
