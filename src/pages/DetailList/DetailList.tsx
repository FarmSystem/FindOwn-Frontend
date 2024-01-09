import {
  Container,
  Option,
  LightCare,
  NavService,
  ListContainer
} from '../List/style';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import brightVersion from '../../assets/images/bright_version.svg';
import darkVersion from '../../assets/images/night_version.svg';
import { ExampleBox } from '../../components/ItemBox';
import Grid from '@mui/material/Grid';
import { DetailBox } from '../../components/ItemBox';

export const DetailList = () => {
  const navigate = useNavigate();
  const [ bright, setBright ] = useState(true);
  const toggleBright = () => {
    setBright(!bright);
  };
  const Items = Array(5).fill(0);
  return(
    <Container>
      <Option>
        <LightCare onClick={toggleBright} src={bright ? brightVersion : darkVersion} />
        <NavService onClick={() => navigate(`/trademark`)}>상표 판단 바로가기</NavService>
      </Option>
      <ListContainer>
        <DetailBox />
      </ListContainer>
    </Container>
  );
};  