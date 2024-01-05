import {
  Container,
  Option,
  LightCare,
  NavService,
  ListContainer
} from './style';
import { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import brightVersion from '../../assets/images/bright_version.svg';
import darkVersion from '../../assets/images/night_version.svg';
import { ExampleBox } from '../../components/ItemBox';
import { StyledComponent } from '@emotion/styled';
import Grid from '@mui/material/Grid';

// 여기부터는 데모 코드 예시
import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const List = () => {
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
        <Grid
          container
          spacing={2}
          columns={12}
          style={{width: 1200}}>
        {Array.from(Array(5)).map((_, index) => (
          <Grid item xs={4} sm={4} md={4} key={index} style={{ width: 'auto', display: 'flex', justifyContent: 'center'}}>
            <ExampleBox/>
          </Grid>
        ))}
        </Grid>
      </ListContainer>
    </Container>
  );
};  