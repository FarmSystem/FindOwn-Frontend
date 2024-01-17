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
  SubRounded,
  AlertText,
  AlertText2
} from './InfoStyle';
import edit from '../../assets/images/Edit_btn.svg';
import React, { useState } from 'react';
import styled from '@emotion/styled';
import { apiClient } from '../../apis/apiClient';
import { useMutation, useQuery } from '@tanstack/react-query';
import { changeId, getInfo } from '../../apis/user';

export const Information = () => {
  const [isEdited, setIsEdited] = useState<boolean>(false);
  const [nickname, setNickname] = useState<string>("");
  const [nicknameCheck, setNicknameCheck] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [isEmail, setIsEmail] = useState<boolean>(false);
  const [isEmailMessage, setIsEmailMessage] = useState<string>("");
  const [isCodeTrue, setIsCodeTrue] = useState<boolean>(false);
  const [verificationCode, setVerificationCode] = useState<string>("");
  const [isCodeSent, setIsCodeSent] = useState<boolean>(false);

  // 처음 기본정보를 보여주다가 변경된 사항을 fresh
  // 마이페이지 기본정보 가져오기
  const { data: userInfo, isLoading } = useQuery({
    queryKey: ["userInfo"],
    queryFn: getInfo,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
  });
  
  const { mutate } = useMutation({
    mutationFn: changeId,
  });

  type customProps = {
    message: string;
    id?: string;
    email?: string;
    code?: string;
  };

  const customBtn: React.FC<customProps> = (props) => {
    const customFunc = () =>{
      if(props.id){
        handleIdCheck();
      }else if(props.email){
        handleSendVerificationCode();
      }else if(props.code){
        handleVerifyCode();
      }
    }

    return(
      <Rounded message={props.message} onClick={customFunc}>
        {props.message}
      </Rounded>
    );
  };

  //초기에 수정완료 클릭할때 
  const DefaultEditState = () =>{
    setIsEdited(!isEdited);
  }

  //수정한 결괏값 전송
  const EditState = () => {
    handleSubmit();
    setIsEdited(!isEdited);
  };

  const handleSubmit = async() => {
    try{
      if(isCodeTrue == false){
        alert("이메일 인증이 제대로 되지 않았습니다.");
      }
      if(nicknameCheck == false){
        alert("아이디가 확인되지 않습니다.");
      }
      const originMemberId = userInfo?.nickname;
      const newMemberId = nickname;
      mutate({originMemberId: originMemberId, newMemberId: newMemberId});

    }catch(error){
      console.log(error);
    }
  }

  //닉네임 변경
  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>, ) => {
    setNickname(e.currentTarget.value);
  };

  //이메일 주소 유효한지 확인
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    const emailRegEx =
      /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
    if (emailRegEx.test(e.target.value)) {
      setIsEmail(true);
      setIsEmailMessage("사용가능한 이메일 형식입니다.");
    } else {
      setIsEmail(false);
      setIsEmailMessage("올바른 이메일 형식이 아닙니다.");
    } 
  }; 

  //인증번호 작성
  const handleVerificationCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVerificationCode(e.target.value);
  };

  //인증번호 요청 (이메일 작성하고나서)
  const handleSendVerificationCode = async () => {
    if (isEmail) {
      try {
        await apiClient.get(`/api/v2/no-auth/email/send?address=${email}`);
        setIsCodeSent(true);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("이메일 형식을 확인하세요.");
    }
  };

  //인증번호 확인
  const handleVerifyCode = async () => {
    try {
      await apiClient.post(`/api/v2/no-auth/email/check`, {
        email: email,
        code: verificationCode,
      });
      alert("인증이 완료되었습니다.");
      setIsCodeTrue(true);
    } catch (error) {
      // console.log(error);
      alert("인증번호가 유효하지 않습니다. 다시 확인해주세요.");
    }
  };

  // 아이디 중복확인
  const handleIdCheck = async () => {
    try {
      const response = await apiClient.get(
        `/api/v2/no-auth/isDuplicated?id=${nickname}`
      );
      console.log("중복요청 클릭됨");
      const { notDuplicated } = response.data;
      if (notDuplicated) {
        alert("사용 가능한 아이디입니다.");
        setNicknameCheck(true);
      } else {
        alert("이미 존재하는 아이디입니다.");
      }
    } catch (error) {
      // console.log(error);
    }
  };

  return(
    <>
    {!isEdited ? (
      <>
        <NickName> {userInfo?.nickname || "팜 4조"}</NickName>  
        <EmailCon>{userInfo?.email}</EmailCon>                    
        <EditBtn onClick={DefaultEditState}>
          <EditText>수정</EditText>
          <EditIcon src={edit} />
        </EditBtn>
      </>
    ) : (
      <>
        <Contained>
          <InputContainer>
            <Title>아이디</Title>
            <InputValue
              onChange={handleNicknameChange}
            />
            {customBtn({message: "중복확인", id: nickname})}
          </InputContainer>
          <div style={{display: "flex", flexDirection: "column"}}>
            <InputContainer>
              <Title>이메일</Title>
              <InputValue
                onChange={handleEmailChange}
              />
              {customBtn({message: "인증요청", email: email})}
            </InputContainer>
            {!isEmail && <AlertText>{isEmailMessage}</AlertText>}
            {isEmail && <AlertText2>{isEmailMessage}</AlertText2>}
          </div>

          {isCodeSent && (
            <InputContainer>
              <Title>인증번호</Title>
              <InputValue
                onChange={handleVerificationCodeChange}
                style={{opacity: isCodeSent ? 1 : 0}}
              />
              {customBtn({message: "인증확인", code: verificationCode})}
            </InputContainer>
          )}
        </Contained>
        <SubRounded onClick={EditState}>수정완료</SubRounded>
      </>
    )}
    </>
  );
};
