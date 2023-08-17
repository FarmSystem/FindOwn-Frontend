import React from "react";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";

const Container = styled(Grid)`
  width: 100vw;
  height: 50%;
  display: flex;
  flex-direction: column;
  max-width: 1440px;
`;

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  padding-left: 330px;
  `;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
`;

const ColorBox = styled.div`
  width: 130px;
  height: 130px;
  background-color: #c5f3a1;
  border-radius: 10px;
  margin: 30px;
`;

const Text = styled.div`
  font-size: 20px;
  color: black;
  letter-spacing: 0.5px;

  span.highlight {
    font-size: 30px;
    color: #52c07e;
    opacity: 0.75;
    font-weight: bold;
  }
`;

export const Section2 = () => {
  return (
    <Container xs={12}>
      <Box>
        <ColorBox />
        <TextBox>
          <Text>
            {" "}
            <span className="highlight">
              {"검색하려는 이미지를 드래그, 혹은 선택합니다"}
            </span>
          </Text>
          <Text>이미지는 파일 드래그 혹은 업로드로 검색할 수 있습니다.</Text>
          <Text>검색을 지원하는 형식은 jpg, jpeg, png입니다.</Text>
          <Text>
            ✓ 업로드된 이미지 파일은 본 서비스에서만 사용되며, 저장되지
            않습니다.
          </Text>
        </TextBox>
      </Box>
      <Box>
        <ColorBox />
        <TextBox>
          <Text>
            <span className="highlight">
              AI가 이미지 파일을 검색 ∙ 비교합니다.
            </span>
          </Text>
          <Text>이미지 업로드 후 AI가 상표권을 비교 ∙ 분석합니다.</Text>
          <Text>결과물은 유사한 상표권이 있는지,</Text>
          <Text>그 정도가 어느 정도인지에 대해 나타내줍니다.</Text>
        </TextBox>
      </Box>
    </Container>
  );
};
