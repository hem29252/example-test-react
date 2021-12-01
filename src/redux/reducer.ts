import { initialState, TInitialState } from "./intialState";

const reducer = (state: TInitialState = initialState, action: any) => {
  switch (action.type) {
    case "ADD_USER":
      return { ...state };
    case "GET_USER":
      return { ...state, users: action.payload };
    case "GET_USER_BY_ID":
      return { ...state, user: action.payload };
    default:
      break;
  }
  return state;
};

export default reducer;
