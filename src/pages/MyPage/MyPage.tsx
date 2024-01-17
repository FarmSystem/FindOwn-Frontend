import { Fragment, useCallback } from "react";
import {
  Container,
  Text,
  Theader,
  InfoDiv,
  InfoContainer,
  PasswordDiv,
  PasswordContainer,
  ExitDiv,
  ExitContainer,
  ExitText,
  ExitBtn
 } from './style';
import { Information, Password, CustomModal } from "../../components/Auth";
import { useAtom } from "jotai";
import { modalAtom } from "../../states/jotaiStates";
import { exitMember } from "../../apis/user";
import { useMutation } from "@tanstack/react-query";
// import { CustomModal } from "../../components/Auth/CustomModal";

export const MyPage = () => {
  const [isOpenModal, setOpenModal] = useAtom(modalAtom);

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  const {mutate} = useMutation({
    mutationFn: exitMember
  });

  //회원탈퇴
  const realExit = () => {
    mutate();
  }

  return(
    <Container>
      {
        isOpenModal &&(
          <CustomModal onClickToggleModal={onClickToggleModal}/>
        )
      }
      <InfoDiv>
        <Text>계정 관리</Text>
        <Theader>기본정보</Theader>
        <InfoContainer>
          <Information />
        </InfoContainer>
        <PasswordDiv>
          <Theader>비밀번호</Theader>
          <PasswordContainer>
            <Password/>
          </PasswordContainer>
        </PasswordDiv>
        <ExitDiv>
          <div style={{display: "flex", flexDirection: "row", gap: 20, alignItems: "flex-end"}}>
            <Theader style={{marginTop: 10}}>회원탈퇴</Theader>
            <ExitBtn onClick={realExit}>탈퇴하기</ExitBtn>
          </div>
          <ExitText>탈퇴하기를 클릭하면 모든 회원정보가 사라집니다.</ExitText>
        </ExitDiv>
      </InfoDiv>

    </Container>
  );
};