(window.webpackJsonp=window.webpackJsonp||[]).push([[6,4],{275:function(t,n,e){"use strict";e.r(n);var r={props:["link"]},l=e(34),component=Object(l.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.link?e("a",{staticClass:"\n    inline-block\n    sm:text-sm\n    border border-gray-300\n    bg-white\n    px-2\n    py-1\n    shadow-sm\n    rounded\n    text-gray-700 text-center\n    hover:bg-gray-300\n    min-h-[30px]\n  ",attrs:{href:t.link,target:"_blank"}},[t._t("default")],2):e("button",{staticClass:"\n    inline-block\n    bg-white\n    sm:text-sm\n    border border-gray-300\n    px-2\n    py-1\n    shadow-sm\n    rounded\n    text-gray-700 text-center\n    hover:bg-gray-300\n    min-h-[30px]\n  "},[t._t("default")],2)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Button:e(275).default})},288:function(t,n,e){"use strict";e.r(n);e(19),e(73);var r={nuxtI18n:{locales:["ru"]},name:"Hero",computed:{server:function(){return this.$t("cities")["".concat(window.location.host.split(".")[0])]&&window.location.host.split(".")[1]?window.location.host.split(".")[0]:"moscow"}}},l=e(34),component=Object(l.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"py-6 sm:py-20"},[e("div",{staticClass:"container px-3 sm:px-0 sm:text-center"},[e("h1",{staticClass:"text-4xl sm:text-5xl font-bold md:mx-[100px]"},[t._v("\n      "+t._s(t.$t("title.first"))+"\n      "),e("span",{staticClass:"text-primary"},[t._v(t._s(t.$t("title.second")))])]),t._v(" "),e("p",{staticClass:"text-xl my-8 text-gray-500 md:mx-[120px]"},[t._v("\n      "+t._s(t.$t("subtitle"))+"\n    ")]),t._v(" "),e("span",{staticClass:"\n        border border-green-500\n        rounded-lg\n        px-4\n        py-2\n        inline-flex\n        bg-green-50\n      "},[e("img",{staticClass:"mr-2",attrs:{src:"/icons/success.svg",alt:""}}),e("span",{domProps:{innerHTML:t._s(t.$t("connected",{name:t.$t("cities['"+t.server+"']")}))}})]),t._v(" "),e("div",{staticClass:"\n        flex flex-wrap\n        gap-2\n        sm:gap-3 sm:text-center\n        items-center\n        sm:justify-center\n        my-8\n      "},[e("div",{staticClass:"\n          w-full\n          sm:w-auto\n          text-gray-500\n          font-bold\n          text-sm\n          uppercase\n          basis-full\n        "},[t._v("\n        "+t._s(t.$t("server"))+"\n      ")]),t._v(" "),t._l(t.$store.state.servers,(function(n){return e("Button",{key:n.name,staticClass:"min-w-[109px]",attrs:{link:n.link}},[t._v(t._s(t.$t(n.name)))])}))],2)])])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Button:e(275).default})}}]);