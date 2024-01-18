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
} from "./DetailStyles";
//
import Switch from "@mui/material/Switch";
import { useAtom } from "jotai";
import { similarAtom, detailAtom } from "../../states/jotaiStates";
//

export const DetailBox = () => {
  const [detail] = useAtom(detailAtom);
  const [detailed, setDetailed] = useState(false);
  const [itemIndex, setItemIndex] = useAtom(similarAtom); // similar item 에서 클릭된 값

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetailed(e.target.checked);
  };
  const item = detail?.trademarks[itemIndex];

  if (!item) {
    return null;
  }

  return (
    <BoxContainer style={{ marginTop: 0 }}>
      <ImageContainer>
        <ImageBox src={item.image_path} style={{ width: 137, height: 220 }} />
      </ImageContainer>
      <ContentBox>
        <LineContent>
          <TitleContent>상표명</TitleContent>
          <Content>{item.title}</Content>
        </LineContent>
        <LineContent style={{ marginTop: 10 }}>
          <TitleContent>출원인</TitleContent>
          <Content>{item.application_name}</Content>
        </LineContent>
        <LineContent style={{ marginTop: 10 }}>
          <TitleContent>침해도</TitleContent>
          <Content>{item.result}</Content>
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
              <span style={{ color: "#F00" }}>{item.similarity} %</span> 의
              유사도로{" "}
              <span style={{ color: "#F00" }}>{item.result} 상태 </span>
              입니다.
            </Description>
          </DescriptionContainer>
        </DetailInput>
        <LineContent
          style={{ marginTop: 10, display: detailed ? "none" : "flex" }}
        >
          <TitleContent>유사디자인</TitleContent>
          <Content style={{ marginLeft: 20, color: "#494949" }}>
            <span style={{ color: "#F00" }}>3</span> 개의 상표들과 유사합니다.
            {/* 몇프로 이상을 유사하다고 판별할지 정해야함 */}
          </Content>
        </LineContent>
      </ContentBox>
    </BoxContainer>
  );
};
