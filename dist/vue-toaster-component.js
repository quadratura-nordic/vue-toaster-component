var B = Object.defineProperty;
var P = (a, t, s) => t in a ? B(a, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : a[t] = s;
var d = (a, t, s) => (P(a, typeof t != "symbol" ? t + "" : t, s), s);
import { defineComponent as A, ref as c, computed as N, onMounted as H, onBeforeUnmount as G, render as C, openBlock as I, createBlock as w, Transition as L, unref as b, withCtx as R, withDirectives as x, createElementVNode as M, normalizeClass as E, createElementBlock as v, createCommentVNode as _, toDisplayString as h, vShow as S, h as Y } from "vue";
const J = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iMzMiIHZpZXdCb3g9IjAgMCAzMyAzMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYuOTI3NyIgY3k9IjE2Ljg2MzMiIHI9IjE2IiBmaWxsPSIjRkY2NTY1Ii8+CjxwYXRoIGQ9Ik05LjkyNzczIDEwLjM2MzNMMjMuOTI3NyAyNC4zNjMzIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIuNjI1Ii8+CjxwYXRoIGQ9Ik0yMy45Mjc3IDEwLjM2MzNMOS45Mjc3MyAyNC4zNjMzIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIuNjI1Ii8+Cjwvc3ZnPgo=", X = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iMzMiIHZpZXdCb3g9IjAgMCAzMyAzMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYuOTI3NyIgY3k9IjE2LjM2MzMiIHI9IjE2IiBmaWxsPSIjN0NEOTIwIi8+CjxwYXRoIGQ9Ik04LjkyNzczIDE2Ljk0MzlMMTQuODgxMiAyMi4zNjMzTDI0LjkyNzcgMTAuMzYzMyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIzIi8+Cjwvc3ZnPgo=", W = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iMzMiIHZpZXdCb3g9IjAgMCAzMyAzMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYuOTI3NyIgY3k9IjE2Ljg2MzMiIHI9IjE2IiB0cmFuc2Zvcm09InJvdGF0ZSgxODAgMTYuOTI3NyAxNi44NjMzKSIgZmlsbD0iIzFDNjlENCIvPgo8cGF0aCBkPSJNMTYuOTI3NyAyNC4zNjUyTDE2LjkyNzcgMTQuMzY1MiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIzIi8+CjxwYXRoIGQ9Ik0xNi45Mjc3IDguMzY1MjNMMTYuOTI3NyAxMS4zNjUyIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjMiLz4KPC9zdmc+Cg==", U = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iMzMiIHZpZXdCb3g9IjAgMCAzMyAzMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYuOTI3NyIgY3k9IjE2Ljg2MzMiIHI9IjE2IiBmaWxsPSIjRkZDMzRGIi8+CjxwYXRoIGQ9Ik0xNi45Mjc3IDkuMzYzMjhWMTkuMzYzMyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIzIi8+CjxwYXRoIGQ9Ik0xNi45Mjc3IDI1LjM2MzNMMTYuOTI3NyAyMi4zNjMzIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjMiLz4KPC9zdmc+Cg==";
class F {
  constructor(t, s) {
    d(this, "startedAt");
    d(this, "callback");
    d(this, "delay");
    d(this, "timer");
    this.startedAt = Date.now(), this.callback = t, this.delay = s, this.timer = setTimeout(t, s);
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
}, V = { class: "toaster-text" }, ee = { class: "body-text-bold" }, te = { class: "fine-print" }, se = /* @__PURE__ */ A({
  __name: "ToasterComponent",
  props: {
    toaster: { default: () => ({
      title: "",
      message: "",
      type: "success"
    }) },
    queue: { type: Boolean, default: !0 },
    duration: { default: 4e5 },
    dismissible: { type: Boolean, default: !0 },
    pauseOnHover: { type: Boolean, default: !0 },
    onClick: null,
    onDismiss: null,
    position: { default: "top-right" }
  },
  setup(a) {
    const t = a, s = {
      TOP_RIGHT: "top-right",
      TOP: "top",
      TOP_LEFT: "top-left",
      BOTTOM_RIGHT: "bottom-right",
      BOTTOM: "bottom",
      BOTTOM_LEFT: "bottom-left"
    }, r = c(!1), i = c(null), n = c(null), l = c(), m = c(), p = c(), O = N(() => {
      switch (t.position) {
        case s.TOP:
        case s.TOP_RIGHT:
        case s.TOP_LEFT:
          return i.value;
        case s.BOTTOM:
        case s.BOTTOM_RIGHT:
        case s.BOTTOM_LEFT:
          return n.value;
        default:
          return i.value;
      }
    }), T = N(() => {
      switch (t.position) {
        case s.TOP:
        case s.TOP_RIGHT:
        case s.TOP_LEFT:
          return {
            enter: "toaster-fade-in-down",
            leave: "toaster-fade-out"
          };
        case s.BOTTOM:
        case s.BOTTOM_RIGHT:
        case s.BOTTOM_LEFT:
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
    H(() => {
      D(), g();
    }), G(() => {
      y();
    });
    function D() {
      if (i.value = document.querySelector(".toaster.toaster-top"), n.value = document.querySelector(".toaster.toaster-bottom"), i.value && n.value)
        return;
      i.value || (i.value = document.createElement("div"), i.value.className = "toaster toaster-top", z(i.value)), n.value || (n.value = document.createElement("div"), n.value.className = "toaster toaster-bottom", z(n.value));
      const e = document.body;
      e.appendChild(i.value), e.appendChild(n.value);
    }
    function z(e) {
      e.style.position = "fixed", e.style.display = "flex", e.style.top = "0", e.style.bottom = "0", e.style.left = "0", e.style.right = "0", e.style.overflow = "hidden", e.style.zIndex = "9999", e.style.pointerEvents = "none", e.style.padding = "40px";
    }
    function Z() {
      var e, o;
      return t.queue ? i.value && ((e = i.value) == null ? void 0 : e.childElementCount) > 0 || n.value && ((o = n.value) == null ? void 0 : o.childElementCount) > 0 : !1;
    }
    function y(...e) {
      l.value && l.value.stop(), clearTimeout(p.value), r.value = !1, setTimeout(() => {
        var u;
        (u = t.onDismiss) == null || u.apply(null, e);
        const o = m.value;
        o && (C(null, o), f(o));
      }, 150);
    }
    function g() {
      var o, u;
      if (Z()) {
        p.value = setTimeout(g, 250);
        return;
      }
      const e = (o = m.value) == null ? void 0 : o.parentElement;
      (u = O.value) == null || u.insertAdjacentElement("afterbegin", m.value), f(e), r.value = !0, t.duration && (l.value = new F(y, t.duration));
    }
    function k(...e) {
      var o;
      t.dismissible && ((o = t.onClick) == null || o.apply(null, e), y());
    }
    function j(e) {
      !t.pauseOnHover || !l.value || (e ? l.value.pause() : l.value.resume());
    }
    function f(e) {
      var o;
      typeof e.remove < "u" ? e.remove() : (o = e.parentNode) == null || o.removeChild(e);
    }
    return (e, o) => (I(), w(L, {
      "enter-active-class": b(T).enter,
      "leave-active-class": b(T).leave
    }, {
      default: R(() => [
        x(M("div", {
          ref_key: "toasterMessage",
          ref: m,
          role: "alert",
          class: E(["toaster-message", [`toaster-position-${a.position}`]]),
          onMouseover: o[0] || (o[0] = (u) => j(!0)),
          onMouseleave: o[1] || (o[1] = (u) => j(!1))
        }, [
          a.toaster.type === "error" ? (I(), v("img", Q)) : a.toaster.type === "success" ? (I(), v("img", K)) : a.toaster.type === "info" ? (I(), v("img", q)) : a.toaster.type === "warning" ? (I(), v("img", $)) : _("", !0),
          M("div", V, [
            M("p", ee, h(a.toaster.title), 1),
            M("p", te, h(a.toaster.message), 1)
          ]),
          M("div", {
            class: "close-toaster",
            onClick: k
          })
        ], 34), [
          [S, r.value]
        ])
      ]),
      _: 1
    }, 8, ["enter-active-class", "leave-active-class"]));
  }
});
const ie = (a = {}) => ({
  addToast(t) {
    const r = Object.assign({}, {
      toaster: t
    }, a), i = this.createComponent(se, r, document.body);
    return {
      dismiss: i == null ? void 0 : i.ctx.dismiss
    };
  },
  createComponent(t, s, r, i = {}) {
    const n = Y(t, s, i), l = document.createElement("div");
    return l.classList.add("toaster-pending"), r.appendChild(l), C(n, l), n.component;
  }
});
export {
  ie as useToaster
};
