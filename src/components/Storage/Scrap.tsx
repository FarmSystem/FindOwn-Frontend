import styled from "@emotion/styled";
import scrapIcon from '../../assets/images/scrapped.svg';
import nonScrapIcon from '../../assets/images/unscrapped.svg';
import { useState } from "react";
import {
  Wrapper,
  ScrapHeader,
  ScrapForIcon,
  Text,
  ScrapTable,
  Block,
  Scrapped,
  TitleBlock,
  DetailBox,
  AddDiv,
  AddText,
  ContentBlock,
  Tagcontainer,
  HashTag,
  Date
} from './style';

export const Scrap = () => {
  const [scrap, setScrap] = useState(true);

  const ScrapItem = () => {
    return(
      <Block>
        { scrap ? 
          <Scrapped src={scrapIcon} onClick={()=>setScrap(false)}/>
        : <Scrapped src={nonScrapIcon} /> }

        <DetailBox>
          <AddDiv>
            <AddText>0</AddText>
            <AddText>스크랩</AddText>
          </AddDiv>
          <AddDiv>
            <AddText>20</AddText>
            <AddText>조회수</AddText>
          </AddDiv>
        </DetailBox>

        <ContentBlock>
          <TitleBlock> 그동안 모르고 있었던 상표권의 기나긴 분쟁이  최근 일론머스크가 새로운 관심이 생길지도몰랏는데</TitleBlock>
          <Tagcontainer>
            <HashTag>빅테크 메거진</HashTag>
            <Date>2023년 12월 27일</Date>
          </Tagcontainer>
        </ContentBlock>
      </Block>
    )
  }

  return(
    <Wrapper>
      <ScrapHeader>
        <ScrapForIcon src={scrapIcon}/>
        <Text>버튼을 클릭하면 저장내역에서 사라집니다.</Text>
      </ScrapHeader>
      <ScrapTable>
        {ScrapItem()}
      </ScrapTable>
    </Wrapper>
  );
};

