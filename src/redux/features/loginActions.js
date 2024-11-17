import axios from "axios";
import {
  setLoading,
  setLoggedIn,
  resetLogin,
  setUserName,
  setType,
} from "./loginSlice";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { jwtDecode } from "jwt-decode";
import apiurl from "../../apiurl/apiurl";

export const loginUser = (credentials) => async (dispatch) => {
  dispatch(setLoading(true));

  try {
    const result = await axios.post(
      `${apiurl.mainUrl}/auth/login-admin`,
      credentials
    );
    if (result.data.success) {
      const response = result.data;
      dispatch(setLoggedIn(true));
      Cookies.set("access_token", response?.data?.accessToken);
      Cookies.set("refresh_token", response?.data?.refreshToken);
      Cookies.set("username", response?.data?.username);
      Cookies.set("role", response?.data?.role);
      toast.success("Login Successful");
    } else {
      toast.error("Login failed: " + response.data.message);
    }
  } catch (error) {
    if (error.response) {
      toast.error("Login failed: " + error.response.data.message);
    } else {
      toast.error("Network error: " + error.message);
    }
  } finally {
    dispatch(setLoading(false));
  }
};

export const logoutUser = () => (dispatch) => {
  dispatch(resetLogin());
  Cookies.remove("access_token");
  Cookies.remove("username");
  Cookies.remove("role");
  Cookies.remove("refresh_token");
};
