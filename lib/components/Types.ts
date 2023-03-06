export type Toaster = {
  title: string;
  message: string;
  type: "success" | "error" | "info" | "warning";
};
export type ToastPosition = "top-right" | "top" | "top-left" | "bottom-right" | "bottom" | "bottom-left";
