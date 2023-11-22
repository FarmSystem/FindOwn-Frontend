import styled from "@emotion/styled";

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 340px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  align-items: center;
  `;

export const ImageBox = styled.img`
  width:  280px;
  height: 166px;
  justify-content: center;
`;

export const ContentBox = styled.div`
  height: 112px;
  padding: 16px 9px 0 9px;
`;

export const TitleBox = styled.div`
`;

export const DetailBox = styled.div`
  display: -webkit-box;
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
  margin-top: 10px;
  padding: 5px 10px 0 10px;
  font-size: 14px;
`;