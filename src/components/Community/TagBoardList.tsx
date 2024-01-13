import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { apiClient } from "../../apis/apiClient";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { selectedTagAtom } from "../../states/jotaiStates";

const Container = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
`;

const BoardListContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const BoardListTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
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

export const TagBoardList = ({ tagName }: { tagName: string }) => {
  const [boardList, setBoardList] = useState<Board[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getBoardList = () => {
      apiClient
        .get(`/api/v2/users/community/post/${tagName}`)
        .then((response) => {
          const tagBoardList = response.data;
          setBoardList(tagBoardList);
        })
        .catch(function (error) {
          console.error("게시글을 불러오는 데 실패했습니다: ", error);
        });
    };
    getBoardList();
  }, [tagName]);

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

  return (
    <Container>
      <BoardListContainer>
        <BoardListTitle />
        {boardList.map((board) => (
          <BoardItem key={board.postId}>
            <SmallTitleItem>{board.postId + 1}</SmallTitleItem>
            <TagItem tagName={board.tagName}>{board.tagName}</TagItem>
            <LargeTitleItem
              onClick={() => navigate(`/community/${board.postId + 1}`)}
            >
              {board.title}
            </LargeTitleItem>
            <CommentText>
              {"💬 "}
              {board.commentCnt}
            </CommentText>
            <TitleItem>{board.writerId}</TitleItem>
            <TitleItem>{board.createdAt}</TitleItem>
            <SmallTitleItem>👀 {board.viewCnt}</SmallTitleItem>
            <SmallTitleItem>📁 {board.scrapCnt}</SmallTitleItem>
          </BoardItem>
        ))}
      </BoardListContainer>
    </Container>
  );
};
