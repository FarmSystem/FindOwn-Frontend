import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { loginUser } from "../actions/user_action";

interface LoginProps {}

const Container = styled(Grid)`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: #eeffed;
  z-index: -1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1920px;
  padding: 50px 0;
`;

export const Login: React.FC<LoginProps> = () => {
  const dispatch = useDispatch();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };
  const onPasswordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };
  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    // 버튼만 누르면 리로드 되는 것을 막아줌
    event.preventDefault();

    console.log("Email", Email);
    console.log("Password", Password);

    let body = {
      email: Email,
      password: Password,
    };

    dispatch(loginUser(body) as any);
  };

  return (
    <Container container xs>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={onSubmitHandler}
        >
          <label>Email</label>
          <input type="email" value={Email} onChange={onEmailHandler} />
          <label>Password</label>
          <input
            type="password"
            value={Password}
            onChange={onPasswordHandler}
          />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </Container>
  );
};
