// loginSlice.js
import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
const token = Cookies.get("access_token");
let username;
let accountType;

let loggedIn;
if (token) {
  loggedIn = true;
  username = Cookies.get("username");
  accountType = Cookies.get("role");
} else {
  loggedIn = false;
  // loggedIn = true;
  username = "";
}

const initialState = {
  username: username,
  password: "",
  loading: false,
  error: null,
  isLoggedIn: loggedIn,
  type: accountType,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUserName(state, action) {
      state.username = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    },
    setType(state, action) {
      state.type = action.payload;
    },
    resetLogin(state) {
      state.username = "";
      state.password = "";
      state.loading = false;
      state.error = null;
      state.isLoggedIn = false;
      state.type = "";
    },
  },
});

export const {
  setUserName,
  setPassword,
  setLoading,
  setError,
  setType,
  setLoggedIn,
  isLoggedIn,
  resetLogin,
} = loginSlice.actions;

export default loginSlice.reducer;
