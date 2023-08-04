import styled from "@emotion/styled";

const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 10;
  height: 50px;
  width: 100%;
  background-color: #eeffed;

  @media (max-width: 1500px) {
    height: 40px;
  }
`;

const FooterInner = styled.div`
  display: flex;
  margin: 0 auto;
  height: 100%;
  max-width: 1920px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: transparent;
`;

const Text = styled.div`
  font-size: 15px;
  color: black;

  @media (max-width: 1500px) {
    font-size: 12px;
  }
`;

export const Footer = () => {
  const thisYear = () => {
    const year = new Date().getFullYear();
    return year;
  };
  return (
    <FooterContainer>
      <FooterInner>
        <Text>
          동국대학교 Farm Team4 | 박서영 유희재 이지민 임정우 오현석 정영준 최재원
        </Text>
        <Text>
          Copyright &copy; <span>{thisYear()}</span> Farm Team4. All Rights Reserved
        </Text>
      </FooterInner>
    </FooterContainer>
  );
};
