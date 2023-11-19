import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { apiClient } from "../../apis/apiClient";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TextContainer = styled.div`
  width: 100%;
  display: flex;

  justify-content: center;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 2;
`;

const Table = styled.table`
  width: 100%;
  text-align: center;
  border-collapse: collapse;
  border-spacing: 0;
  border-bottom: 1px solid #e5e5e5;
  margin: 30px;

  th {
    border-top: 1px solid #656565;
    padding: 4px;
  }

  td {
    border-top: 1px solid #e5e5e5;
    padding: 8px;
  }
`;

const Thead = styled.thead`
  font-size: 16px;
`;

export const BoardList = () => {
  //   const [boardList, setBoardList] = useState<String>([]);

  const navigate = useNavigate();

  useEffect(() => {
    apiClient
      .get("/api/v2/users/community")
      .then((response) => {
        // setBoardList(response.data);
      })

      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <Container>
      <TextContainer>
        {" "}
        <h1>게시판</h1>
      </TextContainer>
      <Table>
        <colgroup>
          <col width="5%" />
          <col width="56%" />
          <col width="10%" />
          <col width="10%" />
          <col width="8%" />
          <col width="8%" />
          <col width="8%" />
        </colgroup>

        <Thead>
          <tr>
            <th>No</th>
            <th>제목</th>
            <th>작성자</th>
            <th>태그명</th>
            <th>작성일</th>
            <th>댓글수</th>
            <th>조회수</th>
          </tr>
        </Thead>
        <tbody>
          <tr>
            <td>1</td>
            <td style={{ overflow: "hidden" }}>
              asdsadadadadaddaasdasasdsasdadasda
            </td>
            <td>최재원</td>
            <td>기타질문</td>
            <td>2023-10-15</td>
            <td>0</td>
            <td>0</td>
          </tr>
        </tbody>
      </Table>
      <ButtonContainer>
        <Button
          sx={{
            backgroundColor: "rgba(238, 255, 237, 1)",
            color: "#52c07e",
            cursor: "pointer",
            zIndex: 5,
          }}
          onClick={() => navigate("/board/write")}
        >
          게시글 작성하기
        </Button>
      </ButtonContainer>
    </Container>
  );
};
