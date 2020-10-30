import React, { Component } from "react";
import { connect } from "react-redux";
import { login, changeValue } from "../../store/actions/auth.action";
import { withStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { orange } from "@material-ui/core/colors";
import { brown } from "@material-ui/core/colors";
import Loading from "../../components/loading/Loading";
import Notify from "../../components/notify/Notify";

const ColorButton = withStyles((theme) => ({
  root: {
    color: "#fff",
    backgroundColor: orange[500],
    "&:hover": {
      backgroundColor: orange[700],
    },
  },
}))(Button);
const ColorText = withStyles((theme) => ({
  root: {
    color: "#fff",
    backgroundColor: brown[50],
    "&:hover": {
      backgroundColor: brown[50],
    },
  },
}))(TextField);

const WhiteTextTypography = withStyles((theme) => ({
  root: {
    color: "#fff",
  },
}))(Typography);

export class Login extends Component {
  login = () => {
    const { credentials } = this.props;
    this.props.login(credentials).then(() => {
      if (this.props.success) {
        window.location.replace("/dashboard");
      }
    });
  };
  render() {
    return (
      <div className="Login">
        <Loading />
        <Notify />
        <Container component="main" maxWidth="xs">
          <div className="mt-3 mt-md-5">
            <div className="text-center">
              <WhiteTextTypography variant="h2" color="">
                Chocolates Brasil Cacau
              </WhiteTextTypography>
            </div>
            <div className="mt-4">
              <ColorText
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="username"
                type="email"
                color="primary"
                value={this.props.credentials.username}
                onChange={(text) =>
                  this.props.changeValue({ username: text.target.value })
                }
              />
              <ColorText
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="password"
                label="Senha"
                name="password"
                type="password"
                value={this.props.credentials.password}
                onChange={(text) =>
                  this.props.changeValue({ password: text.target.value })
                }
              />
              <ColorButton
                type="button"
                variant="contained"
                fullWidth
                color="primary"
                size="large"
                className="mb-3 mb-md-4 mt-4"
                onClick={() => this.login()}
              >
                Entrar
              </ColorButton>

              <Link href="./register">
                <ColorButton
                  type="button"
                  fullWidth
                  size="large"
                  variant="contained"
                  className="mt-md-4"
                >
                  Cadastrar
                </ColorButton>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  credentials: state.authReducer.credentials,
  success: state.authReducer.success,
});

const mapDispatchToProps = (dispatch) => ({
  login: (credentials) => dispatch(login(credentials)),
  changeValue: (value) => dispatch(changeValue(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
