<template>
  <transition :enter-active-class="transition.enter" :leave-active-class="transition.leave">
    <div
      v-show="isActive"
      ref="toasterMessage"
      role="alert"
      class="toaster-message"
      @mouseover="toggleTimer(true)"
      :class="[`toaster-position-${position}`]"
      @mouseleave="toggleTimer(false)"
    >
      <img src="./icons/errorToaster.svg" v-if="toaster.type === 'error'" />
      <img src="./icons/successToaster.svg" v-else-if="toaster.type === 'success'" />
      <img src="./icons/infoToaster.svg" v-else-if="toaster.type === 'info'" />
      <img src="./icons/warningToaster.svg" v-else-if="toaster.type === 'warning'" />
      <div class="toaster-text">
        <p class="body-text-bold">{{ toaster.title }}</p>
        <p class="fine-print">{{ toaster.message }}</p>
      </div>
      <div class="close-toaster" @click="whenClicked"></div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { defineProps, computed, ref, onMounted, render, withDefaults, onBeforeUnmount } from "vue";
import Timer from "./Timer";

type Toaster = {
  title: string;
  message: string;
  type: "success" | "error" | "info" | "warning";
};
type ToastPosition = "top-right" | "top" | "top-left" | "bottom-right" | "bottom" | "bottom-left";

const Positions = {
  TOP_RIGHT: "top-right",
  TOP: "top",
  TOP_LEFT: "top-left",
  BOTTOM_RIGHT: "bottom-right",
  BOTTOM: "bottom",
  BOTTOM_LEFT: "bottom-left",
};

const props = withDefaults(
  defineProps<{
    toaster?: Toaster;
    queue?: boolean;
    duration?: number;
    dismissible?: boolean;
    pauseOnHover?: boolean;
    onClick?: (...args: unknown[]) => void;
    onDismiss?: (...args: unknown[]) => void;
    position?: ToastPosition;
  }>(),
  {
    duration: 4000,
    // duration: 400000,
    dismissible: true,
    pauseOnHover: true,
    position: "top-right",
    toaster: () => ({
      title: "",
      message: "",
      type: "success",
    }),
    queue: true,
  }
);

const isActive = ref(false);
const parentTop = ref<HTMLDivElement | null>(null);
const parentBottom = ref<HTMLDivElement | null>(null);
const timer = ref<Timer>();
const toasterMessage = ref<HTMLDivElement>();
const queueTimer = ref();

const correctParent = computed(() => {
  switch (props.position) {
    case Positions.TOP:
    case Positions.TOP_RIGHT:
    case Positions.TOP_LEFT:
      return parentTop.value;
    case Positions.BOTTOM:
    case Positions.BOTTOM_RIGHT:
    case Positions.BOTTOM_LEFT:
      return parentBottom.value;
    default:
      return parentTop.value;
  }
});

const transition = computed(() => {
  switch (props.position) {
    case Positions.TOP:
    case Positions.TOP_RIGHT:
    case Positions.TOP_LEFT:
      return {
        enter: "toaster-fade-in-down",
        leave: "toaster-fade-out",
      };
    case Positions.BOTTOM:
    case Positions.BOTTOM_RIGHT:
    case Positions.BOTTOM_LEFT:
      return {
        enter: "toaster-fade-in-up",
        leave: "toaster-fade-out",
      };
    default:
      return {
        enter: "toaster-fade-in-down",
        leave: "toaster-fade-out",
      };
  }
});

onMounted(() => {
  setupContainer();
  showNotice();
});

onBeforeUnmount(() => {
  dismiss();
});

function setupContainer() {
  parentTop.value = document.querySelector(".toaster.toaster-top");
  parentBottom.value = document.querySelector(".toaster.toaster-bottom");
  // No need to create them, they already exists
  if (parentTop.value && parentBottom.value) return;
  if (!parentTop.value) {
    parentTop.value = document.createElement("div");
    parentTop.value.className = "toaster toaster-top";
  }
  if (!parentBottom.value) {
    parentBottom.value = document.createElement("div");
    parentBottom.value.className = "toaster toaster-bottom";
  }
  const container = document.body;
  container.appendChild(parentTop.value);
  container.appendChild(parentBottom.value);
}

function shouldQueue() {
  if (!props.queue) return false;
  return (
    (parentTop.value && parentTop.value?.childElementCount > 0) ||
    (parentBottom.value && parentBottom.value?.childElementCount > 0)
  );
}

function dismiss(...args: unknown[]) {
  if (timer.value) timer.value.stop();
  clearTimeout(queueTimer.value);
  isActive.value = false;
  // Timeout for the animation complete before destroying
  setTimeout(() => {
    props.onDismiss?.apply(null, args);
    const wrapper = toasterMessage.value;
    // unmount the component
    if (!wrapper) return;
    render(null, wrapper);
    removeElement(wrapper);
  }, 150);
}
function showNotice() {
  if (shouldQueue()) {
    // Call recursively if it should queue
    queueTimer.value = setTimeout(showNotice, 250);
    return;
  }
  const wrapper = toasterMessage.value?.parentElement;
  correctParent.value?.insertAdjacentElement("afterbegin", toasterMessage.value as HTMLDivElement);
  removeElement(wrapper as HTMLDivElement);
  isActive.value = true;
  if (props.duration) {
    timer.value = new Timer(dismiss, props.duration);
  }
}
function whenClicked(...args: unknown[]) {
  if (!props.dismissible) return;
  props.onClick?.apply(null, args);
  dismiss();
}
function toggleTimer(newVal: boolean) {
  if (!props.pauseOnHover || !timer.value) return;
  newVal ? timer.value.pause() : timer.value.resume();
}

function removeElement(el: HTMLElement) {
  if (typeof el.remove !== "undefined") {
    el.remove();
  } else {
    el.parentNode?.removeChild(el);
  }
}
</script>

<style lang="scss" scoped>
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.toaster-fade-out {
  animation-name: fadeOut;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

.toaster-fade-in-down {
  animation-name: fadeInDown;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

.toaster-fade-in-up {
  animation-name: fadeInUp;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 150ms ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.toaster {
  position: fixed;
  display: flex;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  z-index: 1052;
  pointer-events: none;
  padding: 40px;

  .toaster-message {
    border-radius: 8px;
    padding: 10px;
    padding-left: 20px;
    animation-duration: 150ms;
    background-color: #fff;
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.15);
    pointer-events: auto;
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;
    column-gap: 20px;
    width: 320px;
    max-width: 90%;
    .toaster-text {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
      flex-grow: 1;
    }
    .close-toaster {
      cursor: pointer;
      margin-bottom: auto;
      width: 13px;
      height: 13px;
      position: relative;
      flex-shrink: 0;
      &:before,
      &::after {
        position: absolute;
        content: "";
        width: 100%;
        height: 1px;
        background-color: #000;
        top: 5px;
      }

      &::before {
        transform: rotate(45deg);
      }

      &::after {
        transform: rotate(-45deg);
      }
      &:hover {
        opacity: 0.7;
      }
    }

    &.toaster-position-top,
    &.toaster-position-bottom {
      align-self: center;
    }

    &.toaster-position-top-right,
    &.toaster-position-bottom-right {
      align-self: flex-end;
    }

    &.toaster-position-top-left,
    &.toaster-position-bottom-left {
      align-self: flex-start;
    }
  }

  // Notice container positions
  &.toaster-top {
    flex-direction: column;
  }

  &.toaster-bottom {
    flex-direction: column-reverse;
  }

  &.toaster-custom-parent {
    position: absolute;
  }

  @media screen and (max-width: 768px) {
    padding: 20px;
    position: fixed !important;
  }
}
</style>
