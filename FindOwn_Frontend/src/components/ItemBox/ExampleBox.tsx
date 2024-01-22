import {
  ItemContainer,
  ImageBox,
  DateBox,
  Author,
  ImageContain,
} from "./ItemStyle";

export const ExampleBox = (data: any) => {
  return (
    <ItemContainer>
      <ImageContain>
        <ImageBox src={data?.data.origin_Image} />
      </ImageContain>
      <DateBox>{data?.data.created_at}</DateBox>
      <Author>
        made by
        <span style={{ color: "#959595", fontWeight: "500", fontSize: "18px" }}>
          {" "}
          &nbsp; {data?.data.member_login}
        </span>{" "}
      </Author>
    </ItemContainer>
  );
};
