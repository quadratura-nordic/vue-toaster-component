type Toaster = {
    title: string;
    message: string;
    type: "success" | "error" | "info" | "warning";
};
import ToasterMessage from "./ToasterComponent.vue";
export declare const useToaster: (globalProps?: {}) => {
    addToast(toaster: Toaster): {
        dismiss: any;
    };
    createComponent(component: typeof ToasterMessage, props: {
        toaster: Toaster;
    }, parentContainer: HTMLElement, slots?: {}): import("vue").ComponentInternalInstance | null;
};
export {};
