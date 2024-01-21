import { Button, Grid } from "@mui/material";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";

const buttonStyle = css`
  background-color: #0ac153;
  padding: 10px 10px 10px 10px;
  color: white;
  font-size: 1.3vw;
  display: flex;
  border-radius: 40px;
  width: 10vw;
  height: 15vh;
  font-weight: bold;

  @media (max-width: 1500px) {
    width: 12vw;
    height: 5vh;
    font-size: 1.5vw;
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

export const StartButton = () => {
  const navigate = useNavigate();

  const startJudge = () => {
    const ID = localStorage.getItem("email");
    if (ID) {
      navigate("/trademark");
    } else {
      navigate("/login");
    }
  };

  return (
    <SectionContainer container>
      <TextContainer>
        <StyledButton onClick={startJudge}>시작하기 → </StyledButton>
        <StyledButton onClick={() => navigate("/list")}>
          침해사례 →{" "}
        </StyledButton>
      </TextContainer>
    </SectionContainer>
  );
};
