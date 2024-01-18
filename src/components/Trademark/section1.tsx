import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { InputBox } from "./InputBox";
import { apiClient } from "../../apis/apiClient";
import { useNavigate } from "react-router-dom";
import { detailAtom, accessAtom } from "../../states/jotaiStates";
import { useAtom } from "jotai";
import spinner from "../../assets/images/Spinner_2.svg";

const Container = styled(Grid)`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 1400px) {
    padding-top: 0px;
  }
`;
const Button = styled.button`
  width: 100px;
  height: 50px;
  background-color: #52c07e;
  border-radius: 10px;
  color: white;
  font-size: 20px;
  font-weight: bold;
  border: none;
  cursor: pointer;

  @font-face {
    font-family: "AppleBold";
    src: url("https://cdn.jsdelivr.net/gh/cho1n/Apollo-Frontend@latest/src/assets/fonts/AppleSDGothicNeoB.ttf")
      format("truetype");
  }

  font-family: "AppleBold";
`;

export const Section1: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [access, setAccess] = useAtom(accessAtom);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [detail, setDetail] = useAtom(detailAtom);

  const postImage = async (file: File | null) => {
    if (!file) {
      alert("파일을 선택해주세요.");
      return;
    }
    const formData = new FormData();
    formData.append("image", file);
    setLoading(true);
    try {
      await apiClient
        .post("/api/v2/users/comparison/result", formData)
        .then((res) => {
          setLoading(false);
          alert("정상적으로 전송되었습니다.");
          setDetail(res.data);
          setAccess(true);
          navigate("/trademark/detail");
        });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    let storedToken = localStorage.getItem("token");
    if (storedToken) {
      apiClient.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${storedToken}`;
    }
  }, []);

  const handleImageSelect = (file: File | null) => {
    setSelectedImage(file);
  };

  return (
    <Container>
      {loading ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img src={spinner} alt="spinner" />
          <div style={{ color: "gray", fontSize: "1rem" }}>
            값을 받아오는 중입니다.
          </div>
        </div>
      ) : (
        <>
          <InputBox onImageSelect={handleImageSelect} />
          <Button onClick={() => postImage(selectedImage)}>분석 시작</Button>
        </>
      )}
    </Container>
  );
};
