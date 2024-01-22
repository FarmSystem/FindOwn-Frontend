import {
  Container,
  Option,
  NavService,
  OriginalImage,
  ListContainer,
} from "../List/style";
import React, { useState, useCallback, useEffect } from "react";
import { DetailBox, SimilarItem } from "../../components/ItemBox";
import styled from "@emotion/styled";
import alarm from "../../assets/images/alarm_table.svg";
import { imgModalAtom } from "../../states/jotaiStates";
import { useAtom } from "jotai";
import { ImageModal } from "./ImageModal";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { resultDetail } from "../../apis/comparison";
import { detailAtom } from "../../states/jotaiStates";
import { apiClient } from "../../apis/apiClient";
import { Button } from "@mui/material";


export const DetailList = () => {
  const navigate = useNavigate();
  const [currentImg, setCurrentImg] = useAtom(imgModalAtom);
  const [index, setIndex] = useState<number | undefined>();
  const [detail, setDetail] = useAtom(detailAtom);

  //param값으로 index 정하기
  const params = useParams();
  useEffect(() => {
    setIndex(Number(params.id));
  }, [params.id]);

  // 데이터 중 currentIndex 불러오기
  const { data: listDetail, isLoading } = useQuery({
    queryKey: ["listDetail", index],
    queryFn: resultDetail,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled: index !== undefined,
  });

  useEffect(() => {
    setDetail(listDetail);
    console.log(detail);
  }, [listDetail]);

  //원본 이미지보기 모달
  const onClickToggleModal = useCallback(() => {
    setCurrentImg(!currentImg);
  }, [currentImg]);

  return (
    <Container>
      {currentImg && (
        <ImageModal
          onClickToggleModal={onClickToggleModal}
          imageURL={listDetail?.input_image}
        />
      )}
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
          {/* <DetailBox data={listDetail}/>
          <SimilarItem data={listDetail} /> */}
          <DetailBox items={listDetail} />
          <SimilarItem />
        </AdditionalContainer>
        <AlarmContainer>
          <AlarmContain>
            <AlarmText>침해도는 다음과 같이 구분됩니다.</AlarmText>
            <AlarmImg src={alarm} />
          </AlarmContain>
          <ButtonDiv>
            <Button
              sx={{
                width: "auto",
                height: "40px",
                backgroundColor: "#52C07E",
                color: "#ffffff",
                fontSize: "16px",
                fontWeight: "bold",
                borderRadius: "10px",
                marginRight: "20px",
              }}
              onClick={() => window.history.back()}
            >
              목록으로
            </Button>
          </ButtonDiv>
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
`;

const AlarmContainer = styled.div`
  // height: auto;
  // width: auto;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const AlarmText = styled.div`
  color: #959595;
  text-decoration: underline;
  font-size: 15px;
`;

const AlarmImg = styled.img`
  margin-top: 9px;
`;

const AlarmContain = styled.div`
  width: auto;
  height: auto;
`;

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;