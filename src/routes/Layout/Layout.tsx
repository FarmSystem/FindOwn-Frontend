import { Outlet} from 'react-router-dom';
import {
  Root, 
  Container
} from './style';
import { Nav } from '../../components/common';

export const Layout = () => {
  return(
    <Root>
      <Nav/>
      <Container>
        <Outlet />
      </Container>
    </Root>
  )
}