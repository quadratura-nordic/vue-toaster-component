import { Toaster, ToastPosition } from "./Types";
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    toaster?: Toaster | undefined;
    queue?: boolean | undefined;
    duration?: number | undefined;
    dismissible?: boolean | undefined;
    pauseOnHover?: boolean | undefined;
    onClick?: ((...args: unknown[]) => void) | undefined;
    onDismiss?: ((...args: unknown[]) => void) | undefined;
    position?: ToastPosition | undefined;
}>, {
    duration: number;
    dismissible: boolean;
    pauseOnHover: boolean;
    position: string;
    toaster: () => {
        title: string;
        message: string;
        type: string;
    };
    queue: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    toaster?: Toaster | undefined;
    queue?: boolean | undefined;
    duration?: number | undefined;
    dismissible?: boolean | undefined;
    pauseOnHover?: boolean | undefined;
    onClick?: ((...args: unknown[]) => void) | undefined;
    onDismiss?: ((...args: unknown[]) => void) | undefined;
    position?: ToastPosition | undefined;
}>, {
    duration: number;
    dismissible: boolean;
    pauseOnHover: boolean;
    position: string;
    toaster: () => {
        title: string;
        message: string;
        type: string;
    };
    queue: boolean;
}>>>, {
    toaster: Toaster;
    queue: boolean;
    duration: number;
    dismissible: boolean;
    pauseOnHover: boolean;
    position: ToastPosition;
}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};
