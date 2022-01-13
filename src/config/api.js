export const SERVER_HOST = process.env.REACT_APP_SERVER_HOST;

const APP_APIS = {
  ROOT: "/",
  AUTH: "/auth",
  LOGIN: "/auth/login",
  FORGOT_PASSWORD: "/auth/forgotPassword",
  GET_EMAIL_BY_TOKEN: "/auth/getEmailByToken",
  UPDATE_PASSWORD: "/auth/updatePassword",
  SIGN_UP: "/auth/register",
  PAYMENT: "/payment",
};

Object.keys(APP_APIS).map((key) => {
  APP_APIS[key] = `${SERVER_HOST}/api${APP_APIS[key]}`;
});

export const API = { ...APP_APIS };
