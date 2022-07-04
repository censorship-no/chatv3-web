export default {
  name: 'qr_code',
  title: 'QR коды',
  type: 'document',
  description: 'В дальнейшем можно доработать поведение фронтенда для отображения QR кода без перехода на другую страницу. Сейчас используется в блоке Delta Chat только адресс ссылки на qr код',
  fields: [
    {
      name: 'name',
      title: 'Имя QR кода',
      type: 'string'
    },
    {
      name: 'qr',
      title: 'Qr код',
      type: 'image'
    },
    {
      name: 'url',
      title: 'Адрес расположения qr кода',
      type: 'url',
      validation: (Rule) =>
        Rule.required().uri({
          allowRelative: true, // Allow relative links
          relativeOnly: false, // Force only relative links
          scheme: ["https", "http"], // Default is ["https", "http"]
        }),
    },
    {
      name: 'alt',
      title: 'Текстовое представление',
      type: 'string',
      description: 'Необязательное. Тестовое содержимое закодированное в QR коде'
    },
    {
      name: 'relatedServer',
      title: 'Связанный сервер',
      type: 'reference',
      to: { type: 'server' }
    }
  ],
}