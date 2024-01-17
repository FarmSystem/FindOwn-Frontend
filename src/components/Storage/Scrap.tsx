import styled from "@emotion/styled";
import scrapIcon from '../../assets/images/scrapped.svg';
import nonScrapIcon from '../../assets/images/unscrapped.svg';
import { useState, useEffect } from "react";
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
import { getScrap } from "../../apis/user";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { ListPagination } from "../Pagination";

export const Scrap = () => {
  const [scrap, setScrap] = useState<boolean>(true);
  const navigate = useNavigate();
  const {data: scrapData, isLoading } = useQuery({
    queryKey: ["scrap-storage"],
    queryFn: getScrap,
    refetchOnMount: true,
  });

  // 클라이언트 측에서 pagination
  const LAST_PAGE = scrapData?.length % 4 === 0 ? 
    scrapData?.length/4 : Math.floor(scrapData?.length/4) + 1;
  const [page, setPage] = useState(1);
  const [data, setData] = useState<string[]>([]);
  useEffect(()=>{
    if(page === LAST_PAGE){
      setData(scrapData?.slice(4 * (page-1)));
    }else{
      setData(scrapData?.slice(4 * (page-1) , 6 * (page-1) + 4));
    }
  }, [page]);
  const handlePage = (e: React.MouseEvent<HTMLButtonElement>, page: number) => {
    const currentPage = Math.round(page);
    setPage(currentPage);
  };

  // 이슈번호로 넘어가기
  const toIssue = () => {
    navigate(`/`)
  }


  const ScrapItem = () => {
    return(
      <>
        {scrapData?.map((item: any, index: number) => (
          <Block key={index}>
            { scrap ? 
            <Scrapped src={scrapIcon} onClick={()=>setScrap(!scrap)}/>
          : <Scrapped src={nonScrapIcon} /> }
            <DetailBox>
              <AddDiv>
                <AddText>{item?.scrap_cnt}</AddText>
                <AddText>스크랩</AddText>
              </AddDiv>
              <AddDiv>
                <AddText>{item?.view_cnt}</AddText>
                <AddText>조회수</AddText>
              </AddDiv>
            </DetailBox>
            <ContentBlock>
              <TitleBlock>{item?.issue_title}</TitleBlock>
              <Tagcontainer>
                <HashTag>{item?.category}</HashTag>
                <Date>{item?.year}년 {item?.month}월 {item?.day}일</Date>
              </Tagcontainer>
            </ContentBlock>
          </Block>
          ))
        }
      </>
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
        <div style={{marginTop: 54}}>
          <ListPagination page={page} totalPages={LAST_PAGE} handlePageChange={handlePage}/>
        </div>
      </ScrapTable>
    </Wrapper>
  );
};

