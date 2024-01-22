import styled from "@emotion/styled";

export const BoxContainer = styled.div`
  width: 900px;
  height: 350px;
  border: 0.5px solid #959595;;
  display: flex;
  align-items: center;
  border-radius: 10px;  
  margin-top: 46px;
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 245px;
  height: 245px;
  margin-left: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ContentBox = styled.div`
  width: 480px;
  height: 100%;
  margin-left: 81px;
  padding-top: 58px;
`;

export const LineContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TitleContent = styled.div`
  font-size: 18px;
  font-weight: 400;
`;

export const Content = styled.div`
  margin-left: 50px;
  color: #494949;
  font-size: 18px;
  font-weight: 400;
`;

export interface DetailProps {
  detailed: boolean;
}

export const DetailInput = styled.div<DetailProps>`
  display: ${(props) => props.detailed === true ? 'flex' : 'none'};
  background-color: #F7F7F7;
  width: 480px;
  height: 130px;
  padding-top: 10px;
  padding-left: 10px;
  border-radius: 10px;
  flex-direction: column;
`;

export const Description = styled.div`
  width: 384px;
  height: auto;
  font-size: 11px;
  color: #494949;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;