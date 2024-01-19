import {
  ItemContainer,
  ImageBox,
  ContentBox,
  TitleBox,
  DetailBox,
  DateBox,
  Author,
  ImageContain
} from './ItemStyle';
import itemEx from '../../assets/images/itemImage1.svg';

export const ExampleBox = (data: any) => {
  // console.log(data);
  return(
    <ItemContainer>
      <ImageContain>
        <ImageBox src={data?.data.origin_Image} />
      </ImageContain>
      <DateBox>{data?.data.created_at}</DateBox>
      <Author>made by<span style={{color: "#959595", fontWeight: "500", fontSize: "18px"}}> &nbsp; {data?.data.member_login}</span> </Author>
    </ItemContainer>
  );
};