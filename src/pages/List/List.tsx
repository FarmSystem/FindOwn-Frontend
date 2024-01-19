import {
  Container,
  Option,
  LightCare,
  NavService,
  ListContainer
} from './style';
import React, { ReactEventHandler, useEffect, useState } from 'react';
import brightVersion from '../../assets/images/bright_version.svg';
import darkVersion from '../../assets/images/night_version.svg';
import { ExampleBox } from '../../components/ItemBox';
import { Grid } from '@mui/material';
import { ListPagination } from '../../components/Pagination';
import { useNavigate } from "react-router-dom";
import { useAtom } from 'jotai';
import { lightAtom } from '../../states/jotaiStates';
import { useQuery } from '@tanstack/react-query';
import { resultList } from '../../apis/comparison';

export const List = () => {
  const navigate = useNavigate();
  const [ bright, setBright ] = useAtom(lightAtom);
  const [lastPage, setLastPage] = useState<number>(0);

  const toggleBright = () => {
    setBright(!bright);
  };

  //데이터 불러오기
  const { data: list, isLoading } = useQuery({
    queryKey: ["list"],
    queryFn: resultList,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  // 실제 데이터 연결하기
  useEffect(()=>{
    if(list) {
      let LAST_PAGE = list?.length % 4 === 0 ? 
      list?.length/4 : Math.floor(list?.length/4) + 1;
      setLastPage(LAST_PAGE);
    }else{
      setLastPage(0);
    }
    // console.log(list);
  }, [list]);  
  const [page, setPage] = useState(1);
  const [data, setData] = useState<string[]>([]);
  
  useEffect(()=>{
    if(page === lastPage){
      setData(list?.slice(6 * (page-1)));
    }else{
      setData(list?.slice(6 * (page-1) , 6 * (page-1) + 6));
    }
  }, [page]);

  const handlePage = (e: React.MouseEvent<HTMLButtonElement>, page: number) => {
    const currentPage = Math.round(page);
    setPage(currentPage);
  };

  return(

    <Container>
      <Option>
        <LightCare onClick={toggleBright} src={bright ? brightVersion : darkVersion} />
        <NavService onClick={() => navigate(`/trademark`)}>상표 판단 바로가기</NavService>
      </Option>
      <ListContainer style={{alignItems: "center"}}>
        <Grid
          container
          spacing={2}
          columns={12}
          style={{width: 1200, marginTop: 54, height: 712}}>
        {list?.map((item: any, index: number) => (
          <Grid item xs={4} sm={4} md={4} key={index} style={{ width: 'auto', display: 'flex', justifyContent: 'center'}}>
            <div onClick={()=>navigate(`/list/${item?.index}`)} style={{cursor: 'pointer'}}>
              <ExampleBox data={item}/>
            </div>
          </Grid>
        ))}
        </Grid>
        <div style={{marginTop: 54}}>
          <ListPagination page={page} totalPages={lastPage} handlePageChange={handlePage} />
        </div>
      </ListContainer>
    </Container>
  );
};  