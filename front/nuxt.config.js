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
    description:
      "Децентрализованные коммуникации, которые работают с интернетом или без него",

    htmlAttrs: {
      lang: "ru",
    },

    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },

      { name: "format-detection", content: "telephone=no" },
      {
        hid: "description",
        name: "description",
        content:
          "Децентрализованные коммуникации, которые работают с интернетом или без него",
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "Чат3",
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
        content: `/logo_ceno.png`,
      },
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        hid: "twitter:creator",
        name: "twitter:creator",
        content: "summary_large_image",
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: `/logo_ceno.png`,
      },
      {
        hid: "twitter:image:alt",
        name: "twitter:image:alt",
        content: "Чат3",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Чат3",
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "Чат3",
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
        content: `/logo_ceno.png`,
      },

      {
        hid: "og:image:width",
        property: "og:image:width",
        content: "200",
      },
      {
        hid: "og:type",
        property: "og:type",
        content: "website",
      },
      {
        hid: "og:image:secure_url",
        property: "og:image:secure_url",
        content: `/logo_ceno.png`,
      },
      {
        hid: "og:image:alt",
        property: "og:image:alt",
        content: `/logo_ceno.png`,
      },

      {
        hid: "vk:image",
        property: "vk:image",
        content: `/logo_ceno.png`,
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
