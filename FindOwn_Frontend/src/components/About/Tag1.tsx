import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import item1 from "../../assets/images/출원상표_아이콘.png";
import item2 from "../../assets/images/침해도판단결과_아이콘.png";
import item3 from "../../assets/images/결과알리미_아이콘.png";
import item4 from "../../assets/images/마이페이지_아이콘.png";

const Container = styled(Grid)`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const ItemContainer = styled.div`
  width: 250px;
  height: 400px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px;
  border: 1px solid #bfbfbf;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @font-face {
    font-family: "AppleBold";
    src: url("https://cdn.jsdelivr.net/gh/cho1n/Apollo-Frontend@latest/src/assets/fonts/AppleSDGothicNeoB.ttf")
      format("truetype");
  }

  font-family: "AppleBold";

    transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.15);
  }

`;
const Img = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 2.5rem;
`;
const StyleText = styled.div`
  font-size: 22px;
  color: #525252;
  letter-spacing: 0.5px;
  margin-bottom: 6rem;
`;

const StyleText2 = styled.div`
  font-size: 16px;
  color: #6b6b6b;
  letter-spacing: 0.5px;
`;

export const Tag1 = () => {
  return (
    <div>
      <Container>
        <ItemContainer>
          <Img src={item1} />
          <StyleText>① 출원할 상표 업로드</StyleText>
          <StyleText2 color="gray">
            출원할 상표의 침해도를 판단하는 FindOwn의 간편한 시스템
          </StyleText2>
        </ItemContainer>
        <ItemContainer>
          <Img src={item2} />
          <StyleText>② 침해도 판단 결과</StyleText>
          <StyleText2>사용자의 상표와 기존의 상표들간의</StyleText2>
          <StyleText2>유사도를 판단하여 침해도 공지</StyleText2>
        </ItemContainer>
        <ItemContainer>
          <Img src={item3} />
          <StyleText>③ 결과 알리미</StyleText>
          <StyleText2>침해도 결과가 나온 사용자에게</StyleText2>
          <StyleText2>알리미 서비스</StyleText2>
        </ItemContainer>
        <ItemContainer>
          <Img src={item4} />
          <StyleText>④ 마이페이지 확인</StyleText>
          <StyleText2>출원결과 및 다른 상표들의 정보를</StyleText2>
          <StyleText2>확인할 수 있는 마이페이지 기능</StyleText2>
        </ItemContainer>
      
      </Container>
    </div>
  );
};
