import { Http } from "../../config/globalConfig";
import { changeloading } from "./loading.action";
import { changeNotify } from "./notify.action";

export const actionTypes = {
  GET_TOKEN: "GET_TOKEN",
  LOGOUT: "LOGOUT",
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
  CHANGE: "CHANGE",
};

export const getToken = (token) => ({
  type: actionTypes.GET_TOKEN,
  token,
});

export const removeToken = () => ({
  type: actionTypes.LOGOUT,
});

export const loginSuccess = (bool) => ({
  type: actionTypes.SUCCESS,
  bool,
});

export const loginError = (error) => ({
  type: actionTypes.ERROR,
  error,
});

export const changeValue = (payload) => ({
  type: actionTypes.CHANGE,
  payload,
});

export const loading = (bool, msg = null) => ({
  type: actionTypes.LOADING,
  isloading: {
    active: bool,
    msg: msg,
  },
});

export const setUserToken = (token) => (dispatch) => {
  localStorage.setItem("access_token", token);
  dispatch(loading(false));
  dispatch(loginSuccess(true));
};

export const login = (credentials) => {
  return (dispatch) => {
    dispatch(
      changeloading({
        open: true,
        msg: "Autenticando...",
      })
    );
    return Http.post("/api/login", {
      email: credentials.username,
      password: credentials.password,
    })
      .then((res) => {
        dispatch(
          changeloading({
            open: false,
            msg: "",
          })
        );
        if (typeof res !== "undefined") {
          dispatch(setUserToken(res.data.token));
        }
      })
      .catch((error) => {
        dispatch(
          changeloading({
            open: false,
            msg: "",
          })
        );
        if (error.response) {
          if (error.response.status === 401 || error.response.status === 400) {
            dispatch(
              changeNotify({
                open: true,
                msg: "E-mail ou senha incorretos",
                class: "error",
              })
            );
          }
        } else {
          dispatch(
            changeNotify({
              open: true,
              msg: "Erro ao efetuar login",
              class: "error",
            })
          );
        }
      });
  };
};
