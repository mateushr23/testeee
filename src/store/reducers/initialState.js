export default {
  auth: {
    token: {},
    credentials: {
      username: "",
      password: "",
    },
    success: false,
  },
  register: {
    data: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    },
    error: {},
    success: false,
  },

  busca: {
    data: {
      text: "",
    },
    error: {},
    success: false,
  },

  loading: {
    open: false,
    msg: "",
  },

  notify: {
    open: false,
    class: "success",
    vertical: "top",
    horizontal: "center",
    time: 100000,
    msg: "",
  },
};
