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
  z-index: -1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1920px;
  padding: 50px 0;
`;

export const Register = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState<string>("");

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
      alert("Passwod 칸이 누락되어 있습니다. 다시 입력해주세요.");
      return;
    }

    try {
      const response = await apiClient.post(`/api/member/save`, {
        id: data.get("id"),
        name: data.get("name"),
        email: data.get("email"),
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
                  />
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
