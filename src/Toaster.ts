type Toaster = {
  title: string;
  message: string;
  type: "success" | "error" | "info" | "warning";
};
import ToasterMessage from "./ToasterComponent.vue";
import { h, render } from "vue";

export const useToaster = (globalProps = {}) => {
  return {
    addToast(toaster: Toaster) {
      const defaultProps = {
        toaster,
      };

      const propsData = Object.assign({}, defaultProps, globalProps);

      const instance: any = this.createComponent(ToasterMessage, propsData, document.body);
      return {
        dismiss: instance?.ctx.dismiss,
      };
    },
    createComponent(
      component: typeof ToasterMessage,
      props: { toaster: Toaster },
      parentContainer: HTMLElement,
      slots = {}
    ) {
      const vnode = h(component, props, slots);
      const container = document.createElement("div");
      container.classList.add("toaster-pending");
      parentContainer.appendChild(container);
      render(vnode, container);
      return vnode.component;
    },
  };
};
