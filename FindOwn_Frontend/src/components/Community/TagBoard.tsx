import styled from "@emotion/styled";
import React, { useState } from "react";
import { TagBoardList } from "./TagBoardList";

const Container = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: row;
`;

const TabMenu = styled.ul`
  background-color: #ffffff;
  width: 15%;
  color: rgb(232, 234, 237);
  font-weight: bold;
  display: flex;
  flex-direction: column;
  list-style: none;
  margin-bottom: 1rem;

  .submenu {
    display: flex;
    background-color: #ffffff;
    justify-content: center;
    text-align: center;
    width: 100%;
    font-size: 1.1rem;
    padding: 10px;
    transition: 0.2s;
    cursor: pointer;
  }

  .focused {
    background-color: #52c07e;
    color: #ffffff;
    border-radius: 15px;
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
  padding: 10px 0 10px 10px;
`;

interface TagBoardProps {
  setTag: (tagName: string) => void;
}

export const TagBoard: React.FC<TagBoardProps> = ({ setTag }) => {
  const [currentTab, clickTab] = useState(0);
  const menuArr = [
    { name: "# 침해" },
    { name: "# 등록" },
    { name: "# 법률" },
    { name: "# 사용" },
    { name: "# 기타" },
  ];

  const selectMenuHandler = (index: number) => {
    clickTab(index);
  };

  return (
    <Container>
      <TabMenu>
        {menuArr.map((el, index) => (
          <li
            className={index === currentTab ? "submenu focused" : "submenu"}
            onClick={() => selectMenuHandler(index)}
            key={index}
          >
            {el.name}
          </li>
        ))}
      </TabMenu>
      <Desc>
        {currentTab === 0 && <TagBoardList tagName="침해" />}
        {currentTab === 1 && <TagBoardList tagName="등록" />}
        {currentTab === 2 && <TagBoardList tagName="법률" />}
        {currentTab === 3 && <TagBoardList tagName="사용" />}
        {currentTab === 4 && <TagBoardList tagName="기타" />}
      </Desc>
    </Container>
  );
};
