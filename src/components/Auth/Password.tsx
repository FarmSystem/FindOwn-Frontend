import { useCallback, useState } from "react";
import styled from "@emotion/styled";
import {
  UpdateText,
  Text,
  ChangePassword
} from './PassStyle';
import { useAtom } from "jotai";
import { modalAtom } from "../../states/jotaiStates";

export const Password = () => {
  const [isPassword, setIsPassword] = useAtom(modalAtom);

  const onClickToggleModal = useCallback(() => {
    setIsPassword(!isPassword);
  }, [isPassword]);

  return(
    <>
      <UpdateText>최근 업데이트: <br/>2023.07.21</UpdateText>
      <Text>비밀번호</Text>
      <ChangePassword onClick={onClickToggleModal} >비밀번호 변경</ChangePassword>
    </>
  );
};
