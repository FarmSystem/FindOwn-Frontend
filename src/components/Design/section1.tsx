import React from "react";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { InputBox } from "./InputBox";

const Container = styled(Grid)`
    width: 100vw;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 50px;
    @media (max-width: 1400px) {
        padding-top: 0px;
    }
`

export const Section1 = () => {
    return (
        <Container>
            <InputBox />
        </Container>
    )
}