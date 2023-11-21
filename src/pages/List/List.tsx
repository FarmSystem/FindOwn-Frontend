import {
  Container,
  Option,
  LightCare,
  NavService,
  ListContainer
} from './style';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import brightVersion from '../../assets/images/bright_version.svg';
import darkVersion from '../../assets/images/night_version.svg';
import { ExampleBox } from '../../components/ItemBox';

export const List = () => {
  const navigate = useNavigate();
  const [ bright, setBright ] = useState(true);
  const toggleBright = () => {
    setBright(!bright);
  }

  return(
    <Container>
      <Option>
        <LightCare onClick={toggleBright} src={bright ? brightVersion : darkVersion} />
        <NavService onClick={() => navigate(`/trademark`)}>상표 판단 바로가기</NavService>
      </Option>
      <ListContainer>
        <ExampleBox/>
      </ListContainer>
    </Container>
  );
};  