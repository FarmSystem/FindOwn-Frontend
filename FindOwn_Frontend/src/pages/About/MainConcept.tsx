import { useParams } from "react-router-dom";
import React from "react";
import findOwnImg1 from "../../assets/images/mainConcept_1.png";
import findOwnImg2 from "../../assets/images/mainConcept_2.jpeg";
import findOwnImg3 from "../../assets/images/FindOwn_logo6.png";
import findOwnImg4 from "../../assets/images/mainConcept_4.jpeg";
import styled from "@emotion/styled";
import { Button } from "@mui/material";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  @font-face {
    font-family: "AppleBold";
    src: url("https://cdn.jsdelivr.net/gh/cho1n/Apollo-Frontend@latest/src/assets/fonts/AppleSDGothicNeoB.ttf")
      format("truetype");
  }

  font-family: "AppleBold";
`;

const ImageDiv = styled.img`
  width: 50%;
  height: 40%;
  background-size: cover;
  background-position: center;
  border-radius: 15px;
  margin-top: 20px;
`;

const ContentDiv = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  padding-top: 20px;
  overflow-y: auto;
`;

const ButtonDiv = styled.div`
  width: 50%;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const MainConcept = () => {
  const { index } = useParams<{ index: string }>();
  const numIndex = Number(index);
  const images = [findOwnImg1, findOwnImg2, findOwnImg3, findOwnImg4];
  const contents = [
    "상표권은 특정 상표(상표는 로고, 상호, 표장, 상품 또는 서비스의 식별을 위한 다양한 기호 등을 포함합니다)를 등록하고 보호하는 권리를 말합니다. 이는 해당 상표를 특정 기업이나 개인이 독점적으로 사용할 수 있도록 하는 권리를 제공하며, 경제적인 가치와 더불어 소비자에게 상품이나 서비스의 출처를 식별하는 데 도움이 됩니다. \n\n 상표권은 설정등록(設定登錄)에 의하여 발생하고(상표법 41조), 그 존속기간은 설정등록일로부터 10년이며, 갱신등록(更新登錄)의 출원에 의하여 10년마다 갱신할 수 있습니다(42조). \n\n 상표권의 특징은 아래와 같습니다.\n (1) 산업재산권성 - 독점 배타성이 부여되어 있으므로 물권에 유사한 절대권이며 이른바 대세적 권리이다.\n (2) 신규성이나 창작성을 요하지 않는 권리\n (3) 상품에 관한 권리\n (4) 공익적 권리 - 상표권은 개성화된 상품의 동일성을 표시하며(상표식별의 기능), 또 다른 상품과의 출처의 혼동을 방지(출처표시의 기능)하기 위하여 사용되는 것으로서, 상표권은 상표의 이러한 기능을 상표권자의 이익을 위하여 보호하는 것을 주된 목적으로 하는 권리\n (5) 거래의 수단으로서의 상표를 보호하는 권리\n",
    "상표라 함은 상품을 생산·가공·증명 또는 판매하는 것을 업으로 영위하는 자가 자기의 업무와 관련된 상품을 타인의 상품과 식별되도록 하기 위하여 사용하는 기호·문자·도형·입체적 형상 또는 이들을 결합한 것 및 위 각각에 색채를 결합한 것을 말한다.\n \n 상표를 사용하면서 일정한 품질을 지니는 상품, 서비스가 계속 제공될 경우, 신용이 제고되어 재산적 가치가 갖추어지기도 한다. 상표법에 근거하여 등록된 상표를 등록 상표라고 한다.\n",
    "상호(商號): 회사나 사업체의 명칭으로, 장사 활동을 표시하기 위해 사용하는 명칭입니다. 법무국에서 관리되며, 등록되어 있어도 타인이 동일한 상표를 사용하더라도 방어할 수 있는 권리는 없습니다. \n\n 상표(商標): 제품이나 서비스를 다른 것과 구별하기 위한 특정 마크로, 특허청에서 등록하고 관리합니다. 국가 전체에서 보호되며, 유사한 등록 상표에 대해서도 권리를 가집니다. 상표 등록을 받은 경우, 동일 또는 유사한 상표를 국내에 등록할 수 없게 됩니다. \n\n 상호등기만 받은 경우에는 동일한 상표를 사용하는 다른 업체를 막을 수 없으며, 패키지에 회사명을 표시할 때 주의가 필요합니다. 실제로 동일한 상표를 사용하는 업체가 있다면 상표권을 주장할 수 없습니다. 상표등록을 받으면 고객에게 상품이나 서비스를 제공하는 사업형태에 더 안전한 보호를 받을 수 있습니다.",
    "(1) 조사 및 검증 \n - 새로운 상표를 등록하려면 먼저 중복 여부를 확인하기 위한 상표 검색을 실시합니다. 대한민국 특허청의 상표 검색 시스템을 활용할 수 있습니다.\n (2) 출원서 제출 \n - 출원서를 작성하고, 대한민국 특허청에 제출합니다. 출원서에는 상표의 특징, 등록하려는 상품 또는 서비스에 대한 정보 등이 포함됩니다.\n (3) 심사 및 공고 \n - 대한민국 특허청에서는 출원서를 심사하고, 특별한 이유가 없는 한 출원서를 공고합니다. 이 기간 동안에도 이의를 제기할 수 있습니다.\n(4) 이의 심사 및 결정\n- 공고 후 이의가 제기되면, 특허청에서는 이의 심사를 실시하고 결정합니다.\n (5) 등록 및 등록증 발급\n- 이의가 없거나 이의가 해결된 경우, 상표가 등록되어 등록증이 발급됩니다.\n(6) 유지 및 갱신\n- 등록된 상표는 10년 동안 유효하며, 만료 전에 갱신 신청을 통해 보호를 계속할 수 있습니다.\n상표 등록 절차는 대한민국 특허청에서 전자적으로 처리되며, 온라인 출원이 가능합니다. 등록 절차와 유지 갱신에 대한 정확한 정보는 특허청 사이트에서 확인할 수 있습니다.",
  ];

  const content = numIndex !== undefined ? contents[numIndex] : undefined;
  const image = numIndex !== undefined ? images[numIndex] : undefined;

  return (
    <Container>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ImageDiv src={image} />
        <ContentDiv>
          <div
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              color: "gray",
              paddingBottom: "1rem",
            }}
          >
            FindOwn Content {numIndex + 1}
          </div>
          <div
            style={{
              fontSize: "20px",
              padding: "1rem 1rem 1rem 0",
            }}
          >
            {content?.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}{" "}
          </div>
        </ContentDiv>
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
      </div>
    </Container>
  );
};
