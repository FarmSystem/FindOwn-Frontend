import { apiClient, loginInstance } from "./apiClient";
import { useNavigate } from "react-router-dom";

export const LOGIN_USER = "login_user";
const token = localStorage.getItem('token');

// 사용자 마이페이지 기본정보 불러오기
export const getInfo = async () => {
  try{
    const {data} = await loginInstance.get(`/my-page/info`, {
      headers:{
        Authorization: `Bearer ${token}`
      }
    });
    console.log(data);
    return data;  
  }catch(error){
    console.error(error);
  }
}

interface ChangeIdProps {
  originMemberId?: string,
  newMemberId: string,
};

// 사용자 마이페이지에서 아이디 변경하기
export const changeId = async (props : ChangeIdProps)=> {
  try{
    const body = {
      originMemberId: props.originMemberId || "user",
      newMemberId: props.newMemberId,
    }
    // console.log(originMemberId);
    // console.log(newMemberId);
    const {data} = await loginInstance.patch(`/my-page/change/id`, body, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    if(data.status == 200 ){
      console.log("성공적");
    }
  }catch(error){
    console.error(error);
  }
};

interface ChangePwProps{
  originMemberPw: string,
  newMemberPw: string,
};

//사용자 마이페이지에서 비밀번호 변경
export const changePwd = async (props: ChangePwProps) => {
  try{
    const body = {
      originMemberPw: props.originMemberPw,
      newMemberPw: props.newMemberPw
    };
    const {data} = await loginInstance.patch(`/my-page/change/pw`, body, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    // return data; 
    if(data.status == 200){
      // navigate(`/login`);
    }
  }catch(error){
    console.error(error);
  }
};

//사용자 스토리지에서 스크랩 가져오기
export const getScrap = async() => {
  try{
    const {data} = await loginInstance.get(`/my-page/storage`,{
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log(data);
    return data;
  }catch(error){
    console.error(error);
  }
};