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
import { deleteScrap, getScrap } from "../../apis/user";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { ListPagination } from "../Pagination";

export const Scrap = () => {
  const [scrap, setScrap] = useState<boolean>(true);
  const [unScrapNum, setUnScrapNum] = useState<number>();
  const [lastPage, setLastPage] = useState<number>(0);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const {data: scrapData, isLoading } = useQuery({
    queryKey: ["scrap-storage"],
    queryFn: getScrap,
    refetchOnMount: false,
    refetchOnWindowFocus: false
  });

  //스크랩한 번호전송
  const exitScrap = (props: any) => {
    const {issue_id, index} = props;
    // console.log(index);
    setScrap(!scrap);
    setUnScrapNum(index); // 어떤 이슈번호를 scrap을 안할지
    mutate({id: issue_id});
  };
  const {mutate} = useMutation({
    mutationFn: deleteScrap,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["scrap-storage"]
      });
    }
  });


  // 클라이언트 측에서 pagination
  // 여기서 LAST_PAGE가 integer 아니라고 에러뜸
  useEffect(()=>{
    let LAST_PAGE = scrapData?.length % 4 === 0 ? 
      scrapData?.length/4 : Math.floor(scrapData?.length/4) + 1;
    setLastPage(LAST_PAGE);
  }, [scrapData]);
  const [page, setPage] = useState<number>(1);
  const [data, setData] = useState<string[]>([]);
  useEffect(()=>{
    if(page === lastPage){
      setData(scrapData?.slice(4 * (page-1)));
    }else{
      setData(scrapData?.slice(4 * (page-1) , 6 * (page-1) + 4));
    }
  }, [page, scrapData]);
  const handlePage = (e: React.MouseEvent<HTMLButtonElement>, page: number) => {
    setPage(page);
  };

  // 이슈번호로 넘어가기
  const toIssue = (index: number) => {
    navigate(`/issue/${index}`);
  }

  const ScrapItem = () => {
    return(
      <>
        {data?.map((item: any, index: number) => (
          <Block key={index}>
            { unScrapNum!==index ? 
            <Scrapped src={scrapIcon} onClick={()=>exitScrap({issue_id: item.issue_id, index})} /> //스크랩된 경우
            : <Scrapped src={nonScrapIcon} key={index}/> //스크랩취소하면
            } 
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
              <TitleBlock onClick={()=>toIssue(item?.issue_id)}>{item?.issue_title}</TitleBlock>
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
      {
        !isLoading ?
          <ScrapTable>
          <div style={{width: "100%", height: 610}}>
            {ScrapItem()}
          </div>
          <div style={{marginTop: 54}}>
            <ListPagination page={page} totalPages={lastPage} handlePageChange={handlePage}/>
          </div>
        </ScrapTable>
        :
        <div>데이터를 불러오고 있습니다.</div>
      }
    </Wrapper>
  );
};
