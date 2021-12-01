export const initialState: TInitialState = {
  user: {
    id: 0,
    name: "",
    password: "",
    email: "",
  },
  users: [],
};

export type TInitialState = {
  user: TUserInfo;
  users: TUserInfo[];
};

export type TUser = {
  name: string;
  email: string;
  password: string;
};

export type TUserInfo = {
  id: number;
  name: string;
  email: string;
  password: string;
};
