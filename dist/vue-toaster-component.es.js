var x = Object.defineProperty;
var D = (s, t, e) => t in s ? x(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var d = (s, t, e) => (D(s, typeof t != "symbol" ? t + "" : t, e), e);
import { defineComponent as H, ref as c, computed as C, onMounted as L, onBeforeUnmount as A, render as w, openBlock as m, createBlock as F, Transition as G, unref as b, withCtx as I, withDirectives as N, createElementVNode as v, normalizeClass as R, createElementBlock as f, createCommentVNode as $, toDisplayString as B, vShow as S, h as j } from "vue";
class V {
  constructor(t, e) {
    d(this, "startedAt");
    d(this, "callback");
    d(this, "delay");
    d(this, "timer");
    this.startedAt = Date.now(), this.callback = t, this.delay = e, this.timer = setTimeout(t, e);
  }
  pause() {
    this.stop(), this.delay -= Date.now() - this.startedAt;
  }
  resume() {
    this.stop(), this.startedAt = Date.now(), this.timer = setTimeout(this.callback, this.delay);
  }
  stop() {
    clearTimeout(this.timer);
  }
}
const z = ["src"], Q = ["src"], U = ["src"], J = ["src"], K = { class: "toaster-text" }, W = { class: "body-text-bold" }, X = { class: "fine-print" }, E = /* @__PURE__ */ H({
  __name: "ToasterComponent",
  props: {
    toaster: { default: () => ({
      title: "",
      message: "",
      type: "success"
    }) },
    queue: { type: Boolean, default: !0 },
    duration: { default: 4e3 },
    dismissible: { type: Boolean, default: !0 },
    pauseOnHover: { type: Boolean, default: !0 },
    onClick: null,
    onDismiss: null,
    position: { default: "top-right" }
  },
  setup(s) {
    const t = s, e = {
      TOP_RIGHT: "top-right",
      TOP: "top",
      TOP_LEFT: "top-left",
      BOTTOM_RIGHT: "bottom-right",
      BOTTOM: "bottom",
      BOTTOM_LEFT: "bottom-left"
    }, l = c(!1), n = c(null), r = c(null), i = c(), p = c(), h = c(), k = C(() => {
      switch (t.position) {
        case e.TOP:
        case e.TOP_RIGHT:
        case e.TOP_LEFT:
          return n.value;
        case e.BOTTOM:
        case e.BOTTOM_RIGHT:
        case e.BOTTOM_LEFT:
          return r.value;
        default:
          return n.value;
      }
    }), O = C(() => {
      switch (t.position) {
        case e.TOP:
        case e.TOP_RIGHT:
        case e.TOP_LEFT:
          return {
            enter: "toaster-fade-in-down",
            leave: "toaster-fade-out"
          };
        case e.BOTTOM:
        case e.BOTTOM_RIGHT:
        case e.BOTTOM_LEFT:
          return {
            enter: "toaster-fade-in-up",
            leave: "toaster-fade-out"
          };
        default:
          return {
            enter: "toaster-fade-in-down",
            leave: "toaster-fade-out"
          };
      }
    });
    L(() => {
      M(), y();
    }), A(() => {
      T();
    });
    function M() {
      if (n.value = document.querySelector(".toaster.toaster-top"), r.value = document.querySelector(".toaster.toaster-bottom"), n.value && r.value)
        return;
      n.value || (n.value = document.createElement("div"), n.value.className = "toaster toaster-top"), r.value || (r.value = document.createElement("div"), r.value.className = "toaster toaster-bottom");
      const a = document.body;
      a.appendChild(n.value), a.appendChild(r.value);
    }
    function P() {
      var a, o;
      return t.queue ? n.value && ((a = n.value) == null ? void 0 : a.childElementCount) > 0 || r.value && ((o = r.value) == null ? void 0 : o.childElementCount) > 0 : !1;
    }
    function T(...a) {
      i.value && i.value.stop(), clearTimeout(h.value), l.value = !1, setTimeout(() => {
        var u;
        (u = t.onDismiss) == null || u.apply(null, a);
        const o = p.value;
        o && (w(null, o), _(o));
      }, 150);
    }
    function y() {
      var o, u;
      if (P()) {
        h.value = setTimeout(y, 250);
        return;
      }
      const a = (o = p.value) == null ? void 0 : o.parentElement;
      (u = k.value) == null || u.insertAdjacentElement("afterbegin", p.value), _(a), l.value = !0, t.duration && (i.value = new V(T, t.duration));
    }
    function q(...a) {
      var o;
      t.dismissible && ((o = t.onClick) == null || o.apply(null, a), T());
    }
    function g(a) {
      !t.pauseOnHover || !i.value || (a ? i.value.pause() : i.value.resume());
    }
    function _(a) {
      var o;
      typeof a.remove < "u" ? a.remove() : (o = a.parentNode) == null || o.removeChild(a);
    }
    return (a, o) => (m(), F(G, {
      "enter-active-class": b(O).enter,
      "leave-active-class": b(O).leave
    }, {
      default: I(() => [
        N(v("div", {
          ref_key: "toasterMessage",
          ref: p,
          role: "alert",
          class: R(["toaster-message", [`toaster-position-${s.position}`]]),
          onMouseover: o[0] || (o[0] = (u) => g(!0)),
          onMouseleave: o[1] || (o[1] = (u) => g(!1))
        }, [
          s.toaster.type === "error" ? (m(), f("img", {
            key: 0,
            src: require("@/icons/errorToaster.svg")
          }, null, 8, z)) : s.toaster.type === "success" ? (m(), f("img", {
            key: 1,
            src: require("@/icons/successToaster.svg")
          }, null, 8, Q)) : s.toaster.type === "info" ? (m(), f("img", {
            key: 2,
            src: require("@/icons/infoToaster.svg")
          }, null, 8, U)) : s.toaster.type === "warning" ? (m(), f("img", {
            key: 3,
            src: require("@/icons/warningToaster.svg")
          }, null, 8, J)) : $("", !0),
          v("div", K, [
            v("p", W, B(s.toaster.title), 1),
            v("p", X, B(s.toaster.message), 1)
          ]),
          v("div", {
            class: "close-toaster",
            onClick: q
          })
        ], 34), [
          [S, l.value]
        ])
      ]),
      _: 1
    }, 8, ["enter-active-class", "leave-active-class"]));
  }
});
const Y = (s = {}) => ({
  addToast(t) {
    const l = Object.assign({}, {
      toaster: t
    }, s), n = this.createComponent(E, l, document.body);
    return {
      dismiss: n == null ? void 0 : n.ctx.dismiss
    };
  },
  createComponent(t, e, l, n = {}) {
    const r = j(t, e, n), i = document.createElement("div");
    return i.classList.add("toaster-pending"), l.appendChild(i), w(r, i), r.component;
  }
}), te = {
  install(s, t = {}) {
    const e = Y(t);
    s.config.globalProperties.$toast = e, s.provide("$toast", e), s.component("ToastComponent", E);
  },
  input: "src/main.ts",
  output: {
    dir: "dist",
    format: ["es", "cjs", "umd"],
    exports: "named",
    globals: {
      vue: "Vue"
    }
  }
};
export {
  E as ToastComponent,
  te as default,
  Y as useToaster
};
