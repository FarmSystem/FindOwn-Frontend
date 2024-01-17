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
export const changeId = async ({originMemberId, newMemberId} : ChangeIdProps) => {
  try{
    const body = {
      originMemberId: "user2",
      newMemberId: newMemberId,
    }
    console.log(originMemberId);
    console.log(newMemberId);
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
}