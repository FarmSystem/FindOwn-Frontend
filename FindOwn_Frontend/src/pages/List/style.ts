import styled from "@emotion/styled";
import { Grid } from "@mui/material";

export const Container = styled(Grid)`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: #fff;
  flex-direction: column;
  max-width: 1440px;
  align-items: center;
  // border: 1px solid black;
`;

export const Option = styled.div`
  width: 100%;
  margin-top: 13px;
  height: 28px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const LightCare = styled.img`
  height: 20px;
  width: 20px;
`;

export const NavService = styled.button`
  margin-left: 25px;
  border: 1px solid black;
  width: 165px;
  text-align: center;
  border-radius: 10px;
  font-size: 1rem;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: auto;
  // border: 1px solid black;
`;

export const OriginalImage = styled.div`
height: 46px;
display: flex;
align-items: flex-end;
// border: 1px solid black;
color: #959595;
width: 100%;
font-size: 20px;
text-decoration: underline;
margin-left: 10px;
margin-bottom: 10px;
cursor: pointer;
`;