import React, { PropsWithChildren } from "react";
import {
  ModalContainer,
  Backdrop,
  DialogBox,
  ImageBox,
  Close,
  ImgContainer,
  OriginImg,
} from "./ImgModalStyle";
import close from "../../assets/images/close_icon.svg";

interface ModalDefaultType {
  imageURL: string | null;
  onClickToggleModal: () => void;
}

export const ImageModal = ({
  imageURL,
  onClickToggleModal,
}: // children
PropsWithChildren<ModalDefaultType>) => {
  
  return (
    <ModalContainer>
      <DialogBox>
        <ImageBox>
          <Close
            src={close}
            onClick={() => {
              console.log("clicked");
              onClickToggleModal();
            }}
          />
        </ImageBox>
        <ImgContainer>
          <OriginImg src={imageURL || undefined} />
        </ImgContainer>
      </DialogBox>
      <Backdrop
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();
          if (onClickToggleModal) {
            onClickToggleModal();
          }
        }}
      />
    </ModalContainer>
  );
};
