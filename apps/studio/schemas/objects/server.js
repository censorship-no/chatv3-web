export default {
  name: 'server',
  title: 'Серверы',
  type: 'document',
  fields: [
    {
      name: 'serverName',
      title: 'Имя сервера',
      type: 'string',
      description: 'Город, к которому привязан сервер'
    },
    {
      name: 'siteUrl',
      title: 'Адрес сайта',
      type: 'url',
      description: 'URL регионального сайта'
    },
    {
      name: 'matrixUrl',
      title: 'Домашний узел в сети matrix',
      type: 'string',
      description: 'Например, matrix.piter.chatv3.ru'
    },
    {
      name: 'elementUrl',
      title: 'URL адрес домашнего узла',
      type: 'url',
      description: 'Например, https://chat.piter.chatv3.ru'
    },
  ]
}