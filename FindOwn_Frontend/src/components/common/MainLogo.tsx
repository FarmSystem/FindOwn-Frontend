import styled from "@emotion/styled";
import Logo from "../../assets/images/FindOwnLogo3.png";

const MainLogoContainer = styled.div`
  height: 150px;
  width: 150px;
  cursor: pointer;
  paddingleft: 30px;
  display: flex;
  align-items: center;
`;

const MainLogoImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const MainLogo = () => {
  const buttonHandler = () => {
    window.location.href = "/";
  };

  return (
    <MainLogoContainer onClick={buttonHandler}>
      <MainLogoImg src={Logo} alt={""} />
    </MainLogoContainer>
  );
};
