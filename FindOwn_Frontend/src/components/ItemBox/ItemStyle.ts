import styled from "@emotion/styled";

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 340px;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.25);
  align-items: center;
`;

export const ImageContain = styled.div`
  width: 100%;
  height: 254px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageBox = styled.img`
  width:  80%;
  height: 80%;
  justify-content: center;
  // border: 1px solid black;
`;

export const ContentBox = styled.div`
  height: 112px;
  padding: 16px 9px 0 9px;
`;

export const TitleBox = styled.div`
`;

export const DetailBox = styled.div`
  display: -webkit-box;
  width: 100%;
  margin-top: 9.4px;
  font-size: 14px;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  color: #838383;
`;

export const DateBox = styled.div`
  color: #838383;
  padding: 0 9px 0 9px;
  font-size: 12px;
  width: 100%;
`;

export const Author = styled.div`
  border-top: 1px solid #BFBFBF;
  width: 100%;
  height: 32px;
  display: flex;
  margin-top: 10px;
  padding: 30px 10px 0 10px;
  align-items: center;
  font-size: 14px;
`;