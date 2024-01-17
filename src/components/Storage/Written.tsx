import { 
  Block, 
  IconImage, 
  ScrapHeader, 
  ScrapTable, 
  Wrapper ,
  Text,
  Tagcontainer,
  HashTag,
  Date
} from "./style";
import trashIcon from '../../assets/images/trash_icon.svg';
import unlockIcon from '../../assets/images/unlock_represent.svg';
import lock from '../../assets/images/lock_icon.svg';
import unlock from '../../assets/images/unlock_icon.svg';
import { useState } from "react";
import styled from "@emotion/styled";

export const Written = () => {
  const [ locked, setLocked ] = useState(false);

  //비공개로 바꾸기
  const Locked = () => {
    setLocked(!locked);
  }

  const trashed = () => {
  };

  const WriteBlock = () => {
    return(
      <Block>
        {
          locked ? 
          <IconBtn src={lock} onClick={()=>setLocked(!locked)}/>
          :
          <IconBtn src={unlock} onClick={()=>setLocked(!locked)} />
        }
        <ColumnContainer>
          <RowContainer>
            <TitleBlock>라이언하트 외 2개</TitleBlock>
            <IconBtn src={trashIcon} style={{margin:0, marginLeft: 770}} onClick={trashed}/>
          </RowContainer>
          <Tagcontainer style={{marginRight: 20}}>
            <HashTag style={{width: 60, height: 30}}>위험</HashTag>
            <Date>2023년 12월 27일</Date>
          </Tagcontainer>
        </ColumnContainer>
      </Block>
    );
  };

  return(
    <Wrapper>
      <ScrapHeader>
        <IconImage src={trashIcon}/>
        <Text>삭제</Text>
        <IconImage src={unlockIcon} style={{marginLeft: 20}}/>
        <Text>공개/비공개</Text>
      </ScrapHeader>
      <ScrapTable>
        {WriteBlock()}
      </ScrapTable>
    </Wrapper>
  );
};

const IconBtn = styled.img`
  width: 20px;
  height: 23px;
  margin: 19px 0 0 16px;
`;

const ColumnContainer = styled.div`
  width: 100%;
  margin-top: 19px;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
`;

const RowContainer = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TitleBlock = styled.div`
  font-size: 20px;
`;