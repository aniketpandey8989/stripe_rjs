import { Payment } from "../constants";

const initialState = {
  payment_status: "",
  paymentList: [],
};

function PaymentReducer(state = initialState, action) {
  switch (action.type) {
    case Payment.SAVE_PAYMENT_STATUS:
      return {
        ...state,
        payment_status: action.payload,
      };
    case Payment.SAVE_PAYMENT_HISTORY:
      return {
        ...state,
        paymentList: action.payload,
      };
    default:
      return state;
  }
}

export default PaymentReducer;
