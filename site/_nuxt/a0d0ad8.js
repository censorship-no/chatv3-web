(window.webpackJsonp=window.webpackJsonp||[]).push([[7,4,5],{275:function(t,n,e){"use strict";e.r(n);var r={props:["link"]},o=e(34),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.link?e("a",{staticClass:"\n    inline-block\n    sm:text-sm\n    border border-gray-300\n    bg-white\n    px-2\n    py-1\n    shadow-sm\n    rounded\n    text-gray-700 text-center\n    hover:bg-gray-50\n    active:bg-gray-100\n    min-h-[30px]\n    whitespace-nowrap\n  ",attrs:{href:t.link,target:"_blank"}},[t._t("default")],2):e("button",{staticClass:"\n    inline-block\n    bg-white\n    sm:text-sm\n    border border-gray-300\n    px-2\n    py-1\n    shadow-sm\n    rounded\n    text-gray-700 text-center\n    hover:bg-gray-50\n    active:bg-gray-100\n    min-h-[30px]\n    whitespace-nowrap\n  "},[t._t("default")],2)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Button:e(275).default})},276:function(t,n,e){var content=e(278);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(72).default)("4746adbc",content,!0,{sourceMap:!1})},277:function(t,n,e){"use strict";e(276)},278:function(t,n,e){var r=e(71)((function(i){return i[1]}));r.push([t.i,".btn-group>:first-child{border-top-left-radius:4px!important;border-bottom-left-radius:4px!important;border-top-right-radius:0;border-bottom-right-radius:0;border-right:0}.btn-group>:nth-child(n+1){border-radius:0;border-right:0}.btn-group>:last-child{border-top-right-radius:4px;border-bottom-right-radius:4px;border-top-left-radius:0;border-bottom-left-radius:0;border-right:1px solid #d1d5db}",""]),r.locals={},t.exports=r},279:function(t,n,e){"use strict";e.r(n);var r={},o=(e(277),e(34)),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{staticClass:"btn-group flex items-center flex-nowrap"},[t._t("default")],2)}),[],!1,null,null,null);n.default=component.exports},297:function(t,n,e){"use strict";e.r(n);var r={name:"ReplicateSection",methods:{doCopy:function(){var t=document.getElementById("linkMatrix");t.select(),t.setSelectionRange(0,99999),navigator.clipboard.writeText(t.value)}}},o=e(34),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"\n    rounded-lg\n    bg-red-100\n    border border-primary\n    grid grid-cols-12\n    p-8\n    gap-6\n  "},[e("div",{staticClass:"col-span-12 lg:col-span-4 flex items-start"},[e("img",{staticClass:"mr-3 w-10",attrs:{src:"/icons/clone.svg",alt:""}}),t._v(" "),e("span",{staticClass:"text-2xl font-bold"},[t._v(t._s(t.$t("alert.title")))])]),t._v(" "),e("div",{staticClass:"col-span-12 lg:col-span-4"},[e("p",{staticClass:"text-sm"},[t._v(t._s(t.$t("alert.descr")))])]),t._v(" "),e("div",{staticClass:"col-span-12 lg:col-span-4 flex"},[e("div",[e("div",{staticClass:"mb-1 text-sm sm:min-w-[90px] min-w-[80px]"},[t._v("\n        "+t._s(t.$t("alert.buttons.servers"))+"\n      ")]),t._v(" "),e("ButtonGroups",[e("input",{staticClass:"\n            w-[260px]\n            min-h-[30px]\n            inline-block\n            text-xs\n            border border-gray-300\n            bg-white\n            py-1\n            shadow-sm\n            rounded\n            text-primary\n            underline\n            text-center\n            focus:outline-none\n          ",attrs:{id:"linkMatrix",value:"#dcommsp2p:matrix.kyiv.dcomms.net.ua",readonly:"",type:"text"}}),t._v(" "),e("Button",{nativeOn:{click:function(n){return t.doCopy()}}},[e("span",{staticClass:"flex flex-nowrap"},[e("img",{staticClass:"w-4 mr-1 cursor-pointer",attrs:{src:"/icons/copy.svg",alt:""}})])])],1),t._v(" "),e("Button",{staticClass:"mt-2",attrs:{link:"https://github.com/censorship-no/dcomms"}},[t._v(t._s(t.$t("alert.buttons.repo")))])],1)])])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Button:e(275).default,ButtonGroups:e(279).default})}}]);