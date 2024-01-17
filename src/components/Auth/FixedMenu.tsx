import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { useAtom } from "jotai";
import { menuAtom } from "../../states/jotaiStates";

type navItem = {
  name: string;
  src: string;
};

type navItems = navItem[];

export const FixedMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const change = location.pathname.includes(`/storage`);

  const [currentPage, setCurrentPage] = useAtom(menuAtom);
  const PageChange = (page: string) => {
    setCurrentPage(page);
    navigate(`${page}`);
  }
  useEffect(()=>{
    PageChange(currentPage);
  }, [location.pathname]);

  const MenuItems = useMemo<navItems>(
    () => [
      { name: "계정관리", src: "/mypage"},
      { name: "스토리지", src: "/mypage/storage"}
    ],
    []
  );

  return(
    <MenuContainer>
      {MenuItems.map((item, index) => (
        <NavItem key={`${item.name}_${index}`}  onClick={()=>PageChange(item.src)} value={currentPage} link={item.src } >
          {item.name}
        </NavItem>
      ))}
    </MenuContainer>
  );
};

const MenuContainer = styled.div`
  width: 223px;
  height: 140px;
  border-radius: 8px;
  margin-top: 30px;
  border: 1px solid #BFBFBF;
  background: rgba(255, 255, 255, 0.45);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

type pageProps = {
  value: string;
  link: string;
};

const NavItem = styled.div<pageProps>`
  display: flex;
  width: 100%;
  height: 61px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.value == props.link ? "#EEFFED" : "#FFF"};
  color: ${(props) => props.value == props.link ? "#838383" : "#000" };
  cursor: pointer;
`;