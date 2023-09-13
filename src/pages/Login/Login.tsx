import { 
  Origin,
  Div,
  Text,
  IdInputForm,
  PwdInputForm,
  SubmitButton,
  Additional,
  SignUp
} from './style';

export const Login = () => {
  return(
    <Origin>
      <Div>
          <Text>로그인</Text>
          <IdInputForm placeholder='아이디'/>
          <PwdInputForm placeholder='비밀번호'/>
          <SubmitButton>로그인</SubmitButton>
          <Additional>
            <SignUp>회원가입</SignUp>
          </Additional>
      </Div>
    </Origin>
  );
};

