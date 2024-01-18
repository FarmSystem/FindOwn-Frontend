import { BoxContainer } from "./DetailStyles";
import {
  ItemBox,
  ImageBox,
  WarningBlock,
  BasicCircle,
  InsideCircle,
} from "./SimilarStyle";
import { useAtom } from "jotai";
import { similarAtom, detailAtom } from "../../states/jotaiStates";

export const SimilarItem = () => {
  const [itemIndex, setItemIndex] = useAtom(similarAtom);
  const [detail] = useAtom(detailAtom);

  const itemSelect = (index: number) => {
    setItemIndex(index);
  };

  const warningLight = (props: string) => {
    return (
      <BasicCircle>
        <InsideCircle color={props} />
      </BasicCircle>
    );
  };

  const displayItem = () => {
    if (!detail || !detail.trademarks) return null;
    return detail.trademarks.map((item, index) => (
      <ItemBox key={index} onClick={() => itemSelect(index)}>
        <WarningBlock>{warningLight(item.result)}</WarningBlock>
        <ImageBox>
          <img src={item.image_path} alt="item" />
        </ImageBox>
      </ItemBox>
    ));
  };

  return (
    <BoxContainer style={{ gap: 90, border: "none", marginTop: 20 }}>
      {displayItem()}
    </BoxContainer>
  );
};
