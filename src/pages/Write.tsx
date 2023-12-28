import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { apiClient } from "../apis/apiClient";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ChangeEvent } from "react";

const Container = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const WriteBox = styled.div`
  width: 55vw;
  height: 100%;
  margin-top: 5vh;
  border: 1px solid #a1a0a0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 5vh;
`;

const TitleInput = styled.input`
  width: 50vw;
  height: 7vh;
  border-bottom: 1px solid #a1a0a0;
  font-size: 32px;
`;

const TagBox = styled.div`
  width: 50vw;
  height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const ContentInput = styled.textarea`
  width: 50vw;
  height: 50vh;
  border: 1px solid #a1a0a0;
  font-size: 18px;
  padding: 10px;
`;

const ButtonContainer = styled.div`
  width: 50vw;
  height: 10vh;
  display: flex;
  justify-content: flex-end;
  z-index: 2;
  margin-top: 5vh;
`;

const TagToggleBtn = styled.button`
  width: 100px;
  height: 36px;
  border-radius: 12px;
  background-color: #ACF1A7
  color: #ffffff;
  cursor: pointer;
  font-size: 20px;
  margin-right: 10px;
  color: #ffffff;

  @font-face {
    font-family: "AppleBold";
    src: url("https://cdn.jsdelivr.net/gh/cho1n/Apollo-Frontend@latest/src/assets/fonts/AppleSDGothicNeoB.ttf")
      format("truetype");
  }

  font-family: "AppleBold";

`;

export const Write = () => {
  const navigate = useNavigate();
  const [board, setBoard] = useState({
    title: "",
    tagName: "",
    content: "",
  });
  const [tag, setTag] = useState<string[]>([]);

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setBoard({ ...board, title: event.target.value });
  };

  const handleTagToggle = (tagName: string) => {
    const newTag = tag.includes(tagName) ? [] : [tagName];
    setTag(newTag);
    setBoard({ ...board, tagName: newTag.length > 0 ? newTag[0] : "" }); 
  };

  const handleContentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setBoard({ ...board, content: event.target.value });
  };

  const TagToggle = ({ name }: { name: string }) => {
    const isSelected = tag.includes(name);
    return (
      <TagToggleBtn
        style={{
          backgroundColor: isSelected ? "#52c07e" : "#ACF1A7",
        }}
        onClick={() => handleTagToggle(name)}
      >
        {isSelected ? name : `#${name}`}
      </TagToggleBtn>
    );
  };

  const postBoard = async () => {
    try {
      const dataToSend = {
        title: board.title,
        tagName: tag.join(", "),
        content: board.content,
      };
      await apiClient
        .post(`/api/v2/users/community/post`, dataToSend)
        .then((res) => {
          alert("등록되었습니다.");
          navigate("/community");
          console.log(res);
        });
    } catch (error) {
      console.log(error);
      alert("등록에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <Container>
      <WriteBox>
        <TitleInput
          placeholder="제목을 입력하세요."
          value={board.title}
          onChange={handleTitleChange}
        />{" "}
        <TagBox>
          <TagToggle name="상표권" />
          <TagToggle name="판결" />
          <TagToggle name="기타 질문" />
        </TagBox>
        <ContentInput
          placeholder="내용을 입력하세요."
          value={board.content}
          onChange={handleContentChange}
        />
        <ButtonContainer>
          <Button
            sx={{
              width: "100px",
              height: "40px",
              borderRadius: "12px",
              backgroundColor: "#52c07e",
              color: "#ffffff",
              cursor: "pointer",
              fontSize: "16px",
              fontFamily: "AppleBold",
            }}
            onClick={postBoard}
          >
            게시하기
          </Button>
        </ButtonContainer>
      </WriteBox>
    </Container>
  );
};
