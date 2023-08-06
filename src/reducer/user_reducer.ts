import { LOGIN_USER } from "../actions/types";

interface State {
  loginSuccess?: any;
}

const initialState: State = {};

export default function reducer(
  state: State = initialState,
  action: any
): State {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
    default:
      return state;
  }
}
