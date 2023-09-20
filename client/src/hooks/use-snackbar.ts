import { useState } from "react";

export const useSnackbar = (initialState = "") => {
  const [message, setMessage] = useState(initialState);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const snackbarHandler = (msg: unknown) => {
    if (typeof msg === "string") {
      setMessage(msg);
      setSnackbarOpen(true);
    }
  };

  const closeSnackbar = () => setSnackbarOpen(false);

  return {
    message,
    snackbarOpen,
    snackbarHandler,
    closeSnackbar,
    setSnackbarOpen,
  };
};
