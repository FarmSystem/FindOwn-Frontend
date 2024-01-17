import styled from "@emotion/styled";
import { BoxContainer } from "./DetailStyles";
import example1 from '../../assets/images/similar1.png';
import example2 from '../../assets/images/similar2.png';
import example3 from '../../assets/images/similar3.png';
import { 
  ItemBox,
  ImageBox,
  WarningBlock,
  BasicCircle,
  InsideCircle
} from './SimilarStyle';
import { useAtom } from "jotai";
import { similarAtom } from "../../states/jotaiStates";
import { useEffect } from "react";

export const SimilarItem = () => {
  const itemExample = [{
    id: 1,
    label: "카카오프렌즈 라이언",
    src: example1,
    level: "high",
  }, {
    id: 2,
    label: "카카오프렌즈 라이언",
    src: example2,
    level: "normal",
  }, {
    id: 3,
    label: "카카오프렌즈 라이언",
    src: example3,
    level: "low"
  },];

  const [itemIndex, setItemIndex] = useAtom(similarAtom);
  
  const itemSelect = (index: number) => {
    setItemIndex(index);
    // console.log(index+"엥");
    // console.log(itemIndex);
  };
  
  useEffect(()=>{
    console.log(itemIndex);
  }, [itemExample]);

  const warningLight = (props: string) => {
    return(
      <BasicCircle>
        <InsideCircle color={props}/>
      </BasicCircle>
    );
  };

  const displayItem = (props: any) => {
    return(
      props.map((item: any,index: number) => (
        <ItemBox key={index} onClick={()=>itemSelect(index)} >
          <WarningBlock>
            {warningLight(item.level)}
          </WarningBlock>
          <ImageBox>
            <img src={item.src}/>
          </ImageBox>
        </ItemBox>
      ))
    );
  };

  return(
    <BoxContainer style={{gap: 90, border: "none", marginTop: 20}}>
      {displayItem(itemExample)}
    </BoxContainer>
  );
};