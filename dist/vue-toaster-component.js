var x = Object.defineProperty;
var D = (o, t, e) => t in o ? x(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e;
var d = (o, t, e) => (D(o, typeof t != "symbol" ? t + "" : t, e), e);
import { defineComponent as H, ref as c, computed as C, onMounted as I, onBeforeUnmount as L, render as w, openBlock as m, createBlock as A, Transition as F, unref as B, withCtx as G, withDirectives as N, createElementVNode as v, normalizeClass as R, createElementBlock as f, createCommentVNode as $, toDisplayString as b, vShow as S, h as j } from "vue";
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
const z = ["src"], Q = ["src"], U = ["src"], J = ["src"], K = { class: "toaster-text" }, W = { class: "body-text-bold" }, X = { class: "fine-print" }, Y = /* @__PURE__ */ H({
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
  setup(o) {
    const t = o, e = {
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
    I(() => {
      M(), _();
    }), L(() => {
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
      var a, s;
      return t.queue ? n.value && ((a = n.value) == null ? void 0 : a.childElementCount) > 0 || r.value && ((s = r.value) == null ? void 0 : s.childElementCount) > 0 : !1;
    }
    function T(...a) {
      i.value && i.value.stop(), clearTimeout(h.value), l.value = !1, setTimeout(() => {
        var u;
        (u = t.onDismiss) == null || u.apply(null, a);
        const s = p.value;
        s && (w(null, s), g(s));
      }, 150);
    }
    function _() {
      var s, u;
      if (P()) {
        h.value = setTimeout(_, 250);
        return;
      }
      const a = (s = p.value) == null ? void 0 : s.parentElement;
      (u = k.value) == null || u.insertAdjacentElement("afterbegin", p.value), g(a), l.value = !0, t.duration && (i.value = new V(T, t.duration));
    }
    function q(...a) {
      var s;
      t.dismissible && ((s = t.onClick) == null || s.apply(null, a), T());
    }
    function y(a) {
      !t.pauseOnHover || !i.value || (a ? i.value.pause() : i.value.resume());
    }
    function g(a) {
      var s;
      typeof a.remove < "u" ? a.remove() : (s = a.parentNode) == null || s.removeChild(a);
    }
    return (a, s) => (m(), A(F, {
      "enter-active-class": B(O).enter,
      "leave-active-class": B(O).leave
    }, {
      default: G(() => [
        N(v("div", {
          ref_key: "toasterMessage",
          ref: p,
          role: "alert",
          class: R(["toaster-message", [`toaster-position-${o.position}`]]),
          onMouseover: s[0] || (s[0] = (u) => y(!0)),
          onMouseleave: s[1] || (s[1] = (u) => y(!1))
        }, [
          o.toaster.type === "error" ? (m(), f("img", {
            key: 0,
            src: require("@/icons/errorToaster.svg")
          }, null, 8, z)) : o.toaster.type === "success" ? (m(), f("img", {
            key: 1,
            src: require("@/icons/successToaster.svg")
          }, null, 8, Q)) : o.toaster.type === "info" ? (m(), f("img", {
            key: 2,
            src: require("@/icons/infoToaster.svg")
          }, null, 8, U)) : o.toaster.type === "warning" ? (m(), f("img", {
            key: 3,
            src: require("@/icons/warningToaster.svg")
          }, null, 8, J)) : $("", !0),
          v("div", K, [
            v("p", W, b(o.toaster.title), 1),
            v("p", X, b(o.toaster.message), 1)
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
const Z = (o, t) => {
  const e = o.__vccOpts || o;
  for (const [l, n] of t)
    e[l] = n;
  return e;
}, E = /* @__PURE__ */ Z(Y, [["__scopeId", "data-v-aa1470d1"]]), ee = (o = {}) => ({
  addToast(t) {
    const l = Object.assign({}, {
      toaster: t
    }, o), n = this.createComponent(E, l, document.body);
    return {
      dismiss: n == null ? void 0 : n.ctx.dismiss
    };
  },
  createComponent(t, e, l, n = {}) {
    const r = j(t, e, n), i = document.createElement("div");
    return i.classList.add("toaster-pending"), l.appendChild(i), w(r, i), r.component;
  }
}), se = {
  install(o, t = {}) {
    const e = ee(t);
    o.config.globalProperties.$toast = e, o.provide("$toast", e), o.component("ToastComponent", E);
  }
};
export {
  E as ToastComponent,
  se as default,
  ee as useToaster
};
