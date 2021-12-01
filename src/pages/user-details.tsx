import { useEffect } from "react";
import { connect } from "react-redux";
import { TInitialState, TUserInfo } from "../redux/intialState";
import * as actionUser from "./../redux/action/user";

type TProps = {
  user: TUserInfo;
  getUserById: (id: number) => any;
  match: any;
};

const UserDetails = (props: TProps) => {
  const { user, getUserById, match } = props;

  useEffect(() => {
    getUserById(Number(match.params.id));
  }, []);

  return (
    <div>
      User Details
      <h1>name: {user.name}</h1>
      <h1>email: {user.email}</h1>
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
    getUserById: (id: number) => dispatch(actionUser.getListUserById(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
