import React, { useState, useEffect, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "@emotion/styled";
import { apiClient } from "../apis/apiClient";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import spinner from "../assets/images/spinner.gif";
import unscrapped from "../assets/images/unscrapped.svg";
import scrapped from "../assets/images/scrapped.svg";

const Container = styled(Grid)`
  width: 65vw;
  height: 100%;
  display: flex;
  z-index: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  overflow-y: auto;

  @font-face {
    font-family: "AppleBold";
    src: url("https://cdn.jsdelivr.net/gh/cho1n/Apollo-Frontend@latest/src/assets/fonts/AppleSDGothicNeoB.ttf")
      format("truetype");
  }

  font-family: "AppleBold";
`;

const TitleBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const SubTitleBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: left;
  padding-bottom: 1rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const ElseBlock = styled.div`
  width: 17%;
  font-size: 1rem;
  font-weight: bold;
  color: #000000;
  padding-left: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Title = styled.p`
  font-size: 3rem;
  font-weight: bold;
  padding-left: 1rem;
  padding-bottom: 1rem;
  border-bottom: 3px solid #a1a0a0;
`;

const SubTitle = styled.div`
  width: 100%;
  font-size: 1.5rem;
  font-weight: bold;
  color: #a1a0a0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-top: 1rem;
  padding-left: 1rem;
`;

const ContentBlock = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: left;
  font-size: 1.4rem;
  padding: 20px;
  border-bottom: 2px solid #a1a0a0;
  white-space: normal;
  word-wrap: break-word;
  overflow-wrap: break-word;
  flex-wrap: wrap;
  overflow: auto;
  white-space: pre-wrap;
`;

const ButtonDiv = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const IssueDetail = () => {
  const { id } = useParams<{ id?: string }>();
  const [loading, setLoading] = useState(true);
  const [issue, setIssue] = useState<Issue | null>(null);

  interface Issue {
    issueId: number;
    title: string;
    category: string;
    content: string;
    reporter: string;
    viewCnt: number;
    scrapCnt: number;
    is_scraped: boolean;
    source: string;
  }

  const postScrap = useCallback(async () => {
    const numericId = id ? parseInt(id, 10) : 0; // useParams로 받은 postId는 string이므로, number로 변환.
    try {
      await apiClient
        .post(`/api/v2/users/community/scrap/?id=${numericId}`, {
          id: issue?.issueId,
        })
        .then((res) => {
          alert("스크랩이 완료되었습니다. 마이페이지에서 확인해보세요 !");
          console.log("postScrap called");
          window.location.reload();
        });
    } catch (error) {
      console.log(error);
      alert("스크랩에 실패했습니다. 다시 시도해주세요.");
    }
  }, []);

  const deleteScrap = useCallback(async () => {
    const numericId = id ? parseInt(id, 10) : 0;
    try {
      await apiClient
        .delete(`/api/v2/users/community/scrap/?id=${numericId}`)
        .then((res) => {
          alert("스크랩이 취소되었습니다!");

          window.location.reload();
        });
    } catch (error) {
      console.log(error);
      alert("스크랩 취소에 실패했습니다. 다시 시도해주세요.");
    }
  }, []);

  const getIssue = useCallback(async () => {
    const numericId = id ? parseInt(id, 10) : 0; // useParams로 받은 postId는 string이므로, number로 변환.
    try {
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        apiClient.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${storedToken}`;
      }
      await apiClient
        .get(`/api/v2/users/community/issue/?id=${numericId}`)
        .then((res) => {
          setIssue(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getIssue();
    setLoading(false);
  }, []);

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
          <div style={{ color: "gray", fontSize: "1rem" }}>Please Wait...</div>
        </div>
      ) : (
        <Container>
          <Title></Title>
          <TitleBlock>
            <SubTitleBlock style={{ marginTop: "10px" }}>
              <SubTitle>
                {" "}
                {"["} {issue?.category} {"] "}
                {issue?.title}{" "}
              </SubTitle>
            </SubTitleBlock>
            <SubTitleBlock>
              <ElseBlock
                style={{
                  color: "gray",
                  width: "25%",
                }}
              >
                by. {issue?.reporter}
              </ElseBlock>
              <ElseBlock>조회수 {issue?.viewCnt}</ElseBlock>
              <ElseBlock>📌 {issue?.scrapCnt}</ElseBlock>
            </SubTitleBlock>
            <SubTitleBlock
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                paddingRight: "1rem",
              }}
            >
              <img
                src={issue?.is_scraped ? scrapped : unscrapped}
                alt="scrap-button"
                onClick={issue?.is_scraped ? deleteScrap : postScrap}
              />
            </SubTitleBlock>
          </TitleBlock>
          <ContentBlock>
            <p style={{ fontSize: "16px" }}>{issue?.content}</p>
          </ContentBlock>
          <SubTitleBlock style={{ marginTop: "10px" }}>
            <SubTitle style={{ fontSize: "1rem" }}>
              {" "}
              {"기사 상세 보기 ["}
              <Link
                to={issue?.source || "/default/path"}
                style={{ textDecoration: "none" }}
              >
                <span style={{ color: "#a1a0a0", cursor: "pointer" }}>
                  {" "}
                  {issue?.source} {"]"}
                </span>
              </Link>
            </SubTitle>
          </SubTitleBlock>
          <ButtonDiv>
            <Button
              sx={{
                width: "80px",
                height: "40px",
                backgroundColor: "#52C07E",
                color: "#ffffff",
                fontSize: "16px",
                fontWeight: "bold",
                borderRadius: "10px",
                marginRight: "20px",
              }}
              onClick={() => window.history.back()}
            >
              목록으로
            </Button>
          </ButtonDiv>
        </Container>
      )}
    </Container>
  );
};
