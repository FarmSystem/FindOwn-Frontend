import React, { PropsWithChildren } from "react";
import {
  ModalContainer,
  Backdrop,
  DialogBox,
  ImageBox,
  Close,
  ImgContainer,
  OriginImg
} from './ImgModalStyle';
import close from '../../assets/images/close_icon.svg';
import original from '../../assets/images/similar1.png';

interface ModalDefaultType{
  onClickToggleModal: () => void;
}

export const ImageModal = ({
  onClickToggleModal, 
  // children
}: PropsWithChildren<ModalDefaultType>) => {
  return(
    <ModalContainer>
      <DialogBox>
        <ImageBox>
          <Close src={close} onClick={onClickToggleModal} />
        </ImageBox>
        <ImgContainer>
          <OriginImg src={original}/>
        </ImgContainer>
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