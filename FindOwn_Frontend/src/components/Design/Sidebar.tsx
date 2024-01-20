import styled from "@emotion/styled";
import CheckboxGroup from "../Design/CheckBox";

const Side = styled.div`
  display: flex;
  position: fixed;
  left: 0;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 15%;
  height: 90vh;
  background-color: #eeffed;
  margin-top: 50px;
`;

export const Sidebar = () => {
  return (
    <Side>
      <CheckboxGroup />
    </Side>
  );
};
