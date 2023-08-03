import React from 'react';
import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import Section1 from '../components/Main/section1';

const Container = styled(Grid)`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: #EEFFED;
  z-index: -1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1920px;
  padding: 50px 0;
`

function Main() {
    return (
        <Container container xs>
           <Section1 />
        </Container>
    );
}

export default Main;