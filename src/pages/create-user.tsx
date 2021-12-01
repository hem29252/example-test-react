import axios from "axios";
import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { TInitialState, TUser, TUserInfo } from "../redux/intialState";
import * as actionUser from "./../redux/action/user";

type TProps = {
  // user: TUserInfo;
  addUser: (values: TUser) => any;
  getUserById: (id: number) => any;
  match: any;
};

const CreateUser = (props: TProps) => {
  const history = useHistory();
  const { addUser, match, getUserById } = props;
  const userId = Number(match.params.id);
  const passwordRef = useRef<any>();
  const nameRef = useRef<any>();
  const emailRef = useRef<any>();

  useEffect(() => {
    checkAction();
  }, []);

  const checkAction = () => {
    if (userId) {
      // getUserById(Number(match.params.id));
      apiGetUserById();
    }
  };

  const apiGetUserById = async () => {
    try {
      const res = await axios.get(`http://localhost:3/user/${userId}`);
      const data = res.data;
      nameRef.current.value = data.name;
      emailRef.current.value = data.email;
      passwordRef.current.value = data.password;
    } catch (error: any) {
      console.log(error);
    }
  };

  const handleOnSubmit = async (event: React.BaseSyntheticEvent) => {
    event.preventDefault();
    const { target } = event;
    const [name, email, password] = target;
    if (userId) {
      const res = await actionUser.updateUser(userId, {
        email: email.value,
        name: name.value,
        password: password.value,
      });
      if (res) {
        return history.goBack();
      }
    } else {
      addUser({
        email: email.value,
        name: name.value,
        password: password.value,
      });
    }
  };

  return (
    <div>
      <h1>Create user</h1>
      <form onSubmit={handleOnSubmit}>
        <div>
          <label>Name: </label>
          <input type="text" placeholder="Name" ref={nameRef} />
        </div>
        <div>
          <label>Email: </label>
          <input type="text" placeholder="Email" ref={emailRef} />
        </div>
        <div>
          <label>Password: </label>
          <input type="password" placeholder="Password" ref={passwordRef} />
        </div>
        <div>
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state: TInitialState) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    addUser: (values: TUser) => dispatch(actionUser.addUser(values)),
    getUserById: (id: number) => dispatch(actionUser.getListUserById(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);
