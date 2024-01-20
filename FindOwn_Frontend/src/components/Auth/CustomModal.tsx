import React, { PropsWithChildren, useEffect, useState } from "react";
import {
  ModalContainer,
  Backdrop,
  DialogBox,
  Header,
  Inputs,
  InputTitle,
  InputBox,
  AlertText,
  ButtonLayer,
  PressButton,
} from './ModalStyle';
import { useMutation } from "@tanstack/react-query";
import { changePwd } from "../../apis/user";
import { AlertText2 } from "./InfoStyle";

interface ModalDefaultType{
  onClickToggleModal: () => void;
}

export const CustomModal = ({
  onClickToggleModal, 
  // children
}: PropsWithChildren<ModalDefaultType>) => {
  const [originPw, setOriginPw] = useState<string>("");
  const [newPw, setNewPw] = useState<string>("");
  const [checkPw, setCheckPw] = useState<string>("");
  const [isMsg, setIsMsg] = useState<string>("");
  const [okay, setIsOkay] = useState<boolean>(false);

  const { mutate } = useMutation({
    mutationFn: changePwd
  })

  //비밀번호와 새로운 비밀번호가 동일한지 
  const checkBetween = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckPw(e.currentTarget.value);
  };

  useEffect(() => {
    if(newPw == checkPw) {
      setIsOkay(true);
      setIsMsg("비밀번호가 동일합니다.");
    }else{
      setIsOkay(false);
      setIsMsg("새로운 비밀번호와 다릅니다.");
    }
  }, [checkPw]);

  const handleSubmit = () => {
    if(newPw == checkPw){
      mutate({originMemberPw: originPw, newMemberPw: checkPw});
    }else{
      alert("비밀번호가 틀렸습니다.");
    }
    onClickToggleModal();
  }

  return(
    <ModalContainer>
      <DialogBox>
        <Header>비밀번호 변경</Header>
        <Inputs style={{marginTop: 27}}>
          <InputTitle>현재 비밀번호</InputTitle>
          <InputBox onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setOriginPw(e.currentTarget.value)} type="password"/>
          <AlertText></AlertText>
        </Inputs>
        <Inputs style={{marginTop: 6}}>
          <InputTitle >새 비밀번호</InputTitle>
          <InputBox onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setNewPw(e.currentTarget.value)} type="password"/>
          <AlertText></AlertText>
        </Inputs>
        <Inputs style={{marginTop: 6}}>
          <InputTitle>새 비밀번호 확인</InputTitle>
          <InputBox onChange={checkBetween} type="password" />
          {!okay && <AlertText>{isMsg}</AlertText>}
          {okay && <AlertText2>{isMsg}</AlertText2>}
        </Inputs>
        <ButtonLayer>
          <PressButton msg="취소" onClick={onClickToggleModal} >취소</PressButton>
          <PressButton msg="저장" onClick={handleSubmit} >저장</PressButton>
        </ButtonLayer>
      </DialogBox>
      <Backdrop 
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();
          if(onClickToggleModal){
            onClickToggleModal();
          }
        }}
      />
    </ModalContainer>
  );
};