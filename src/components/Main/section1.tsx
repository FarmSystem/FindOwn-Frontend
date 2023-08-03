import React from 'react';
import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import image from '../../assets/images/64.svg';
import { StartButton } from './startButton';

const Container = styled(Grid)`
  height: 100vh;
  z-index: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Text = styled.div`
    font-size: 70px;
    color: #0AC153;
    letter-spacing: 0.5px;
    margin-bottom: 10px;
    text-align: center;

    span.highlight {
        font-weight: bold;
    }

    @media (max-width: 1500px) {
        font-size: 50px;
    }
`

const TextBox = styled(Grid)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    hight: 100%;
`

const Image = styled.div`
    background-image: url(${image});
    display: flex; 
    width: 900px;
    height: 600px;
`

function Section1() {
    return (
        <Container container xs>
            <Grid container>
                <TextBox item xl={6} lg={6}>
                    <Text>좀 더 빠르고, 좀 더 쉽게</Text>
                    <Text>나만의 상표권∙디자인 갖기</Text>
                    <Text><span className='highlight'>{"AI 상표권∙디자인 침해 판단"}</span></Text>
                    <StartButton />
                </TextBox>
                <TextBox item xl={6} lg={6}>
                    <Image />
                </TextBox>
            </Grid>
        </Container>
    );
}

export default Section1;