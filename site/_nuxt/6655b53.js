(window.webpackJsonp=window.webpackJsonp||[]).push([[2,3,4,5],{275:function(t,n,e){"use strict";e.r(n);var r={props:["link"]},l=e(34),component=Object(l.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.link?e("a",{staticClass:"\n    inline-block\n    sm:text-sm\n    border border-gray-300\n    bg-white\n    px-2\n    py-1\n    shadow-sm\n    rounded\n    text-gray-700 text-center\n    hover:bg-gray-300\n    min-h-[30px]\n  ",attrs:{href:t.link,target:"_blank"}},[t._t("default")],2):e("button",{staticClass:"\n    inline-block\n    bg-white\n    sm:text-sm\n    border border-gray-300\n    px-2\n    py-1\n    shadow-sm\n    rounded\n    text-gray-700 text-center\n    hover:bg-gray-300\n    min-h-[30px]\n  "},[t._t("default")],2)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Button:e(275).default})},276:function(t,n,e){var content=e(278);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(72).default)("4746adbc",content,!0,{sourceMap:!1})},277:function(t,n,e){"use strict";e(276)},278:function(t,n,e){var r=e(71)((function(i){return i[1]}));r.push([t.i,".btn-group>:first-child{border-top-left-radius:4px!important;border-bottom-left-radius:4px!important;border-top-right-radius:0;border-bottom-right-radius:0;border-right:0}.btn-group>:nth-child(n+1){border-radius:0;border-right:0}.btn-group>:last-child{border-top-right-radius:4px;border-bottom-right-radius:4px;border-top-left-radius:0;border-bottom-left-radius:0;border-right:1px solid #d1d5db}",""]),r.locals={},t.exports=r},279:function(t,n,e){"use strict";e.r(n);var r={},l=(e(277),e(34)),component=Object(l.a)(r,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{staticClass:"btn-group flex items-center flex-nowrap"},[t._t("default")],2)}),[],!1,null,null,null);n.default=component.exports},280:function(t,n,e){var content=e(283);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(72).default)("20b90108",content,!0,{sourceMap:!1})},281:function(t,n,e){var content=e(286);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(72).default)("314cfa7c",content,!0,{sourceMap:!1})},282:function(t,n,e){"use strict";e(280)},283:function(t,n,e){var r=e(71)((function(i){return i[1]}));r.push([t.i,"p{margin-bottom:10px}",""]),r.locals={},t.exports=r},284:function(t,n,e){"use strict";e.r(n);e(19),e(73),e(35),e(12);var r={nuxtI18n:{locales:["ua","ru","en"]},name:"AppItemPlatformItem",props:{data:Object,desktop:Boolean},methods:{doCopy:function(){var t=document.getElementById("text");t.select(),t.setSelectionRange(0,99999),navigator.clipboard.writeText(t.value)}},computed:{server:function(){return this.$t("cities")["".concat(window.location.host.split(".")[0])]&&window.location.host.split(".")[1]?window.location.host.split(".")[0]:"moscow"},item:function(){var t=this;return!!this.data.servers&&this.data.servers.filter((function(n){return n.label===t.server||"all"===n.label}))}}},l=(e(282),e(34)),component=Object(l.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.data?e("div",{staticClass:"sm:mx-0"},[t.desktop?e("div",{staticClass:"mb-5 text-sm font-semibold uppercase text-gray-600"},[t._v("\n    "+t._s(t.$t("items.desktopApp"))+"\n  ")]):e("div",{staticClass:"mb-5 text-sm font-semibold uppercase text-gray-600"},[t._v("\n    "+t._s(t.$t("items.mobileApp"))+"\n  ")]),t._v(" "),t._l(t.item,(function(n){return e("div",{key:n.label,staticClass:"sm:pr-6"},[e("div",{staticClass:"mb-3 sm:flex items-center"},[t.data.serversLabel?e("span",{staticClass:"\n          block\n          sm:inline\n          mb-3\n          sm:mb-0\n          mr-3\n          text-sm\n          sm:min-w-[90px]\n          min-w-[80px]\n          sm:text-right\n        "},[t._v(t._s(t.data.serversLabel[t.$i18n.locale]))]):t._e(),t._v(" "),n.name&&n.link?e("Button",{attrs:{link:n.link}},[t._v(t._s(n.name[t.$i18n.locale]))]):t._e(),t._v(" "),"copy"===n.type?e("span",{staticClass:"text-sm text-gray-600 flex"},[e("ButtonGroups",[e("input",{staticClass:"\n              max-w-[70%]\n              min-h-[30px]\n              inline-block\n              text-xs\n              border border-gray-300\n              bg-white\n              py-1\n              shadow-sm\n              rounded\n              text-primary\n              underline\n              text-center\n              focus:outline-none\n            ",attrs:{id:"text",readonly:"",type:"text"},domProps:{value:n.name[t.$i18n.locale]}}),t._v(" "),e("Button",{nativeOn:{click:function(n){return t.doCopy()}}},[e("span",{staticClass:"flex flex-nowrap"},[e("img",{staticClass:"w-4 mr-1 cursor-pointer",attrs:{src:"/icons/copy.svg",alt:""}})])])],1)],1):t._e()],1),t._v(" "),n.docs?e("div",{staticClass:"sm:flex items-center mb-3"},[e("span",{staticClass:"\n          block\n          sm:inline\n          mb-3\n          sm:mb-0\n          mr-3\n          text-sm\n          sm:min-w-[90px]\n          min-w-[80px]\n          sm:text-right\n        "},[t._v(t._s(t.$t("items.instruction"))+"\n      ")]),t._v(" "),e("ButtonGroups",t._l(n.docs,(function(n){return e("Button",{key:n.link[t.$i18n.locale],attrs:{link:n.link[t.$i18n.locale]}},[t._v(t._s(n.name)+"\n        ")])})),1)],1):t._e()])})),t._v(" "),t.data.downloads?e("div",{staticClass:"mb-3 items-center"},[e("div",{staticClass:"sm:flex items-center"},[e("span",{staticClass:"\n          block\n          sm:inline\n          mb-3\n          sm:mb-0\n          mr-3\n          text-sm\n          sm:min-w-[90px]\n          min-w-[80px]\n          sm:text-right\n        "},[t._v(t._s(t.$t("items.downloads"))+"\n      ")]),t._v(" "),e("ButtonGroups",t._l(t.data.downloads.mirrors,(function(n){return e("Button",{key:n.name[t.$i18n.locale],attrs:{link:n.link}},[t._v(t._s(n.name[t.$i18n.locale])+"\n        ")])})),1)],1),t._v(" "),t.data.platforms.length?e("div",{staticClass:"italic text-sm sm:ml-[110px] pt-3"},[t._v("\n      ("),t._l(t.data.platforms,(function(n,r){return e("span",{key:n.name},[n.link?e("a",{staticClass:"text-sm",attrs:{href:n.link}},[t._v(t._s(n.name+(r===t.data.platforms.length-1?"":", ")))]):e("span",{staticClass:"text-sm"},[t._v(t._s(n.name+(r===t.data.platforms.length-1?"":", ")))])])})),t._v(")\n    ")],2):t._e()]):t._e()],2):e("div",[t.desktop?e("div",{staticClass:"mb-5 text-sm font-semibold uppercase text-gray-600"},[t._v("\n    "+t._s(t.$t("items.desktopApp"))+"\n  ")]):e("div",{staticClass:"mb-5 text-sm font-semibold uppercase text-gray-600"},[t._v("\n    "+t._s(t.$t("items.mobileApp"))+"\n  ")]),t._v(" "),e("span",{staticClass:"\n      inline-block\n      bg-gray-50\n      border border-gray-300\n      rounded-lg\n      py-3\n      px-5\n    "},[e("img",{staticClass:"w-8 inline mr-2",attrs:{src:"/icons/fail.svg",alt:""}}),t._v(" "),e("span",{staticClass:"text-gray-700 text-lg"},[t._v(t._s(t.$t("items.notAvail")))])])])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Button:e(275).default,ButtonGroups:e(279).default})},285:function(t,n,e){"use strict";e(281)},286:function(t,n,e){var r=e(71)((function(i){return i[1]}));r.push([t.i,"p{margin-bottom:10px}",""]),r.locals={},t.exports=r},290:function(t,n,e){"use strict";e.r(n);var r={name:"AppItem",props:["data"]},l=(e(285),e(34)),component=Object(l.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"mb-8 shadow bg-white rounded-xl p-4 sm:p-8"},[e("div",{staticClass:"md:flex mb-4"},[e("img",{staticClass:"\n        mb-6\n        md:mb-0 md:mx-auto\n        h-[48px]\n        w-[48px]\n        object-contain\n        md:mr-10\n      ",attrs:{src:t.data.logo,alt:""}}),t._v(" "),e("div",{staticClass:"mb-6 md:mb-0"},[t.data.explain?e("div",{staticClass:"text-sm font-semibold uppercase text-primary mb-3"},[t._v("\n        "+t._s(t.data.explain[t.$i18n.locale])+"\n      ")]):t._e(),t._v(" "),e("div",{staticClass:"text-2xl font-bold mb-3"},[t._v("\n        "+t._s(t.data.name[t.$i18n.locale])+"\n      ")]),t._v(" "),e("div",{staticClass:"text-sm",domProps:{innerHTML:t._s(t.data.descr[t.$i18n.locale])}}),t._v(" "),e("div",{staticClass:"lg:grid lg:grid-cols-2 lg:gap-8 mt-8"},[e("AppItemPlatformItem",{staticClass:"lg:border-r lg:border-gray-300",attrs:{data:t.data.mobileApp}}),t._v(" "),e("AppItemPlatformItem",{staticClass:"border-t lg:border-0 pt-6 mt-6 lg:pt-0 lg:mt-0",attrs:{desktop:"",data:t.data.desktopApp}})],1)])])])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{AppItemPlatformItem:e(284).default})}}]);