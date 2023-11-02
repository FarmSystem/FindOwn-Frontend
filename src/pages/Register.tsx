import React, { useState, FormEvent, ChangeEvent } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { apiClient } from "../apis/apiClient";

const theme = createTheme();

const ContainerWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: #eeffed;
  z-index: 2;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
`;

export const Register = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [verificationCode, setVerificationCode] = useState<string>("");
  const [isCodeSent, setIsCodeSent] = useState<boolean>(false);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleVerificationCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVerificationCode(e.target.value);
  };

  const handleSendVerificationCode = async () => {
    try {
      await apiClient.get(`/api/mail/send/code`, {
        params: {
          email: email,
        },
      });
      setIsCodeSent(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const requiredFields = ["id", "name", "email", "phoneNumber"];
    for (const field of requiredFields) {
      const fieldValue = data.get(field) as string;
      if (fieldValue === null || !fieldValue.trim()) {
        alert(`${field}칸이 누락되어 있습니다. 다시 입력해주세요.`);
        return;
      }
    }

    const passwordValue = password.trim();
    if (!passwordValue) {
      alert("Password 칸이 누락되어 있습니다. 다시 입력해주세요.");
      return;
    }

    if (!isCodeSent || verificationCode.trim() === "") {
      alert("인증번호를 입력해주세요.");
      return;
    }

    try {
      const response = await apiClient.post(`/api/member/save`, {
        id: data.get("id"),
        name: data.get("name"),
        email: email,
        password: password,
        phoneNumber: data.get("phoneNumber"),
      });
      console.log(response);
      alert("회원가입이 완료되었습니다.");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleVerifyCode = async () => {
    try {
      await apiClient.post(`/api/mail/verify/code`, {
        email: email,
        code: verificationCode,
      });
      alert("인증이 완료되었습니다.");
      setIsCodeSent(true);
    } catch (error) {
      console.log(error);
      alert("인증번호가 유효하지 않습니다. 다시 확인해주세요.");
    }
  };

  return (
    <ContainerWrapper>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "white",
              borderRadius: "20px",
              padding: "20px",
              fontFamily: "Inter",
            }}
          >
            <Typography component="h1" variant="h5">
              Register
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{
                mt: 3,
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="id"
                    required
                    fullWidth
                    id="id"
                    label="ID"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    name="name"
                    label="Name"
                    id="name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="verificationCode"
                    label="인증번호"
                    id="verificationCode"
                    value={verificationCode}
                    onChange={handleVerificationCodeChange}
                    style={{ opacity: isCodeSent ? 1 : 0 }}
                    disabled={!isCodeSent}
                  />
                  {isCodeSent && (
                    <>
                      <Button
                        variant="contained"
                        color="success"
                        onClick={handleVerifyCode}
                        style={{ marginTop: "10px" }}
                      >
                        인증번호 확인
                      </Button>
                      <p>인증번호를 확인하고 회원가입을 진행하세요.</p>
                    </>
                  )}
                  {!isCodeSent && (
                    <Button
                      variant="contained"
                      color="info"
                      onClick={handleSendVerificationCode}
                    >
                      인증번호 전송
                    </Button>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    name="password"
                    type="password"
                    onChange={handlePasswordChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="phoneNumber"
                    label="Phone Number"
                    id="phoneNumber"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: "#0ac153",
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                회원가입
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </ContainerWrapper>
  );
};
