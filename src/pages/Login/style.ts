import styled from "@emotion/styled";

export const Origin = styled.div`
  display: flex;
  margin-top: 50px;
  height: 800px;
  flex-direction: row; 
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;

export const Div = styled.div`
  width: 600px;
  height: 293px;
`;

export const Text = styled.div`
  color: #303030;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
`;

export const IdInputForm = styled.input`
  width: 600px;
  height: 50px;
  margin-top: 43px;
  border: 1px solid #545454;
  border-radius: 25px;
  padding-left: 30px;
  padding-right: 30px;
  font-size: 18px;

  &::placeholder{
    color: #959595;
    font-size: 16px;
    font-weight: 400;
  }
`;

export const PwdInputForm = styled(IdInputForm)`
  margin-top: 15px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 50px;
  margin-top: 15px;
  border-radius: 25px;
  border: 1px solid #52C07E;
  background-color: #52C07E;
  color: #FFF;
  font-size: 18px;
  font-weight: 700;
  
  &:hover{
    cursor: pointer;
  }
`;

export const Additional = styled.div`
  width: 100%;
  height: 20px;
  margin-top: 15px;
`;

export const SignUp = styled.div`
  text-align: right;
  margin-right: 10px;
  text-decoration: underline;
  font-size: 14px;
  color: #545454;
  font-weight: 400;

  &:hover{
    cursor: pointer;
  }
`;