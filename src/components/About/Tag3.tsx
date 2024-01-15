import styled from "@emotion/styled";
import { apiClient } from "../../apis/apiClient";
import { useNavigate } from "react-router-dom";
import issueImg1 from "../../assets/images/FindOwn_logo1.png";
import issueImg2 from "../../assets/images/FindOwn_logo2.png";
import issueImg3 from "../../assets/images/FindOwn_logo3.png";
import issueImg4 from "../../assets/images/FindOwn_logo4.png";
import issueImg5 from "../../assets/images/FindOwn_logo5.png";
import issueImg6 from "../../assets/images/FindOwn_logo6.png";

import unScrapImage from "../../assets/images/unscrapped.svg";
import scrapImage from "../../assets/images/scrapped.svg";
import { useEffect, useState } from "react";

const Container = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  overflow: auto;
  flex-wrap: wrap;
  margin-left: 20px;
  align-items: center;
  justify-content: center;
  @font-face {
    font-family: "AppleBold";
    src: url("https://cdn.jsdelivr.net/gh/cho1n/Apollo-Frontend@latest/src/assets/fonts/AppleSDGothicNeoB.ttf")
      format("truetype");
  }

  font-family: "AppleBold";
`;

const ItemBox = styled.div`
  width: 28%;
  height: 30%;
  border: 1px solid #a1a0a0;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 10px;
  box-shadow: 0px 0px 5px #a1a0a0;
`;

const ItemBoxImg = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #a1a0a0;
  margin: 10px;
  padding: 10px;
  img {
    width: 100%;
    height: 190px;
    object-fit: contain;
  }
`;

const ItemBoxTitle = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0 0 10px 0;
`;

const ItemBoxContent = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  flex-direction: row;
  font-size: 0.9rem;
  padding: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #a1a0a0;
`;

export const Tag3 = () => {
  const [issueList, setIssueList] = useState<Issue[]>([]);
  const images = [
    issueImg1,
    issueImg2,
    issueImg3,
    issueImg4,
    issueImg5,
    issueImg6,
  ];
  const navigate = useNavigate();

  interface Issue {
    id: number;
    title: string;
    simpleContent: string;
    content: string;
    viewCnt: number;
    scrapCnt: number;
    scraped: boolean;
  }

  useEffect(() => {
    apiClient
      .get(`/api/v2/users/community/issue`)
      .then((response) => {
        setIssueList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    let storedToken = localStorage.getItem("token");
    if (storedToken) {
      apiClient.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${storedToken}`;
    }
  }, []);

  return (
    <Container>
      {issueList.map((issue) => (
        <ItemBox onClick={() => navigate(`/issue/${issue.id}`)}>
          <ItemBoxTitle>
            <img
              src={issue?.scraped ? scrapImage : unScrapImage}
              alt=""
              style={{
                paddingTop: "3px",
                paddingLeft: "10px",
              }}
            />
          </ItemBoxTitle>
          <ItemBoxImg>
            <ItemBoxImg>
              <img
                src={images[Math.floor(Math.random() * images.length)]}
                alt="random"
              />
            </ItemBoxImg>{" "}
          </ItemBoxImg>
          <ItemBoxContent
            style={{ color: "black", fontWeight: "bold", fontSize: "1rem" }}
          >
            {issue?.title}
          </ItemBoxContent>
          <ItemBoxContent>{issue?.simpleContent}</ItemBoxContent>
          <ItemBoxContent
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              padding: "10px",
              fontSize: "1rem",
            }}
          >
            <img
              src={unScrapImage}
              alt="scrapImage"
              style={{ width: "30px", height: "22px" }}
            />{" "}
            <div style={{ paddingRight: "10px" }}>{issue.scrapCnt}</div>
            <div style={{ paddingBottom: "3px" }}> 👀 {issue.viewCnt}</div>
          </ItemBoxContent>
        </ItemBox>
      ))}
    </Container>
  );
};
