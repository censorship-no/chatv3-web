export default {
  type: 'document',
  name: 'servers',
  title: 'Секция серверов',
  description: 'Секция со списком серверов',
  fields: [
    {
      name: 'sectionName',
      title: 'Имя секции',
      type: 'string',
      descritpion: 'Для отображения в списках элементов'
    },
    {
      name: 'icon',
      title: 'Иконка у заголовка секции',
      type: 'image'
    },
    {
      name: 'sectionTitle',
      title: 'Заголовок секции',
      type: 'string'
    },
    {
      name: 'sectionText',
      title: 'Описание раздела',
      type: 'sectionText'
    },
    {
      name: 'sectionItems',
      title: 'Отображаемые элементы',
      type: 'array',
      of: [{ type: 'serverItem' }]
    },

  ]
}