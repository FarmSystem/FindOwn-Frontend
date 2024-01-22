import { Container, Option, NavService, ListContainer } from "./style";
import React, { useEffect, useState } from "react";
import { ExampleBox } from "../../components/ItemBox";
import { Grid } from "@mui/material";
import { ListPagination } from "../../components/Pagination";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { resultList } from "../../apis/comparison";

export const List = () => {
  const navigate = useNavigate();
  const [lastPage, setLastPage] = useState<number>(0);

  //데이터 불러오기
  const { data: list } = useQuery({
    queryKey: ["list"],
    queryFn: resultList,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
  });

  // console.log(lastPage);

  // 실제 데이터 연결하기
  useEffect(() => {
    if (list) {
      let LAST_PAGE =
        list?.length % 6 === 0
          ? list?.length / 6
          : Math.floor(list?.length / 6) + 1;
      setLastPage(LAST_PAGE);
      console.log(LAST_PAGE);
    } else {
      setLastPage(0);
    }
  }, [list]);
  const [page, setPage] = useState<number>(1);
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    if (page === lastPage) {
      setData(list?.slice(6 * (page - 1)));
    } else {
      setData(list?.slice(6 * (page - 1), 6 * (page - 1) + 6));
    }
  }, [page, list]);

  const handlePage = (e: React.MouseEvent<HTMLButtonElement>, page: number) => {
    const currentPage = Math.floor(page);
    setPage(currentPage);
  };

  return (
    <Container>
      <Option>
        <NavService onClick={() => navigate(`/trademark`)}>
          상표 판단 바로가기
        </NavService>
      </Option>
      <ListContainer style={{ alignItems: "center" }}>
        <Grid
          container
          spacing={2}
          columns={12}
          style={{ width: 1200, marginTop: 54, height: 712 }}
        >
          {data?.map((item: any, index: number) => (
            <Grid
              item
              xs={4}
              sm={4}
              md={4}
              key={index}
              style={{
                width: "auto",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                onClick={() => navigate(`/list/${item?.comparison_id}`)}
                style={{ cursor: "pointer" }}
              >
                <ExampleBox data={item} />
              </div>
            </Grid>
          ))}
        </Grid>
        <div style={{ marginTop: 54 }}>
          <ListPagination
            page={page}
            totalPages={lastPage}
            handlePageChange={handlePage}
          />
        </div>
      </ListContainer>
    </Container>
  );
};
