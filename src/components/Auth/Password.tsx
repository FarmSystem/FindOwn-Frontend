import { useCallback, useState } from "react";
import styled from "@emotion/styled";
import {
  UpdateText,
  Text,
  ChangePassword
} from './PassStyle';
import { useAtom } from "jotai";
import { modalAtom } from "../../states/jotaiStates";
import { useQuery } from "@tanstack/react-query";
import { getInfo } from "../../apis/user";

export const Password = () => {
  const [isPassword, setIsPassword] = useAtom(modalAtom);

  // 비밀번호 업데이트
  const { data: userInfo, isLoading } = useQuery({
    queryKey: ["userInfo"],
    queryFn: getInfo
  });

  const onClickToggleModal = useCallback(() => {
    setIsPassword(!isPassword);
  }, [isPassword]);

  return(
    <>
      <UpdateText>최근 업데이트: <br/>{userInfo?.password_update_date}</UpdateText>
      <Text>비밀번호</Text>
      <ChangePassword onClick={onClickToggleModal} >비밀번호 변경</ChangePassword>
    </>
  );
};
