import React from 'react';
import styled from '@emotion/styled';
import { Grid } from '@mui/material';

const Container = styled(Grid)`
  width: 100vw;
  height: 100vh;
  background-color: #EEFFED;
  z-index: -1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Text = styled.div`
    font-size: 50px;
    color: #0AC153;
    letter-spacing: 0.5px;
    margin-bottom: 20px;
    
`

function Main() {
    return (
        <Container container xs>
            <Grid item xs={6}>
                <Text>좀 더 빠르고, 좀 더 쉽게</Text>
                <Text>나만의 상표권∙디자인 갖기</Text>
            </Grid>
        </Container>
    );
}

export default Main;