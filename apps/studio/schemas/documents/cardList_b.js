export default {
  type: 'document',
  name: 'cardList_b', // Because we have 2 lists of the same cards. Workaround for GraphQL limitations
  title: 'Список карточек 2',
  description: 'Секция со списком карточек. Используется на странице о проекте',
  fields: [
    {
      name: 'sectionName',
      title: 'Имя секции',
      type: 'string',
      description: 'отображается в списках при формировании страницы'
    },
    {
      name: 'sectionTitle',
      title: 'Заголовок секции',
      type: 'string'
    },
    {
      name: 'hasSectionText',
      title: 'Показывать текстовое описание списка',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'sectionText',
      title: 'Описание раздела',
      type: 'sectionText'
    },
    {
      name: 'cards',
      title: 'Отображаемые элементы',
      type: 'array',
      of: [{
        type: 'reference',
        to: [
          { type: 'plainCard' },
        ]
      }]

    },

  ]
}
