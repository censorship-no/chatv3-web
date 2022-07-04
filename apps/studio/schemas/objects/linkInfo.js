export default {
  name: 'linkInfo',
  title: 'Ссылки',
  type: 'document',
  fields: [
    {
      name: 'linkName',
      title: 'Имя ссылки',
      type: 'string'
    },
    {
      name: 'linkUrl',
      title: 'Адрес ссылки',
      type: 'url',
      validation: (Rule) =>
        Rule.required().uri({
          allowRelative: true, // Allow relative links
          relativeOnly: false, // Force only relative links
          scheme: ["https", "http", "mailto"], // Default is ["https", "http"]
        }),
    },
    {
      name: 'linkLabel',
      title: 'Лейбл ссылки',
      type: 'string',
      description: 'Текст для кнопок'
    }
  ],
}