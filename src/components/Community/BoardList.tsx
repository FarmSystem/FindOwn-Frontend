import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { apiClient } from "../../apis/apiClient";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TextContainer = styled.div`
  width: 100%;
  display: flex;

  justify-content: center;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 2;
`;

export const BoardList = () => {
  const [boardList, setBoardList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    apiClient
      .get("/api/v2/users/community/post")
      .then((response) => {
        setBoardList(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <TextContainer>
        {" "}
        <h1>게시판</h1>
      </TextContainer>
      <div>
        <ul>
          {boardList.map((board: any) => (
            <li key={board.postId}> {board.title}</li>
          ))}
        </ul>
      </div>
      <ButtonContainer>
        <Button
          sx={{
            backgroundColor: "rgba(238, 255, 237, 1)",
            color: "#52c07e",
            cursor: "pointer",
            zIndex: 5,
          }}
          onClick={() => navigate("/community/write")}
        >
          게시글 작성하기
        </Button>
      </ButtonContainer>
    </Container>
  );
};
