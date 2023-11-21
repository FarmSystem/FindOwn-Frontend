import { Button, Grid } from "@mui/material";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";

const buttonStyle = css`
  background-color: #0ac153;
  padding: 10px 10px 10px 10px;
  color: white;
  font-size: 1vw;
  display: flex;
  border-radius: 10px;
  width: 10vw;
  height: 5vh;

  @media (max-width: 1500px) {
    width: 12vw;
    height: 5vh;
    font-size: 1.2vw;
  }
`;
const StyledButton = styled(Button)`
  ${buttonStyle}
  margin-left: 20px;
`;

const SectionContainer = styled(Grid)`
  display: flex;
  justify-content: left;
  align-items: center;
  padding-left: 20px;
`;

const TextContainer = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 20px 10px 20px;
  padding: 20px 20px 20px 20px;
`;

export const StyleButton = () => {
  const navigate = useNavigate();
  return (
    <SectionContainer container>
      <TextContainer>
        <StyledButton onClick={() => navigate("/login")}>
          상표권 판단하기 →{" "}
        </StyledButton>
      </TextContainer>
    </SectionContainer>
  );
};
