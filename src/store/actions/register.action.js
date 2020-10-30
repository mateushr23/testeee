import { Http } from "../../config/globalConfig";
import { changeloading } from "./loading.action";
import { changeNotify } from "./notify.action";
import { setUserToken } from "./auth.action";

export const actionTypes = {
  CHANGE: "CHANGE",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
};

export const changeValue = (payload) => ({
  type: actionTypes.CHANGE,
  payload,
});

export const registerError = (payload) => ({
  type: actionTypes.ERROR,
  payload,
});

export const success = (payload) => ({
  type: actionTypes.SUCCESS,
  payload,
});

export const registerUser = (data) => {
  return (dispatch) => {
    dispatch(
      changeloading({
        open: true,
        msg: "Registrando Usuário",
        time: 100000,
      })
    );
    return Http.post("/api/register", data)
      .then((res) => {
        if (res.status === 200) {
          dispatch(
            changeNotify({
              open: true,
              class: "success",
              msg: "Usuário cadastrado com sucesso.",
              time: 100000,
            })
          );
          setUserToken(res.data.token);
          dispatch(success(true));
        } else {
        }
        dispatch(
          changeloading({
            open: false,
          })
        );
      })
      .catch(() => {
        dispatch(
          changeNotify({
            open: true,
            class: "error",
            msg: "Erro ao registrar!",
            time: 100000,
          })
        );
        dispatch(
          changeloading({
            open: false,
          })
        );
      });
  };
};
