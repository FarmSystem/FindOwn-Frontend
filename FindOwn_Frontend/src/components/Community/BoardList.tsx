import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { apiClient } from "../../apis/apiClient";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { ListPagination } from "../Pagination/ListPagination";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BoardListContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
`;

const BoardListTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-top: 1.5px solid #525252;
  border-bottom: 1.5px solid rgb(232, 234, 237);
  padding: 10px 0;
`;

const BoardItem = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1.5px solid rgb(232, 234, 237);
`;

const TitleItem = styled.div`
  flex-basis: 15%;
  text-align: center;
  font-size: 1rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const LargeTitleItem = styled(TitleItem)`
  flex-basis: 30%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const SmallTitleItem = styled(TitleItem)`
  flex-basis: 10%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const CommentText = styled.div`
  flex-basis: 10%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: right;
  font-size: 1rem;
`;

const getColorBasedOnTagName = (tagName: string) => {
  switch (tagName) {
    case "법률":
      return "color: #52c07e;";
    case "침해":
      return "color: #B1E2C5;";
    case "등록":
      return "color: #29DF0B;";
    case "사용":
      return "color: #33FA06;";
    case "기타":
      return "color: #5B8B67;";
    default:
      return "";
  }
};

const TagItem = styled.div<{ tagName: string }>`
  flex-basis: 10%;
  text-align: center;
  font-size: 1rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  ${(props) => getColorBasedOnTagName(props.tagName)}
`;

export const BoardList = () => {
  const [boardList, setBoardList] = useState<Board[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const postsPerPage = 10;

  interface Board {
    postId: number;
    title: string;
    writerId: string;
    tagName: string;
    createdAt: string;
    commentCnt: number;
    viewCnt: number;
    scrapCnt: number;
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = boardList.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const getToken = async () => {
    if (token) {
      apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      alert("로그인이 필요한 서비스입니다.");
      window.location.href = "/login";
    }
  };

  const getBoardList = () => {
    apiClient
      .get("/api/v2/users/community/post")
      .then((response) => {
        const filteredBoardList = response.data;
        setBoardList(filteredBoardList);
        apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      })
      .catch(function (error) {
        console.error("게시글을 불러오는 데 실패했습니다: ", error);
      });
  };

  useEffect(() => {
    getToken();
    getBoardList();
  }, [currentPage]);

  return (
    <Container>
      <BoardListContainer>
        <BoardListTitle>
          <SmallTitleItem>No</SmallTitleItem>
          <SmallTitleItem>태그</SmallTitleItem>
          <LargeTitleItem>제목</LargeTitleItem>
          <SmallTitleItem>{""}</SmallTitleItem>
          <TitleItem>작성자</TitleItem>
          <TitleItem>작성일</TitleItem>
          <SmallTitleItem>조회수</SmallTitleItem>
        </BoardListTitle>
        {currentPosts.map((board) => (
          <BoardItem key={board.postId}>
            <SmallTitleItem>{board.postId}</SmallTitleItem>
            <TagItem tagName={board.tagName}>{board.tagName}</TagItem>
            <LargeTitleItem
              onClick={() => navigate(`/community/${board.postId}`)}
            >
              {board.title}
            </LargeTitleItem>
            <CommentText>
              {"💬 "}
              {board.commentCnt}
            </CommentText>
            <TitleItem>{board.writerId}</TitleItem>
            <TitleItem>
              {format(new Date(board.createdAt), "yyyy-MM-dd")}
            </TitleItem>{" "}
            <SmallTitleItem>{board.viewCnt}</SmallTitleItem>
          </BoardItem>
        ))}
      </BoardListContainer>
      <ListPagination
        page={currentPage}
        totalPages={Math.ceil(boardList.length / postsPerPage)}
        handlePageChange={(event: React.ChangeEvent<unknown>, page: number) =>
          handlePageClick(page)
        }
      />
    </Container>
  );
};
