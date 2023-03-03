import ToastComponent from "./ToasterComponent.vue";
import { useToaster } from "./Toaster";
import { App, Plugin } from "vue";

export default {
  install(Vue: App, options = {}) {
    const instance = useToaster(options);
    Vue.config.globalProperties.$toast = instance;
    Vue.provide("$toast", instance);
  },
} as Plugin;
export { useToaster, ToastComponent };
