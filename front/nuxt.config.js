export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  generate: {
    dir: "../site/",
  },
  router: {},
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Чат3",
    htmlAttrs: {
      lang: "ru",
    },

    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Децентрализованные коммуникации, которые работают с интернетом или без него",
      },
      { name: "format-detection", content: "telephone=no" },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "dComms",
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content:
          "Децентрализованные коммуникации, которые работают с интернетом или без него",
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: "/bridge-icon.png",
      },
      {
        hid: "twitter:image:alt",
        name: "twitter:image:alt",
        content: "Antijob.net — чёрный список работодателей",
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "Antijob.net",
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "Децентрализованные коммуникации, которые работают с интернетом или без него",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "/bridge-icon.png",
      },
      {
        hid: "og:locale",
        property: "og:locale",
        content: "ru_RU",
      },
      {
        hid: "vk:image",
        property: "vk:image",
        content: "/bridge-icon.png",
      },
      {
        hid: "og:image:alt",
        property: "og:image:alt",
        content: "/bridge-icon.png",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  modules: ["@nuxtjs/i18n"],

  i18n: {
    detectBrowserLanguage: false,
    vueI18nLoader: true,
    defaultLocale: "ru",
    vueI18n: {
      fallbackLocale: ["ru"],
    },
    strategy: "prefix_except_default",
    legacy: false,
    globalInjection: true,
    langDir: "lang/",
    locales: [
      {
        code: "ua",
        name: "UA",
        nameFull: "Ukranian",
        iso: "ua-UA",
        file: "ua.js",
      },
      {
        code: "ru",
        name: "RU",
        nameFull: "Русский",
        iso: "ru-RU",
        file: "ru.js",
      },
      {
        code: "en",
        name: "EN",
        nameFull: "English",
        iso: "en-US",
        file: "en.js",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/style.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/pwa",
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};