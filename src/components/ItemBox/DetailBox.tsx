import styled from "@emotion/styled";
import itemEx from '../../assets/images/itemImage1.svg';
import {
  ImageBox
} from './ItemStyle';

export const DetailBox = () => {
  return(
    <BoxContainer>
      <ImageBox src={itemEx} style={{width: 137, height: 220}}/>

    </BoxContainer>
  );
};

const BoxContainer = styled.div`
  width: 900px;
  height: 350px;
  border: 0.5px solid #959595;;
  display: flex;
  align-items: center;
  border-radius: 10px;  
`