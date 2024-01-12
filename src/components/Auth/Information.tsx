import { 
  NickName,
  EmailCon,
  EditBtn,
  EditText,
  EditIcon,
  Contained,
  InputContainer,
  Title,
  InputValue,
  Rounded,
  SubRounded
} from './InfoStyle';
import edit from '../../assets/images/Edit_btn.svg';
import React, { useState } from 'react';
import styled from '@emotion/styled';

export const Information = () => {
  const [isEdited, setIsEdited] = useState<boolean>(false);
  
  const customBtn: React.FC<{message: string}> = ({message}) => {
    return(
      <Rounded message={message}>
        {message}
      </Rounded>
    );
  };

  const EditState = () => {
    setIsEdited(!isEdited);
  };

  return(
    <>
    {!isEdited ? (
      <>
        <NickName>팜 4조</NickName>  
        <EmailCon>farm4team@gmail.com</EmailCon>                    
        <EditBtn onClick={EditState}>
          <EditText>수정</EditText>
          <EditIcon src={edit} />
        </EditBtn>
      </>
    ) : (
      <>
        <Contained>
          <InputContainer>
            <Title>닉네임</Title>
            <InputValue/>
            {customBtn({message: "중복확인"})}
          </InputContainer>
          <InputContainer>
            <Title>전화번호</Title>
            <InputValue/>
            {customBtn({message: "선택사항"})}
          </InputContainer>
          <InputContainer>
            <Title>이메일</Title>
            <InputValue/>
            {customBtn({message: "인증번호"})}
          </InputContainer>
        </Contained>
        <SubRounded onClick={EditState}>수정완료</SubRounded>
      </>
    )}
    </>
  );
};
