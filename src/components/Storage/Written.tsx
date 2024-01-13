import { Block, ScrapHeader, ScrapTable, Wrapper } from "./style";

export const Written = () => {

  const WriteBlock = () => {
    return(
      <Block>

      </Block>
    );
  };

  return(
    <Wrapper>
      <ScrapTable style={{marginTop: 50}}>
        {WriteBlock()}
      </ScrapTable>
    </Wrapper>
  );
};