export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  mode: "universal",
  target: "static",
  generate: {
    dir: "../site/",
  },
  router: {},
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: "ua",
    },
    title: "ChatV3",
    description:
      "Децентралізовані комунікації, які працюють з інтернетом або без нього",
    meta: [
      {
        hid: "og:image:alt",
        property: "og:image:alt",
        content: `/preview-logo.png`,
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: `/preview-logo.png`,
      },
      {
        hid: "og:image",
        property: "og:image",
        content: `/preview-logo.png`,
      },
      {
        hid: "vk:image",
        property: "vk:image",
        content: `/preview-logo.png`,
      },
      {
        hid: "og:image:secure_url",
        property: "og:image:secure_url",
        content: `/preview-logo.png`,
      },
      {
        hid: "description",
        name: "description",
        content:
          "Децентралізовані комунікації, які працюють з інтернетом або без нього",
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "ChatV3",
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content:
          "Децентралізовані комунікації, які працюють з інтернетом або без нього",
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
        hid: "twitter:image:alt",
        name: "twitter:image:alt",
        content: "ChatV3",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "ChatV3",
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "ChatV3",
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "Децентралізовані комунікації, які працюють з інтернетом або без нього",
      },

      {
        hid: "og:image:heigth",
        property: "og:image:heigth",
        content: "200",
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
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon-16x16.svg" }],
  },

  modules: ["@nuxtjs/i18n", "@nuxtjs/google-fonts"],
  pwa: {
    manifest: {
      name: "ChatV3",
      short_name: "ChatV3",
      start_url: "/?standalone=true",
      lang: "ua",
      display: "standalone",
      description:
        "Децентралізовані комунікації, які працюють з інтернетом або без нього",
      theme_color: "#111111",
      icons: [
        {
          src: "/android-chrome-192x192.svg",
          type: "image/png",
          sizes: "192x192",
        },
        {
          src: "/android-chrome-512x512.svg",
          type: "image/png",
          sizes: "512x512",
        },
        {
          src: "/favicon-32x32.svg",
          type: "image/png",
          sizes: "32x32",
        },
        {
          src: "/favicon-16x16.svg",
          type: "image/png",
          sizes: "16x16",
        },
        {
          src: "/android-chrome-192x192.svg",
          sizes: "192x192",
          type: "image/png",
          purpose: "any maskable",
        },
      ],
    },
  },
  googleFonts: {
    families: {
      Roboto: true,
      "Josefin+Sans": true,
      Inter: [100, 300, 400, 600, 700, 800],
      download: true,
    },
  },
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
        code: "ru",
        name: "RU",
        nameFull: "Русский",
        iso: "ru-RU",
        file: "ru.js",
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
