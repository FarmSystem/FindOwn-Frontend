import styled from "@emotion/styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { wrap } from "popmotion";
import { Button } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import findOwnImg1 from "../../assets/images/mainConcept_1.png";
import findOwnImg2 from "../../assets/images/mainConcept_2.jpeg";
import findOwnImg3 from "../../assets/images/mainConcept_3.jpeg";
import findOwnImg4 from "../../assets/images/mainConcept_4.jpeg";

const Container = styled(motion.div)`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ItemContainer = styled.div`
  width: 1000px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  // background-image: linear-gradient(to top, #eeffed 0%, #eeffed 100%);
  margin: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @font-face {
    font-family: "AppleBold";
    src: url("https://cdn.jsdelivr.net/gh/cho1n/Apollo-Frontend@latest/src/assets/fonts/AppleSDGothicNeoB.ttf")
      format("truetype");
  }

  font-family: "AppleBold";
`;

const Item = styled(motion.div)`
  width: 300px;
  height: 350px;
  background-color: transparent;
  margin: 20px 0 20px 0;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-shrink: 0;
  position: absolute;
  cursor: pointer;
`;

export const Tag2 = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(0);
  const [back, setBack] = useState(false);
  const images = [findOwnImg1, findOwnImg2, findOwnImg3, findOwnImg4];
  const contents = [
    "상표권이란 ?",
    "상표란 ?",
    "상호와 상표의 차이 ?",
    "상표 등록이란 ?",
  ];
  const imageIndex = wrap(0, images.length, visible);
  const contentIndex = wrap(0, contents.length, visible);

  const navigateTo = (index: number) => {
    navigate(`/mainconcept/${index}`); // 해당 URL로 이동
  };

  const nextPlease = () => {
    setBack(false);
    setVisible((prev) =>
      prev === images.length - 1 ? images.length - 1 : prev + 1
    );
  };

  const prevPlease = () => {
    setBack(true);
    setVisible((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const boxVariants = {
    entry: (back: boolean) => ({
      x: back ? -500 : 500,
      opacity: 0,
      scale: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8 },
    },
    exit: (back: boolean) => ({
      x: back ? 500 : -500,
      opacity: 0,
      scale: 0,
      transition: { duration: 0.8 },
    }),
  };

  return (
    <Container>
      <ItemContainer>
        <div
          style={{
            position: "relative",
            height: "325px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AnimatePresence custom={back}>
            <Item
              custom={back}
              variants={boxVariants}
              initial="entry"
              animate="center"
              exit="exit"
              key={visible}
              onClick={() => navigateTo(visible)}
            >
              <img
                style={{
                  width: "300px",
                  height: "200px",
                  borderRadius: "20px",
                  objectFit: "cover",
                }}
                src={images[imageIndex]}
                alt="logo"
              />
              <div
                style={{
                  width: "100%",
                  fontSize: "16px",
                  color: "gray",
                  marginTop: "10px",
                  paddingLeft: "10px",
                  display: "flex",
                  justifyContent: "left",
                  alignItems: "left",
                }}
              >
                {"Content"}
                {contentIndex + 1}
              </div>
              <div
                style={{
                  width: "100%",
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#2C3541",
                  marginTop: "5px",
                  paddingLeft: "10px",
                  display: "flex",
                  justifyContent: "left",
                  alignItems: "left",
                }}
              >
                {contents[contentIndex]}
              </div>
            </Item>
          </AnimatePresence>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "10px",
            height: "100px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {" "}
          <Button
            sx={{
              width: "40px",
              height: "40px",
              backgroundColor: "transparent",
              borderRadius: "100px",
              border: "none",
              outline: "none",
              cursor: "pointer",
              fontSize: "20px",
              fontWeight: "bold",
              color: "#52c07e",
              margin: "20px",
            }}
            onClick={prevPlease}
          >
            {" "}
            {"<"}{" "}
          </Button>
          <Button
            sx={{
              width: "40px",
              height: "40px",
              backgroundColor: "transparent",
              borderRadius: "100px",
              border: "none",
              outline: "none",
              cursor: "pointer",
              fontSize: "20px",
              fontWeight: "bold",
              color: "#52c07e",
              margin: "20px",
            }}
            onClick={nextPlease}
          >
            {" "}
            {">"}{" "}
          </Button>
        </div>
      </ItemContainer>
    </Container>
  );
};
