import { Pagination as MuiPagination, PaginationItem } from "@mui/material";

export const ListPagination = (props: any) => {
  const { page, totalPages, handlePageChange } = props;

  return (
    <>
      <MuiPagination
        page={page} // 현재페이지
        count={totalPages} //전체페이지개수
        onChange={handlePageChange} // 페이지네이션함수
        shape="rounded"
        sx={{
          "& .MuiPaginationItem-root": {
            color: "#52C07E",
          },
          "& .Mui-selected": {
            backgroundColor: "rgba(238, 255, 237, 1)", 
          },
        }} // classes={{ ul: classes.ul }}
        renderItem={(item) => (
          <PaginationItem
            {...item}
            sx={{ fontSize: 20 }}
          />
        )}
      />
    </>
  );
};
