import styled from "@emotion/styled";

export const ItemBox = styled.div`
  width: 240px;
  height: 300px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #F4FFF3;
  position: relative;
`;

export const ImageBox = styled.div`
  width: 180px;
  height: 220px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WarningBlock = styled.div`
  width: 30px;
  height: 30px;
  background-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BasicCircle = styled.div`
  width: 30px;
  height: 30px;
  background-color: #fff;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export interface colorProps {
  color: string;
}

export const InsideCircle = styled.div<colorProps>`
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.color === "위험" ? "#FF0000" : (
    props.color === "주의" ? "#FF9900" : "#1AB001"
  )};
  position: absolute;
  z-index: 2;
  border-radius: 100px;
`;