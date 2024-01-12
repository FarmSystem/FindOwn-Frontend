import styled from "@emotion/styled";

export const NickName = styled.div`
  margin-top: 140px;
  font-size: 25px;
`;

export const EmailCon = styled.div`
  color: #00000099;
  margin-top: 15px;
`;

export const EditBtn = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 130px;
  margin-left: 750px;
  gap: 7px;
  align-items: center;
  cursor: pointer;
`;
export const EditText = styled.div`
  font-size: 20px;
  text-decoration: underline;
`;

export const EditIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const Contained = styled.div`
  margin-top: 120px;
  gap: 20px;
  display: flex;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  width: 400px;
  height: 35px;
  border-bottom: 2px solid #BFBFBF;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
`;

export const Title = styled.div`
  font-size: 20px;
  width: auto;
  color: #494949;
`;

export const InputValue = styled.input`
  // max-width: 180px;
  position: absolute;
  bottom: 3px;
  left: 80px;
  font-size: 16px;
`;

export interface msgProps{
  message: string;
}

export const Rounded = styled.button<msgProps>`
  border-radius: 5px;
  background-color: ${(props) => props.message === "선택사항" ? "rgba(238, 255, 237, 0.70)" : "#E7E7E7"};
  color: ${(props) => props.message === "선택사항" ? "#494949" : "#000"};
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 25px;
  position: absolute;
  font-weight: 500;
  bottom: 3px;
  right: 0px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const SubRounded = styled.button`
  background-color: #52C07E73;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  font-size: 18px;
  justify-content: center;
  color: #494949;
  align-items: center;
  width: 80px;
  height: 35px;
  margin-top: 70px;
  margin-left: 800px;
`;