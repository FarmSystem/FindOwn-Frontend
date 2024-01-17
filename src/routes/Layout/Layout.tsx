import { Outlet, useLocation } from 'react-router-dom';
import {
  Root, 
  Container,
  LeftWrapper
} from './style';
import { Nav, MainNav, Footer, MainFooter } from '../../components/common';
import { FixedMenu } from '../../components/Auth';

export const Layout = () => {
  const location = useLocation();

  const showMain = location.pathname === '/' || location.pathname === '/about';

  //mypage를 포함하면 fixedMenu 보여줌
  const showMenu = location.pathname.includes(`/mypage`);

  return(
    <Root>
      {showMain ? <MainNav /> :  <Nav/>}
        <Container>
          {showMenu && (
            <LeftWrapper>
              <FixedMenu/>
            </LeftWrapper>
          )}
          <Outlet />
        </Container>
      {/* <Footer/> */}
      {/* {showMain ? <MainFooter/> : <Footer/>} */}
    </Root>
  )
}