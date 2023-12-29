import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";
import { apiClient } from "../apis/apiClient";
import { Grid } from "@mui/material";

const Container = styled(Grid)`
  width: 85vw;
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
  flex-direction: row;
  align-items: left;
`;

export const PostDetail = () => {
    let { postId } = useParams<{ postId?: string }>(); 
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
    ]
  }

  useEffect(() => {

    const numericPostId = postId ? parseInt(postId, 10) + 1 : 1;
    apiClient
      .get(`/api/v2/users/community/post/?id=${numericPostId}`)
      .then((response) => {
        setBoard(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [postId]);

  return (
    <Container>
      <TitleBlock>
        <h1>Community</h1>
        <h2></h2>
      </TitleBlock>
    </Container>
  );
};
