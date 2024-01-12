import styled from "@emotion/styled";

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  border: 1px solid black;
`;

export const Backdrop = styled.div`
  width : 100vw;
  height: 100vh;
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

export const Header = styled.div`
  height: 81px;
  width: 100%;
  border-radius: 10px 10px 0px 0px;
  border-bottom: 1px solid #BFBFBF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 22px;
  color: #000000C7;
`;

export const Inputs = styled.div`
  width: 460px;
  height: 138px;
`;

export const InputTitle = styled.div`
  font-size: 22px;
  font-weight: 500;
`;

export const InputBox = styled.input`
  width: 100%;
  height: 55px;
  background-color: #D9D9D970;
  border-radius: 5px;
  margin-top: 18px;
  padding: 10px;
  font-size: 16px;
`;

export const AlertText = styled.div`
  color: #DA0000;
  font-size: 15px;
`;

export const ButtonLayer = styled.div`
  height: 52px;
  margin-top: 15px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 9px;
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