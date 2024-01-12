import itemEx from '../../assets/images/itemImage1.svg';
import {
  ImageBox,
} from './ItemStyle';
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
  DescriptionContainer
} from './DetailStyles';
// 
import Switch from "@mui/material/Switch";

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
          <DescriptionContainer style={{height: 72}}>
            <TitleContent style={{fontSize: 15}}>상표 설명</TitleContent>
            <Description >
            하트모양 귀를 추가하여 고양이와 사자 사이의  하트사자만의 특별한 매력을 느낄 수 있습니다.
            하트모양 귀를 추가하여 고양이와 사자 사이의  하트사자만의 특별한 매력을 느낄 수 있습니다.
            하트모양 귀를 추가하여 고양이와 사자 사이의  하트사자만의 특별한 매력을 느낄 수 있습니다.
            하트모양 귀를 추가하여 고양이와 사자 사이의  하트사자만의 특별한 매력을 느낄 수 있습니다.
            하트모양 귀를 추가하여 고양이와 사자 사이의  하트사자만의 특별한 매력을 느낄 수 있습니다.
            </Description>
          </DescriptionContainer>
          <DescriptionContainer style={{marginTop: 11}}>
            <TitleContent style={{fontSize: 15}}>결과 보기</TitleContent>
            <Description>기존의 카카오 주식회사에서 내보인 라이언과 68%의 유사도로 위험상태입니다.</Description>
          </DescriptionContainer>
        </DetailInput>
        <LineContent style={{marginTop: 10, display: detailed ? 'none' : 'flex'}}>
          <TitleContent>유사디자인</TitleContent>
          <Content style={{marginLeft: 20, color: "#494949"}}>
            <span style={{color: '#F00'}}>3</span> 개의 상표들과 유사합니다.
          </Content>
        </LineContent>
      </ContentBox>
    </BoxContainer>
  );
};