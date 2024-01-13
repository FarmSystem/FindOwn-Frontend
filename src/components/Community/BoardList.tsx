import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { apiClient } from "../../apis/apiClient";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { selectedTagAtom } from "../../states/jotaiStates";

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

const PageButtonContainer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
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
    case "상표권":
      return "color: #52c07e;";
    case "판결":
      return "color: #B1E2C5;";
    case "기타 질문":
      return "color: #29DF0B;";
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
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

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

  let board: Board;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = boardList.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) =>
      prevPage + 1 <= Math.ceil(boardList.length / postsPerPage)
        ? prevPage + 1
        : prevPage
    );
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
  };

  useEffect(() => {
    const getBoardList = () => {
      apiClient
        .get("/api/v2/users/community/post")
        .then((response) => {
          const filteredBoardList = response.data;
          setBoardList(filteredBoardList);
        })
        .catch(function (error) {});
    };
    getBoardList();
  }, []);

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
          <SmallTitleItem>스크랩수</SmallTitleItem>
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
            <TitleItem>{board.createdAt}</TitleItem>
            <SmallTitleItem>{board.viewCnt}</SmallTitleItem>
            <SmallTitleItem>{board.scrapCnt}</SmallTitleItem>
          </BoardItem>
        ))}
      </BoardListContainer>
      <PageButtonContainer>
        <Button
          onClick={handlePrevPage}
          sx={{
            width: "50px",
            height: "40px",
            fontSize: "1.5rem",
            textAlign: "center",
            color: "#52c07e",
            borderRadius: "15px",
            margin: "0 5px",
          }}
        >
          {"<"}
        </Button>
        {Array.from(
          { length: Math.ceil(boardList.length / postsPerPage) },
          (_, i) => i + 1
        ).map((pageNumber) => (
          <button key={pageNumber} onClick={() => handlePageClick(pageNumber)}>
            {pageNumber}
          </button>
        ))}
        <Button
          onClick={handleNextPage}
          sx={{
            width: "40px",
            height: "40px",
            fontSize: "1.5rem",
            color: "#52c07e",
            textAlign: "center",
            borderRadius: "15px",
            margin: "0 5px",
          }}
        >
          {">"}
        </Button>
      </PageButtonContainer>
    </Container>
  );
};
