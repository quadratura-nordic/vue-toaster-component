import ToastComponent from "./components/ToasterComponent.vue";
import { useToaster } from "./components/Toaster";
import { App, Plugin } from "vue";

export default {
  install(app: App, options = {}) {
    const instance = useToaster(options);
    app.config.globalProperties.$toast = instance;
    app.provide("$toast", instance);
    app.component("ToastComponent", ToastComponent);
  },
} as Plugin;
export { useToaster, ToastComponent };
