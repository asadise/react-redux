import { connect } from "react-redux";
import React, { Component } from "react";
import { DeleteUser, rejcetUser } from "../actions/user.action";
import { startLoading, stopLoading } from "../actions/loading.action";
import cx from "classnames";

class User extends Component {
  constructor(props) {
    super(props);

    this.delete1User = this.delete1User.bind(this);
    this.rejcetUser = this.rejcetUser.bind(this);
    this.props.startLoading();
    let _self = this;

    setTimeout(function () {
      _self.props.stopLoading();
    }, 1000);
  }

  delete1User(id) {
    this.props.startLoading();
    //this.props.DeleteUser(id);

    let _self = this;
    setTimeout(function () {
      _self.props.stopLoading();
      _self.props.delete1User(id);
    }, 5000);
  }

  rejcetUser(id){
    this.props.startLoading();
    let _self = this;
    _self.props.rejcetUser(id);
    _self.props.stopLoading();
  }

  render() {
    const { users } = this.props.users;
    return (
      <div>
        <ul style={{ textAlign: "initial" }}>
          {users &&
            users.map((user, index) => (
              <li key={user.id}>
              <span className={cx( "normal", user.image ==="-" && "rejected-user")}>{user.title}</span>
                <button onClick={() => this.delete1User(user.id)}>delete</button>
                <button onClick={()=>this.rejcetUser(index)}>reject</button>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.LoadingReducer,
    users: state.UserReducer,
  };
};

const mapDispatchToProps = (dispatch) => ({
  startLoading: () => dispatch(startLoading()),
  stopLoading: () => dispatch(stopLoading()),
  delete1User: (id) => dispatch(DeleteUser(id)),
  rejcetUser: (id) => dispatch(rejcetUser(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
