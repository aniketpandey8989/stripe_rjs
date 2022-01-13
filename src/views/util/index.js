import { toast, Bounce } from "react-toastify";

export const toaster = {
  show(msg, type = "success", config = {}) {
    toast(msg, {
      toastId: config.id || Date.now(),
      type: type,
      transition: Bounce,
      position: "top-right",
      closeButton: false,
      closeOnClick: false,
      autoClose: 4000,
      hideProgressBar: true,
      ...config,
    });
  },

  ERROR: "error",
  SUCCESS: "success",
  INFO: "info",
};
