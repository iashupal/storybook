import { toast } from "react-toastify";

export const ShowSuccessMessage = (message: string) => {
  toast.success(message);
};
export const ShowErrorMessage = (message?: string) => {
  toast.error(message ? message : "Sorry, an exception occured.");
};
export const ShowException = (ex: any, message?: string) => {
  console.error(ex);
  if (ex && ex.message) {
    toast.error(ex.message);
  } else {
    ShowErrorMessage(message);
  }
};
export const ShowWarningMessage = (message: string) => {
  toast.warn(message);
};
