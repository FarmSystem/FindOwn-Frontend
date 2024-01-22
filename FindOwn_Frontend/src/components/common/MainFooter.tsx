import React from "react";
import styled from "@emotion/styled";

const FooterContainer = styled.div`
  z-index: 10;
  // height: 50px;
  height: 7vh;
  width: 100%;
  padding: 0 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  @media (max-width: 1500px) {
    padding: 0px;
  }
`;

const Introduce = styled.div`
  font-size: 16px;
  color: #494949;
  font-weight: 500;
`;

export const MainFooter = () => {
  return (
    <FooterContainer>
      <Introduce>
        동국대학교 Farm Team4 | &nbsp;&nbsp;&nbsp; 박서영 이지민 임정우 오현석
        정영준 최재원
      </Introduce>
      <Introduce>Copyright © 2024 FarmTeam4. All Rights Reserved </Introduce>
    </FooterContainer>
  );
};
