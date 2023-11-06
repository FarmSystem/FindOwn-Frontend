import styled from "@emotion/styled";
import CheckboxGroup from "../Trademark/CheckBox";

const Side = styled.div`
  display: flex;
  position: fixed;
  left: 0;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  flex-direction: column;
  align-items: center;
  width: 15%;
  height: 90vh;
  background-color: #eeffed;
  margin-top: 50px;

  @font-face {
    font-family: "AppleBold";
    src: url("https://cdn.jsdelivr.net/gh/cho1n/Apollo-Frontend@latest/src/assets/fonts/AppleSDGothicNeoB.ttf")
      format("truetype");
  }

  font-family: "AppleBold";
`;

export const Sidebar = () => {
  return (
    <Side>
      <CheckboxGroup />
    </Side>
  );
};
