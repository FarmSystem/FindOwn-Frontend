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
import { DetailBox, SimilarItem } from '../../components/ItemBox';
import styled from '@emotion/styled';
import alarm from '../../assets/images/alarm_table.svg';

export const MarkDetail = () => {
  const navigate = useNavigate();
  const [ bright, setBright ] = useState(true);
  const toggleBright = () => {
    setBright(!bright);
  };
  // const Items = Array(5).fill(0);
  return(
    <Container>
      <Option>
        <LightCare onClick={toggleBright} src={bright ? brightVersion : darkVersion} />
        <NavService onClick={() => navigate(`/trademark`)}>상표 판단 바로가기</NavService>
      </Option>
      <ListContainer>
        <AdditionalContainer>
          <DetailBox />
          <SimilarItem />
        </AdditionalContainer>
        <AlarmContainer>
          <AlarmText>침해도는 다음과 같이 구분됩니다.</AlarmText>
          <AlarmImg src={alarm} />
        </AlarmContainer>
      </ListContainer>
    </Container>
  );
};  

const AdditionalContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AlarmContainer = styled.div`
  height: auto;
  width: auto;
`;

const AlarmText = styled.div`
  color: #959595;
  text-decoration: underline;
  font-size: 15px;
`;

const AlarmImg = styled.img`
  margin-top: 9px;
`;