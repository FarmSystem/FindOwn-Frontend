import React, { PropsWithChildren } from "react";
import styled from "@emotion/styled";
import {
  ModalContainer,
  Backdrop,
  DialogBox,
  Header,
  Inputs,
  InputTitle,
  InputBox,
  AlertText,
  ButtonLayer,
  PressButton,
} from './ModalStyle';

interface ModalDefaultType{
  onClickToggleModal: () => void;
}

export const CustomModal = ({
  onClickToggleModal, 
  // children
}: PropsWithChildren<ModalDefaultType>) => {
  return(
    <ModalContainer>
      <DialogBox>
        <Header>비밀번호 변경</Header>
        <Inputs style={{marginTop: 27}}>
          <InputTitle>현재 비밀번호</InputTitle>
          <InputBox/>
          <AlertText></AlertText>
        </Inputs>
        <Inputs style={{marginTop: 6}}>
          <InputTitle>새 비밀번호</InputTitle>
          <InputBox/>
          <AlertText></AlertText>
        </Inputs>
        <Inputs style={{marginTop: 6}}>
          <InputTitle>새 비밀번호 확인</InputTitle>
          <InputBox/>
          <AlertText></AlertText>
        </Inputs>
        <ButtonLayer>
          <PressButton msg="취소" onClick={onClickToggleModal} >취소</PressButton>
          <PressButton msg="저장" onClick={onClickToggleModal} >저장</PressButton>
        </ButtonLayer>
      </DialogBox>
      <Backdrop 
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();
          if(onClickToggleModal){
            onClickToggleModal();
          }
        }}
      />
    </ModalContainer>
  );
};