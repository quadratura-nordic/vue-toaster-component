var k = Object.defineProperty;
var _ = (s, t, e) => t in s ? k(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var d = (s, t, e) => (_(s, typeof t != "symbol" ? t + "" : t, e), e);
import { defineComponent as B, ref as c, computed as f, onMounted as P, onBeforeUnmount as A, render as h, openBlock as I, createBlock as H, Transition as G, unref as N, withCtx as L, withDirectives as R, createElementVNode as M, normalizeClass as w, createElementBlock as v, createCommentVNode as E, toDisplayString as b, vShow as S, h as x } from "vue";
const Y = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iMzMiIHZpZXdCb3g9IjAgMCAzMyAzMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYuOTI3NyIgY3k9IjE2Ljg2MzMiIHI9IjE2IiBmaWxsPSIjRkY2NTY1Ii8+CjxwYXRoIGQ9Ik05LjkyNzczIDEwLjM2MzNMMjMuOTI3NyAyNC4zNjMzIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIuNjI1Ii8+CjxwYXRoIGQ9Ik0yMy45Mjc3IDEwLjM2MzNMOS45Mjc3MyAyNC4zNjMzIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIuNjI1Ii8+Cjwvc3ZnPgo=", J = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iMzMiIHZpZXdCb3g9IjAgMCAzMyAzMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYuOTI3NyIgY3k9IjE2LjM2MzMiIHI9IjE2IiBmaWxsPSIjN0NEOTIwIi8+CjxwYXRoIGQ9Ik04LjkyNzczIDE2Ljk0MzlMMTQuODgxMiAyMi4zNjMzTDI0LjkyNzcgMTAuMzYzMyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIzIi8+Cjwvc3ZnPgo=", X = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iMzMiIHZpZXdCb3g9IjAgMCAzMyAzMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYuOTI3NyIgY3k9IjE2Ljg2MzMiIHI9IjE2IiB0cmFuc2Zvcm09InJvdGF0ZSgxODAgMTYuOTI3NyAxNi44NjMzKSIgZmlsbD0iIzFDNjlENCIvPgo8cGF0aCBkPSJNMTYuOTI3NyAyNC4zNjUyTDE2LjkyNzcgMTQuMzY1MiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIzIi8+CjxwYXRoIGQ9Ik0xNi45Mjc3IDguMzY1MjNMMTYuOTI3NyAxMS4zNjUyIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjMiLz4KPC9zdmc+Cg==", W = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iMzMiIHZpZXdCb3g9IjAgMCAzMyAzMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYuOTI3NyIgY3k9IjE2Ljg2MzMiIHI9IjE2IiBmaWxsPSIjRkZDMzRGIi8+CjxwYXRoIGQ9Ik0xNi45Mjc3IDkuMzYzMjhWMTkuMzYzMyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIzIi8+CjxwYXRoIGQ9Ik0xNi45Mjc3IDI1LjM2MzNMMTYuOTI3NyAyMi4zNjMzIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjMiLz4KPC9zdmc+Cg==";
class U {
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
const F = {
  key: 0,
  src: Y
}, Q = {
  key: 1,
  src: J
}, K = {
  key: 2,
  src: X
}, q = {
  key: 3,
  src: W
}, $ = { class: "toaster-text" }, V = { class: "body-text-bold" }, ee = { class: "fine-print" }, te = /* @__PURE__ */ B({
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
    }, l = c(!1), i = c(null), n = c(null), r = c(), m = c(), p = c(), C = f(() => {
      switch (t.position) {
        case e.TOP:
        case e.TOP_RIGHT:
        case e.TOP_LEFT:
          return i.value;
        case e.BOTTOM:
        case e.BOTTOM_RIGHT:
        case e.BOTTOM_LEFT:
          return n.value;
        default:
          return i.value;
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
    P(() => {
      O(), y();
    }), A(() => {
      T();
    });
    function O() {
      if (i.value = document.querySelector(".toaster.toaster-top"), n.value = document.querySelector(".toaster.toaster-bottom"), i.value && n.value)
        return;
      i.value || (i.value = document.createElement("div"), i.value.className = "toaster toaster-top"), n.value || (n.value = document.createElement("div"), n.value.className = "toaster toaster-bottom");
      const a = document.body;
      a.appendChild(i.value), a.appendChild(n.value);
    }
    function D() {
      var a, o;
      return t.queue ? i.value && ((a = i.value) == null ? void 0 : a.childElementCount) > 0 || n.value && ((o = n.value) == null ? void 0 : o.childElementCount) > 0 : !1;
    }
    function T(...a) {
      r.value && r.value.stop(), clearTimeout(p.value), l.value = !1, setTimeout(() => {
        var u;
        (u = t.onDismiss) == null || u.apply(null, a);
        const o = m.value;
        o && (h(null, o), j(o));
      }, 150);
    }
    function y() {
      var o, u;
      if (D()) {
        p.value = setTimeout(y, 250);
        return;
      }
      const a = (o = m.value) == null ? void 0 : o.parentElement;
      (u = C.value) == null || u.insertAdjacentElement("afterbegin", m.value), j(a), l.value = !0, t.duration && (r.value = new U(T, t.duration));
    }
    function Z(...a) {
      var o;
      t.dismissible && ((o = t.onClick) == null || o.apply(null, a), T());
    }
    function z(a) {
      !t.pauseOnHover || !r.value || (a ? r.value.pause() : r.value.resume());
    }
    function j(a) {
      var o;
      typeof a.remove < "u" ? a.remove() : (o = a.parentNode) == null || o.removeChild(a);
    }
    return (a, o) => (I(), H(G, {
      "enter-active-class": N(g).enter,
      "leave-active-class": N(g).leave
    }, {
      default: L(() => [
        R(M("div", {
          ref_key: "toasterMessage",
          ref: m,
          role: "alert",
          class: w(["toaster-message", [`toaster-position-${s.position}`]]),
          onMouseover: o[0] || (o[0] = (u) => z(!0)),
          onMouseleave: o[1] || (o[1] = (u) => z(!1))
        }, [
          s.toaster.type === "error" ? (I(), v("img", F)) : s.toaster.type === "success" ? (I(), v("img", Q)) : s.toaster.type === "info" ? (I(), v("img", K)) : s.toaster.type === "warning" ? (I(), v("img", q)) : E("", !0),
          M("div", $, [
            M("p", V, b(s.toaster.title), 1),
            M("p", ee, b(s.toaster.message), 1)
          ]),
          M("div", {
            class: "close-toaster",
            onClick: Z
          })
        ], 34), [
          [S, l.value]
        ])
      ]),
      _: 1
    }, 8, ["enter-active-class", "leave-active-class"]));
  }
});
const se = (s, t) => {
  const e = s.__vccOpts || s;
  for (const [l, i] of t)
    e[l] = i;
  return e;
}, oe = /* @__PURE__ */ se(te, [["__scopeId", "data-v-75fe97e8"]]), ne = (s = {}) => ({
  addToast(t) {
    const l = Object.assign({}, {
      toaster: t
    }, s), i = this.createComponent(oe, l, document.body);
    return {
      dismiss: i == null ? void 0 : i.ctx.dismiss
    };
  },
  createComponent(t, e, l, i = {}) {
    const n = x(t, e, i), r = document.createElement("div");
    return r.classList.add("toaster-pending"), l.appendChild(r), h(n, r), n.component;
  }
});
export {
  ne as useToaster
};
