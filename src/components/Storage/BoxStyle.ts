import styled from "@emotion/styled";

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 280px;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.25);
  align-items: center;
  position: relative;
`;

export const LockContainer = styled.div`
  width: 100%;
  height: 40px;
`;

export const IconImg = styled.img`
  margin: 10px 0 0 10px;
  width: 20px;
  height: 23px;
`;

export const ImageContain = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.15);
  }
`;

export const ImageBox = styled.img`
  width:80%;
  height: 80%;
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
  font-size: 12px;
  width: 100%;
`;

export const LowerLayer = styled.div`
  border-top: 1px solid #BFBFBF;
  position: absolute;
  bottom: 10px;
  width: 100%;
  height: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px 0 10px;
  font-size: 14px;
`;