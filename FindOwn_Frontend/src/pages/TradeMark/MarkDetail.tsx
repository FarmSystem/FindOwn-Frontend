import {
  Container,
  Option,
  NavService,
  ListContainer,
  OriginalImage,
} from "../List/style";
import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DetailBox, SimilarItem } from "../../components/ItemBox";
import styled from "@emotion/styled";
import alarm from "../../assets/images/alarm_table.svg";
import { useAtom } from "jotai";
import {
  imgModalAtom,
  submitModalAtom,
  detailAtom,
  accessAtom,
} from "../../states/jotaiStates";
import { SubmitModal } from "./SubmitModal";
import { apiClient } from "../../apis/apiClient";
import { ImageModal } from "../DetailList/ImageModal";

const AdditionalContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  // border: 1px solid black;
`;

const AlarmContainer = styled.div`
  height: auto;
  width: auto;
  // border: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

const ContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 210px;
`;

const AlarmText = styled.div`
  color: #959595;
  text-decoration: underline;
  font-size: 15px;
`;

const AlarmImg = styled.img`
  margin-top: 9px;
`;
const SubmitBtn = styled.button`
  width: 210px;
  height: 58px;
  font-size: 22px;
  border-radius: 5px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const MarkDetail = () => {
  const navigate = useNavigate();
  const [detail] = useAtom(detailAtom);
  const [access] = useAtom(accessAtom);
  const [currentImg, setCurrentImg] = useAtom(imgModalAtom);
  const [submitBtn, setSubmitBtn] = useAtom(submitModalAtom);
  const [imageURL, setImageURL] = useState<string | null>(null);

  //원본 이미지보기 모달
  const onClickToggleModal = useCallback(() => {
    setCurrentImg(!currentImg);
    setImageURL(detail?.input_image || null);
  }, [currentImg]);

  //결과 저장하기 모달
  const handleSubmitModal = useCallback(() => {
    setSubmitBtn(!submitBtn);
  }, [submitBtn]);

  const getAuth = async () => {
    const accessAuth = access;
    const storage = localStorage.getItem("token");
    if (!storage || !accessAuth) {
      navigate(`/`);
      alert("접근 권한이 없습니다.");
    } else {
      apiClient.defaults.headers.common["Authorization"] = `Bearer ${storage}`;
    }
  };

  useEffect(() => {
    getAuth();
  }, []);

  return (
    <Container>
      {currentImg && (
        <ImageModal
          imageURL={imageURL}
          onClickToggleModal={onClickToggleModal}
        />
      )}
      {submitBtn && <SubmitModal onClickToggleModal={handleSubmitModal} />}

      <Option>
        <NavService onClick={() => navigate(`/trademark`)}>
          상표 판단 바로가기
        </NavService>
      </Option>

      <ListContainer>
        <AdditionalContainer>
          <OriginalImage onClick={onClickToggleModal}>
            원본 이미지 보기
          </OriginalImage>
          <DetailBox />
          <SimilarItem />
        </AdditionalContainer>

        <AlarmContainer>
          <ContainerBox>
            <AlarmText>침해도는 다음과 같이 구분됩니다.</AlarmText>
            <AlarmImg src={alarm} />
          </ContainerBox>
          <SubmitBtn onClick={handleSubmitModal}>결과 저장하기</SubmitBtn>
        </AlarmContainer>
      </ListContainer>
    </Container>
  );
};
