import {
  ItemContainer,
  LockContainer,
  IconImg,
  ImageContain,
  ImageBox,
  DateBox,
  LowerLayer
} from './BoxStyle';
import { useState } from 'react';
import itemEx from '../../assets/images/itemImage1.svg';
import lock from '../../assets/images/lock_icon.svg';
import unlock from '../../assets/images/unlock_icon.svg';
import trash from '../../assets/images/trash_icon.svg';

export const WrittenBox = () => {
  const [locked, setLocked] = useState(false);

  //비공개로 바꾸기 
  const Locked = () => {
    setLocked(!locked);
  }

  //특정 판단결과로 이동
  const navToItem = () => {
  }

  //작성글 삭제하기
  const goTrash = () => {
    alert("삭제하시겠습니까?");
    
  }

  return(
    <ItemContainer>
      <LockContainer>
        {
          locked ? 
          <IconImg src={lock} onClick={Locked}/>
          :
          <IconImg src={unlock} onClick={Locked}/>
        }
        {/* <IconImg src={}/> */}
      </LockContainer>
      <ImageContain onClick={navToItem}>
        <ImageBox src={itemEx} />
      </ImageContain>
      <LowerLayer>
        <DateBox>2023년 09월 27일</DateBox>
        <IconImg style={{margin: 0}} src={trash} onClick={goTrash}/>
      </LowerLayer>
    </ItemContainer>
  );
};