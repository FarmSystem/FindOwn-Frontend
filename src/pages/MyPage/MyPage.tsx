import { Fragment } from "react";
import {
  Origin,
  Text,
  Theader,
  InfoDiv,
  InfoContainer,
  ProfileDiv,
  ProfileImg,
  ProfileEditor
 } from './style';

export const MyPage = () => {
  return(
    <Origin>
      <Text>계정 관리</Text>
      <Theader>기본 정보</Theader>
      <InfoDiv>
        <InfoContainer>
          <ProfileDiv>
            <ProfileImg/>
            <ProfileEditor/>
          </ProfileDiv>
        </InfoContainer>
      </InfoDiv>
    </Origin>
  );
};