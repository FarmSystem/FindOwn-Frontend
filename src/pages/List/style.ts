import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import bright from '../../assets/images/bright_version.svg';
import dark from '../../assets/images/night_version.svg';

export const Container = styled(Grid)`
  width: 100vw;
  display: flex;
  background-color: #fff;
  flex-direction: column;
  max-width: 1440px;
`;

export const Option = styled.div`
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
  margin-top: 54px;
  height: 685px;
  border: 1px solid black;
`;