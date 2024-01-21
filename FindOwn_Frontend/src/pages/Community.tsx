import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { apiClient } from "../apis/apiClient";
import { Grid } from "@mui/material";
import { BoardList } from "../components/Community/BoardList";
import { TagBoard } from "../components/Community/TagBoard";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { selectedTagAtom } from "../states/jotaiStates";
import { access } from "fs";

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

const Title = styled.div`
  font-size: 2.5rem;
  color: #525252;
  letter-spacing: 0.5px;
  padding-bottom: 10px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 35%;
    bottom: 0;
    width: 30%;
    border-bottom: 4px solid #52c07e;
  }
`;

const TabMenu = styled.ul`
  background-color: #ffffff;
  width: 100%;
  color: rgb(232, 234, 237);
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin-bottom: 1rem;
  padding-top: 20px;

  .submenu {
    display: flex;
    background-color: #ffffff;
    justify-content: center;
    text-align: center;
    width: 20%;
    font-size: 16px;
    transition: 0.5s;
    cursor: pointer;
  }

  .focused {
    background-color: rgb(255, 255, 255);
    color: #0ac153;
    text-decoration: underline;
    text-decoration-color: #52c07e;
    text-decoration-thickness: 2px;
    text-underline-offset: 10px;
  }

  & div.desc {
    text-align: center;
  }
`;

const Desc = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`;

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 2;
  margin-bottom: 20px;
`;

export const Community = () => {
  const [currentTab, clickTab] = useState(0);
  const [selectedTag, setSelectedTag] = useAtom(selectedTagAtom);

  const menuArr = [{ name: "전체 게시글" }, { name: "태그별 게시판" }];

  const selectMenuHandler = (index: number) => {
    clickTab(index);
  };

  const navigate = useNavigate();

  const navigateTo = () => {
    if (!localStorage.getItem("token")) {
      alert("로그인이 필요한 서비스입니다.");
      navigate("/login");
    } else navigate("/community/write");
  };

  useEffect(() => {
    if (selectedTag) {
      clickTab(0);
    }
  }, [selectedTag]);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      apiClient.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${storedToken}`;
    } else {
      alert("로그인이 필요한 서비스입니다.");
      window.location.href = "/login";
    }
  }, []);

  return (
    <Container xs={12}>
      <TextContainer>
        {" "}
        <Title>Community</Title>
      </TextContainer>
      <TabMenu>
        {menuArr.map((el, index) => (
          <li
            className={index === currentTab ? "submenu focused" : "submenu"}
            onClick={() => selectMenuHandler(index)}
          >
            {el.name}
          </li>
        ))}
      </TabMenu>
      <Desc>
        {currentTab === 0 && <BoardList />}
        {currentTab === 1 && <TagBoard setTag={setSelectedTag} />}
      </Desc>
      <ButtonContainer>
        <Button
          sx={{
            width: "100px",
            height: "40px",
            borderRadius: "20px",
            fontSize: "18px",
            fontWeight: "bold",
            backgroundColor: "#52c07e",
            color: "#ffffff",
            cursor: "pointer",
            zIndex: 5,
          }}
          onClick={navigateTo}
        >
          글쓰기
        </Button>
      </ButtonContainer>
    </Container>
  );
};
