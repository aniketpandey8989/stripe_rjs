import { callApi } from ".";
import { API } from "../../config/index";
import { store } from "../configuraStore";
import { Payment } from "../constants";

export const makePayment = async (data) => {
  const res = await callApi(`${API.MAKE_PAYMENT}/`, {
    method: "POST",
    data,
  });
  if (res && res.status) {
    store.dispatch({
      type: Payment.SAVE_PAYMENT_STATUS,
      payload: res.status,
    });
  }
  return res;
};

export const getPaymentHistory = async (data) => {
  const res = await callApi(`${API.PAYMENT_HISTORY}/`, {
    method: "GET",
  });
  if (res) {
    store.dispatch({
      type: Payment.SAVE_PAYMENT_HISTORY,
      payload: res,
    });
  }
  return res;
};
