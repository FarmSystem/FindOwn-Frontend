import styled from "@emotion/styled";
import { Grid } from "@mui/material";

const Container = styled(Grid)`
  height: 100vh;
  z-index: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function section2() {
  return (
  <Container container xs>
    <div>
        hello
    </div>
  </Container>);
}

export default section2;
