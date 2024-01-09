import styled from "@emotion/styled";
import itemEx from '../../assets/images/itemImage1.svg';
import {
  ImageBox
} from './ItemStyle';
import { useState } from "react";
// 
import Switch from "@mui/material/Switch";
import { REPLCommand } from "repl";

export const DetailBox = () => {
  const [ detailed, setDetailed ] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetailed(e.target.checked);
  }
  return(
    <BoxContainer>
      <ImageContainer>
        <ImageBox src={itemEx} style={{width: 137, height: 220}}/>
      </ImageContainer>
      <ContentBox>
        <LineContent>
          <TitleContent>상표명</TitleContent>
          <Content>하트사자</Content>
        </LineContent>
        <LineContent style={{marginTop: 10}}>
          <TitleContent>출원인</TitleContent>
          <Content>하트사자 제작자</Content>
        </LineContent>
        <LineContent style={{marginTop: 10}}>
          <TitleContent>침해도</TitleContent>
          <Content>높음</Content>
        </LineContent>
        <LineContent style={{marginTop: 10, gap: 5}}>
          <TitleContent>자세히 보기</TitleContent>
          <Switch 
          checked={detailed}
          onChange={handleChange}
          inputProps={{ 'aria-label' : 'controlled'}}
          />
        </LineContent>
        <DetailInput detailed={detailed} >
          
        </DetailInput>
      </ContentBox>
    </BoxContainer>
  );
};

const label = { inputProps: {'aria-label': 'Size switch demo'}}

const BoxContainer = styled.div`
  width: 900px;
  height: 350px;
  border: 0.5px solid #959595;;
  display: flex;
  align-items: center;
  border-radius: 10px;  
  margin-top: 46px;
`

const ImageContainer = styled.div`
  width: 245px;
  height: 245px;
  margin-left: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
`;

const ContentBox = styled.div`
  width: 480px;
  border: 1px solid black;
  height: 100%;
  margin-left: 81px;
  padding-top: 58px;
`;

const LineContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TitleContent = styled.div`
  font-size: 18px;
  font-weight: 400;
`;

const Content = styled.div`
  margin-left: 50px;
  color: #494949;
  font-size: 18px;
  font-weight: 400;
`;

interface DetailProps {
  detailed: boolean;
}

const DetailInput = styled.div<DetailProps>`
  display: ${(props) => props.detailed == true ? 'flex' : 'none'};
  background-color: #F7F7F7;
  width: 480px;
  height: 130px;
`;