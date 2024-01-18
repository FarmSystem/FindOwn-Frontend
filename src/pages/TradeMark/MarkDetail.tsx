import {
  Container,
  Option,
  LightCare,
  NavService,
  ListContainer,
  OriginalImage,
} from "../List/style";
import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import brightVersion from "../../assets/images/bright_version.svg";
import darkVersion from "../../assets/images/night_version.svg";
import { DetailBox, SimilarItem } from "../../components/ItemBox";
import styled from "@emotion/styled";
import alarm from "../../assets/images/alarm_table.svg";
import { useAtom } from "jotai";
import {
  imgModalAtom,
  submitModalAtom,
  detailAtom,
} from "../../states/jotaiStates";
import { ImageModal } from "../DetailList/ImageModal";
import { SubmitModal } from "./SubmitModal";
import { apiClient } from "../../apis/apiClient";

export const MarkDetail = () => {
  const navigate = useNavigate();
  const [detail, setDetail] = useAtom(detailAtom);
  const [bright, setBright] = useState(true);
  const [currentImg, setCurrentImg] = useAtom(imgModalAtom);
  const [submitBtn, setSubmitBtn] = useAtom(submitModalAtom);
  const toggleBright = () => {
    setBright(!bright);
  };

  //원본 이미지보기 모달
  const onClickToggleModal = useCallback(() => {
    setCurrentImg(!detail?.input_image);
  }, [detail?.input_image]);

  //결과 저장하기 모달
  const handleSubmitModal = useCallback(() => {
    setSubmitBtn(!submitBtn);
  }, [submitBtn]);

  const getDetail = async () => {
    try {
      await apiClient.get(``).then((res) => {
        setDetail(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <Container>
      {currentImg && <ImageModal onClickToggleModal={onClickToggleModal} />}
      {submitBtn && <SubmitModal onClickToggleModal={handleSubmitModal} />}
      <Option>
        <LightCare
          onClick={toggleBright}
          src={bright ? brightVersion : darkVersion}
        />
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
