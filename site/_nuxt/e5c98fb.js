(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{272:function(t,n,e){var content=e(276);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(88).default)("314cfa7c",content,!0,{sourceMap:!1})},275:function(t,n,e){"use strict";e(272)},276:function(t,n,e){var l=e(87)((function(i){return i[1]}));l.push([t.i,"p{margin-bottom:10px}",""]),l.locals={},t.exports=l},277:function(t,n,e){"use strict";e.r(n);var l={name:"AppItem",props:["data"]},o=(e(275),e(62)),component=Object(o.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"mb-8 bg-white rounded-xl p-8"},[e("div",{staticClass:"sm:flex mb-4"},[e("img",{staticClass:"mb-6 sm:mb-0 mx-auto h-[100px] w-[100px] object-contain sm:mr-10",attrs:{src:t.data.logo,alt:""}}),t._v(" "),e("div",{staticClass:"mb-6 sm:mb-0 sm:text-xl",domProps:{innerHTML:t._s(t.data.descr)}})]),t._v(" "),e("div",{staticClass:"sm:grid sm:grid-cols-2 sm:gap-8 mt-8"},[t.data.desktopApp?e("div",{staticClass:"p-5 sm:rounded-lg mb-6 -mx-3 sm:mx-0"},[e("div",{staticClass:"mb-3 font-bold"},[t._v(t._s(t.$t("items.desktopApp")))]),t._v(" "),t.data.desktopApp.name?e("div",{staticClass:"mb-3"},[e("img",{staticClass:"inline w-5",attrs:{src:t.data.mobileApp.logo,alt:t.data.mobileApp.name}}),t._v(" "),t.data.desktopApp.link?e("a",{staticClass:"text-lg",attrs:{href:t.data.desktopApp.link}},[t._v("\n          "+t._s(t.data.desktopApp.name))]):e("span",[t._v(" "+t._s(t.data.desktopApp.name))]),t._v(" "),t.data.desktopApp.localLink?e("a",{staticClass:"my-1 text-gray-600 whitespace-nowrap block",attrs:{href:t.data.desktopApp.localLink}},[e("img",{staticClass:"inline w-3",attrs:{src:"/download.svg",alt:""}}),t._v(" "),e("span",{staticClass:"mr-1"},[t._v(" "+t._s(t.$t("items.localDownload")))])]):t._e(),t._v("\n        ("),t._l(t.data.desktopApp.platforms,(function(n,l){return e("span",{key:n.name},[n.link?e("a",{attrs:{href:n.link}},[t._v(t._s(n.name+(l===t.data.desktopApp.platforms.length-1?"":", ")))]):e("span",[t._v(t._s(n.name+(l===t.data.desktopApp.platforms.length-1?"":", ")))])])})),t._v(")\n      ")],2):t._e(),t._v(" "),e("div",t._l(t.data.desktopApp.servers,(function(n){return e("div",{key:n.name,staticClass:"mb-3 sm:pr-6"},[n.link?e("a",{attrs:{href:n.link}},[t._v(t._s(n.name))]):e("span",[t._v(t._s(n.name))]),t._v(" "),n.docs?e("span",[t._v("\n            (\n            "+t._s(t.$t("items.instruction"))+"\n            "),t._l(n.docs,(function(l,o){return e("a",{key:l.link,attrs:{href:l.link}},[t._v(t._s(l.name+(o===n.docs.length-1?"":", "))+" ")])})),t._v(")\n          ")],2):t._e()])})),0)]):t._e(),t._v(" "),t.data.mobileApp?e("div",{staticClass:"p-5 sm:rounded-lg -mx-3 sm:mx-0"},[e("div",{staticClass:"mb-3 font-bold"},[t._v(t._s(t.$t("items.mobileApp")))]),t._v(" "),t.data.mobileApp.name?e("div",{staticClass:"mb-3"},[e("img",{staticClass:"inline w-5",attrs:{src:t.data.mobileApp.logo,alt:t.data.mobileApp.name}}),t._v(" "),t.data.mobileApp.link?e("a",{staticClass:"text-lg",attrs:{href:t.data.mobileApp.link}},[t._v("\n          "+t._s(t.data.mobileApp.name))]):e("span",[t._v(" "+t._s(t.data.mobileApp.name))]),t._v("\n        ("),t._l(t.data.mobileApp.platforms,(function(n,l){return e("span",{key:n.name},[n.link?e("a",{attrs:{href:n.link}},[t._v(t._s(n.name+(l===t.data.mobileApp.platforms.length-1?"":", ")))]):e("span",[t._v(t._s(n.name+(l===t.data.mobileApp.platforms.length-1?"":", ")))])])})),t._v(")\n        "),t.data.mobileApp.localLink?e("a",{staticClass:"my-1 text-gray-600 whitespace-nowrap block",attrs:{href:t.data.mobileApp.localLink}},[e("img",{staticClass:"inline w-3",attrs:{src:"/download.svg",alt:""}}),t._v(" "),e("span",{staticClass:"mr-1"},[t._v(" "+t._s(t.$t("items.localDownload")))])]):t._e(),t._v(" "),t.data.mobileApp.docs?e("div",[t._v("\n          "+t._s(t.$t("items.instruction"))+"\n          "),t._l(t.data.mobileApp.docs,(function(n,l){return e("span",{key:n.name},[e("a",{attrs:{href:n.link}},[t._v(t._s(n.name+(l===t.data.mobileApp.docs.length-1?"":", ")))])])}))],2):t._e()],2):t._e(),t._v(" "),t._l(t.data.mobileApp.servers,(function(n){return e("div",{key:n.name,staticClass:"mb-3"},[n.link?e("a",{attrs:{href:n.link}},[t._v(t._s(n.name))]):e("span",[t._v(t._s(n.name))]),t._v(" "),n.docs?e("span",[t._v("\n          ("+t._s(t.$t("items.instruction"))+"\n          "),t._l(n.docs,(function(n){return e("a",{key:n.link,attrs:{href:n.link}},[t._v(t._s(n.name)+" ")])})),t._v(")\n        ")],2):t._e()])}))],2):t._e()])])}),[],!1,null,null,null);n.default=component.exports}}]);