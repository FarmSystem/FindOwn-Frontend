import React, { PropsWithChildren, useEffect } from "react";
import {
  ModalContainer,
  Backdrop,
  DialogBox,
  ImageBox,
  Close,
  SubmitContainer,
  Header,
  BtnUpper,
  CommonBtn,
} from "../DetailList/ImgModalStyle";
import close from "../../assets/images/close_icon.svg";
import { useNavigate } from "react-router-dom";
import { apiClient } from "../../apis/apiClient";
import { detailAtom } from "../../states/jotaiStates";
import { useAtom } from "jotai";

interface ModalDefaultType {
  onClickToggleModal: () => void;
}

export const SubmitModal = ({
  onClickToggleModal,
}: // children
PropsWithChildren<ModalDefaultType>) => {
  const navigate = useNavigate();
  //저장취소하기
  const skipped = () => {
    onClickToggleModal();
    navigate(`/`);
  };
  const [detail] = useAtom(detailAtom);

  const saveResult = () => {
    try {
      apiClient.post(`/api/v2/users/comparison, `, {
        originImage: detail?.input_image,
        open: true,
        trademarks: detail?.trademarks,
      });
    } catch (error) {
      console.log(error);
      alert("저장에 실패했습니다. 다시 시도해주세요.");
    }
  };

  const saveResultPrivate = () => {
    try {
      apiClient.post(`/api/v2/users/comparison, `, {
        originImage: detail?.input_image,
        open: false,
        trademarks: detail?.trademarks,
      });
    } catch (error) {
      console.log(error);
      alert("저장에 실패했습니다. 다시 시도해주세요.");
    }
  };

  useEffect(() => {
    const storage = localStorage.getItem("token");
    if (!storage) {
      navigate(`/`);
      alert("로그인이 필요한 서비스입니다.");
    } else {
      apiClient.defaults.headers.common["Authorization"] = `Bearer ${storage}`;
    }
  });

  return (
    <ModalContainer>
      <DialogBox>
        <ImageBox>
          <Close src={close} onClick={onClickToggleModal} />
        </ImageBox>
        <SubmitContainer>
          <Header>침해 사례를 저장하시겠습니까?</Header>
          <BtnUpper>
            <CommonBtn onClick={() => saveResultPrivate}>비공개 저장</CommonBtn>
            <CommonBtn onClick={() => saveResult}>공개 저장</CommonBtn>
          </BtnUpper>
          <CommonBtn
            style={{ width: 360, height: 50, marginTop: 35 }}
            onClick={skipped}
          >
            저장 취소하기
          </CommonBtn>
        </SubmitContainer>
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
