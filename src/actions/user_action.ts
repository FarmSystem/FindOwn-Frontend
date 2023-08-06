import { apiClient } from "../apis/apiClient";
import { AnyAction, Dispatch } from "redux";
import { LOGIN_USER } from "./types";

export function loginUser(dataToSubmit: any) {
  return async (dispatch: Dispatch<AnyAction>) => {
    try {
      const response = await apiClient.post("/api/member", dataToSubmit);
      dispatch({
        type: LOGIN_USER,
        payload: response.data,
      });
    } catch (error) {
      console.error("An error occurred while logging in:", error);
    }
  };
}
