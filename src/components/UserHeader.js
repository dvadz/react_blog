import React from "react";
import { connect } from "react-redux";
// import { fetchUser } from "../actions/index";

class UserHeader extends React.Component {
  render() {
    const { user } = this.props;
    if (!user) return null;
    return <div>{user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  let user = state.users.find((user) => user.id === ownProps.userId);
  return { user };
};

export default connect(mapStateToProps)(UserHeader);
