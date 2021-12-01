import axios from "axios";
import { TUser } from "./../intialState";
export const addUser = (values: TUser) => {
  return (dispatch: any) => {
    axios
      .post("http://localhost:3001/user", values)
      .then((res) => {
        dispatch({ type: "ADD_USER", payload: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const updateUser = (id: number, values: TUser): Promise<boolean> => {
  return axios
    .patch(`http://localhost:3001/user/${id}`, values)
    .then((res) => {
      return true;
    })
    .catch((err) => {
      return false;
    });
};

export const getListUser = () => {
  return (dispatch: any) => {
    axios
      .get("http://localhost:3001/user")
      .then((res) => {
        console.log(res);
        dispatch({ type: "GET_USER", payload: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getListUserById = (id: number) => {
  return (dispatch: any) => {
    axios
      .get(`http://localhost:3001/user/${id}`)
      .then((res) => {
        console.log(res);
        dispatch({ type: "GET_USER_BY_ID", payload: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteUser = (id: number): Promise<boolean> => {
  return axios
    .delete(`http://localhost:3001/user/${id}`)
    .then((res) => {
      return true;
    })
    .catch((err) => {
      return false;
    });
};
