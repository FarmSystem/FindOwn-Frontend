import { loginInstance } from "./apiClient";
//~comparison 붙은 곳

const token = localStorage.getItem("token");

interface resultProps {
  originImage: string,
  open: boolean,
  trademarks: string[],
}

//상표권 침해판단 결과 저장하기
export const submitResult = async(props: resultProps) => {
  try{
    const body = {
      // originImage: 
    };
    const {data} = await loginInstance.post(`/comparison`, body, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

  }catch(error){
    console.error(error);
  }
};

//상표권 결과 삭제하기
export const deleteResult = async() => {
  try{
    const {data} = await loginInstance.delete(`/comparison`);
  }catch(error){
    console.error(error);
  }
}

//상표권 침해판단 리스트 불러오기


// 상표권 침해판단 디테일 페이지 (결과 저장하기랑 유사)


// 마이페이지에서 상표권 침해판단 저장한 부분 리스트 불러오기
export const ownResult = async() => {
  try{
    const {data} = await loginInstance.get(`/my-page/comparison`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return data;
  }catch(error){
    console.error(error);
  }
}