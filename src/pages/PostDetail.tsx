import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";
import { apiClient } from "../apis/apiClient";
import { Grid } from "@mui/material";
import spinner from "../assets/images/spinner.gif";

const Container = styled(Grid)`
  width: 70vw;
  height: 100%;
  display: flex;
  z-index: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;

  @font-face {
    font-family: "AppleBold";
    src: url("https://cdn.jsdelivr.net/gh/cho1n/Apollo-Frontend@latest/src/assets/fonts/AppleSDGothicNeoB.ttf")
      format("truetype");
  }

  font-family: "AppleBold";
`;

const TitleBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const SubTitleBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: left;
  padding-bottom: 1rem;
  border-bottom: 2px solid #525252;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const ElseBlock = styled.div`
  width: 10%;
  font-size: 1.2rem;
  font-weight: bold;
  color: #000000;
  padding-left: 1rem;
  display: flex;
  flex-direction: row;
  align-items: left;
`;

const Title = styled.p`
  font-size: 3rem;
  font-weight: bold;
  color: #525252;
  padding-left: 1rem;
  padding-bottom: 1rem;
`;

const SubTitle = styled.div`
  width: 70%;
  font-size: 1.2rem;
  font-weight: bold;
  color: #000000;
  padding-left: 1rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const PostDetail = () => {
  const { postId } = useParams<{ postId?: string }>();
  const [loading, setLoading] = useState(true);
  const [board, setBoard] = useState<Board | null>(null); // 단일 게시글의 상태이므로 배열이 아닌 객체 또는 null로 초기화합니다.

  interface Board {
    postId: number;
    title: string;
    writer: string;
    tag: string;
    content: string;
    viewCnt: number;
    scrapCnt: number;
    comments: [
      {
        commentId: number;
        writer: string;
        content: string;
        createdAt: string;
      }
    ];
  }

  useEffect(() => {
    const numericPostId = postId ? parseInt(postId, 10) + 1 : 0; // useParams로 받은 postId는 string이므로, number로 변환.
    apiClient
      .get(`/api/v2/users/community/post/?id=${numericPostId}`)
      .then((response) => {
        setBoard(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [postId]);

  return (
    <Container>
      {/* {loading ? (
        <div>
          <img src={spinner} alt="loading" />
        </div>
      ) : ( */}
      <TitleBlock>
        <Title>Community</Title>
        <SubTitleBlock>
          <ElseBlock>{"[기타 질문]"}</ElseBlock>
          <SubTitle>
            {" "}
            이거 어떻게 쓰는거에연 ?{" "}
          </SubTitle>
          <ElseBlock>👀 {board?.viewCnt}</ElseBlock>
          <ElseBlock>⭐️ {board?.scrapCnt}</ElseBlock>
        </SubTitleBlock>
      </TitleBlock>
      {/* )} */}
    </Container>
  );
};
