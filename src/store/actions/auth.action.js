import { callApi, updatUserDetailInApp } from ".";
import { API } from "../../config/index";
import { toaster } from "../../views/util";
export const login = async (data) => {
  const res = await callApi(`${API.AUTH}/login`, {
    method: "POST",
    data,
  });

  if (res && res.id) {
    updatUserDetailInApp(res);
  }

  return res;
};

export const signUp = async (data) => {
  const res = await callApi(`${API.AUTH}/register`, {
    method: "POST",
    data,
  });
  if (res && res.id) {
    toaster.show("Registeration Success !");
    return res;
  }
};

export const emailVerification = async (token) => {
  const res = await callApi(`${API.EMAIL_VERIFICATION}/${token}`, {
    method: "POST",
  });
  return res;
};

export const forgotPassword = async (data) => {
  const res = await callApi(API.FORGOT_PASSWORD, {
    method: "POST",
    data,
  });
  if (res && res.id) {
    toaster.show("Password update request submited!");
    return res;
  }
  return res;
};

export const updatePassword = async (data) => {
  const res = await callApi(API.UPDATE_PASSWORD, {
    method: "POST",
    data,
  });

  if (res && res.id) {
    toaster.show("Password updated successfully!");
    return res;
  }

  return res;
};

export const getEmailByToken = async (token) => {
  const res = await callApi(`${API.GET_EMAIL_BY_TOKEN}/${token}`, {
    method: "POST",
  });
  return res;
};

export const updateIsLoading = () => null;
