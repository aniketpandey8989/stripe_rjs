// export const SERVER_HOST = process.env.REACT_APP_SERVER_HOST;
export const SERVER_HOST = "http://localhost:8000";

const APP_APIS = {
  LOGIN: "/auth/login",
  SIGN_UP: "/auth/register",
  UPDATE_PASSWORD: "/auth/updatePassword",
  MAKE_PAYMENT: "/payment/makePayment",
  PAYMENT_HISTORY: "/payment/getPaymentHistory"
};

Object.keys(APP_APIS).map((key) => {
  APP_APIS[key] = `${SERVER_HOST}/api${APP_APIS[key]}`;
  return key;
});

export const API = { ...APP_APIS };
