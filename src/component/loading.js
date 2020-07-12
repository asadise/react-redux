import { connect } from 'react-redux';
import React, { Component } from "react";

class Loading extends Component {

  render() {
    console.log(this.props.loading)
    return (
      <div id="loding" style={{ visibility: this.props.loading ? 'visible' : 'hidden' }} >
        Loading...
      </div>
    );
  }
}

const mapStateToProps = (state => {
  return {
    loading: state.LoadingReducer
  };
});

const mapDispatchToProps = dispatch => ({
  //nothing?
});

export default connect(mapStateToProps, mapDispatchToProps)(Loading);
