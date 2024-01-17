import React, { PropsWithChildren } from "react";
import {
  ModalContainer,
  Backdrop,
  DialogBox,
  ImageBox,
  Close,
  SubmitContainer,
  Header,
  BtnUpper,
  CommonBtn
} from './ImgModalStyle';
import close from '../../assets/images/close_icon.svg';
import { useNavigate } from "react-router-dom";

interface ModalDefaultType{
  onClickToggleModal: () => void;
}

export const SubmitModal = ({
  onClickToggleModal, 
  // children
}: PropsWithChildren<ModalDefaultType>) => {
  const navigate = useNavigate();
  //저장취소하기
  const skipped = () => {
    onClickToggleModal();
    navigate(`/`);
  }

  return(
    <ModalContainer>
      <DialogBox>
        <ImageBox>
          <Close src={close} onClick={onClickToggleModal} />
        </ImageBox>
        <SubmitContainer>
          <Header>침해 사례를 저장하시겠습니까?</Header>
          <BtnUpper>
            <CommonBtn>비공개 저장</CommonBtn>
            <CommonBtn>공개 저장</CommonBtn>
          </BtnUpper>
          <CommonBtn 
          style={{width: 360, height: 50, marginTop: 35}}
          onClick={skipped}>
            저장 취소하기
          </CommonBtn>
        </SubmitContainer>
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