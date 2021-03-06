import React, { Component, Fragment } from "react";
import { Form, FormGroup, TextInput } from "carbon-components-react";
import { UserIdentification32, Reply32 } from "@carbon/icons-react";
import { connect } from "react-redux";
import TitlePage from "../../components/TitlePage";
import ButtonLoading from "../../components/ButtonLoading";
import ButtonOutline from "../../components/ButtonOutline";
import Notification from "../../components/Notification";
import "./index.scss";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      confirmPassword: "",
      email: "",
      password: "",
      check: false,
      validationEmail: false,
      validationPassword: false,
      validationConfirm: false,
      validationFirstName: false,
      validationLastName: false,
    };
  }

  componentWillUnmount() {
    const { updateStateReducer } = this.props;
    updateStateReducer({
      isSignUpSuccessfully: "",
      messageSignUp: "",
    });
  }

  handleChangePwd = (value) => {
    this.setState({ password: value });
  };

  handleChangeEmail = (value) => {
    this.setState({ email: value.toLowerCase() });
  };

  handleChangeFirstName = (value) => {
    this.setState({ firstName: value });
  };

  handleChangeLastName = (value) => {
    this.setState({ lastName: value });
  };

  handleChangeConfirmPwd = (value) => {
    this.setState({ confirmPassword: value });
  };

  handleSubmit = (event) => {
    const {
      email,
      password,
      confirmPassword,
      firstName,
      lastName,
    } = this.state;
    const { signUp, history } = this.props;
    event.preventDefault();
    let check = false;
    // eslint-disable-next-line no-useless-escape
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailRegex.test(email) === false) {
      this.setState({
        validationEmail: true,
        messageValidationEmail: "The email is not valid",
      });
      check = true;
    } else {
      this.setState({
        validationEmail: false,
        messageValidationEmail: "",
      });
    }
    if (password.length < 8) {
      this.setState({
        validationPassword: true,
        messageValidationPwd: "Password must be at least 8 characters",
      });
      check = true;
    } else {
      this.setState({
        validationPassword: false,
        messageValidationPwd: "",
      });
    }

    if (confirmPassword !== password && password !== "") {
      this.setState({
        validationConfirm: true,
        messageValidationConfirm: "Password not match",
      });
      check = true;
    } else {
      this.setState({
        validationConfirm: false,
        messageValidationConfirm: "",
      });
    }
    if (firstName === "") {
      this.setState({
        validationFirstName: true,
        messageValidationFirstName: "First name is required",
      });
      check = true;
    } else {
      this.setState({
        validationFirstName: false,
        messageValidationFirstName: "",
      });
    }
    if (lastName === "") {
      this.setState({
        validationLastName: true,
        messageValidationLastName: "Last name is required",
      });
      check = true;
    } else {
      this.setState({
        validationLastName: false,
        messageValidationLastName: "",
      });
    }
    if (!check) {
      const valueSignUp = { firstName, lastName, email, password };
      signUp(valueSignUp, history);
    }
  };

  render() {
    const {
      validationEmail,
      messageValidationEmail,
      validationPassword,
      messageValidationPwd,
      validationConfirm,
      messageValidationConfirm,
      validationFirstName,
      messageValidationFirstName,
      validationLastName,
      messageValidationLastName,
      email,
      password,
      firstName,
      lastName,
      confirmPassword,
    } = this.state;
    const {
      history,
      loading,
      isSignUpSuccessfully,
      messageSignUp,
    } = this.props;

    return (
      <Fragment>
        <TitlePage title="Sign Up" />
        <div className="content-signUp" style={{ height: "auto" }}>
          <div className="viewTitleSignUp">SIGN UP</div>
          <div className="formSignUp">
            <Form onSubmit={this.handleSubmit}>
              <div className="viewInputRow">
                <div style={{ width: "45%" }}>
                  <FormGroup legendText="">
                    <TextInput
                      className="input-name"
                      disabled={false}
                      id="inputFirstName"
                      invalid={validationFirstName}
                      invalidText={messageValidationFirstName}
                      labelText="First Name"
                      required
                      light={true}
                      onChange={(event) =>
                        this.handleChangeFirstName(event.target.value)
                      }
                      placeholder="First name"
                      type="text"
                      value={firstName}
                    />
                  </FormGroup>
                </div>
                <div style={{ width: "45%" }}>
                  <FormGroup legendText="">
                    <TextInput
                      className="input-name"
                      disabled={false}
                      id="inputLastName"
                      invalid={validationLastName}
                      invalidText={messageValidationLastName}
                      labelText="Last Name"
                      required
                      light={true}
                      onChange={(event) =>
                        this.handleChangeLastName(event.target.value)
                      }
                      placeholder="Last name"
                      type="text"
                      value={lastName}
                    />
                  </FormGroup>
                </div>
              </div>
              <FormGroup legendText="">
                <TextInput
                  disabled={false}
                  invalid={validationEmail}
                  id="inputEmail"
                  invalidText={messageValidationEmail}
                  labelText="Email"
                  required
                  light={true}
                  onChange={(event) =>
                    this.handleChangeEmail(event.target.value)
                  }
                  placeholder="Email"
                  type="text"
                  value={email}
                />
              </FormGroup>
              <FormGroup legendText="">
                <TextInput
                  disabled={false}
                  id="inputPwd"
                  helperText="Password must be at least 8 characters"
                  invalid={validationPassword}
                  invalidText={messageValidationPwd}
                  labelText="Password"
                  placeholder="Password"
                  light={true}
                  onChange={(event) => this.handleChangePwd(event.target.value)}
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                  required
                  type="password"
                  value={password}
                />
              </FormGroup>
              <FormGroup legendText="">
                <TextInput
                  invalid={validationConfirm}
                  id="inputConfirm"
                  invalidText={messageValidationConfirm}
                  labelText="Confirm Password"
                  placeholder="Confirm Password"
                  light={true}
                  onChange={(event) =>
                    this.handleChangeConfirmPwd(event.target.value)
                  }
                  // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                  required
                  type="password"
                  value={confirmPassword}
                />
              </FormGroup>

              <div className="viewBtn">
                <ButtonLoading
                  onClick={this.handleSubmit}
                  disabled={loading}
                  loading={loading ? "yes" : undefined}
                  type="submit"
                  text="Sign Up"
                  renderIcon={UserIdentification32}
                  style={{
                    marginTop: "10px",
                    width: "140px",
                    height: "47px",
                  }}
                />

                <ButtonOutline
                  onClick={() => history.push("/signin")}
                  disabled={false}
                  renderIcon={Reply32}
                  text="Back"
                  style={{ marginTop: "10px" }}
                />
              </div>
            </Form>
          </div>
        </div>
        {!isSignUpSuccessfully && messageSignUp !== "" && (
          <Notification
            status="error"
            message={messageSignUp}
            title="Sign Up Failed"
          />
        )}
        {isSignUpSuccessfully && (
          <Notification status="success" title="Sign Up Successfully" />
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = ({
  user: { loading, isSignUpSuccessfully = "", messageSignUp = "" } = {},
}) => ({
  loading,
  isSignUpSuccessfully,
  messageSignUp,
});

const mapDispatchToProps = (dispatch) => ({
  signUp: (data, history) =>
    dispatch({ type: "USER_SIGNUP", data: { data, history } }),
  updateStateReducer: (data) => dispatch({ type: "UPDATE_STATE", data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
