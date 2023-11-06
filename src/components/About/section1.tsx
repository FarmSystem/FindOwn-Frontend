import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import image from "../../assets/images/Search_engines-bro.png";
import { StyleButton } from "./StyleButton";

const Container = styled(Grid)`
  height: 550px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Text = styled.div`
  font-size: 70px;
  color: #0ac153;
  letter-spacing: 0.5px;
  margin-bottom: 10px;
  text-align: left;

  span.highlight {
    font-weight: bold;
  }

  @media (max-width: 1500px) {
    font-size: 40px;
  }
`;

const TextBox = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-left: 30px;
`;

const Image = styled.img`
  width: 650px;
  height: 550px;
`;

const PaddingText = styled(Text)`
  padding-top: 70px;
`

function Section1() {
  return (
    <Container container xs>
        <TextBox item xl={6} lg={6}>
          <PaddingText>
            <span className="highlight">
              {"상표권 관련 최신 이슈 및 주요 개념"}
            </span>
          </PaddingText>
          <Text>FindOwn 콘텐츠를 통해 </Text>
          <Text>상표권 관련 지식 및 트렌드를 알아봐요 ! </Text>
          <StyleButton />
        </TextBox>
        <TextBox item xl={6} lg={6}>
          <Image src={image} />
        </TextBox>
    </Container>
  );
}

export default Section1;
