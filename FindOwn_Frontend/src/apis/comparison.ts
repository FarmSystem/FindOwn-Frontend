import { loginInstance } from "./apiClient";
//~comparison 붙은 곳

const token = localStorage.getItem("token");

//상표권 결과 삭제하기
export const deleteResult = async (props: any) => {
  try {
    const { data } = await loginInstance.delete(
      `/comparison/?comparisonId=${props.id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (data.status === 200) {
      return true;
    }
  } catch (error) {
    console.error(error);
  }
};

//상표권 침해판단 리스트 불러오기
export const resultList = async () => {
  try {
    const { data } = await loginInstance.get(`/comparison`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};

// 상표권 침해판단 디테일 페이지 (결과 저장하기랑 유사)
export const resultDetail = async (props: any) => {
  try {
    console.log(props);
    const comparisonId = props.queryKey[1];
    const { data } = await loginInstance.get(
      `/comparison/?comparisonId=${comparisonId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return data;
  } catch (error) {
    console.error(error);
  }
};

// 마이페이지에서 상표권 침해판단 저장한 부분 리스트 불러오기
export const ownResult = async () => {
  try {
    const { data } = await loginInstance.get(`/my-page/comparison`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};
