import "./styles.css";
import React from "react";
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { startLoading, stopLoading } from "./actions/loading.action";
import { AddUsers, fetchUsers } from "./actions/user.action";
import Loading from "./component/loading";
import Users from "./component/users";

class App extends React.Component {

  componentDidMount() {
    this.props.startLoading();
    this.props.dispatch(fetchUsers())
    
      this.props.stopLoading();
    /* fetch("http://my-json-server.typicode.com/asadise/book-api/books")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          let _self = this;
          setTimeout(function () {
            _self.props.stopLoading();
          }, 5000);

          this.props.AddUsers(result);
        },
        (error) => {
          console.log(error);
        }
      ); */
  }
  render() {
    return (
      <div>
        <Loading id="loading" />

        <BrowserRouter>
          <div className="navbar">
            <Link to="/users">user</Link>&nbsp;&nbsp;
            <Link to="/">Home</Link>
          </div>
          <Switch>
            <Route path="/users" component={Users} />
            <Route path="/" />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.LoadingReducer,
  };
};

const mapDispatchToProps = (dispatch) => ({
  startLoading: () => dispatch(startLoading()),
  stopLoading: () => dispatch(stopLoading()),
  AddUsers: (users) => dispatch(AddUsers(users)),
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
