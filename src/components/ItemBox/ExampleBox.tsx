import {
  ItemContainer,
  ImageBox,
  ContentBox,
  TitleBox,
  DetailBox,
  DateBox
} from './ItemStyle';
import itemEx from '../../assets/images/itemImage1.svg';

export const ExampleBox = () => {
  return(
    <ItemContainer>
      <ImageBox src={itemEx} />
      <ContentBox>
        <TitleBox>하트사자</TitleBox>
        <DetailBox>하트사자는 하트모양의 귀를 가지고 배에도 하트모양을 가진 사자로 기존의 라이언과는 다른 양상을 가졌습니다. </DetailBox>
      </ContentBox>
      <DateBox></DateBox>
    </ItemContainer>
  );
};