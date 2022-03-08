export const state = () => ({
  servers: [
    { name: "Москва", link: "https://moscow.chatv3.ru" },
    { name: "Санкт-Петербург", link: "https://piter.chatv3.ru" },
    { name: "Самара", link: "https://samara.chatv3.ru" },
    { name: "Краснодар", link: "https://krasnodar.chatv3.ru" },
    { name: "Екатеринбург", link: "https://ekaterinburg.chatv3.ru" },
    { name: "Новосибирск", link: "https://novosibirsk.chatv3.ru" },
    { name: "Владивосток", link: "https://vladivostok.chatv3.ru" },
    { name: "Хабаровск", link: "https://khabarovsk.chatv3.ru" },
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
              name: "Веб чат: Москва",
              link: "https://chat.moscow.chatv3.ru",
            },
            {
              name: "Веб чат: Санкт-Петербург",
              link: "https://chat.piter.chatv3.ru",
            },
            {
              name: "Веб чат: Самара",
              link: "https://chat.samara.chatv3.ru",
            },
            {
              name: "Веб чат: Краснодар",
              link: "https://chat.krasnodar.chatv3.ru",
            },
            {
              name: "Веб чат: Екатеринбург",
              link: "https://chat.ekaterinburg.chatv3.ru",
            },
            {
              name: "Веб чат: Новосибирск",
              link: "https://chat.novosibirsk.chatv3.ru",
            },
            {
              name: "Веб чат: Владивосток",
              link: "https://chat.vladivostok.chatv3.ru",
            },
            {
              name: "Веб чат: Хабаровск",
              link: "https://chat.khabarovsk.chatv3.ru",
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
              name: "Сервер Москва: matrix.moscow.chatv3.ru",
              link: "",
            },
            {
              name: "Сервер Санкт-Петербург: matrix.piter.chatv3.ru",
              link: "",
            },
            {
              name: "Cервер Самара: matrix.samara.chatv3.ru",
              link: "",
            },
            {
              name: "Сервер Краснодар: matrix.krasnodar.chatv3.ru",
              link: "",
            },
            {
              name: "Сервер Екатеринбург: matrix.ekaterinburg.chatv3.ru",
              link: "",
            },
            {
              name: "Сервер Новосибирск: matrix.novosibirsk.chatv3.ru",
              link: "",
            },
            {
              name: "Сервер Владивосток: matrix.vladivostok.chatv3.ru",
              link: "",
            },
            {
              name: "Сервер Хабаровск: matrix.khabarovsk.chatv3.ru",
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
              name: "Сервер Москва",
              link: "/docs/deltachat/mosow-invite.png",
            },
            {
              name: "Сервер Санкт-Петербург",
              link: "/docs/deltachat/dcaccount-piter.chatv3.ru-KwNAtP6J.png",
            },
            {
              name: "Сервер Самара",
              link: "/docs/deltachat/dcaccount-samara.chatv3.ru-KwNAtP6J.png",
            },
            {
              name: "Сервер Краснодар",
              link: "/docs/deltachat/dcaccount-krasnodar.chatv3.ru-KwNAtP6J.png",
            },
            {
              name: "Сервер Екатеринбург",
              link: "/docs/deltachat/dcaccount-ekaterinburg.chatv3.ru-KwNAtP6J.png",
            },
            {
              name: "Сервер Новосибирск",
              link: "/docs/deltachat/dcaccount-novosibirsk.chatv3.ru-KwNAtP6J.png",
            },
            {
              name: "Сервер Владивосток",
              link: "/docs/deltachat/dcaccount-vladivostok.chatv3.ru-KwNAtP6J.png",
            },
            {
              name: "Сервер Хабаровск",
              link: "/docs/deltachat/dcaccount-khabarovsk.chatv3.ru-KwNAtP6J.png",
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
              name: "Сервер Москва",
              link: "/docs/deltachat/mosow-invite.png",
            },
            {
              name: "Сервер Санкт-Петербург",
              link: "/docs/deltachat/dcaccount-piter.chatv3.ru-KwNAtP6J.png",
            },
            {
              name: "Сервер Самара",
              link: "/docs/deltachat/dcaccount-samara.chatv3.ru-KwNAtP6J.png",
            },
            {
              name: "Сервер Краснодар",
              link: "/docs/deltachat/dcaccount-krasnodar.chatv3.ru-KwNAtP6J.png",
            },
            {
              name: "Сервер Екатеринбург",
              link: "/docs/deltachat/dcaccount-ekaterinburg.chatv3.ru-KwNAtP6J.png",
            },
            {
              name: "Сервер Новосибирск",
              link: "/docs/deltachat/dcaccount-novosibirsk.chatv3.ru-KwNAtP6J.png",
            },
            {
              name: "Сервер Владивосток",
              link: "/docs/deltachat/dcaccount-vladivostok.chatv3.ru-KwNAtP6J.png",
            },
            {
              name: "Сервер Хабаровск",
              link: "/docs/deltachat/dcaccount-khabarovsk.chatv3.ru-KwNAtP6J.png",
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
    filesharing: [
      {
        id: 1,
        show: true,
        descr: `<p>Syncthing — это надёжное, децентрализованное облачное хранение. Ваши данные остаются только в ваших руках, вы выбираете где они хранятся, хотите ли вы делиться ими с кем-то и каким образом перeдавать их по сети.</p>`,

        logo: "/logo/syncthing.png",

        mobileApp: {
          name: "Syncthing",
          logo: "/logo/syncthing.png",
          platforms: [
            { name: "Android", link: "" },
            { name: "Linux", link: "" },
            { name: "Windows", link: "" },
            { name: "macOs", link: "" },
          ],
            // docs: [
            //   {
            //     name: "HTML",
            //     link: "/docs/syncthing/index_en.html",
            //   },
            //   {
            //     name: "PDF",
            //     link: "/docs/syncthing/syncthing.pdf",
            //   },
            // ],
          link: "https://syncthing.net/downloads",
          localLink: "/package/syncthing/files/",
        },
      },
    ],
  },
});
