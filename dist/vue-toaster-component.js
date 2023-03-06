var _ = Object.defineProperty;
var B = (o, t, e) => t in o ? _(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e;
var d = (o, t, e) => (B(o, typeof t != "symbol" ? t + "" : t, e), e);
import { defineComponent as P, ref as u, computed as f, onMounted as A, onBeforeUnmount as H, render as C, openBlock as I, createBlock as G, Transition as L, unref as N, withCtx as R, withDirectives as w, createElementVNode as M, normalizeClass as E, createElementBlock as v, createCommentVNode as S, toDisplayString as b, vShow as x, h as Y } from "vue";
const J = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iMzMiIHZpZXdCb3g9IjAgMCAzMyAzMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYuOTI3NyIgY3k9IjE2Ljg2MzMiIHI9IjE2IiBmaWxsPSIjRkY2NTY1Ii8+CjxwYXRoIGQ9Ik05LjkyNzczIDEwLjM2MzNMMjMuOTI3NyAyNC4zNjMzIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIuNjI1Ii8+CjxwYXRoIGQ9Ik0yMy45Mjc3IDEwLjM2MzNMOS45Mjc3MyAyNC4zNjMzIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIuNjI1Ii8+Cjwvc3ZnPgo=", X = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iMzMiIHZpZXdCb3g9IjAgMCAzMyAzMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYuOTI3NyIgY3k9IjE2LjM2MzMiIHI9IjE2IiBmaWxsPSIjN0NEOTIwIi8+CjxwYXRoIGQ9Ik04LjkyNzczIDE2Ljk0MzlMMTQuODgxMiAyMi4zNjMzTDI0LjkyNzcgMTAuMzYzMyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIzIi8+Cjwvc3ZnPgo=", W = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iMzMiIHZpZXdCb3g9IjAgMCAzMyAzMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYuOTI3NyIgY3k9IjE2Ljg2MzMiIHI9IjE2IiB0cmFuc2Zvcm09InJvdGF0ZSgxODAgMTYuOTI3NyAxNi44NjMzKSIgZmlsbD0iIzFDNjlENCIvPgo8cGF0aCBkPSJNMTYuOTI3NyAyNC4zNjUyTDE2LjkyNzcgMTQuMzY1MiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIzIi8+CjxwYXRoIGQ9Ik0xNi45Mjc3IDguMzY1MjNMMTYuOTI3NyAxMS4zNjUyIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjMiLz4KPC9zdmc+Cg==", U = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iMzMiIHZpZXdCb3g9IjAgMCAzMyAzMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYuOTI3NyIgY3k9IjE2Ljg2MzMiIHI9IjE2IiBmaWxsPSIjRkZDMzRGIi8+CjxwYXRoIGQ9Ik0xNi45Mjc3IDkuMzYzMjhWMTkuMzYzMyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIzIi8+CjxwYXRoIGQ9Ik0xNi45Mjc3IDI1LjM2MzNMMTYuOTI3NyAyMi4zNjMzIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjMiLz4KPC9zdmc+Cg==";
class F {
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
const Q = {
  key: 0,
  src: J
}, K = {
  key: 1,
  src: X
}, q = {
  key: 2,
  src: W
}, $ = {
  key: 3,
  src: U
}, V = { class: "toaster-text" }, ee = { class: "body-text-bold" }, te = { class: "fine-print" }, oe = /* @__PURE__ */ P({
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
    }, r = u(!1), n = u(null), i = u(null), l = u(), m = u(), p = u(), O = f(() => {
      switch (t.position) {
        case e.TOP:
        case e.TOP_RIGHT:
        case e.TOP_LEFT:
          return n.value;
        case e.BOTTOM:
        case e.BOTTOM_RIGHT:
        case e.BOTTOM_LEFT:
          return i.value;
        default:
          return n.value;
      }
    }), g = f(() => {
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
    A(() => {
      D(), y();
    }), H(() => {
      T();
    });
    function D() {
      if (n.value = document.querySelector(".toaster.toaster-top"), i.value = document.querySelector(".toaster.toaster-bottom"), n.value && i.value)
        return;
      n.value || (n.value = document.createElement("div"), n.value.className = "toaster toaster-top"), i.value || (i.value = document.createElement("div"), i.value.className = "toaster toaster-bottom");
      const a = document.body;
      a.appendChild(n.value), a.appendChild(i.value);
    }
    function Z() {
      var a, s;
      return t.queue ? n.value && ((a = n.value) == null ? void 0 : a.childElementCount) > 0 || i.value && ((s = i.value) == null ? void 0 : s.childElementCount) > 0 : !1;
    }
    function T(...a) {
      l.value && l.value.stop(), clearTimeout(p.value), r.value = !1, setTimeout(() => {
        var c;
        (c = t.onDismiss) == null || c.apply(null, a);
        const s = m.value;
        s && (C(null, s), j(s));
      }, 150);
    }
    function y() {
      var s, c;
      if (Z()) {
        p.value = setTimeout(y, 250);
        return;
      }
      const a = (s = m.value) == null ? void 0 : s.parentElement;
      (c = O.value) == null || c.insertAdjacentElement("afterbegin", m.value), j(a), r.value = !0, t.duration && (l.value = new F(T, t.duration));
    }
    function k(...a) {
      var s;
      t.dismissible && ((s = t.onClick) == null || s.apply(null, a), T());
    }
    function z(a) {
      !t.pauseOnHover || !l.value || (a ? l.value.pause() : l.value.resume());
    }
    function j(a) {
      var s;
      typeof a.remove < "u" ? a.remove() : (s = a.parentNode) == null || s.removeChild(a);
    }
    return (a, s) => (I(), G(L, {
      "enter-active-class": N(g).enter,
      "leave-active-class": N(g).leave
    }, {
      default: R(() => [
        w(M("div", {
          ref_key: "toasterMessage",
          ref: m,
          role: "alert",
          class: E(["toaster-message", [`toaster-position-${o.position}`]]),
          onMouseover: s[0] || (s[0] = (c) => z(!0)),
          onMouseleave: s[1] || (s[1] = (c) => z(!1))
        }, [
          o.toaster.type === "error" ? (I(), v("img", Q)) : o.toaster.type === "success" ? (I(), v("img", K)) : o.toaster.type === "info" ? (I(), v("img", q)) : o.toaster.type === "warning" ? (I(), v("img", $)) : S("", !0),
          M("div", V, [
            M("p", ee, b(o.toaster.title), 1),
            M("p", te, b(o.toaster.message), 1)
          ]),
          M("div", {
            class: "close-toaster",
            onClick: k
          })
        ], 34), [
          [x, r.value]
        ])
      ]),
      _: 1
    }, 8, ["enter-active-class", "leave-active-class"]));
  }
});
const se = (o, t) => {
  const e = o.__vccOpts || o;
  for (const [r, n] of t)
    e[r] = n;
  return e;
}, h = /* @__PURE__ */ se(oe, [["__scopeId", "data-v-9c9f4683"]]), ae = (o = {}) => ({
  addToast(t) {
    const r = Object.assign({}, {
      toaster: t
    }, o), n = this.createComponent(h, r, document.body);
    return {
      dismiss: n == null ? void 0 : n.ctx.dismiss
    };
  },
  createComponent(t, e, r, n = {}) {
    const i = Y(t, e, n), l = document.createElement("div");
    return l.classList.add("toaster-pending"), r.appendChild(l), C(i, l), i.component;
  }
}), le = {
  install(o, t = {}) {
    const e = ae(t);
    o.config.globalProperties.$toast = e, o.provide("$toast", e), o.component("ToastComponent", h);
  }
};
export {
  h as ToastComponent,
  le as default,
  ae as useToaster
};
