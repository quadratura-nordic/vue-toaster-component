declare global {
  interface Window {
    Vue: any;
  }
}

import ToastComponent from "./ToasterComponent.vue";
import { useToaster } from "./Toaster";
import { App } from "vue";

const ToastPlugin = {
  install: (app: App, options = {}) => {
    const instance = useToaster(options);
    app.config.globalProperties.$toast = instance;
    app.provide("$toast", instance);
  },
};

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(ToastPlugin);
}

export default ToastPlugin;
export { useToaster, ToastPlugin, ToastComponent };
