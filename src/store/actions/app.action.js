import axios from "axios";
import { toaster } from "../../views/util";
import { store } from "../configuraStore";
import { App } from "../constants";

export const setAxiosCommonHeader = (key, value) => {
  axios.defaults.headers.common[key] = value;
};

export const removeAxiosCommonHeader = (key) => {
  delete axios.defaults.headers.common[key];
};

export const updatUserDetailInApp = (userDetails) => {
  setAxiosCommonHeader("token", userDetails.token);
  store.dispatch({
    type: App.UPDATE_USER_DETAILS,
    payload: userDetails,
  });
  localStorage.setItem("userDetails", JSON.stringify(userDetails));
};

export const removeUserDetailsFromApp = () => {
  removeAxiosCommonHeader("token");
  store.dispatch({
    type: App.UPDATE_USER_DETAILS,
    payload: {},
  });
  localStorage.removeItem("userDetails");
};

export const callApi = async (URL, options = {}) => {      
  try {
    const token = JSON.parse(localStorage.getItem('userDetails'))?.token
    const res = await axios({ 
      url: URL,
      method: options.method || "GET",
      ...options,
      headers : { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        ...options?.headers,
        token
      },
    });
    const data = res?.data;
    if (data.apiMessage && data.messageType) {
      toaster.show(data.apiMessage, data.messageType);
    }
    return data;
  } catch (err) {
    if (err?.response?.status === 401) {
      toaster.show("Session Expired Please Re-Login!",toaster.ERROR);
      removeUserDetailsFromApp();
    } else {
      toaster.show(
        "Something went wrong! Please try again later.",
        toaster.ERROR
      );
    }
  } 
};
