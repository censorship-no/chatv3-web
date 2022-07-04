export default {
  type: 'document',
  name: 'websites',
  title: 'Секция средств обхода блокировок',
  description: 'Секция со списком средств обхода блокировок',
  fields: [
    {
      name: 'sectionName',
      title: 'Имя секции',
      type: 'string',
      description: 'Для отображения в списках элементов'
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
      name: 'items',
      title: 'Отображаемые элементы',
      type: 'array',
      of: [{
        type: 'reference',
        to: [
          { type: 'website' },
        ]
      }]
    },

  ]
}
