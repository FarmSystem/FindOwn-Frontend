import React, { useState, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { apiClient } from "../apis/apiClient";

interface ApiResponse {
  code: number;
}

export const LoginPage = () => {
const dispatch = useDispatch();

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
  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

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

      apiClient.post<ApiResponse>("/api/members", body).then((res) => {
        console.log(res.data);
        if (res.data.code === 200) {
          dispatch({
            type: "LOGIN",
            payload: res.data,
          });
          // if (res.data.code === 400) {
          //   setMsg("Email, Password가 비었습니다.");
          // }
          // if (res.data.code === 401) {
          //   setMsg("Email가 틀립니다");
          // }
          // if (res.data.code === 402) {
          //   setMsg("Password가 틀립니다");
          // }
        }
      });
    }
    setLoading(true);
  };

  return (
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
        <input type="password" value={Password} onChange={onPasswordHandler} />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

// export default LoginPage;
