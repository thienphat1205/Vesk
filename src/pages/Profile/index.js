import React, { Component } from "react";
import TitlePage from "../../components/TitlePage";
import { connect } from "react-redux";

class Profile extends Component {
  render() {
    const {
      myInfo: { firstName = "", lastName = "" } = {},
      // history,
    } = this.props;
    const fullName = `${firstName} ${lastName}`;
    return (
      <div
        style={{ backgroundColor: "#faf2f2", width: "100%", height: "500px" }}
      >
        <TitlePage title={`${fullName} | Profile`} />
        <h1>This is profile {fullName}</h1>
      </div>
    );
  }
}
const mapStateToProps = ({ user: { myInfo = {} } = {} }) => ({
  myInfo,
});

const mapDispatchToProps = (dispatch) => ({
  // getMyInfo: () => dispatch({ type: "GET_MY_INFO" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
