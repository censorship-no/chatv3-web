export default {
    name: 'messenger',
    title: 'Мессенджеры',
    type: 'document',
    fields: [
      {
        name: 'logo',
        title: 'Логотип сервиса',
        type: 'image'
      },
      {
        name: 'name',
        title: 'Название',
        type: 'string'
      },
      {
        name: 'badge',
        title: 'Назначение',
        type: 'string'
      },
      {
        name: 'summary',
        title: 'Краткое описание',
        type: 'text'
      },
      {
        name: 'serverPickBlock',
        title: 'Показывать блок с серверами?',
        type: 'boolean',
        initialValue: false,
      },
      {
        name: 'serverAction',
        title: 'Надпись на кнопке выбора сервера',
        type: 'string',
      },
      {
        name: 'desktopLinkBlock',
        title: 'Показывать блок ссылок для десктопа',
        type: 'boolean',
        initialValue: false,
      },
      {
        name: 'desktopInfoTitle',
        title: 'Заголовок секции инфо для десктопа',
        type: 'string'
      },
      {
        name: 'desktopInfoItems',
        title: 'Элементы секции инфо для десктопа',
        type: 'array',
        of: [{ type: 'linkBlock'}]
      },

      {
        name: 'mobileLinkBlock',
        title: 'Показывать блок ссылок для мобильных устройств',
        type: 'boolean',
        initialValue: false,
      },
      {
        name: 'mobileInfoTitle',
        title: 'Заголовок секции инфо для мобильных устройств',
        type: 'string'
      },
      {
        name: 'mobileInfoItems',
        title: 'Элементы секции инфо для мобильных устройств',
        type: 'array',
        of: [{ type: 'linkBlock' }]
      },
      {
        name: 'hasQRCodeLinks',
        title: 'Показывать блок c выбором QR кодов',
        type: 'boolean',
        initialValue: false,
      },
      {
        name: 'qrCodes',
        title: 'список QR кодов',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: "qr_code" }] }]
      },
    ]
  }
