export const state = () => ({
  servers: [
    { name: "Чебурашка (Москва)", link: "https://1.chatv3.ru" },
    { name: "Гена (Санкт-Петербург)", link: "https://2.chatv3.ru" },
    { name: "Волк (Самара)", link: "https://3.chatv3.ru" },
    { name: "Заяц (Краснодар)", link: "https://4.chatv3.ru" },
    { name: "Кузя (Екатеринбург)", link: "https://5.chatv3.ru" },
    { name: "Матроскин (Новосибирск)", link: "https://6.chatv3.ru" },
    { name: "Шарик (Владивосток)", link: "https://7.chatv3.ru" },
    { name: "Печкин (Хабаровск)", link: "https://8.chatv3.ru" },
  ],
  items: {
    messaging: [
      {
        id: 1,
        show: true,
        descr: `<p>Сервис для обмена сообщениям, поддерживающий сквозное шифрование, приватные чаты, личные и публичные комнаты. Внимание: регистрация открыта для всех — будьте внимательны при установлении личности пользователя, прежде чем доверять ему. Приватные группы доступны только их создателю и приглашенным людям. Это федеративный сервис - люди на одном сервере могут общаться с людьми, подключенными к другому.
</p><p>
Включена модерация публичных групп.</p>
`,

        logo: "/logo/Matrix_logo.png",
        desktopApp: {
          name: "",
          logo: "/logo/logo-mark-primary.svg",
          platforms: [],
          link: "",
          localLink: "",
          servers: [
            {
              name: "Веб чат: Чебурашка (Москва)",
              link: "https://chat.1.chatv3.ru",
            },
            {
              name: "Веб чат: Гена (Санкт-Петербург)",
              link: "https://chat.2.chatv3.ru",
            },
            {
              name: "Веб чат: Волк (Самара)",
              link: "https://chat.3.chatv3.ru",
            },
            {
              name: "Веб чат: Заяц (Краснодар)",
              link: "https://chat.4.chatv3.ru",
            },
            {
              name: "Веб чат: Кузя (Екатеринбург)",
              link: "https://chat.5.chatv3.ru",
            },
            {
              name: "Веб чат: Матроскин (Новосибирск)",
              link: "https://chat.6.chatv3.ru",
            },
            {
              name: "Веб чат: Шарик (Владивосток)",
              link: "https://chat.7.chatv3.ru",
            },
            {
              name: "Веб чат: Печкин (Хабаровск)",
              link: "https://chat.8.chatv3.ru",
            },
          ],
        },
        mobileApp: {
          name: "Element",
          logo: "/logo/logo-mark-primary.svg",
          platforms: [{ name: "Android", link: "" }],
          link: "https://element.io/get-started#download",
          localLink: "/package/element/files/",
          servers: [
            {
              name: "Cервер Чебурашка (Москва): matrix.1.chatv3.ru",
              link: "",
            },
            {
              name: "Cервер Гена (Санкт-Петербург): matrix.2.chatv3.ru",
              link: "",
            },
            {
              name: "Cервер Волк (Самара): matrix.3.chatv3.ru",
              link: "",
            },
            {
              name: "Cервер Заяц (Краснодар): matrix.4.chatv3.ru",
              link: "",
            },
            {
              name: "Cервер Кузя (Екатеринбург): matrix.5.chatv3.ru",
              link: "",
            },
            {
              name: "Cервер Матроскин (Новосибирск): matrix.6.chatv3.ru",
              link: "",
            },
            {
              name: "Cервер Шарик (Владивосток): matrix.7.chatv3.ru",
              link: "",
            },
            {
              name: "Cервер Печкин (Хабаровск): matrix.8.chatv3.ru",
              link: "",
            },
          ],
        },
      },
      {
        id: 2,
        show: true,
        descr: `<p>Delta.chat —  зашифрованная служба обмена сообщениями, использующая протокол электронной почты (SMTP). Дизайн похож на Whatsapp. Пользователям необходимо установить приложение для смартфона и добавить сервер с помощью QR-кодов, ссылки на которые приведены ниже. Другие люди могут общаться с вами, сгенерировав QR-код приглашения в чат в самом приложении.</p>`,

        logo: "/logo/deltachat.svg",
        desktopApp: {
          name: "Deltachat",
          logo: "/logo/deltachat.svg",
          platforms: [
            { name: "Linux", link: "" },
            { name: "Windows", link: "" },
            { name: "macOs", link: "" },
          ],
          link: "https://delta.chat/en/download",
          localLink: "",
          servers: [
            {
              name: "Сервер Чебурашка (Москва)",
              link: "/docs/deltachat/mosow-invite.png",
            },
            {
              name: "Сервер Гена (Санкт-Петербург)",
              link: "/docs/deltachat/dcaccount-2.chatv3.ru-KwNAtP6J.png",
            },
            {
              name: "Сервер Волк (Самара)",
              link: "/docs/deltachat/dcaccount-3.chatv3.ru-KwNAtP6J.png",
            },
            {
              name: "Сервер Заяц (Краснодар)",
              link: "/docs/deltachat/dcaccount-4.chatv3.ru-KwNAtP6J.png",
            },
            {
              name: "Сервер Кузя (Екатеринбург)",
              link: "/docs/deltachat/dcaccount-5.chatv3.ru-KwNAtP6J.png",
            },
            {
              name: "Сервер Матроскин (Новосибирск)",
              link: "/docs/deltachat/dcaccount-6.chatv3.ru-KwNAtP6J.png",
            },
            {
              name: "Сервер Шарик (Владивосток)",
              link: "/docs/deltachat/dcaccount-7.chatv3.ru-KwNAtP6J.png",
            },
            {
              name: "Сервер Печкин (Хабаровск)",
              link: "/docs/deltachat/dcaccount-8.chatv3.ru-KwNAtP6J.png",
            },
          ],
          docs: [
            {
              name: "PDF",
              link: "/docs/deltachat/deltachat-manual_ru.pdf",
            },
          ],
        },
        mobileApp: {
          name: "Deltachat",
          logo: "/logo/deltachat.svg",
          platforms: [
            { name: "Android", link: "" },
            { name: "iOs", link: "" },
          ],
          link: "https://get.delta.chat/",
          docs: [
            {
              name: "PDF",
              link: "/docs/deltachat/deltachat-manual_ru.pdf",
            },
          ],
          localLink: "/package/deltachat/files/",
          servers: [
            {
              name: "Сервер Чебурашка (Москва)",
              link: "/docs/deltachat/mosow-invite.png",
            },
            {
              name: "Сервер Гена (Санкт-Петербург)",
              link: "/docs/deltachat/dcaccount-2.chatv3.ru-KwNAtP6J.png",
            },
            {
              name: "Сервер Волк (Самара)",
              link: "/docs/deltachat/dcaccount-3.chatv3.ru-KwNAtP6J.png",
            },
            {
              name: "Сервер Заяц (Краснодар)",
              link: "/docs/deltachat/dcaccount-4.chatv3.ru-KwNAtP6J.png",
            },
            {
              name: "Сервер Кузя (Екатеринбург)",
              link: "/docs/deltachat/dcaccount-5.chatv3.ru-KwNAtP6J.png",
            },
            {
              name: "Сервер Матроскин (Новосибирск)",
              link: "/docs/deltachat/dcaccount-6.chatv3.ru-KwNAtP6J.png",
            },
            {
              name: "Сервер Шарик (Владивосток)",
              link: "/docs/deltachat/dcaccount-7.chatv3.ru-KwNAtP6J.png",
            },
            {
              name: "Сервер Печкин (Хабаровск)",
              link: "/docs/deltachat/dcaccount-8.chatv3.ru-KwNAtP6J.png",
            },
          ],
        },
      },
      {
        id: 3,
        show: true,
        descr: `<p>Briar — это безопасный инструмент для обмена сообщениями, который по-умолчанию использует сеть Tor, а также может создавать локальные меш-сети, используя bluetooth телефона.</p>`,

        logo: "/logo/briar.png",

        mobileApp: {
          name: "Briar",
          logo: "/logo/briar.png  ",
          platforms: [{ name: "Android", link: "" }],
          docs: [
            {
              name: "HTML",
              link: "/docs/briar/index_ru.html",
            },
            {
              name: "PDF",
              link: "/docs/briar/briar_ru.pdf",
            },
          ],
          link: "https://briarproject.org/download-briar/",
          localLink: "/package/briar/files/",
        },
      },
    ],
    browsing: [
      {
        id: 1,
        show: true,
        descr: `<p>CENO — это веб-браузер для доступа к Интернету в обход цензуры. Приложение использует метод, основанный на  Bittorrent-протоколе, для маршрутизации запросов через Интернет. Пользователи автоматически обмениваются полученным контентом друг с другом, через одноранговое соединение. Во время отключения Интернета контент, уже находящийся в вашей сети, продолжает быть доступным и распространяться среди пользователей.</p>`,
        logo: "/logo/ceno.png",

        mobileApp: {
          name: "CENO",

          logo: "/logo/ceno.png",
          platforms: [{ name: "Android", link: "" }],
          docs: [
            {
              name: "HTML",
              link: "/docs/ceno/index_ru.html",
            },
            {
              name: "PDF",
              link: "/docs/ceno/ceno-manual_ru.pdf",
            },
          ],
          link: "https://censorship.no/download",
          localLink: "/package/ceno/files/",
        },
      },
      {
        id: 2,
        show: true,
        descr: `</p>NewNode VPN создает альтернативное сетевое подключение, позволяющее вашему устройству обмениваться данными в ситуациях, когда нужный интернет-сайт или ресурс заблокирован или недоступен. Он использует одноранговую сеть для маршрутизации ваших данных в обход сетевых препятствий. Децентрализованный доступ, устойчив к DDoS-атакам и проверен на безопасность, что делает его уникальным среди VPN-приложений.</p>`,
        logo: "/logo/newnode.png",

        mobileApp: {
          name: "NewNode VPN",

          logo: "/logo/newnode.png",
          platforms: [
            { name: "Android", link: "" },
            { name: "iOs", link: "" },
          ],
          docs: [
            {
              name: "HTML",
              link: "/docs/newnode/index_ru.html",
            },
          ],

          link: "https://newnode.com/download-vpn",
          localLink: "/package/newnode/files/",
        },
      },
    ],
  },
});
