import React, { Component } from "react";
import {
  Header,
  // HeaderNavigation,
  HeaderContainer,
  // SideNav,
  // SkipToContent,
  // HeaderMenuButton,
  // SideNavItems,
  // HeaderSideNavItems,
  HeaderGlobalBar
} from "carbon-components-react/lib/components/UIShell";
import {
  UserProfile20,
  Logout20,
  ChevronSortDown20,
  Menu20
} from "@carbon/icons-react";
import "./index.scss";

class ComponentHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleLogout = () => {
    const { history, logout } = this.props;
    logout(history);
  };

  render() {
    const {
      myInfo: { firstName = "", lastName = "" } = {},
      history,
      handleMenu
    } = this.props;
    const fullName = firstName ? `${firstName} ${lastName}` : "User Name";
    return (
      <div className="rootHeader" style={{ height: "auto" }}>
        <HeaderContainer
          render={({ isSideNavExpanded, onClickSideNavExpand }) => (
            <>
              <Header aria-label="IBM Platform Name">
                {/* <HeaderMenuButton
                  aria-label="Open menu"
                  onClick={onClickSideNavExpand}
                  isActive={isSideNavExpanded}
                /> */}
                <div
                  style={{ color: "#acb7b8", marginLeft: "1rem" }}
                  onClick={handleMenu}
                >
                  <Menu20 />
                </div>
                {/* <NavLink
                  exact
                  to="/"
                  activeClassName="none"
                  className="itemMenu"
                >
                  Demo React-Carbon
                </NavLink>

                <HeaderNavigation aria-label="IBM [Platform]">
                  <NavLink
                    exact
                    activeClassName="menuHorizontalActive"
                    to="/"
                    className="itemMenu"
                  >
                    Home
                  </NavLink>

                  <NavLink
                    activeClassName="menuHorizontalActive"
                    to="/users"
                    className="itemMenu"
                  >
                    Users
                  </NavLink>

                  <NavLink
                    activeClassName="menuHorizontalActive"
                    to="/contact"
                    className="itemMenu"
                  >
                    Contact
                  </NavLink>
                  {role === "admin" && (
                    <NavLink
                      activeClassName="menuHorizontalActive"
                      to="/contact"
                      className="itemMenu"
                    >
                      Admin Page
                    </NavLink>
                  )}
                </HeaderNavigation> */}
                <HeaderGlobalBar>
                  <div className="rightMenu" onClick={this.showDropDownMenu}>
                    <img
                      className="rightMenu__avatar"
                      src={require("../../images/testAvatar.jpg")}
                      alt="img-avatar"
                    />
                    <p className="rightMenu__textName">{fullName}</p>

                    <ChevronSortDown20 className="icon" />
                  </div>
                  <div className="dropDownMenu">
                    <div
                      className="dropDownMenu__item"
                      onClick={() => history.push("/profile")}
                    >
                      <UserProfile20 />
                      <p className="dropDownMenu__item--text">Profile</p>
                    </div>
                    <div
                      className="dropDownMenu__item"
                      onClick={this.handleLogout}
                    >
                      <Logout20 />
                      <p className="dropDownMenu__item--text">Logout</p>
                    </div>
                  </div>
                </HeaderGlobalBar>
                {/* <SideNav
                  aria-label="Side navigation"
                  expanded={isSideNavExpanded}
                  isPersistent={false}
                >
                  <SideNavItems>
                    <HeaderSideNavItems>
                      <NavLink
                        exact
                        activeClassName="active"
                        to="/"
                        // className="itemMenu"
                      >
                        Home
                      </NavLink>

                      <NavLink
                        activeClassName="active"
                        to="/users"
                        // className="itemMenu"
                      >
                        Users
                      </NavLink>

                      <NavLink
                        activeClassName="active"
                        to="/contact"
                        // className="itemMenu"
                      >
                        Contact
                      </NavLink>
                    </HeaderSideNavItems>
                  </SideNavItems>
                </SideNav> */}
              </Header>
            </>
          )}
        />
      </div>
    );
  }
}

export default ComponentHeader;
