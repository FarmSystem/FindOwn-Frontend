import styled from "@emotion/styled";
import { Grid } from "@mui/material";

const Container = styled(Grid)`
  background-color: #aaaaaa;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const ItemContainer = styled.div`
  width: 200px;
  height: 400px;
  background-color: #bbbbbb;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

export const Tag1 = () => {
  return (
    <div>
      <Container>
        <ItemContainer>1</ItemContainer>
        <ItemContainer>2</ItemContainer>
        <ItemContainer>3</ItemContainer>
        <ItemContainer>4</ItemContainer>
      </Container>
    </div>
  );
};
