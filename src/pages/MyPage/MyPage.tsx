import { Fragment } from "react";
import {
  Container,
  Text,
  Theader,
  InfoDiv,
  InfoContainer,
  PasswordDiv,
  PasswordContainer,
 } from './style';
 import edit from '../../assets/images/Edit_btn.svg';
import { Information } from "../../components/Auth";

export const MyPage = () => {
  return(
    <Container>
      <InfoDiv>
        <Text>계정 관리</Text>
        <Theader>기본정보</Theader>
        <InfoContainer>
          <Information />
        </InfoContainer>
        <PasswordDiv>
          <Theader>비밀번호</Theader>
          <PasswordContainer>

          </PasswordContainer>
        </PasswordDiv>
      </InfoDiv>
    </Container>
  );
};