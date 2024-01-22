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
import { detailAtom, accessAtom } from "../../states/jotaiStates";
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
    alert("저장이 취소되었습니다.");
    navigate(`/`);
  };

  const [detail] = useAtom(detailAtom);
  const [access, setAccess] = useAtom(accessAtom);

  const saveResult = () => {
    try {
      apiClient.post(`/api/v2/users/comparison`, {
        originImage: detail?.input_image,
        open: true,
        trademarks: detail?.trademark,
      });
      setAccess(false);
      navigate(`/`);
      alert("성공적으로 저장되었습니다! 침해사례 반영까지 몇 초가 소요됩니다.");
    } catch (error) {
      console.log(error);
      alert("저장에 실패했습니다. 다시 시도해주세요.");
    }
  };

  const saveResultPrivate = () => {
    try {
      apiClient.post(`/api/v2/users/comparison`, {
        originImage: detail?.input_image,
        open: false,
        trademarks: detail?.trademark,
      });
      setAccess(false);
      navigate(`/`);
      alert("성공적으로 저장되었습니다! 마이페이지에서 확인해주세요.");
    } catch (error) {
      console.log(error);
      alert("저장에 실패했습니다. 다시 시도해주세요.");
    }
  };

  useEffect(() => {
    const storage = localStorage.getItem("token");
    if (!storage) {
      navigate(`/`);
      alert("접근 권한이 없습니다.");
    } else {
      apiClient.defaults.headers.common["Authorization"] = `Bearer ${storage}`;
    }
  }, []);

  return (
    <ModalContainer>
      <DialogBox>
        <ImageBox>
          <Close src={close} onClick={onClickToggleModal} />
        </ImageBox>
        <SubmitContainer>
          <Header>침해 사례를 저장하시겠습니까?</Header>
          <BtnUpper>
            <CommonBtn onClick={() => saveResultPrivate()}>
              비공개 저장
            </CommonBtn>
            <CommonBtn onClick={() => saveResult()}>공개 저장</CommonBtn>
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
