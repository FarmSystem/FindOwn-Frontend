import styled from "@emotion/styled";
import profieImg from '../../assets/images/profile_img.svg';
import { Grid } from "@mui/material";

export const Container = styled(Grid)`
  // width: 100vw;
  width: 1067px;
  height: 100vh;
  display: flex;
  background-color: #fff;
  flex-direction: column;
  max-width: 1440px;
  align-items: center;
  // border: 1px solid black;
`;

export const Text = styled.div`
  height: 52px;
  // color: #827E7E;
  color: #515151;
  font-size: 40px;
  font-weight: 700;
  margin-top: 32px;
  justify-content: fit-content;
`;

export const Theader = styled.div`
  color: #52C07E;
  justify-content: fit-content;
  font-size: 20px;
  margin-top: 30px;
  margin-left: 15px;
`;

export const InfoDiv = styled.div`
  width: 1067px;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const InfoContainer = styled.div`
  margin-top: 9px;
  width: 1067px;
  height: 389px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #BFBFBF;
`;


export const PasswordDiv = styled.div`
  margin-top: 20px;
`;

export const PasswordContainer = styled.div`
  margin-top: 11px;
  height: 175px;
  border: 1px solid #BFBFBF;
  border-radius: 8px;
`;

export const ExitDiv = styled.div`
  height: 80px;
  // border: 1px solid black;
  margin-top: 20px;
`;

export const ExitContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 60px 0 10px;
  width: 100%;
  justify-content: space-between;
  // border: 1px solid #BFBFBF;
`;

export const ExitText = styled.div`
  color: #847B7B;
  font-size: 18px;
  margin-top: 10px;
  margin-left: 15px;
`;

export const ExitBtn = styled.button`
  font-size: 18px;
  width: 100px;
  height: 100%;
  justify-content: center;
  align-items: center;
  color: #494949;
  background-color: #52C07E73;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;