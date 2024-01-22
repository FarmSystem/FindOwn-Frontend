import {
  Container,
  Div,
  Text,
  IdInputForm,
  PwdInputForm,
  SubmitButton,
  Additional,
  SignUp,
} from "./style";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiClient } from "../../apis/apiClient";

export const Login = () => {
  const navigate = useNavigate();

  const [Email, setEmail] = useState<string>("");
  const [Password, setPassword] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);

  const onEmailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };
  const onPasswordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };
  const onSubmitHandler = async () => {
    try {
      let body = {};
      if (!Email) {
        return alert("아이디를 입력해주세요");
      } else if (!Password) {
        return alert("비밀번호를 입력해주세요");
      } else {
        body = {
          username: Email,
          password: Password,
        };
      }
      apiClient.defaults.withCredentials = true;
      const response = await apiClient.post(`/api/v2/no-auth/login`, body);
      if (response.status === 200) {
        let accessToken = response.data["accessToken"];
        localStorage.setItem("email", Email);
        localStorage.setItem("token", accessToken);
        // console.log(accessToken);

        apiClient.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${accessToken}`;

        navigate("/");
        alert("환영합니다! " + Email + "님");
      } else {
        alert("아이디나 비밀번호가 잘못되었습니다.");
      }
    } catch (error) {
      console.log(error);
      alert("로그인에 실패하였습니다. 다시 시도해주세요.");
    }

    setLoading(true);
  };

  return (
    <Container>
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
    </Container>
  );
};
