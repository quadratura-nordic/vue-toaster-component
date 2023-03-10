(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('*{margin:0;padding:0;box-sizing:border-box}@keyframes fadeOut{0%{opacity:1}to{opacity:0}}.toaster-fade-out{animation-name:fadeOut}@keyframes fadeInDown{0%{opacity:0;transform:translate3d(0,-100%,0)}to{opacity:1;transform:none}}.toaster-fade-in-down{animation-name:fadeInDown}@keyframes fadeInUp{0%{opacity:0;transform:translate3d(0,100%,0)}to{opacity:1;transform:none}}.toaster-fade-in-up{animation-name:fadeInUp}.fade-enter-active,.fade-leave-active{transition:opacity .15s ease-out}.fade-enter,.fade-leave-to{opacity:0}.toaster{--black-color: #000;--white-color: #fff;--secondary-color: #8d96a8;position:fixed;display:flex;top:0;bottom:0;left:0;right:0;overflow:hidden;z-index:9999;pointer-events:none;padding:40px}@media screen and (max-width: 768px){.toaster{padding:20px}}.toaster .toaster-message{border-radius:8px;padding:10px 10px 10px 20px;animation-duration:.15s;background-color:var(--white-color);box-shadow:0 0 50px #00000026;pointer-events:auto;display:inline-flex;justify-content:flex-start;align-items:center;column-gap:20px;min-width:320px;max-width:75%;width:auto}.toaster .toaster-message .body-text-bold{font-weight:600;font-size:15px;line-height:22px;color:var(--black-color)}.toaster .toaster-message .fine-print{font-weight:400;font-size:12px;line-height:15px;color:var(--secondary-color)}.toaster .toaster-message.toaster-position-top,.toaster .toaster-message.toaster-position-bottom{align-self:center}.toaster .toaster-message.toaster-position-top-right,.toaster .toaster-message.toaster-position-bottom-right{align-self:flex-end}.toaster .toaster-message.toaster-position-top-left,.toaster .toaster-message.toaster-position-bottom-left{align-self:flex-start}.toaster .toaster-message .toaster-text{display:flex;align-items:flex-start;justify-content:flex-start;flex-direction:column;flex-grow:1}.toaster .toaster-message .close-toaster{cursor:pointer;margin-bottom:auto;width:13px;height:13px;position:relative;flex-shrink:0}.toaster .toaster-message .close-toaster:before,.toaster .toaster-message .close-toaster:after{position:absolute;content:"";width:100%;height:1px;background-color:var(--black-color);top:5px}.toaster .toaster-message .close-toaster:before{transform:rotate(45deg)}.toaster .toaster-message .close-toaster:after{transform:rotate(-45deg)}.toaster .toaster-message .close-toaster:hover{opacity:.7}.toaster.toaster-top{flex-direction:column}.toaster.toaster-bottom{flex-direction:column-reverse}.toaster.toaster-custom-parent{position:absolute}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
var k = Object.defineProperty;
var B = (o, e, t) => e in o ? k(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var d = (o, e, t) => (B(o, typeof e != "symbol" ? e + "" : e, t), t);
import { defineComponent as P, ref as c, computed as N, onMounted as A, onBeforeUnmount as H, render as h, openBlock as I, createBlock as G, Transition as L, unref as f, withCtx as R, withDirectives as w, createElementVNode as M, normalizeClass as _, createElementBlock as v, createCommentVNode as E, toDisplayString as b, vShow as S, h as x } from "vue";
const Y = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iMzMiIHZpZXdCb3g9IjAgMCAzMyAzMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYuOTI3NyIgY3k9IjE2Ljg2MzMiIHI9IjE2IiBmaWxsPSIjRkY2NTY1Ii8+CjxwYXRoIGQ9Ik05LjkyNzczIDEwLjM2MzNMMjMuOTI3NyAyNC4zNjMzIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIuNjI1Ii8+CjxwYXRoIGQ9Ik0yMy45Mjc3IDEwLjM2MzNMOS45Mjc3MyAyNC4zNjMzIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIuNjI1Ii8+Cjwvc3ZnPgo=", J = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iMzMiIHZpZXdCb3g9IjAgMCAzMyAzMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYuOTI3NyIgY3k9IjE2LjM2MzMiIHI9IjE2IiBmaWxsPSIjN0NEOTIwIi8+CjxwYXRoIGQ9Ik04LjkyNzczIDE2Ljk0MzlMMTQuODgxMiAyMi4zNjMzTDI0LjkyNzcgMTAuMzYzMyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIzIi8+Cjwvc3ZnPgo=", X = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iMzMiIHZpZXdCb3g9IjAgMCAzMyAzMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYuOTI3NyIgY3k9IjE2Ljg2MzMiIHI9IjE2IiB0cmFuc2Zvcm09InJvdGF0ZSgxODAgMTYuOTI3NyAxNi44NjMzKSIgZmlsbD0iIzFDNjlENCIvPgo8cGF0aCBkPSJNMTYuOTI3NyAyNC4zNjUyTDE2LjkyNzcgMTQuMzY1MiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIzIi8+CjxwYXRoIGQ9Ik0xNi45Mjc3IDguMzY1MjNMMTYuOTI3NyAxMS4zNjUyIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjMiLz4KPC9zdmc+Cg==", W = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iMzMiIHZpZXdCb3g9IjAgMCAzMyAzMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYuOTI3NyIgY3k9IjE2Ljg2MzMiIHI9IjE2IiBmaWxsPSIjRkZDMzRGIi8+CjxwYXRoIGQ9Ik0xNi45Mjc3IDkuMzYzMjhWMTkuMzYzMyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIzIi8+CjxwYXRoIGQ9Ik0xNi45Mjc3IDI1LjM2MzNMMTYuOTI3NyAyMi4zNjMzIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjMiLz4KPC9zdmc+Cg==";
class U {
  constructor(e, t) {
    d(this, "startedAt");
    d(this, "callback");
    d(this, "delay");
    d(this, "timer");
    this.startedAt = Date.now(), this.callback = e, this.delay = t, this.timer = setTimeout(e, t);
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
}, $ = { class: "toaster-text" }, V = { class: "body-text-bold" }, ee = { class: "fine-print" }, te = /* @__PURE__ */ P({
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
    const e = o, t = {
      TOP_RIGHT: "top-right",
      TOP: "top",
      TOP_LEFT: "top-left",
      BOTTOM_RIGHT: "bottom-right",
      BOTTOM: "bottom",
      BOTTOM_LEFT: "bottom-left"
    }, r = c(!1), i = c(null), n = c(null), l = c(), m = c(), p = c(), C = N(() => {
      switch (e.position) {
        case t.TOP:
        case t.TOP_RIGHT:
        case t.TOP_LEFT:
          return i.value;
        case t.BOTTOM:
        case t.BOTTOM_RIGHT:
        case t.BOTTOM_LEFT:
          return n.value;
        default:
          return i.value;
      }
    }), z = N(() => {
      switch (e.position) {
        case t.TOP:
        case t.TOP_RIGHT:
        case t.TOP_LEFT:
          return {
            enter: "toaster-fade-in-down",
            leave: "toaster-fade-out"
          };
        case t.BOTTOM:
        case t.BOTTOM_RIGHT:
        case t.BOTTOM_LEFT:
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
      O(), y();
    }), H(() => {
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
      var a, s;
      return e.queue ? i.value && ((a = i.value) == null ? void 0 : a.childElementCount) > 0 || n.value && ((s = n.value) == null ? void 0 : s.childElementCount) > 0 : !1;
    }
    function T(...a) {
      l.value && l.value.stop(), clearTimeout(p.value), r.value = !1, setTimeout(() => {
        var u;
        (u = e.onDismiss) == null || u.apply(null, a);
        const s = m.value;
        s && (h(null, s), j(s));
      }, 150);
    }
    function y() {
      var s, u;
      if (D()) {
        p.value = setTimeout(y, 250);
        return;
      }
      const a = (s = m.value) == null ? void 0 : s.parentElement;
      (u = C.value) == null || u.insertAdjacentElement("afterbegin", m.value), j(a), r.value = !0, e.duration && (l.value = new U(T, e.duration));
    }
    function Z(...a) {
      var s;
      e.dismissible && ((s = e.onClick) == null || s.apply(null, a), T());
    }
    function g(a) {
      !e.pauseOnHover || !l.value || (a ? l.value.pause() : l.value.resume());
    }
    function j(a) {
      var s;
      typeof a.remove < "u" ? a.remove() : (s = a.parentNode) == null || s.removeChild(a);
    }
    return (a, s) => (I(), G(L, {
      "enter-active-class": f(z).enter,
      "leave-active-class": f(z).leave
    }, {
      default: R(() => [
        w(M("div", {
          ref_key: "toasterMessage",
          ref: m,
          role: "alert",
          class: _(["toaster-message", [`toaster-position-${o.position}`]]),
          onMouseover: s[0] || (s[0] = (u) => g(!0)),
          onMouseleave: s[1] || (s[1] = (u) => g(!1))
        }, [
          o.toaster.type === "error" ? (I(), v("img", F)) : o.toaster.type === "success" ? (I(), v("img", Q)) : o.toaster.type === "info" ? (I(), v("img", K)) : o.toaster.type === "warning" ? (I(), v("img", q)) : E("", !0),
          M("div", $, [
            M("p", V, b(o.toaster.title), 1),
            M("p", ee, b(o.toaster.message), 1)
          ]),
          M("div", {
            class: "close-toaster",
            onClick: Z
          })
        ], 34), [
          [S, r.value]
        ])
      ]),
      _: 1
    }, 8, ["enter-active-class", "leave-active-class"]));
  }
});
const oe = (o = {}) => ({
  addToast(e) {
    const r = Object.assign({}, {
      toaster: e
    }, o), i = this.createComponent(te, r, document.body);
    return {
      dismiss: i == null ? void 0 : i.ctx.dismiss
    };
  },
  createComponent(e, t, r, i = {}) {
    const n = x(e, t, i), l = document.createElement("div");
    return l.classList.add("toaster-pending"), r.appendChild(l), h(n, l), n.component;
  }
});
export {
  oe as useToaster
};
