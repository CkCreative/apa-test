import { openBlock as a, createElementBlock as i, createElementVNode as t, toDisplayString as l, ref as h, onMounted as v, normalizeClass as _, Fragment as g, renderList as w, createBlock as m } from "vue";
const k = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='37.07'%20height='36'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20198'%3e%3cpath%20fill='%2341B883'%20d='M204.8%200H256L128%20220.8L0%200h97.92L128%2051.2L157.44%200h47.36Z'%3e%3c/path%3e%3cpath%20fill='%2341B883'%20d='m0%200l128%20220.8L256%200h-51.2L128%20132.48L50.56%200H0Z'%3e%3c/path%3e%3cpath%20fill='%2335495E'%20d='M50.56%200L128%20133.12L204.8%200h-47.36L128%2051.2L97.92%200H50.56Z'%3e%3c/path%3e%3c/svg%3e", u = "/tag.webp", y = { class: "w-full md:w-[30%] px-3" }, b = { class: "flex relative gap-3 items-center bg-white border-2 border-gray-300 p-3 pr-5" }, j = { class: "w-[25%] flex-shrink-0" }, L = ["src"], C = { class: "w-[70%] overflow-hidden" }, $ = { class: "text-2xl text-red-500 font-bold whitespace-nowrap overflow-hidden text-ellipsis" }, B = { class: "text-xs whitespace-nowrap overflow-hidden text-ellipsis" }, D = { class: "flex flex-col gap-1 text-xs" }, E = { class: "flex bg-gray-200 p-1 rounded-xl whitespace-nowrap overflow-hidden text-ellipsis" }, M = { class: "overflow-hidden text-ellipsis" }, S = { class: "flex bg-gray-200 p-1 rounded-xl whitespace-nowrap overflow-hidden text-ellipsis" }, z = { class: "overflow-hidden text-ellipsis" }, A = { class: "flex items-center gap-1 bg-gray-200 p-1 rounded-xl" }, H = { class: "line-clamp-2 overflow-hidden" }, I = {
  __name: "Card",
  props: {
    data: Object,
    currentCategory: String
  },
  setup(s) {
    return (r, e) => (a(), i("div", y, [
      t("div", b, [
        t("div", j, [
          t("img", {
            src: s.data.icon_url,
            class: "w-full",
            alt: ""
          }, null, 8, L)
        ]),
        t("div", C, [
          t("div", $, l(s.currentCategory), 1),
          t("small", null, [
            t("div", B, l(new Date(s.data.created_at).toLocaleString()), 1)
          ]),
          t("ul", D, [
            t("li", E, [
              e[0] || (e[0] = t("span", null, [
                t("img", {
                  class: "h-4 w-7 flex-shrink-0",
                  src: u,
                  alt: ""
                })
              ], -1)),
              t("span", M, "ID: " + l(s.data.id), 1)
            ]),
            t("li", S, [
              e[1] || (e[1] = t("span", null, [
                t("img", {
                  class: "h-4 w-7 flex-shrink-0",
                  src: u,
                  alt: ""
                })
              ], -1)),
              t("span", z, "Updated: " + l(new Date(s.data.updated_at).toLocaleString()), 1)
            ]),
            t("li", A, [
              e[2] || (e[2] = t("span", null, [
                t("img", {
                  class: "h-4 w-7 flex-shrink-0",
                  src: u,
                  alt: ""
                })
              ], -1)),
              t("span", H, l(s.data.value), 1)
            ])
          ])
        ]),
        e[3] || (e[3] = t("div", { class: "absolute bottom-3 right-1 text-orange-400" }, [
          t("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "2",
            stroke: "currentColor",
            class: "size-8"
          }, [
            t("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "m4.5 12.75 6 6 9-13.5"
            })
          ])
        ], -1))
      ])
    ]));
  }
}, O = "#chucknorris-widget[data-v-fa7c0560]{position:fixed;bottom:20px;right:20px;z-index:1000;width:60px;height:60px;border-radius:50%;background-color:#41b883;box-shadow:0 2px 5px #0003;cursor:pointer;transition:all .3s ease}#chucknorris-widget.expanded[data-v-fa7c0560]{width:100%;height:100%;border-radius:10px;bottom:0;right:0}.widget-content[data-v-fa7c0560]{background-color:#f8f8f8;padding:20px;border-radius:10px;width:100%;height:100%;overflow-y:auto}.widget-icon[data-v-fa7c0560]{display:flex;align-items:center;justify-content:center;width:100%;height:100%}.widget-icon img[data-v-fa7c0560]{width:40px;height:40px}", R = (s, r) => {
  const e = s.__vccOpts || s;
  for (const [c, n] of r)
    e[c] = n;
  return e;
}, Z = {
  key: 0,
  class: "widget-content"
}, q = { class: "container px-5 md:px-10" }, F = { class: "flex gap-3 flex-wrap mb-5 md:mb-5 justify-center md:justify-between" }, N = ["onClick"], U = { class: "flex flex-col md:flex-row flex-wrap gap-5 justify-center md:justify-between" }, V = {
  key: 1,
  class: "widget-icon"
}, Y = {
  __name: "App",
  setup(s) {
    const r = h([]), e = h([]), c = h("animal"), n = h(!1);
    async function x(d) {
      c.value = d;
      const o = await (await fetch(
        `https://api.chucknorris.io/jokes/search?query=${d}`
      )).json();
      e.value = o.result;
    }
    v(async () => {
      const d = await fetch("https://api.chucknorris.io/jokes/categories");
      r.value = await d.json();
      const o = await (await fetch(
        `https://api.chucknorris.io/jokes/search?query=${c.value}`
      )).json();
      console.log(o), e.value = o.result;
    });
    function f() {
      n.value = !n.value;
    }
    return (d, p) => (a(), i("div", {
      id: "chucknorris-widget",
      class: _({ expanded: n.value }),
      onClick: f
    }, [
      n.value ? (a(), i("div", Z, [
        t("div", q, [
          t("div", F, [
            (a(!0), i(g, null, w(r.value, (o) => (a(), i("div", {
              onClick: (G) => x(o),
              class: "bg-slate-400 p-1 px-2 rounded-full"
            }, l(o), 9, N))), 256))
          ]),
          t("div", U, [
            (a(!0), i(g, null, w(e.value, (o) => (a(), m(I, {
              currentCategory: c.value,
              data: o
            }, null, 8, ["currentCategory", "data"]))), 256))
          ])
        ])
      ])) : (a(), i("div", V, p[0] || (p[0] = [
        t("img", {
          src: k,
          alt: "Open Chat"
        }, null, -1)
      ])))
    ], 2));
  }
}, K = /* @__PURE__ */ R(Y, [["styles", [O]], ["__scopeId", "data-v-fa7c0560"]]);
export {
  K as default
};
