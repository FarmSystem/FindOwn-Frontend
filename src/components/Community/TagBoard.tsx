import styled from "@emotion/styled";
import { Button } from "@mui/material";
import React from "react";

const Container = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: row;
`;

const TagBox = styled.div`
  width: 20%;
  height: 40%;
  margin: 10px;
  border-radius: 10px;
  background-color: #fafffb;
  display: flex;
  flex-direction: column;
`;

const TagTitle = styled.div<{ tagName: string }>`
  width: 100%;
  height: 10%;
  border-radius: 10px 10px 0 0;

  ${(props) => getColorBasedOnTagName(props.tagName)}
`;

const TagContent = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 20px;
  font-size: 1.4rem;
  color: #525252;
`;

const TagBottom = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  padding-left: 20px;
`;

const getColorBasedOnTagName = (tagName: string) => {
  switch (tagName) {
    case "상표권":
      return "background-color: #52c07e;";
    case "판결":
      return "background-color: #8FF6A0;";
    case "기타 질문":
      return "background-color: #B1E2C5;";
    default:
      return "";
  }
};

export const TagBoard = () => {
  return (
    <Container>
      <TagBox>
        <TagTitle tagName="상표권" />
        <TagContent>
          # 상표권
          <p
            style={{
              color: "#525252",
              fontSize: "1rem",
              marginTop: "10px",
            }}
          >
            상표권과 관련된 정보와 프로세스
          </p>
        </TagContent>
        <TagBottom>
          <Button
            sx={{
              backgroundColor: "#52c07e",
              color: "#ffffff",
              borderRadius: "10px",
              width: "40%",
              height: "70%",
              fontSize: "1rem",
            }}
          >
            모아보기
          </Button>
        </TagBottom>
      </TagBox>
      <TagBox>
        <TagTitle tagName="판결" />
        <TagContent>
          # 판결
          <p
            style={{
              color: "#525252",
              fontSize: "1rem",
              marginTop: "10px",
            }}
          >
            판결과 관련된 정보와 프로세스
          </p>
        </TagContent>
        <TagBottom>
          <Button
            sx={{
              backgroundColor: "#52c07e",
              color: "#ffffff",
              borderRadius: "10px",
              width: "40%",
              height: "70%",
              fontSize: "1rem",
            }}
          >
            모아보기
          </Button>
        </TagBottom>
      </TagBox>
      <TagBox>
        <TagTitle tagName="기타 질문" />
        <TagContent>
          # 기타 질문
          <p
            style={{
              color: "#525252",
              fontSize: "1rem",
              marginTop: "10px",
            }}
          >
            기타 질문 및 간단한 상담
          </p>
        </TagContent>
        <TagBottom>
          <Button
            sx={{
              backgroundColor: "#52c07e",
              color: "#ffffff",
              borderRadius: "10px",
              width: "40%",
              height: "70%",
              fontSize: "1rem",
            }}
          >
            모아보기
          </Button>
        </TagBottom>
      </TagBox>
    </Container>
  );
};
