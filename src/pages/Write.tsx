import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { apiClient } from "../apis/apiClient";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Write = () => {
  return <div>
    <h1>Write</h1>
  </div>;
};
