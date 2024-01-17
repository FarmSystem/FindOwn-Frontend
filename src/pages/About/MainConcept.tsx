import { useParams } from "react-router-dom";
import React from "react";
import findOwnImg1 from "../../assets/images/mainConcept_1.png";
import findOwnImg2 from "../../assets/images/mainConcept_2.jpeg";
import findOwnImg3 from "../../assets/images/mainConcept_3.jpeg";
import findOwnImg4 from "../../assets/images/mainConcept_4.jpeg";
import styled from "@emotion/styled";
import { Button } from "@mui/material";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  @font-face {
    font-family: "AppleBold";
    src: url("https://cdn.jsdelivr.net/gh/cho1n/Apollo-Frontend@latest/src/assets/fonts/AppleSDGothicNeoB.ttf")
      format("truetype");
  }

  font-family: "AppleBold";
`;

const ImageDiv = styled.img`
  width: 50%;
  height: 40%;
  background-size: cover;
  background-position: center;
  border-radius: 15px;
  margin-top: 20px;
`;

const ContentDiv = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  padding-top: 20px;
  overflow-y: auto;
`;

const ButtonDiv = styled.div`
  width: 50%;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const MainConcept = () => {
  const { index } = useParams<{ index: string }>();
  const numIndex = Number(index);
  const images = [findOwnImg1, findOwnImg2, findOwnImg3, findOwnImg4];
  const contents = [
    "'상표'는 자신의 상품이나 서비스에 사용하는 마크입니다. \n '문자'뿐만 아니라 '도형','기호','움직임','홀로그램','소리','위치','색채'도 상표입니다. \n 더욱이 평면적 인 것뿐만 아니라 입체적인 것도 상표입니다.",
    "내용2",
    "내용3",
    "내용4",
  ];

  const content = numIndex !== undefined ? contents[numIndex] : undefined;
  const image = numIndex !== undefined ? images[numIndex] : undefined;

  return (
    <Container>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ImageDiv src={image} />
        <ContentDiv>
          <div
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              color: "gray",
              paddingBottom: "1rem",
            }}
          >
            FindOwn Content {numIndex + 1}
          </div>
          <div
            style={{
              fontSize: "20px",
            }}
          >
            {content?.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}{" "}
          </div>
        </ContentDiv>
        <ButtonDiv>
          <Button
            sx={{
              width: "80px",
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
      </div>
    </Container>
  );
};
