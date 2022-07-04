import { HiTemplate } from 'react-icons/hi'

export default {
  name: 'page',
  type: 'document',
  title: 'Страницы',
  icon: HiTemplate,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug path',
      description: 'Define relative path for the page. For index page  use "/"',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'metaTitle',
      type: 'string',
      title: 'Мета заголовок страницы',
      description: 'Заголовок страницы для SEO'
    },
    {
      name: 'heroTitle',
      title: 'Заголовок страницы',
      description: 'часть выделенная жирным будет выделена на странице оранжевым цветом',
      type: 'heroTitleText'
    },
    {
      name: 'heroText',
      title: 'Разъяснительный текст страницы',
      description: 'Этот текст будет располагаться под основным заголовком страницы',
      type: 'sectionText'
    },
    {
      name: 'sectionItems',
      title: 'Отображаемые элементы',
      type: 'array',
      of: [{
        type: 'reference',
        to: [
          { type: 'servers' },
          { type: 'messengers' },
          { type: 'websites' },
          { type: 'equalitieBlock' },
          { type: 'cardList' },
          { type: 'cardList_b' },
          { type: 'instruction' },
          { type: 'footer' }
        ]
      }]
    },
  ]
}