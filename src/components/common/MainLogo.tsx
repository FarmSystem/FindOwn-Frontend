import styled from '@emotion/styled';
import Logo from "../../assets/images/FindOwnLogo.png"

const MainLogoContainer = styled.div`
    height: 100px;
    width: 100px;
    cursor: pointer;
    paddingLeft: 20px;
    display: flex;
    align-items: center;
    padding: 0px;
`

const MainLogoImg = styled.img`
    width: 100%;
    height: 100%;
`


export const MainLogo = () => {

    const buttonHandler = () => {
        window.location.href = "/";
      };

      return (
        <MainLogoContainer onClick={buttonHandler}>
            <MainLogoImg src={Logo} alt={""} />
        </MainLogoContainer>
      )
}   