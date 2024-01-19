import { ImageBox } from "./ItemStyle";
import { useState } from "react";
import {
  BoxContainer,
  ImageContainer,
  ContentBox,
  LineContent,
  TitleContent,
  Content,
  DetailInput,
  Description,
  DescriptionContainer,
  Container,
} from "./DetailStyles";
//
import Switch from "@mui/material/Switch";
import { useAtom } from "jotai";
import { similarAtom, detailAtom } from "../../states/jotaiStates";
//

export const DetailBox = () => {
  const [detail] = useAtom(detailAtom);
  const [detailed, setDetailed] = useState(false);
  const [itemIndex] = useAtom(similarAtom);

  // console.log(detail); // Add this line to log the received data

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetailed(e.target.checked);
  };

  const selectedItem = detail?.trademark?.[itemIndex];

  return (
    <BoxContainer style={{ marginTop: 0 }}>
      {selectedItem && (
        <Container>
          <ImageContainer>
            <ImageBox
              src={selectedItem.image_path}
              style={{ width: "80%", height: "80%" }}
            />
          </ImageContainer>
          <ContentBox>
            <LineContent>
              <TitleContent>상표명</TitleContent>
              <Content>{selectedItem.title}</Content>
            </LineContent>
            <LineContent style={{ marginTop: 10 }}>
              <TitleContent>출원인</TitleContent>
              <Content>{selectedItem.application_name}</Content>
            </LineContent>
            <LineContent style={{ marginTop: 10 }}>
              <TitleContent>침해도</TitleContent>
              <Content>{selectedItem.result}</Content>
            </LineContent>
            <LineContent style={{ marginTop: 10, gap: 5 }}>
              <TitleContent>자세히 보기</TitleContent>
              <Switch
                checked={detailed}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
            </LineContent>
            <DetailInput detailed={detailed}>
              <DescriptionContainer style={{ marginTop: 11 }}>
                <TitleContent style={{ fontSize: 15 }}>결과 보기</TitleContent>
                <Description>
                  입력하신 상표와{" "}
                  <span style={{ color: "#F00" }}>
                    {selectedItem.similarity} %
                  </span>{" "}
                  의 유사도로{" "}
                  <span style={{ color: "#F00" }}>
                    {selectedItem.result} 상태{" "}
                  </span>
                  입니다.
                </Description>
              </DescriptionContainer>
            </DetailInput>
            <LineContent
              style={{ marginTop: 10, display: detailed ? "none" : "flex" }}
            >
              <TitleContent>유사디자인</TitleContent>
              <Content style={{ marginLeft: 20, color: "#494949" }}>
                <span style={{ color: "#F00" }}>3</span> 개의 상표들과
                유사합니다.
              </Content>
            </LineContent>
          </ContentBox>
        </Container>
      )}
    </BoxContainer>
  );
};
