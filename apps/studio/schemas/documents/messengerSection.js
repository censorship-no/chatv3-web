export default {
  type: 'document',
  name: 'messengers',
  title: 'Секция мессенджеров',
  description: 'Секция со списком мессенджеров',
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
      name: 'items',
      title: 'Отображаемые элементы',
      type: 'array',
      of: [{
        type: 'reference',
          to: [
            {type: 'messenger'},
            ]
        }]
    },

  ]
}