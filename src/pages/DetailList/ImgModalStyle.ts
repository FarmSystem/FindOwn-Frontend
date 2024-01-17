import styled from "@emotion/styled";

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 20;
  // border: 1px solid black;
`;

export const Backdrop = styled.div`
  width : 100%;
  height: 100%;
  position: fixed;
  top: 0;
  z-index: 10;
  background-color: rgba(0,0,0,0.2);
`;

export const DialogBox = styled.dialog`
  width: 532px;
  height: 621px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  z-index: 20;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const ImageBox = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: flex-end;
`;

export const Close = styled.img`
  width: 20px;
  height: 20px;
`;

export const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  // border: 1px solid black;
`;

export const SubmitContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  // border: 1px solid black;
`;

export const OriginImg = styled.img`
  width: 70%;
  height: 80%
`;

//결과저장 스타일 
export const Header =styled.div`
  margin-top: 80px;
  font-size: 30px;
  font-weight: 600;
  color: #494949;
`;

export const BtnUpper = styled.div`
  width: 360px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 50px;
  margin-top: 85px;
`;

export const CommonBtn = styled.button`
  font-size: 23px;
  height: 100%;
  width: 160px;
  border: 0.5px solid black;
  border-radius: 5px;
  color: #494949;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export type BtnProps = {
  msg: string;
};

export const PressButton = styled.button<BtnProps>`
  border-radius: 5px;
  width: 90px;
  height: 50px;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  background-color: ${(props) => props.msg == "취소" ? "#D9D9D9C7" : "#3D85C6"};
  color: ${(props) => props.msg == "취소" ? "#000" : "#FFF"};
  font-weight: 500;
`;