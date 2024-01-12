import { Fragment, useCallback } from "react";
import {
  Container,
  Text,
  Theader,
  InfoDiv,
  InfoContainer,
  PasswordDiv,
  PasswordContainer,
 } from './style';
import { Information, Password, CustomModal } from "../../components/Auth";
import { useAtom } from "jotai";
import { modalAtom } from "../../states/jotaiStates";
// import { CustomModal } from "../../components/Auth/CustomModal";

export const MyPage = () => {
  const [isOpenModal, setOpenModal] = useAtom(modalAtom);

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

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
      </InfoDiv>

    </Container>
  );
};