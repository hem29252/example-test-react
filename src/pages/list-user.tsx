import { NavLink, useHistory } from "react-router-dom";
import { TInitialState, TUserInfo } from "./../redux/intialState";
import * as actionUser from "./../redux/action/user";
import { connect } from "react-redux";
import { Fragment, useEffect } from "react";
import TableComponent from "../component/TableComponent";

type TProps = {
  users: TUserInfo[];
  getUser: () => any;
};

const ListUser = (props: TProps) => {
  const { getUser, users } = props;
  const history = useHistory();

  useEffect(() => {
    getUser();
  }, []);

  const handleOnDeleteUser = async (id: number) => {
    const res = await actionUser.deleteUser(id);
    if (res) {
      getUser();
      return;
    }
    console.log("failed");
  };

  return (
    <div>
      <h1>List User</h1>
      <NavLink to="/create">create new</NavLink>
      <table>
        <tbody>
          <tr>
            <th>id.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
          {users.map((item: TUserInfo) => (
            <Fragment key={item.id}>
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <button
                  onClick={() => {
                    history.push(`/user/detail/${item.id}`);
                  }}
                >
                  details
                </button>
                <button
                  onClick={() => {
                    handleOnDeleteUser(item.id);
                  }}
                >
                  delete
                </button>
                <button
                  onClick={() => {
                    history.push(`/edit/${item.id}`);
                  }}
                >
                  edit
                </button>
              </tr>
            </Fragment>
          ))}
        </tbody>
      </table>
      <hr />
      <TableComponent columns={[]} dataSource={[]} />
    </div>
  );
};

const mapStateToProps = (state: TInitialState) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getUser: () => dispatch(actionUser.getListUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListUser);
