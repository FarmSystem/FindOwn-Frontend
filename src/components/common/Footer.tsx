import styled from "@emotion/styled"


const FooterContainer = styled.div`
  position: fixed;
  z-index: 10;
  height: 50px;
  width: 100%;
  background-color: #EEFFED;

`

const FooterInner = styled.div`
  margin: 0 auto;
  height: 100%;
  position: relative;
  transform: translateY(0%);

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`

const Text = styled.div`
    font-size: 15px;
    color : black;
`

function footer() {
    return (
        <FooterContainer>
            <FooterInner>
                <Text></Text>
            </FooterInner>
        </FooterContainer>
    );
}

export default footer