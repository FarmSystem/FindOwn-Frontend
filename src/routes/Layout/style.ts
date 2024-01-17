import styled from "@emotion/styled";

export const Root = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  height: 105vh;
  display: flex;
  flex-direction: row;
  justify-content : center;
  margin-top: 50px;
  position: relative;
  // border: 1px solid black;
`;

  export const LeftWrapper = styled.div`
    width: 253px;
    height: 100%;
    display: flex;
    position: fixed;
    flex-direction: column;
    margin-right: 1400px;
  `;