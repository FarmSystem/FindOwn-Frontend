import { Container } from "./style";
import styled from "@emotion/styled";
import scrapOff from '../../assets/images/scrap_off.png';
import scrapOn from '../../assets/images/scrap_on.png';
import writeOff from '../../assets/images/write_off.png';
import writeOn from '../../assets/images/write_on.png';
// import { useAtom } from "jotai";
// import { storageAtom } from "../../states/jotaiStates";
import { useState } from "react";
import { Scrap, Written } from "../../components/Storage";

export const Storage = () => {
  // const [menuOn, setMenuOn] = useAtom(storageAtom);
  const [menuOn, setMenuOn] = useState<String>("scrap");

  const convertMenu = () => {
    if(menuOn === "scrap"){
      return(
        <>
          <ButtonContainer>
            <Image src={scrapOn} onClick={()=>setMenuOn("scrap")}/>
            <Image src={writeOff} onClick={()=>setMenuOn("write")}/>
          </ButtonContainer>      
          <Scrap />
        </>
      );
    }else{
      return(
        <>
          <ButtonContainer>
            <Image src={scrapOff} onClick={()=>setMenuOn("scrap")}/>
            <Image src={writeOn} onClick={()=>setMenuOn("write")}/>
          </ButtonContainer>
          <Written />
        </>
      );
    }
  };

  return(
    <Container>
      {convertMenu()}
    </Container>
  );
};

const ButtonContainer = styled.div`
  width: 100%;
  height: 42px;
  border-bottom: 1px solid #F0F0F0;
  margin-top: 23px;
`;

const Image = styled.img`
  width: auto;
  height: 40px;
`;