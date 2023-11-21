import {
  Origin,
  Div,
  Text,
  IdInputForm,
  PwdInputForm,
  SubmitButton,
  Additional,
  SignUp,
} from "./style";
import React, { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { atom } from "jotai";

interface ApiResponse {
  code: number;
}

export const Login = () => {
  const navigate = useNavigate();

  const [Email, setEmail] = useState<string>("");
  const [Password, setPassword] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);
  const [msg, setMsg] = useState<string>("");

  const onEmailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };
  const onPasswordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };
  const onSubmitHandler = () => {
    if (!Email) {
      return alert("아이디를 입력해주세요");
    } else if (!Password) {
      return alert("비밀번호를 입력해주세요");
    } else {
      let body = {
        email: Email,
        password: Password,
      };

      console.log("Email", Email);
      console.log("Password", Password);
    }
    setLoading(true);
  };

  return (
    <Origin>
      <Div>
        <Text>로그인</Text>
        <IdInputForm
          onChange={onEmailHandler}
          type="text"
          placeholder="아이디"
        />
        <PwdInputForm
          onChange={onPasswordHandler}
          type="password"
          placeholder="비밀번호"
        />
        <SubmitButton onClick={onSubmitHandler}>로그인</SubmitButton>
        <Additional>
          <SignUp onClick={() => navigate("/register")}>회원가입</SignUp>
        </Additional>
      </Div>
    </Origin>
  );
};
