import React, { Fragment } from "react";
import TitlePage from "../../components/TitlePage";

class Users extends React.Component {
  render() {
    const { history } = this.props;

    return (
      <Fragment>
        <TitlePage title="Users" />
        <div
          style={{
            backgroundColor: "#fff",
            width: "200px",
            height: "200px",
            cursor: "pointer",
            marginTop: "20px",
            display: "grid",
            placeItems: "center"
          }}
          onClick={() => history.push("/users/1")}
        >
          Click Me go to /users/1
        </div>
      </Fragment>
    );
  }
}
export default Users;
