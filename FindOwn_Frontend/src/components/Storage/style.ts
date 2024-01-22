import styled from "@emotion/styled";

//scrap
export const Wrapper = styled.div`
  width: 80%;
  height: 100%;
`;

export const ScrapHeader = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin-top: 20px;
  margin-left: 10px;
  align-items: center;
`;

export const ScrapForIcon = styled.img`
  width: 24px;
  height: 32px;
`;

export const Text = styled.div`
  text-decoration: underline;
  color: #959595;
  font-size: 16px;
`;

export const ScrapTable = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  // border: 1px solid black;
`;

export const Block = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  border-bottom: 3px solid #E2E8F0;
  display: flex;
`;

export const Scrapped = styled.img`
  margin-top: 15px;
  margin-left: 80px;
  width: 24px;
  height: 32px;
`;

export const TitleBlock = styled.div`
  width: 640px;
  height: 46px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 30px;
  // margin-left: 300px;
  font-size: 20px;
  cursor: pointer;
  &:hover{
    text-decoration: underline;
  }
`;

export const DetailBox = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  gap: 10px;
  // padding-left: 30px;
`;

export const AddDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  // padding-right: 60px;
  height: 30px;
  width: 100px;
  gap: 20px;
`;

export const AddText = styled.div`
  color: #475569;
`;

export const ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  
`;

export const Tagcontainer = styled.div`
  height: 100%;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  // gap: 20px;
  align-items: center;
  // border: 1px solid black;
  position: relative;
`;

export const HashTag = styled.div`
  width: 100px;
  height: 40px;
  background-color: #F1F5F9EB;
  color: #64748B;
  border-radius: 5px;
  position: absolute;
  right: 180px;
  // left: 177px;
  display: flex;
  justify-content: center;
  align-items: center;
  // text-align: center;
`;

export const Date = styled.div`
  color: #64748B;
`;

//written
export const IconImage = styled.img`
  width: 24px;
  height: 32px;
`;