import Axios from "axios";

export const rootUrl = "https://reqres.in";

export const Http = Axios.create({
  baseURL: rootUrl,
});
