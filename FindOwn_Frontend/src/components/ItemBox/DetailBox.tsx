import { ImageBox } from "./ItemStyle";
import { useEffect, useState } from "react";
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

export const DetailBox = (props: any) => {
  const { items } = props;
  const [detail] = useAtom(detailAtom);
  const [detailed, setDetailed] = useState(false);
  const [itemIndex] = useAtom(similarAtom);
  const [num, setNum] = useState(0);
  let similarNum = 0;

  console.log(detail); // Add this line to log the received data

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetailed(e.target.checked);
  };

  const checkDuplicated = () => {
    for(let i=0; i<3; i++){
      if(items && items?.trademark[i].result !== "안전" ){
        similarNum ++;
      }
      if(detail && detail?.trademark[i].result !== "안전"){
        similarNum ++;
      }
    }
  }

  //items중 tags 중 results 값이 != (안전, 주의, 위험) 중 안전 인 경우
  // console.log(items?.trademark[0].result);
  useEffect(() => {
    checkDuplicated();
    setNum(similarNum);
  }, [items]);
  

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
                    {Math.ceil(parseFloat(selectedItem.similarity) * 100)} %
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
                <span style={{ color: "#F00" }}>{num}</span> 개의 상표들과
                유사합니다.
              </Content>
            </LineContent>
          </ContentBox>
        </Container>
      )}
    </BoxContainer>
  );
};
