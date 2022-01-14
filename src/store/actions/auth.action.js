import { callApi, updatUserDetailInApp } from ".";
import { API } from "../../config/index";
import { toaster } from "../../views/util";
export const login = async (data) => {
  const res = await callApi(`${API.LOGIN}`, {
    method: "POST",
    data,
  });
  if (res && res.id) {
    updatUserDetailInApp(res);
  }
  return res;
};

export const signUp = async (data) => {
  const res = await callApi(`${API.SIGN_UP}`, {
    method: "POST",
    data,
  });
  if (res && res.id) {
    toaster.show("Registeration Success !");
    return res;
  }
};

export const updatePassword = async (data) => {
  const res = await callApi(API.UPDATE_PASSWORD, {
    method: "POST",
    data,
  });
  if (res && res.id) {
    toaster.show("Password updated successfully!");
    return res;
  } else {
    toaster.show(res.messageType, toaster.ERROR);
  }
  return res;
};

export const updateIsLoading = () => null;
