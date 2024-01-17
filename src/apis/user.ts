import { apiClient, loginInstance } from "./apiClient";

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
export const changeId = async (props : ChangeIdProps): Promise<ChangeIdProps> => {
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
  return data;
}

interface ChangePwProps{
  originMemberPw: string,
  newMemberPw: string,
};

//사용자 마이페이지에서 비밀번호 변경
export const changePwd = async (props: ChangePwProps) => {
  const body = {
    originMemberPw: props.originMemberPw,
    newMemberPw: props.newMemberPw
  };
  const {data} = await loginInstance.patch(`/my-page/change/pw`, body, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return data;
}