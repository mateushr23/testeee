import React, { Component } from "react";
import { connect } from "react-redux";
import { changeValue, registerUser } from "../../store/actions/register.action";
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

export class Register extends Component {
  register = () => {
    this.props.registerUser(this.props.data).then(() => {
      if (this.props.success) {
        window.location.replace('http://localhost:3000/');
      }
    });
  };

  render() {
    return (
      <div className ="Login">
        <Loading />
        <Notify />
        <Container component="main" maxWidth="xs">
          <div className="mt-3 mt-md-5">
            <div className="text-center">
              <WhiteTextTypography variant="h2" color="white">
                Crie a sua conta
              </WhiteTextTypography>
            </div>
            <div className="mt-4">
              <ColorText
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="First Name"
                name="username"
                type="text"
                value={this.props.data.first_name}
                onChange={(text) =>
                  this.props.changeValue({ first_name: text.target.value })
                }
              />
              <ColorText
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Last Name"
                name="username"
                type="text"
                value={this.props.data.last_name}
                onChange={(text) =>
                  this.props.changeValue({ last_name: text.target.value })
                }
              />
              <ColorText
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="username"
                type="email"
                value={this.props.data.email}
                onChange={(text) =>
                  this.props.changeValue({ email: text.target.value })
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
                value={this.props.data.password}
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
                onClick={() => this.register()}
              >
                Cadastrar
              </ColorButton>
              <Link
                href={"./login"}
                className="mt-4"
                color="secondary"
                variant="body2"
              >
                <ColorButton
                  type="button"
                  variant="contained"
                  fullWidth
                  color="primary"
                  size="large"
                  className="mb-3 mb-md-4 mt-4"
                  onClick={() => this.register()}
                >
                  Fazer login
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
  data: state.registerReducer.data,
  success: state.registerReducer.success,
  error: state.registerReducer.error,
});

const mapDispatchToProps = (dispatch) => ({
  changeValue: (value) => dispatch(changeValue(value)),
  registerUser: (data) => dispatch(registerUser(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
