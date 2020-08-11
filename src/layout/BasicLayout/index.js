import React, { Component, Fragment } from "react";
import { Modal } from "carbon-components-react";
import { NavLink } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Redirect } from "react-router-dom";
import { getToken } from "../../utils/token";
import { connect } from "react-redux";
import "./index.scss";

class BasicLayout extends Component {
  // componentDidMount() {
  //   const { getMyInfo } = this.props;
  //   getMyInfo();
  // }

  hideModal = () => {
    const { setDataUserReducer } = this.props;
    setDataUserReducer({
      expiredToken: false,
    });
  };

  _logout = (history) => {
    const { logout } = this.props;
    logout(history);
  };

  handleMenu = () => {
    const { widthMenu, setDataUserReducer } = this.props;
    setDataUserReducer({
      widthMenu: !widthMenu,
    });
  };

  render() {
    const { children, history, expiredToken, myInfo, widthMenu } = this.props;
    const widthMenuLeft = widthMenu ? "225px" : "90px";
    const { token } = getToken();
    if (!token) {
      return <Redirect to="/signin" />;
    }
    return (
      <Fragment>
        <div className="container_basic_layout">
          <Header
            history={history}
            logout={this._logout}
            myInfo={myInfo}
            handleMenu={this.handleMenu}
          />
          <div className="body">
            <div
              className="leftPanel"
              style={{ width: widthMenuLeft, minWidth: widthMenuLeft }}
            >
              <div className="menu" style={{ width: widthMenuLeft }}>
                <NavLink
                  exact
                  activeClassName="leftPanel__itemMenu--active"
                  to="/"
                  className="leftPanel__itemMenu"
                  style={{ widthMenuLeft }}
                >
                  Home
                </NavLink>

                <NavLink
                  activeClassName="leftPanel__itemMenu--active"
                  to="/users"
                  className="leftPanel__itemMenu"
                >
                  Users
                </NavLink>

                <NavLink
                  activeClassName="leftPanel__itemMenu--active"
                  to="/contact"
                  className="leftPanel__itemMenu"
                >
                  Contact
                </NavLink>
              </div>
            </div>
            <div style={{ width: "100%" }}>
              <div className="content">
                <div style={{ width: "100%" }}>{children}</div>
                <div className="ads">
                  <img
                    src={require("../../images/ad-tall-226x455-01.jpg")}
                    alt="ads"
                    className="ads__img"
                  />
                </div>
              </div>
              <Footer />
            </div>
          </div>
        </div>
        <Modal
          className="some-class"
          modalHeading="Token Expired"
          onRequestClose={this.hideModal}
          onRequestSubmit={() => this._logout(undefined)}
          onSecondarySubmit={this.hideModal}
          open={expiredToken}
          primaryButtonText="Sign In"
          secondaryButtonText="Cancel"
          size={undefined}
        >
          <p className="bx--modal-content__text">Please Sign In Again!!!</p>
        </Modal>
      </Fragment>
    );
  }
}

const mapStateToProps = ({
  user: { expiredToken, myInfo = {}, widthMenu } = {},
}) => ({
  expiredToken,
  myInfo,
  widthMenu,
});

const mapDispatchToProps = (dispatch) => ({
  getMyInfo: () => dispatch({ type: "GET_MY_INFO" }),
  setDataUserReducer: (data) => dispatch({ type: "UPDATE_STATE", data }),
  logout: (data) => dispatch({ type: "USER_LOGOUT", data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(BasicLayout);
