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
import { useAtom } from 'jotai';
import { similarAtom } from '../../states/jotaiStates';
//
import example1 from '../../assets/images/similar1.png';
import example2 from '../../assets/images/similar2.png';
import example3 from '../../assets/images/similar3.png';

const itemExample = [{
  id: 1,
  label: "카카오프렌즈 라이언",
  src: example1,
  source: "하트사자 제작자",
  level: "위험",
  description: "하트모양 귀를 추가하여 고양이와 사자 사이의  하트사자만의 특별한 매력을 느낄 수 있습니다.",
  accuracy: 65,
}, {
  id: 2,
  label: "카카오프렌즈 뽀글머리 라이언",
  source: "하트사자 제작자",
  src: example2,
  level: "안전",
  description: "하트모양 귀를 추가하여 고양이와 사자 사이의  하트사자만의 특별한 매력을 느낄 수 있습니다.",
  accuracy: 70,
}, {
  id: 3,
  label: "카카오프렌즈 라이언을 위장한 너구리",
  source: "하트사자 제작자",
  src: example3,
  level: "낮음",
  description: "하트모양 귀를 추가하여 고양이와 사자 사이의  하트사자만의 특별한 매력을 느낄 수 있습니다.",
  accuracy: 65,
},];


export const DetailBox = () => {
  const [ detailed, setDetailed ] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetailed(e.target.checked);
  }
  const [itemIndex, setItemIndex] = useAtom(similarAtom); // similar item 에서 클릭된 값
  
  return(
    <BoxContainer style={{marginTop: 0}}>
      <ImageContainer>
        <ImageBox src={itemExample[itemIndex]?.src} style={{width: 137, height: 220}}/>
      </ImageContainer>
      <ContentBox>
        <LineContent>
          <TitleContent>상표명</TitleContent>
          <Content>{itemExample[itemIndex]?.label}</Content>
        </LineContent>
        <LineContent style={{marginTop: 10}}>
          <TitleContent>출원인</TitleContent>
          <Content>{itemExample[itemIndex]?.source}</Content>
        </LineContent>
        <LineContent style={{marginTop: 10}}>
          <TitleContent>침해도</TitleContent>
          <Content>{itemExample[itemIndex]?.level}</Content>
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
            {itemExample[itemIndex]?.description}
            </Description>
          </DescriptionContainer>
          <DescriptionContainer style={{marginTop: 11}}>
            <TitleContent style={{fontSize: 15}}>결과 보기</TitleContent>
            <Description>기존의 카카오 주식회사에서 내보인 라이언과 <span style={{color: '#F00'}}>{itemExample[itemIndex]?.accuracy} %</span> 의 유사도로 <span style={{color:'#F00'}}>{itemExample[itemIndex]?.level} 상태 </span>입니다.</Description>
          </DescriptionContainer>
        </DetailInput>
        <LineContent style={{marginTop: 10, display: detailed ? 'none' : 'flex'}}>
          <TitleContent>유사디자인</TitleContent>
          <Content style={{marginLeft: 20, color: "#494949"}}>
            <span style={{color: '#F00'}}>3</span> 개의 상표들과 유사합니다.
            {/* 몇프로 이상을 유사하다고 판별할지 정해야함 */}
          </Content>
        </LineContent>
      </ContentBox>
    </BoxContainer>
  );
};