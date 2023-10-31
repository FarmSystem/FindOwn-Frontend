import { Outlet, useLocation } from 'react-router-dom';
import {
  Root, 
  Container
} from './style';
import { Nav, MainNav } from '../../components/common';

export const Layout = () => {
  const location = useLocation();

  const showMain = location.pathname === '/' || location.pathname === '/about';

  return(
    <Root>
      {showMain ? <MainNav /> : <Nav />}
      <Container>
        <Outlet />
      </Container>
    </Root>
  )
}