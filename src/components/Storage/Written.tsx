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
import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { WrittenBox } from "./WrittenBox";
import { useNavigate } from "react-router-dom";
import { ListPagination } from "../Pagination";

export const Written = () => {
  const [ locked, setLocked ] = useState(false);
  const navigate = useNavigate();

  // 더미데이터로 구성하기
  const Items = Array(10).fill(0);
  const LAST_PAGE = Items.length % 6 === 0 ? 
    Items.length /6 : Math.floor(Items.length /6) +1;
  const [page, setPage] = useState(1);
  const [data, setData] = useState<string[]>([]);
  useEffect(()=>{
    if(page === LAST_PAGE){
      setData(Items.slice(6 * (page-1)));
    }else{
      setData(Items.slice(6 * (page-1) , 6 * (page-1) + 6));
    }
  }, [page]);
  const handlePage = (e: React.MouseEvent<HTMLButtonElement>, page: number) => {
    const currentPage = Math.round(page);
    setPage(currentPage);
  };


  //비공개로 바꾸기
  const Locked = () => {
    setLocked(!locked);
  }

  const trashed = () => {
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
          {data.map((_, index) => (
            <Grid item xs={4} sm={4} md={4} key={index} style={{ width: 'auto', display: 'flex', justifyContent: 'center'}}>
              <div
              //  onClick={()=>navigate(`/list/${index}`)} 
               style={{cursor: 'pointer'}}>
                <WrittenBox />
              </div>
            </Grid>
          ))}
          </Grid>

          <div style={{alignItems: "center"}}>
            <ListPagination page={page} totalPages={LAST_PAGE} handlePageChange={handlePage} />
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