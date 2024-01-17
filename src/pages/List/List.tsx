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

export const List = () => {
  const navigate = useNavigate();
  const [ bright, setBright ] = useAtom(lightAtom);
  const toggleBright = () => {
    setBright(!bright);
  };
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
        {data.map((_, index) => (
          <Grid item xs={4} sm={4} md={4} key={index} style={{ width: 'auto', display: 'flex', justifyContent: 'center'}}>
            <div onClick={()=>navigate(`/list/${index}`)} style={{cursor: 'pointer'}}>
              <ExampleBox />
            </div>
          </Grid>
        ))}
        </Grid>
        <div style={{marginTop: 54}}>
          <ListPagination page={page} totalPages={LAST_PAGE} handlePageChange={handlePage} />
        </div>
      </ListContainer>
    </Container>
  );
};  