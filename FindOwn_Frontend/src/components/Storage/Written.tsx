import { 
  Block, 
  IconImage, 
  ScrapHeader, 
  ScrapTable, 
  Wrapper ,
  Text,
} from "./style";
import trashIcon from '../../assets/images/trash_icon.svg';
import unlockIcon from '../../assets/images/unlock_represent.svg';
import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { WrittenBox } from "./WrittenBox";
import { useNavigate } from "react-router-dom";
import { ListPagination } from "../Pagination";
import { useQuery } from "@tanstack/react-query";
import { ownResult } from "../../apis/comparison";

export const Written = () => {
  const [ locked, setLocked ] = useState(false);
  const navigate = useNavigate();
  const [lastPage, setLastPage] = useState<number>(0);

  //데이터 불러오기
  const {data: userWrite, isLoading} = useQuery({
    queryKey: ["userWrite"],
    queryFn: ownResult,
    refetchOnMount: true,
    // refetchOnWindowFocus: true,
  });

  // 실제 데이터 연결하기
  useEffect(()=>{
    if(userWrite) {
      let LAST_PAGE = userWrite?.length % 6 === 0 ? 
      userWrite?.length/6 : Math.floor(userWrite?.length/6) + 1;
      setLastPage(LAST_PAGE);
    }else{
      setLastPage(0);
    }
  }, [userWrite]);

  const [page, setPage] = useState(1);
  const [data, setData] = useState<string[]>([]);
  useEffect(()=>{
    if(page === lastPage){
      setData(userWrite?.slice(6 * (page-1)));
    }else{
      setData(userWrite?.slice(6 * (page-1) , 6 * (page-1) + 6));
    }
  }, [page]);
  const handlePage = (e: React.MouseEvent<HTMLButtonElement>, page: number) => {
    const currentPage = Math.round(page);
    setPage(currentPage);
  };

  const WriteBlock = () => {
    return(
      <Block>
        <ColumnContainer>
          <Grid
            container
            spacing={2}
            columns={12}
            style={{width: "100%", height: "100%"}}>
          {data?.map((item: any, index: number) => (
            <Grid item xs={4} sm={4} md={4} key={index} style={{ width: 'auto', display: 'flex', justifyContent: 'center'}}>
              <div
              //  onClick={()=>navigate(`/list/${item?.comparison_id}`)} 
               style={{cursor: 'pointer'}}>
                <WrittenBox listIndex={index} data={userWrite} itemIndex={item?.comparison_id}/>
              </div>
            </Grid>
          ))}
          </Grid>

          <div style={{alignItems: "center"}}>
            <ListPagination page={page} totalPages={lastPage} handlePageChange={handlePage} />
          </div>

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

const ColumnContainer = styled.div`
  width: 100%;
  margin-top: 19px;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;