import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import React, { useState } from "react";
import { Tag1 } from "./Tag1";
import { Tag2 } from "./Tag2";
import { Tag3 } from "./Tag3";

const Container = styled(Grid)`
  width: 100vw;
  z-index: 1;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const TabMenu = styled.ul`
  background-color: #ffffff;
  width: 100vw;
  color: rgb(232, 234, 237);
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin-bottom: 3rem;
  padding-top: 20px;

  .submenu {
    display: flex;
    background-color: #ffffff;
    justify-content: center;
    text-align: center;
    width: 10vw;
    font-size: 25px;
    transition: 0.5s;
    cursor: pointer;
  }

  .focused {
    background-color: rgb(255, 255, 255);
    color: #0ac153;
    text-decoration: underline;
    text-decoration-color: #52c07e;
    text-decoration-thickness: 2px;
    text-decoration-line: 2px;
    text-underline-offset: 10px;
  }

  & div.desc {
    text-align: center;
  }
`;

const Desc = styled.div`
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`;

export const Section2 = () => {
  const [currentTab, clickTab] = useState(0);

  const menuArr = [{ name: "절차" }, { name: "주요 개념" }, { name: "이슈" }];

  const selectMenuHandler = (index: number) => {
    clickTab(index);
  };

  return (
    <Container container xs={12}>
      <div>
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
          {currentTab === 0 && <Tag1 />}
          {currentTab === 1 && <Tag2 />}
          {currentTab === 2 && <Tag3 />}
        </Desc>
      </div>
    </Container>
  );
};
