import { LOGIN, LOGOUT, SET_LOADING, SET_USERDETAILS } from "./user.types";

export const setLogin = (payload) => ({
  type: LOGIN,
  payload,
});

export const setLogout = () => ({
  type: LOGOUT,
});

export const setLoading = (val) => ({
  type: SET_LOADING,
  payload: val,
});

export const setUserDetails = (payload) => ({
  type: SET_USERDETAILS,
  payload,
});
